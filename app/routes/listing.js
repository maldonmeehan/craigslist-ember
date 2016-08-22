import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('listing', params.listing_id)
  },
  actions: {
    update(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=NaN) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
    },
    deleteListing(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
        listing.destroyRecord();
        this.transitionTo('index');        
      }
    }
  }
});
