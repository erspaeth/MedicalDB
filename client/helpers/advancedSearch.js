Template.advancedSearch.onRendered(function(){

  advancedSelector = new ReactiveVar();
  advancedSelector = {conditions: {$in: "Cancer"}};

});

AutoForm.hooks({

  conditionsSearchForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {

      this.event.preventDefault();

      console.log("hook conditions SearchForm called");

        var input = insertDoc.conditions;
        console.log(input);

        if (input){
          var inputString = input.join();
          console.log(inputString);

          advancedSelector = {conditions: {$in: input}};

          console.log(advancedSelector);
        }
      this.done();
      return false;
    }
  }
});

Template.advancedSearch.helpers({
  selector: function(){

    return {conditions: {$in: "Cancer"}};

  }
});
