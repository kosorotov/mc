import Ember from 'ember';

export default Ember.Component.extend({
  config: Ember.inject.service(),

  setupController: function() {
    let cfg = this.get('config').getConfig();
    if (cfg['+']) {
      this.set('isAdd', true);
      this.set('firstNumberOfDigits1', cfg['+'][0]);
      this.set('secondNumberOfDigits1', cfg['+'][1]);
    } else {
      this.set('isAdd', false);
      this.set('firstNumberOfDigits1', 2);
      this.set('secondNumberOfDigits1', 1);
    }
    if (cfg['-']) {
      this.set('isSubstitute', true);
      this.set('firstNumberOfDigits2', cfg['-'][0]);
      this.set('secondNumberOfDigits2', cfg['-'][1]);
    } else {
      this.set('isSubstitute', false);
      this.set('firstNumberOfDigits2', 2);
      this.set('secondNumberOfDigits2', 1);
    }
    if (cfg['*']) {
      this.set('isPower', true);
      this.set('firstNumberOfDigits3', cfg['*'][0]);
      this.set('secondNumberOfDigits3', cfg['*'][1]);
    } else {
      this.set('isPower', false);
      this.set('firstNumberOfDigits3', 2);
      this.set('secondNumberOfDigits3', 1);
    }
    if (cfg['/']) {
      this.set('isDivide', true);
      this.set('firstNumberOfDigits4', cfg['/'][0]);
      this.set('secondNumberOfDigits4', cfg['/'][1]);
      this.set('thirdNumberOfDigits4', cfg['/'][2]);
    } else {
      this.set('isDivide', false);
      this.set('firstNumberOfDigits4', 2);
      this.set('secondNumberOfDigits4', 1);
      this.set('thirdNumberOfDigits4', 1);
    }
  }.on('init'),

  buildConfig: function() {
    let config = {};
    if (this.get('isAdd')) {
      config['+'] = [this.get('firstNumberOfDigits1'), this.get('secondNumberOfDigits1')];
    }
    if (this.get('isSubstitute')) {
      config['-'] = [this.get('firstNumberOfDigits2'), this.get('secondNumberOfDigits2')];
    }
    if (this.get('isPower')) {
      config['*'] = [this.get('firstNumberOfDigits3'), this.get('secondNumberOfDigits3')];
    }
    if (this.get('isDivide')) {
      config['/'] = [this.get('firstNumberOfDigits4'), this.get('secondNumberOfDigits4'), this.get('thirdNumberOfDigits4')];
    }
    return config;
  },

  actions: {
    okConfig: function() {
      this.get('onTheOk')(this.buildConfig());
    }
  }
});
