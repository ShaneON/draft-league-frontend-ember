import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    addPlayer(player) {
      const member = this.modelFor('members.show');
      member.get('players').pushObject(player);
      member.save();
    }
  },

  model() {
    return this.get('store').findAll('player');
  }
});
