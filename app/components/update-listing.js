import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateListingForm() {
      this.set('updateListingForm', true);
    },
    update (listing) {
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        image: this.get('image'),
        location: this.get('location'),
        cost: this.get('cost'),
        category: this.get('category')
      };
      this.set('updateListingForm', false);
      this.sendAction('update', listing, params);
    }
  }
});
