import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeSimpleModal: function() {
      this.get('onClose')();
    }
  }
});
