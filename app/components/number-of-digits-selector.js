import Ember from 'ember';

export default Ember.Component.extend({
  numberOfDigits: null,

  actions: {
    increaseDigits: function() {
      if (this.get('numberOfDigits') < 12) {
        this.incrementProperty('numberOfDigits');
      }
    },

    decreaseDigits: function() {
      if (this.get('numberOfDigits') > 1) {
        this.decrementProperty('numberOfDigits');
      }
    }
  }
});
