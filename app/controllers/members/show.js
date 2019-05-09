import Ember from 'ember';

export default Ember.Controller.extend({
  navTitle: Ember.computed.alias('member.name'),

  currentSelectedPlayer: null,

  squad: Ember.computed.alias('member.players'),

  benched: Ember.computed( function() {
    return this.get('squad').filter(b => b.isStarting === false);
  }),

  positionGk: Ember.computed( function() {
    return this.get('squad').filter(p => p.position === 'GK');
  }),

  positionDef: Ember.computed( function() {
    return this.get('squad').filter(p => p.position === 'DEF');
  }),

  positionMid: Ember.computed( function() {
    return this.get('squad').filter(p => p.position === 'MID');
  }),

  positionSt: Ember.computed( function() {
    return this.get('squad').filter(p => p.position === 'ST');
  }),

  actions: {
    playerSelected(player) {
      if (this.get('currentSelectedPlayer')) {
        this._switchPlayers(player);
      }
      else {
        this.set('currentSelectedPlayer', player)
      }
    }
  },

  _switchPlayers(player) {
    if (!this._checkPositionsAreEqual(player)) {
      return;
    }
  },

  _checkPositionsAreEqual(player) {
    return player.position === this.get('currentSelectedPlayer.position');
  }
});
