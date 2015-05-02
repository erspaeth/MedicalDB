AutoForm.hooks({
  addVisitForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

      var pID = Session.get('currentPatient');
      var doc = insertDoc;
      doc.patient_id = pID;

      var visitID = Visits.insert(doc);

      if(Patients.update({_id: pID}, {$push: {visits: visitID}})){

        Session.set('visitID', visitID);

        Blaze.render(Template.visitAdded, document.body);
        $('#visitAdded-modal').modal('show');

      }
      this.done();
      return false;
    }
  }
});

Template.visitAdded.helpers({

  selectedVisit: function() {
    return Visits.findOne({_id: Session.get('visitID')});
  },
  getClinicName: function() {
    return Clinics.findOne({number: this.clinic_id}).name;
  },
  getStudyType: function(){
    return StudyTypes.findOne({_id: this.valueOf()}).name;
  },
  getSystemName: function() {
    return Systems.findOne({_id: this.valueOf()}).name;
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
