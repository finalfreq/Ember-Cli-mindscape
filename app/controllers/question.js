import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    newAnswer: function() {
      $("#myModal").modal('show');
    },
    delete: function() {
      if (confirm('Are you sure?')) {

        var question = this.get('model');
        var answer = question.get('answers'),
          list = answer.toArray();

        list.forEach(function(answer){
          answer.destroyRecord();
          question.save();
        });

        question.destroyRecord();
        this.transitionToRoute('questions');
      }
    },

    deleteAnswer: function(answer) {
      var question = this.get('model');

      this.store.find('answer', answer.get('id')).then(function(answer){
        answer.destroyRecord();
        answer.save();
      });

      question.save();
    },

    edit: function() {
      $("#editModal").modal('show');
    },

    save: function() {
    this.get('model').save();
    }
  }
});
