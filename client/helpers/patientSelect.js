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

    Blaze.render(Template.patientSelectModal, document.body);
    $('#patientSelect-modal').modal('show');

  }

});
