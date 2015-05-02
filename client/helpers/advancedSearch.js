SearchResults = new Mongo.Collection('searchResults');


Template.advancedSearch.onCreated(function(){

  AdvancedPatientSelectorArray = new ReactiveArray();
  AdvancedVisitSelectorArray = new ReactiveArray();

});

AutoForm.hooks({

  advancedSearchForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

      AdvancedPatientSelectorArray.clear();
      AdvancedVisitSelectorArray.clear();

      //Grab conditions and add those to selector
      var inputConditions = insertDoc.conditions;
      if (inputConditions !== (null || undefined)){
        AdvancedPatientSelectorArray.push({conditions: {$in: inputConditions}});
      }


      //Grab ICD9 and add to selector
      var inputICD9 = insertDoc.icd9Primary;
      if (inputICD9){
        AdvancedVisitSelectorArray.push({$or: [{icd9Primary: {$in: inputICD9}}, {icd9Secondary: {$in: inputICD9}}]});
      }

      // Grav gender input and add to selector
      var inputGenderBoolean = insertDoc.gender;
      if (inputGenderBoolean !== (null || undefined)){
        if(inputGenderBoolean === true){
          AdvancedPatientSelectorArray.push({gender: {$in: ["M", "m"]}});
        }
        else if(inputGenderBoolean === false){
          AdvancedPatientSelectorArray.push({gender: {$in: ["F", "f"]}});
        }
      }

      //Grab DOB range and add to selector
      if(insertDoc.dobRange){
        AdvancedPatientSelectorArray.push({dateOfBirth: {$gte: insertDoc.dobRange.date1, $lte: insertDoc.dobRange.date2}});
      }

      // Grab primaryProvider input and add to selector
      var inputPrimaryProvider = insertDoc.primaryProvider;
      if (inputPrimaryProvider){
        AdvancedPatientSelectorArray.push({primaryProvider: inputPrimaryProvider});
      }

      // Grab secondaryProvider input and add to selector
      var inputSecondaryProvider = insertDoc.secondaryProvider;
      if (inputSecondaryProvider){
        AdvancedPatientSelectorArray.push({secondaryProvider: inputSecondaryProvider});
      }

      var inputStudyType = insertDoc.studyType;
      if (inputStudyType){
        AdvancedVisitSelectorArray.push({studyType: inputStudyType});
      }

      Blaze.render(Template.advancedSearchResultsModal, document.body);
      $('#advancedSearchResults-modal').modal('show');

      this.done();
      return false;
    }
  },

});

Template.advancedSearchResultsModal.helpers({

  advancedSelector: function(){

    var patientSelector = AdvancedPatientSelectorArray.array();
    var visitSelector = AdvancedVisitSelectorArray.array();
    var selector;
    var advancedQuerySelector = AutoForm.getFieldValue('queryOptions', 'queryOptionsForm');
    var visitSelectedPatients;

    if (visitSelector.length > 0){

      if(advancedQuerySelector === 1){
        selector = {$and: visitSelector};
        visitSelectedPatients = Visits.find(selector,{patient_id:1}).fetch();
      }
      else if(advancedQuerySelector === 2){
        selector = {$or: visitSelector};
        visitSelectedPatients = Visits.find(selector,{patient_id:1}).fetch();
      }

      visitSelectedPatients = _.map(visitSelectedPatients, function(visit){
        return visit.patient_id;
      });
      patientSelector.push({_id: {$in: visitSelectedPatients}});
    }

    if (patientSelector.length === 0){
      return {};
    }

    else if (advancedQuerySelector === 1){
      selector = {$and: patientSelector};
      return selector;
    }
    else if (advancedQuerySelector === 2){
      selector = {$or: patientSelector};
      return selector;
    }
  }

});

Template.advancedSearchResultsModal.events({

  'click tbody > tr': function (event) {

    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    Session.set("currentPatient", rowData._id);
  }

});
