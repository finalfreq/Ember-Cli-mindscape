import Ember from 'ember';

var NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        name: this.get('name'),
        body: this.get('body')
      });
      answer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(answer);
      question.save();
      name: this.set('name', " ");
      body: this.set('body', " ");

      this.transitionToRoute('question', question.id);
      $("#myModal").modal('hide');
    }
  }
});

export default NewAnswerController;
