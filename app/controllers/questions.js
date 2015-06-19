import Ember from 'ember';

var QuestionsController = Ember.ArrayController.extend ({
  actions: {
    add: function() {
      $("#addModal").modal('show');
    }
  }
});

export default QuestionsController;
