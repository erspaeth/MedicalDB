Template.patientSelectModal.events({
  'click tbody > tr': function (event) {

    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();

    Session.set("currentPatient", rowData._id);
  }
});
