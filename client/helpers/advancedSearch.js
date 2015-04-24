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
      console.log("input ICD9 =");
      console.log(inputICD9);
      if (inputICD9){
        AdvancedVisitSelectorArray.push({icd9Primary: {$in: inputICD9}});
      }

      this.done();
      return false;
    }
  },

  dobSearchForm: {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

/*
The Selectors doesn't necessarily need to be cleared
We could just use date to filter stuff more
*/
      AdvancedPatientSelectorArray.clear();
      AdvancedVisitSelectorArray.clear();

      AdvancedPatientSelectorArray.push({dateOfBirth: {$gte: insertDoc.date1, $lte: insertDoc.date2}});

      this.done();
      return false;

    }
  }

});

Template.advancedSearch.helpers({

  advancedSelector: function(){

    var patientSelector = AdvancedPatientSelectorArray.array();
    var visitSelector = AdvancedVisitSelectorArray.array();
    var selector;


    if (visitSelector.length > 0){

      selector = {$and: visitSelector};
      var visitSelectedPatients = Visits.find(selector,{patient_id:1}).fetch();

      visitSelectedPatients = _.map(visitSelectedPatients, function(visit){
        return visit.patient_id;
      });
      patientSelector.push({_id: {$in: visitSelectedPatients}});
    }

    if (patientSelector.length === 0){
      console.log("empty selector");
      return {};
    }
    else{
      selector = {$and: patientSelector};
      console.log("full selector =");
      console.log(selector);
      return selector;
    }
  }

});

Template.advancedSearch.events({

  'click tbody > tr': function (event) {

    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    Session.set("currentPatient", rowData._id);
  }

});
