import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  question: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  answers: DS.hasMany('answer', {async:true})
});
