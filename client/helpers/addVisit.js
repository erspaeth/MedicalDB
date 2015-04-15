AutoForm.hooks({
  addVisitForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

      console.log("hook called");

      var visitID = Visits.insert(insertDoc);
      console.log("new visit with id: " + visitID);

      pID = Session.get('currentPatient');

      if(Patients.update({_id: pID}, {$push: {visits: visitID}})){

      console.log("patient updated with new visit");
      console.log (Patients.findOne({_id: pID}));
      }
      this.done();
      return false;
    }
  }
});
