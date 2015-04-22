SearchResults = new Mongo.Collection('searchResults');


Template.advancedSearch.onCreated(function(){

  AdvancedSearchSelector = new ReactiveVar({});

});

AutoForm.hooks({

  conditionsSearchForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();
      var input = insertDoc.conditions;




      if (input === (null || undefined)){
        this.done();
        return false;
      }

      AdvancedSearchSelector.set({conditions: {$in: input}});
      this.done();
      return false;
    }
  },

  dobSearchForm: {
    onSubmit: function(insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

      AdvancedSearchSelector.set({dateOfBirth: {$gte: insertDoc.date1, $lte: insertDoc.date2}});

      this.done();
      return false;

    }
  }

});

Template.advancedSearch.helpers({

  advancedSelector: function(){

    if (_.isNull(AdvancedSearchSelector.get())){
      return null;
    }
    else{
      return AdvancedSearchSelector.get();
    }
  }

});

Template.advancedSearch.events({

  'click tbody > tr': function (event) {

    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    Session.set("currentPatient", rowData._id);
  }

});
