import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    addPlayer(player) {
      console.log("Add player: " + player.name);
    }
  },

  model() {
    //return this.get('ajax').request('http://localhost:8080/players');

    return [
      {
        "name": "Diego Costa",
        "pos": "ST",
        "team": "CHE"
      },
      {
        "name": "Eden Hazard",
        "pos": "MID",
        "team": "CHE"
      },
      {
        "name": "Romelu Lukaku",
        "pos": "ST",
        "team": "MUN"
      },
      {
        "name": "Sergio Aguero",
        "pos": "ST",
        "team": "MC"
      },
      {
        "name": "Petr Cech",
        "pos": "GK",
        "team": "ARS"
      },
      {
        "name": "Alvaro Morata",
        "pos": "ST",
        "team": "CHE"
      },
      {
        "name": "Ander Herrera",
        "pos": "MID",
        "team": "MUN"
      },
      {
        "name": "Jamie Vardy",
        "pos": "ST",
        "team": "LEI"
      },
      {
        "name": "Gabriel Jesus",
        "pos": "ST",
        "team": "MC"
      },
      {
        "name": "Ederson",
        "pos": "GK",
        "team": "MC"
      },
    ]
  }
});
