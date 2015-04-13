//hey
Meteor.startup(function () {


    if (Meteor.users.find().count() === 0) {

        Accounts.createUser({
            username: 'admin',
            password: 'password'
        });

    }
});
