import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    addPlayer(player) {
      console.log("Add player: " + player.name);
    }
  },

  model() {
    return fetch('http://localhost:8080/players').then(function(response) {
      return response.json();
    });
  }
});
