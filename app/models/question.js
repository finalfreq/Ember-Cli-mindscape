import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  question: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', {async:true})
});
