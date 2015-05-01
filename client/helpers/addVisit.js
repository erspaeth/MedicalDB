AutoForm.hooks({
  addVisitForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

      var pID = Session.get('currentPatient');
      var doc = insertDoc;
      doc.patient_id = pID;

      var visitID = Visits.insert(doc);

      if(Patients.update({_id: pID}, {$push: {visits: visitID}})){

        // add success message
        console.log("patient updated with new visit");
        console.log (Patients.findOne({_id: pID}));
      }
      this.done();
      return false;
    }
  }
});

Template.addVisit.helpers({

  clinicSelectOptions: function() {
    return Clinics.find().map(function (doc) {
      return {label: doc.name, value: doc.number};
    });
  },

  studyTypeSelectOptions: function() {

    return StudyTypes.find().map(function(doc) {
      return {label: doc.name, value: doc._id};
    });

  },

  systemUsedSelectOptions: function() {

    return Systems.find().map(function(doc) {
      return {label: doc.name, value: doc._id};
    });
  }

});
