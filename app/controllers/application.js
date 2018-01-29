import Ember from 'ember';
import * as RndUtils from '../utils/random-utils';

export default Ember.Controller.extend({
  config: Ember.inject.service(),

  setupController: function() {
    let config = this.get('config').getConfig();
    const result = RndUtils.getResult(config);
    this.setResult(result);
    this.set('userResult');
    this.setResultFieldWidth();
    this.set('inputClass', 'input-normal');
    this.set('equivalenceSign', '=');
    this.set('solved', 0);
    this.set('errors', 0);
    this.set('skiped', 0);
  }.on('init'),

  setResult: function(result) {
    let config = this.get('config').getConfig();
    this.set('firstElement', result[0]);
    this.set('secondElement', result[1]);
    this.set('operator', result[3]);
    if (result[3] === '/') {
      if (result[0] % result[1] === 0) {
        this.set('result', result[2].toString());
      } else {
        this.set('result', result[2].toFixed(config['/'][2]));
      }
      return;
    }
    this.set('result', result[2].toString());
  },

  ifRight: function() {
    let config = this.get('config').getConfig();
    this.incrementProperty('solved');
    this.set('inputClass', 'input-right');
    setTimeout(function() {
      this.set('equivalenceSign', '=');
      this.set('textValue', null);
      this.set('inputClass', 'input-normal');
      this.setResult(RndUtils.getResult(config));
      this.setResultFieldWidth();
    }.bind(this), 500);
  },

  ifWrong: function() {
    this.incrementProperty('errors');
    this.set('equivalenceSign', '&ne;');
    this.set('inputClass', 'input-wrong');
    setTimeout(function() {
      this.set('equivalenceSign', '=');
      this.set('textValue', null);
      this.set('inputClass', 'input-normal');
    }.bind(this), 500);
  },

  setResultFieldWidth: function() {
    const resultWidth = this.get('result').length;
    let Width = 1;
    if (resultWidth > 1) {
      Width = resultWidth - 1;
    }
    this.set('resultWidth', Width);
  },

  normalizeInput: function(inputValue) {
    return inputValue.replace(/,/g, '.');
  },

  actions: {
    checkResult: function(userValue) {
      const result = this.get('result');
      if (result === this.normalizeInput(userValue)) {
        this.ifRight();
      } else {
        this.ifWrong();
      }
    },

    skipItem: function() {
      let config = this.get('config').getConfig();
      this.set('equivalenceSign', '=');
      this.setResult(RndUtils.getResult(config));
      this.setResultFieldWidth();
      this.incrementProperty('skiped');
      this.incrementProperty('total');
    },

    toggleSetupModal: function() {
      this.toggleProperty('isSetupModalShown');
    },

    saveConfig: function(config) {
      this.get('config').saveConfig(config);
      this.toggleProperty('isSetupModalShown');
    }
  }
});
