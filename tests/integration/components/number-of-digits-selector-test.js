import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number-of-digits-selector', 'Integration | Component | number of digits selector', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{number-of-digits-selector}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#number-of-digits-selector}}
      template block text
    {{/number-of-digits-selector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
