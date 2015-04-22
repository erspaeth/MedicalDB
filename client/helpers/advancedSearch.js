SearchResults = new Mongo.Collection('searchResults');


Template.advancedSearch.onCreated(function(){

  AdvancedSearchSelector = new ReactiveVar({});

});

AutoForm.hooks({

  conditionsSearchForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

      console.log("hook conditions SearchForm called");

        var input = insertDoc.conditions;
        var r;
        console.log(input);

        if (input){

          AdvancedSearchSelector.set({conditions: {$in: input}});

        }
      this.done();
      return false;
    }
  }
});

Template.advancedSearch.helpers({
  advancedSearchResults: function(){

    return Patients.find(AdvancedSearchSelector.get());

  },
  advancedSelector: function(){

    if (_.isNull(AdvancedSearchSelector.get())){
      return null;
    }
    else{
      return AdvancedSearchSelector.get();
    }

  }

});
