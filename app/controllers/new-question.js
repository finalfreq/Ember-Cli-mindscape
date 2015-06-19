import Ember from 'ember';

var NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        author: this.get('author'),
        question: this.get('question'),
        description: this.get('description')
      });
      newQuestion.save();
      this.transitionToRoute('questions');
      this.set('author', " ");
      this.set('question', " ");
      this.set('description', " ");
    }
  }
});

export default NewQuestionController;
