import Ember from 'ember';

export function listingCost(params) {
  var listingPrice = params[0].get('cost');
  if (listingPrice > params[0].get('category').get('expensiveCutoff')){
    return '$$$';
  } else if (listingPrice > params[0].get('category').get('cheapCutoff')){
    return '$$';
  } else {
    return '$';
  }
}

export default Ember.Helper.helper(listingCost);
