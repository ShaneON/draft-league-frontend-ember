import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  squad: Ember.computed.alias('member.players'),

  benched: Ember.computed( function() {
    return this.get('squad').filter(b => b.isStarting === false);
  }),
});
