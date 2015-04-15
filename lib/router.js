Router.configure({

    layoutTemplate: 'layout'

});

Router.route('/');
Router.route('/addPatient', {name: 'addPatient'});
Router.route('/tables', {name: 'tables'});
Router.route('/updatePatient', {name: 'updatePatient'});
