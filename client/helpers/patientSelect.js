Template.sidebarMenu.helpers({

  patientSelected: function(){

    if (Session.get("selectedPatient") === (null || undefined) )
      return false;
    else
      return true;
  }

});

Template.patientSidebarSelect.events({

  'click #openPatientModalButton': function(){

    Modal.show('patientSelectModal');

  }

});
