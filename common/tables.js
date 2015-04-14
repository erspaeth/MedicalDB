TabularTables = {};


// this is not actually an error, JSHint just thinks it is
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

  TabularTables.Providers = new Tabular.Table({
    name: "Provider List",
    collection: Providers,
    columns: [
      {data: "firstName", title: "First Name"},
      {data: "lastName", title: "Last Name"},

    ]
  });
