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

Schemas.AdvancedSearch = new SimpleSchema({

  conditions: {
    type: [String],
    label: "Conditions",
    optional: true
  },
  icd9Primary: {
    type: [String],
    label: "ICD Primary Codes",
    regEx: /^([EV])?\d{3,3}(\.\d{1,2})?$/,
    optional:true
  }

});

Schemas.AdvancedSearchDOB = new SimpleSchema({

  date1: {
    type: Date,
    label: "Early Date",
    optional: false
  },
  date2: {
    type: Date,
    label: "Late Date",
    optional: false
  }

});

Schemas.addVisitForm = new SimpleSchema({

  visitNumber:{
    type: String,
    label: "Visit Number",
    optional:false,
    regEx: /^[\d]{4}$/
  },
  clinic_id:{
    type: Number,
    label: "Clinic Number",
    optional:false
  },
  icd9Primary:{
    type: [String],
    label: "ICD Primary Codes",
    defaultValue: [],
    regEx: /^([EV])?\d{3,3}(\.\d{1,2})?$/,
    optional:false
  },
  icd9Secondary:{
    type: [String],
    label: "ICD Secondary Codes",
    defaultValue: [],
    regEx: /^([EV])?\d{3,3}(\.\d{1,2})?$/,
    optional:false
  },
  diagnosis:{
    type: [String],
    label: "Diagnosis",
    defaultValue: [],
    optional:false
  },
  studyType:{
    type: [String],
    label: "Type Of Study",
    defaultValue: [],
    regEx: SimpleSchema.RegEx.Id,
    optional:false
  },
  systemUsed:{
    type: [String],
    label: "System Used",
    defaultValue: [],
    regEx: SimpleSchema.RegEx.Id,
    optional:false
  },
  treatment:{
    type: [String],
    label: "Treatments",
    defaultValue: [],
    optional:false
  },
  tests:{
    type: [Schemas.Test],
    label: "Tests",
    defaultValue: [],
    optional:false
  }

});
