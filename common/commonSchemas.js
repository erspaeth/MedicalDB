Schemas.FindPatientForm = new SimpleSchema({

  firstName: {
    type:String,
    label:"First Name",
    regEx: /^[a-zA-Z]*$/,
    optional:false
  },
  lastName: {
    type:String,
    label:"Last Name",
    regEx: /^[a-zA-Z]*$/,
    optional:false

  },
  dateOfBirth: {
    type: Date,
    label: "DOB",
    optional:false

  }

});
