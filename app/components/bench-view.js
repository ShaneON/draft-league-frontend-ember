import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  benched: Ember.computed( function() {
    return this.get('players').filter(b => b.isStarting === false);
  }),
});
