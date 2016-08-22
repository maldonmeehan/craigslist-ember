import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing() {
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        image: this.get('image') ? this.get('image'):"http://kingofwallpapers.com/house/house-026.jpg",
        location: this.get('location'),
        cost: parseInt(this.get('cost')),
        category: this.get('category'),
        date: this.get('date')
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
