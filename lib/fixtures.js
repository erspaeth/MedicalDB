/*
  Contains sample system data to be loaded upon deployment of system
*/
Meteor.startup(function () {

    // Add users
    if (Meteor.users.find().count() === 0) {

        Accounts.createUser({
            username: 'admin',
            password: 'password'
        });

        Accounts.createUser({
          username: 'NAnderson',
          password: 'NAnderson15'
        });
    }

    // Add Clinics
    if (Clinics.find().count() !== 10) {

      Clinics.remove({});

      var c = {
        number: 1,
        name: "North Clinic",
        address: {
          street: "1234 Broadway Ave",
          city: "BrownTown",
          state: "MN",
          zip: "98765"
        }
      };

      Clinics.insert(c);

      c = {
        number: 2,
        name: "South Clinic",
        address: {
          street: "111 Street Ave",
          city: "BrownTown",
          state: "MN",
          zip: "98762"
        }
      };

      Clinics.insert(c);

    }

    // Add StudyTypes
    if (StudyTypes.find().count() === 0) {

      var st = {
        name: "Research Study",
        description: "A scientific way to produce or develop new methods of healthcare."
      };

      StudyTypes.insert(st);

      st = {
        name: "Diagnostic Study",
        description: "Medical test to aid in diagnosis or detection of disease."
      };

      StudyTypes.insert(st);

      st = {
        name: "Prognostic Study",
        description: "Examine selected predictive variable or risk factors and assess their influence on the outcome of a disease."
      };

      StudyTypes.insert(st);

    }

    // Add Systems
    if (Systems.find().count() === 0) {

      var sys = {
        name: "RADREX-i",
        description: "Toshiba X-Ray system."
      };

      Systems.insert(sys);

      sys = {
        name: "SonoSite Edge",
        description: "Ultrasound system featuring adaptive image quality, speckle noise reduction, enhanced border delineation, and optimized small structure imaging."
      };

      Systems.insert(sys);

      sys = {
        name: "Stryker Laparoscopy Tower",
        description: "provides visualization and documentation of endoscopy procedures. It also gives you capacity for arthroscopy and other rigid endoscopy procedures."
      };

      Systems.insert(sys);

    }

    //Add Tests
    /*if (Test.find().count() === 0){

      var t = {
        name: "X-ray",
        result: []
      };

      Tests.insert(t);

      t = {
        name: "Endoscopy",
        result: []
      };

      Tests.insert(t);

      t = {
        name: "Ultrasound",
        result: []
      };

      Test.insert(t);

    }*/

});
