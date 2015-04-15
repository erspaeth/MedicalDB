Template.registerHelper('formatDate', function(date){

  return moment(date).format('MM-DD-YYYY');

});

Template.registerHelper('currentPatientName', function(){

  var r = "none";

  if (Session.get("currentPatient") !== (null || undefined)){
    var pID = Session.get("currentPatient");
    var p = Patients.findOne({_id: pID});
    r = p.firstName + " " + p.lastName;
  }
  return r;

});
