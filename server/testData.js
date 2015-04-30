/*
  Add test data to the collections
*/
Meteor.startup(function () {

// Sample Patients and visits
if (Patients.find().count() === 0){
  var patient1 = {
    firstName: 'Gytha',
    lastName: 'Ogg',
    dateOfBirth: new Date('05/29/1915'),
    patientNum: '0000',
    gender: 'F',
    height: 60,
    weight: 250,
    conditions: ['Addiction (Alcohol Abuse)'],
    assistiveDevices: [],
    primaryProvider: 'B. Aard-vark',
    visits: []
  };

  Patients.insert(patient1);

  var patient2 = {
    firstName: 'Samuel',
    lastName: 'Vimes',
    dateOfBirth: new Date('08/13/1949'),
    patientNum: '0001',
    gender: 'M',
    height: 65,
    weight: 200,
    conditions: ['Scoliosis'],
    assistiveDevices: ['Walking Cane'],
    primaryProvider: 'A Chole',
    visits: []
  };

  Patients.insert(patient2);

  var patient3 = {
    firstName: 'Mustrum',
    lastName: 'Ridcully',
    dateOfBirth: new Date('02/20/2004'),
    patientNum: '0002',
    gender: 'M',
    height: 45,
    weight: 95,
    conditions: ['Epilepsy'],
    assistiveDevices: [],
    primaryProvider: 'C. Underhill',
    visits: []
  };

  Patients.insert(patient3);

  var patient4 = {
    firstName: 'Terry',
    lastName: 'Pratchett',
    dateOfBirth: new Date('04/28/1948'),
    patientNum: '0003',
    gender: 'M',
    height: 67,
    weight: 170,
    conditions: ['Alzheimers'],
    assistiveDevices: [],
    primaryProvider: 'G. Masterton',
    visits: []
  };

  Patients.insert(patient4);


//Visits
    var patient = Patients.findOne({lastName: 'Pratchett'});
    console.log(patient);
    var clinic = Clinics.findOne({number: 1});
    console.log(clinic);
    var studyT = StudyTypes.findOne({name: 'Diagnostic Study'});
    console.log(studyT);
    var sys = Systems.findOne({name: 'RADREX-i'});
    console.log(sys);

    var myVisit = {

      patient_id: patient._id,
      visitNumber: 1234,
      clinic_id: clinic.number,
      icd9Primary: [300.00],
      diagnosis: ["Anxiety State"],
      studyType: [studyT._id],
      systemUsed: [sys._id]

    };

    var myVisitID = Visits.insert(myVisit);

    //this first {} is the selector, this tells which patient we are updating
    // the second {} says what update we are making, use $push to add the visitID
    // to the array of all visit._id's

    Patients.update({_id: patient._id}, {$push: {visits: myVisitID}});

    patient = Patients.findOne({lastName: 'Ogg'});
    clinic = Clinics.findOne({number: 1});
    studyT = StudyTypes.findOne({name: 'Diagnostic Study'});
    sys = Systems.findOne({name: 'Stryker Laparoscopy Tower'});

    myVisit = {

      patient_id: patient._id,
      visitNumber: 4321,
      clinic_id: clinic.number,
      icd9Primary: [303.00],
      diagnosis: ["Alcohol Poisoning"],
      studyType: [studyT._id],
      systemUsed: [sys._id]

    };

    myVisitID = Visits.insert(myVisit);

    Patients.update({_id: patient._id}, {$push: {visits: myVisitID}});
  }
});
