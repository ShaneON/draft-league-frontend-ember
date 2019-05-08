import Ember from 'ember';

export default Ember.Controller.extend({
  navTitle: Ember.computed.alias('member.name'),

  squad: Ember.computed.alias('member.players'),

  gk: Ember.computed( function() {
    return this.get('squad').filter(p => p.position === 'GK');
  }),

  def: Ember.computed( function() {
    return this.get('squad').filter(p => p.position === 'DEF');
  }),

  mid: Ember.computed( function() {
    return this.get('squad').filter(p => p.position === 'MID');
  }),

  st: Ember.computed( function() {
    return this.get('squad').filter(p => p.position === 'ST');
  }),
});
