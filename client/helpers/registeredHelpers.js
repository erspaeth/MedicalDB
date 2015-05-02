Template.registerHelper('formatDate', function(date){

  return moment(date).format('MM-DD-YYYY');

});

Template.registerHelper('currentPatientName', function(){

  var r = "none";

  if (!Session.equals("currentPatient", null) && !Session.equals("currentPatient", undefined)){
    var pID = Session.get("currentPatient");
    var p = Patients.findOne({_id: pID});
    r = p.firstName + " " + p.lastName;
  }
  return r;

});

Template.registerHelper('currentPatientSelected', function(){

  if (Session.equals("currentPatient", null) || Session.equals("currentPatient", undefined)){
    return false;
  }
  else
    return true;

});

Template.registerHelper('currentPatientDoc', function(){

  var pID = Session.get("currentPatient");
  var p = Patients.findOne({_id: pID});
  return p;

});

Template.registerHelper('clinicSelectOption', function(){

    return Clinics.find().map(function (c) {
      return {label: c.name, value: c.number};
    });
});
