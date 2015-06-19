import DS from 'ember-data';

var Question = DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', {async:true})
});

export default Question;
