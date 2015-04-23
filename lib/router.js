Router.configure({

    layoutTemplate: 'layout'

});

Router.route('/');
Router.route('/addPatient', {name: 'addPatient'});
Router.route('/tables', {name: 'tables'});
Router.route('/updatePatient', {name: 'updatePatient'});
Router.route('/addVisit', {name: 'addVisit'});
Router.route('/advancedSearch', {name: 'advancedSearch'});
Router.route('/viewVisits', {name: 'viewVisits'});
Router.route('/visitInfo', {name: 'visitInfo'});
