
Template.patientSidebarSelect.events({

  'click #openPatientModalButton': function(){

    Blaze.render(Template.patientSelectModal, document.body);
    $('#patientSelect-modal').modal('show');

  },

  'click #clearPatientButton': function(){

    Session.set('currentPatient', null);

  },

});
