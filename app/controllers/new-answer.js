import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
      var answer = this.store.createRecord('answer', {
        name: this.get('name'),
        body: this.get('body'),
        date: new Date()
      });

      var question = this.get('controllers.question.model');
      answer.save().then(function() {
        question.get('answers').pushObject(answer);
        question.save();
      });
      this.setProperties({
        name: '',
        body: ''
      });
      this.transitionToRoute('question', question.id);
      $("#myModal").modal('hide');
    }
  }
});
