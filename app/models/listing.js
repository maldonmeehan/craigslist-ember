import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  details: DS.attr(),
  cost: DS.attr(),
  image: DS.attr(),
  location: DS.attr(),
  date: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
