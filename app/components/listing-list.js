import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:desc'],
  sortedListings: Ember.computed.sort('listings', 'sortBy'),
});
