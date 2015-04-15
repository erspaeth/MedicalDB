AutoForm.hooks({

  findPatientForm: {
    onSubmit: function (insertDoc){

      this.event.preventDefault();


      return false;
    }
  }

});
