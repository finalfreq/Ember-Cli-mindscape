import DS from 'ember-data';

var Answer = DS.Model.extend({
  name: DS.attr(),
  body: DS.attr(),
  question: DS.belongsTo('question', {async:true})

});

export default Answer;
