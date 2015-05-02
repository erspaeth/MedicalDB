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
          $.bootstrapGrowl(error.message, {
                ele: 'body', // which element to append to
                type: 'danger', // (null, 'info', 'danger', 'success')
                offset: {from: 'top', amount: 30}, // 'top', or 'bottom'
                align: 'center', // ('left', 'right', or 'center')
                width: 400, // (integer, or 'auto')
                delay: 12000 // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!

                //************** Keep for now but remove before submission***************
                //allow_dismiss: true, // If true then will display a cross to close the popup.
                //stackup_spacing: 10 // spacing between consecutively stacked growls.
                //***********************************************************************
            });
        }
        else{
          Session.set('currentPatient', pID);

          Blaze.render(Template.patientAdded, document.body);
          $('#patientAdded-modal').modal('show');
        }

      });

      this.done();
      return false;

    }
  }

});
