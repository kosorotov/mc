import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

export default Ember.Route.extend(
  KeyboardShortcuts,
  {
    actions: {
      skipExpression: function() {
        this.controllerFor('application').send('skipItem');
        console.log('skipExpression');
      }
    },

    keyboardShortcuts: {
      'ctrl+space': {
        action: 'skipExpression',
        global: true,
        preventDefault: true
      }
    }
  }
);
