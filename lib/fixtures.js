//hey
Meteor.startup(function () {

    // Add users
    if (Meteor.users.find().count() === 0) {

        Accounts.createUser({
            username: 'admin',
            password: 'password'
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

    // Add Systems
});
