import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  squad: Ember.computed.alias('member.players'),

  gk: Ember.computed( function() {
    return this.get('squad').filter(p => p.pos === 'GK');
  }),

  def: Ember.computed( function() {
    return this.get('squad').filter(p => p.pos === 'DEF');
  }),

  mid: Ember.computed( function() {
    return this.get('squad').filter(p => p.pos === 'MID');
  }),

  st: Ember.computed( function() {
    return this.get('squad').filter(p => p.pos === 'ST');
  }),

});
