/*
  Add test data to the collections
*/


// Patients


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

    Patients.update({_id: patient._id}, {$push: {visits: myVisitID}})

*/
