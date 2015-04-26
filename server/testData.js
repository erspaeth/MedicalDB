/*
  Add test data to the collections
*/
Meteor.startup(function () {

// Patients
if (true){
  var patient1 = {
    firstName: 'Gytha',
    lastName: 'Ogg',
    dateOfBirth: '05/29/1915',
    patientNum: '0000',
    gender: 'F',
    height: '60',
    weight: '250',
    conditions: ['Addiction (Alcohol Abuse)'],
    assistiveDevices: [],
    primaryProvider: '',
    visits: []
  };

  Patients.insert(patient1);

  var patient2 = {
    firstName: 'Samuel',
    lastName: 'Vimes',
    dateOfBirth: '08/13/1949',
    patientNum: '0001',
    gender: 'M',
    height: '65',
    weight: '200',
    conditions: ['Scoliosis'],
    assistiveDevices: ['Walking Cane'],
    primaryProvider: '',
    visits: []
  };

  Patients.insert(patient2);

  var patient3 = {
    firstName: 'Mustrum',
    lastName: 'Ridcully',
    dateOfBirth: '02/20/2004',
    patientNum: '0002',
    gender: 'M',
    height: '45',
    weight: '95',
    conditions: ['Epilepsy'],
    assistiveDevices: [''],
    primaryProvider: '',
    visits: []
  };

  Patients.insert(patient3);

  var patient4 = {
    firstName: 'Terry',
    lastName: 'Pratchett',
    dateOfBirth: '04/28/1948',
    patientNum: '0003',
    gender: 'M',
    height: '67',
    weight: '170',
    conditions: ['Alzheimers'],
    assistiveDevices: [''],
    primaryProvider: '',
    visits: []
  };

  Patients.insert(patient4);
}

});


//Visits

/*

  When adding a Visit:

    var patient = Patients.findOne({lastName: 'sample last name'}).;

    var myVisit = {

      visitNumber: ____        // 4 digit number as defined in schema
      patient_id: patient._id   // grab the _id from the patient you grabbed above
      other field:
      another field:
      etc. . .
    }

    var myVisitID = Visits.insert(myVisit);


    //this first {} is the selector, this tells which patient we are updating
    // the second {} says what update we are making, use $push to add the visitID
    // to the array of all visit._id's

    Patients.update({_id: patient._id}, {$push: {visits: myVisitID}});

*/
