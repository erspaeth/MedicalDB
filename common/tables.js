TabularTables = {};


// this is not actually an error, JSHint just thinks it is
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

/*
  TabularTables.Providers = new Tabular.Table({
    name: "Provider List",
    collection: Providers,
    columns: [
      {data: "firstName", title: "First Name"},
      {data: "lastName", title: "Last Name"},

    ]
  });
*/


  TabularTables.Patients = new Tabular.Table({
    name: "Patient List",
    collection: Patients,
    columns: [
      {data: "firstName", title: "First Name"},
      {data: "lastName", title: "Last Name"},
      {
        data: "dateOfBirth",
       title: "DOB",
       render: function (val, type, doc) {
          if (val instanceof Date) {
            return moment(val).calendar();
          } else {
            return "Never";
          }
        }
      },
      {data: "conditions", title: "Conditions"}

    ]
  });



  TabularTables.AdvancedSearch = new Tabular.Table({
    name: "Advanced Patient Search",
    collection: Patients,
    columns: [
      {data: "firstName", title: "First Name"},
      {data: "lastName", title: "Last Name"},
      {
        data: "dateOfBirth",
       title: "DOB",
       render: function (val, type, doc) {
          if (val instanceof Date) {
            return moment(val).calendar();
          } else {
            return "Never";
          }
        }
      },
      {data: "conditions", title: "Conditions"}

    ]
  });
