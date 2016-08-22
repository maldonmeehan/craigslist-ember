import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedListings: Ember.computed.sort('listings', 'sortBy'),
  actions: {
    sortByCost() {
      this.set('sortBy', ['cost:asc']);
    },
    sortByAge() {
      this.set('sortBy', ['date:desc']);
    }
  }
});
