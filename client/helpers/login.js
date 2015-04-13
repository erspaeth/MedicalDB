Template.login.events({

    'submit #login-form': function(e, t) {

        e.preventDefault();

        var username = t.find('#login-username').value;
        var password = t.find('#login-password').value;

        // 2. Attempt to login.
        Meteor.loginWithPassword(username, password, function(error) {

            if (error) {

                // If no user resulted from the attempt, an error variable will be available
                // in this callback. We can output the error to the user here.
                var message = "Huston, we have a problem: <strong>" + error.reason + "</strong>.";

                $.bootstrapGrowl(message, {
                    ele: 'body', // which element to append to
                    type: 'danger', // (null, 'info', 'danger', 'success')
                    offset: {from: 'top', amount: 30}, // 'top', or 'bottom'
                    align: 'center', // ('left', 'right', or 'center')
                    width: 400, // (integer, or 'auto')
                    delay: 8000 // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
                    //allow_dismiss: true, // If true then will display a cross to close the popup.
                    //stackup_spacing: 10 // spacing between consecutively stacked growls.
                });
            }

            return;
        });

        return false;
    }
    // End SUBMIT
});
