import Ember from 'ember';

export function listingCost(params) {
  var listingCategory = params[0].get('category').get('id');
  if(listingCategory==="0") {
    var carPrice = params[0].get('cost');
    if (carPrice >= 4001){
      return '$$$';
    } else if (carPrice >= 2001){
      return '$$';
    } else {
      return '$';
    }
  } else if (listingCategory==="1") {
    var housePrice = params[0].get('cost');
    if (housePrice >= 2001){
      return '$$$';
    } else if (housePrice >= 1001){
      return '$$';
    } else {
      return '$';
    }
  }
}

export default Ember.Helper.helper(listingCost);
