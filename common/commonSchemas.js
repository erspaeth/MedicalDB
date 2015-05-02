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
  },
  gender: {
    type: Boolean,
    label: "Gender",
    optional: true,
    autoform: {
      type: "boolean-select",
      trueLabel: "Male",
      falseLabel: "Female",
      firstOption: "(Select gender)"
    }
  },
  primaryProvider: {
    type: String,
    label: "Primary Provider",
    optional: true
  },
  secondaryProvider: {
    type: String,
    label: "Secondary Provider",
    optional: true
  },

  dobRange: {
    type: Object,
    label: "Date of Birth",
    blackbox: false,
    optional: true
  },

  'dobRange.date1':{
    type: Date,
    label: "After",
    optional: false
  },
  'dobRange.date2': {
    type: Date,
    label: "Before",
    optional: false
  },
  studyType: {
    type: String,
    label: "Study Type",
    optional: true,
    autoform: {
      type: "select",
      options: function() {
        var types = StudyTypes.find().fetch();

        var returnList = _.map(types, function (t){
          return {label: t.name, value: t._id};
        });

        return returnList;
      }
    }
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
    label: "Clinic",
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
    optional:false,
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
