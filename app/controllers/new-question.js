import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        author: this.get('author'),
        question: this.get('question'),
        description: this.get('description'),
        date: new Date()
      });
      newQuestion.save();
      this.setProperties({
        author: "",
        question:"",
        description:""
      });
      this.transitionToRoute('questions');
    }
  }
});
