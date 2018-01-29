import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    const persistConfig = localStorage.getItem('config');
    let currentConfig = null;
    if (persistConfig === null) {
      currentConfig = { '+': [2, 1], '-': [2, 1] };
    } else {
      currentConfig = JSON.parse(persistConfig);
    }
    this.set('config', currentConfig);
  },

  getConfig() {
    return this.get('config');
  },

  saveConfig(config) {
    this.set('config', config);
    localStorage.setItem('config', JSON.stringify(config));
  }
});
