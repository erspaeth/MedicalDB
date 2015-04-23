
Template.viewVisits.helpers({

  visitSelector: function (){
    return {patient_id: Session.get('currentPatient')};
  }

});

Template.viewVisits.events({
  'click tbody > tr': function (event) {

    console.log("Table row clicked");

    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
/*
    Blaze.renderWithData(Template.visitInfoModal, function(){

      var v = Visits.findOne({_id: rowData._id});
      console.log('Rendering modal with data:');
      console.log(v);

      return v;

    }, document.body
    );

    */
    Session.set('visitID', rowData._id);
    Modal.show('visitInfoModal');

  }
});

Template.visitInfoModal.helpers({

  c: function(){
    console.log("data context from helper");
    console.log(this);
  },
  getContext: function(){
    var c = Session.get('visitID');
    return Visits.findOne({_id: c});
  }

});

Template.visitInfoModal.onRendered(function(){

  console.log("visit Info Modal Rendered");

});
