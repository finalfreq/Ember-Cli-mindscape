import Ember from 'ember';

var QuestionController = Ember.ObjectController.extend({
  actions: {
    newAnswer: function() {
      $("#myModal").modal('show');
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },
    deleteAnswer: function(thisAnswer) {
      thisAnswer.destroyRecord();
    },
    edit: function() {
      $("#editModal").modal('show');
    },
    save: function() {
    this.get('model').save();
    }
  }
});

export default QuestionController;
