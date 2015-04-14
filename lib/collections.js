//hey
Patients = new Mongo.Collection('patients');
Visits = new Mongo.Collection('visits');
Providers = new Mongo.Collection('providers');
Clinics = new Mongo.Collection('clinics');
StudyTypes = new Mongo.Collection('studyType');
Systems = new Mongo.Collection('systems');

SimpleSchema.debug = true;

Schemas = {};

Schemas.Address = new SimpleSchema({
    street: {
    type: String,
    max: 100,
    optional: false
    },
    city: {
      type: String,
      max: 50,
      optional: false
    },
    state: {
      type: String,
      regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
      optional:false
    },
    zip: {
      type: String,
      regEx: /^[0-9]{5}$/,
      optional:false
    }
});


Schemas.Clinics = new SimpleSchema({
  number:{
    type: Number,
    label: "Number",
    optional:false
  },
  name:{
    type: String,
    label: "Clinic Name",
    optional:false
  },
  address:{
    type: Schemas.Address,
    label: "Address",
    optional:false
  }
});

Schemas.Providers = new SimpleSchema({

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
  clinicNumber:{
    type: Number,
    label: "Clinic Number",
    //regEx: SimpleSchema.RegEx.Id
  }

});

Schemas.Test = new SimpleSchema({

  type: {
    type: String,
    label: "Test Type",
    optional:false
  },
  result: {
    type: Object,
    label: "Result",
    optional: false,
    blackbox: true
  }

});

Schemas.StudyTypes = new SimpleSchema({

  name:{
    type: String,
    label: "Name",
    optional:false
  },
  description:{
    type: String,
    label: "Description",
    optional:false
  }

});

Schemas.Systems = new SimpleSchema({

  name:{
    type: String,
    label: "Name",
    optional:false
  },
  description:{
    type: String,
    label: "description",
    optional:false
  }

});

Schemas.Patients = new SimpleSchema({
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

  },
  gender:{
    type: String,
    label: "Gender",
    regEx: /^[mMfF]$/,
    optional:false
  },
  height:{
    type: Number,
    label: "Height(inches)",
    min: 0,
    optional: true
  },
  weight:{
    type: Number,
    label: "Weight(lbs)",
    min: 0,
    optional: true
  },
  conditions:{
    type: [String],
    label: "Conditions",
    autoValue: function(){
      return [];
    },
    optional:false
  },
  assistiveDevices:{
    type: [String],
    label: "Assistive Devices",
    autoValue: function(){
      return [];
    },
    optional:false
  },
  primaryProvider:{
    type: String,
    label: "Primary Provider",
    optional: true
  },
  secondaryProvider:{
    type: String,
    label: "Secondary Provider",
    optional: true
  },
  visits:{
    type: [String],
    label: "Visits",
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function(){
      return [];
    },
    optional:false
  }

});

Schemas.Visits = new SimpleSchema({

  visitNumber:{
    type: String,
    label: "Visit Number",
    optional:false
  },
  clinic_id:{
    type: String,
    label: "Clinic Number",
    regEx: SimpleSchema.RegEx.Id,
    optional:false
  },
  date:{
    type: Date,
    label: "Date",
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
    regEx: SimpleSchema.RegEx.ID,
    optional:false
  },
  systemUsed:{
    type: [String],
    label: "System Used",
    defaultValue: [],
    regEx: SimpleSchema.RegEx.ID,
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

Patients.attachSchema(Schemas.Patients);
Visits.attachSchema(Schemas.Visits);
Providers.attachSchema(Schemas.Providers);
Clinics.attachSchema(Schemas.Clinics);
StudyTypes.attachSchema(Schemas.StudyTypes);
Systems.attachSchema(Schemas.Systems);
