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

Template.registerHelper('currentPatientSelected', function(){

  if (Session.get("currentPatient") === (null || undefined)){
    return false;
  }
  else
    return true;

});

Template.registerHelper('currentPatientDoc', function(){

  var pID = Session.get("currentPatient");
  var p = Patients.findOne({_id: pID});
  console.log("returned document");
  console.log(p);
  return p;

});
