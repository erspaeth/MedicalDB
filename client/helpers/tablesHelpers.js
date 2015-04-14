Template.providersTableAndForm.helpers({

  clinicSelectOption: function(){
    var c = Clinics.find({}, {fields: {number: 1, _id: 1}}).fetch();
    $.each(c, function( i , val){



    });

    return [
      {label: "1", value: 1},
      {label: "2", value: 2}
    ];

  }

});
