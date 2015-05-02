Template.addPatient.helpers({

  genderOption: function() {

    return [
      {label: "Male", value: "M"},
      {label: "Female", value: "F"}
    ];
  }

});

AutoForm.hooks({

  insertPatientForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

      var pID = Patients.insert(insertDoc, function(error){
        if(error){          
          alert("an error occured");
          //error handling
          return false;
        }

      });

      Session.set('currentPatient', pID);

      Blaze.render(Template.patientAdded, document.body);
      $('#patientAdded-modal').modal('show');

      this.done();
      return false;

    }
  }

});
