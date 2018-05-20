import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('squad-view-mid', 'Integration | Component | squad view mid', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{squad-view-mid}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#squad-view-mid}}
      template block text
    {{/squad-view-mid}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
