Template.providersTableAndForm.helpers({

  clinicSelectOption: function(){

    return Clinics.find().map(function (c) {
      return {label: c.name, value: c.number};
    });


  }
});

Template.patientsTableAndForm.helpers({

  genderOption: function() {

    return [
      {label: "Male", value: "M"},
      {label: "Female", value: "F"}
    ];
  }

});
