import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    addPlayer(player) {
      // const member = this.modelFor('members.show');
      // member.get('players').pushObject(player);
      // member.save();
      console.log('Add player: ' + player.get('lastName'));
    },

    removePlayer(player) {
      // const member = this.modelFor('members.show');
      // member.get('players').pushObject(player);
      // member.save();
      console.log('Remove player: ' + player.lastName); //=========fake data
    }
  },

  model() {
    // return Ember.RSVP.hash({
    //   players: this.get('store').findAll('player'),
    //   member: this.modelFor('member.show')
    // });
  }
});
