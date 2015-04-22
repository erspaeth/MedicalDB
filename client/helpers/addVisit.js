AutoForm.hooks({
  addVisitForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();
      console.log("add visit hook called");

      var pID = Session.get('currentPatient');
      var doc = insertDoc;
      doc.patient_id = pID;

      console.log(doc);
      var visitID = Visits.insert(doc);
      console.log("new visit with id: " + visitID);

      if(Patients.update({_id: pID}, {$push: {visits: visitID}})){

      console.log("patient updated with new visit");
      console.log (Patients.findOne({_id: pID}));
      }
      this.done();
      return false;
    }
  }
});
