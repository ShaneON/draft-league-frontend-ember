import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('squad-view-st', 'Integration | Component | squad view st', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{squad-view-st}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#squad-view-st}}
      template block text
    {{/squad-view-st}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
