import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      category: this.store.findRecord('category', params.category_id),
      listings: this.store.findAll('listing')
    });
  },

  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return category.save();
      });
    }
  }
});
