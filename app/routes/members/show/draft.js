import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  actions: {
    addPlayer(player) {
      console.log("Add player: " + player.name);
    }
  },

  model() {
    return [
      {
        "name": "Diego Costa",
        "pos": "ST",
        "team": "CHE",
        "pointsLastYear": "202"
      },
      {
        "name": "Eden Hazard",
        "pos": "MID",
        "team": "CHE",
        "pointsLastYear": "100"
      },
      {
        "name": "Romelu Lukaku",
        "pos": "ST",
        "team": "MUN",
        "pointsLastYear": "252"
      },
      {
        "name": "Sergio Aguero",
        "pos": "ST",
        "team": "MC",
        "pointsLastYear": "232"
      },
      {
        "name": "Petr Cech",
        "pos": "GK",
        "team": "ARS",
        "pointsLastYear": "202"
      },
      {
        "name": "Alvaro Morata",
        "pos": "ST",
        "team": "CHE",
        "pointsLastYear": "202"
      },
      {
        "name": "Ander Herrera",
        "pos": "MID",
        "team": "MUN",
        "pointsLastYear": "130"
      },
      {
        "name": "Jamie Vardy",
        "pos": "ST",
        "team": "LEI",
        "pointsLastYear": "267"
      },
      {
        "name": "Gabriel Jesus",
        "pos": "ST",
        "team": "MC",
        "pointsLastYear": "120"
      },
      {
        "name": "Ederson",
        "pos": "GK",
        "team": "MC",
        "pointsLastYear": "134"
      },
      {
        "name": "Diego Costa",
        "pos": "ST",
        "team": "CHE",
        "pointsLastYear": "202"
      },
      {
        "name": "Eden Hazard",
        "pos": "MID",
        "team": "CHE",
        "pointsLastYear": "100"
      },
      {
        "name": "Romelu Lukaku",
        "pos": "ST",
        "team": "MUN",
        "pointsLastYear": "252"
      },
      {
        "name": "Sergio Aguero",
        "pos": "ST",
        "team": "MC",
        "pointsLastYear": "232"
      },
      {
        "name": "Petr Cech",
        "pos": "GK",
        "team": "ARS",
        "pointsLastYear": "202"
      },
      {
        "name": "Alvaro Morata",
        "pos": "ST",
        "team": "CHE",
        "pointsLastYear": "202"
      },
      {
        "name": "Ander Herrera",
        "pos": "MID",
        "team": "MUN",
        "pointsLastYear": "130"
      },
      {
        "name": "Jamie Vardy",
        "pos": "ST",
        "team": "LEI",
        "pointsLastYear": "267"
      },
      {
        "name": "Gabriel Jesus",
        "pos": "ST",
        "team": "MC",
        "pointsLastYear": "120"
      },
      {
        "name": "Ederson",
        "pos": "GK",
        "team": "MC",
        "pointsLastYear": "134"
      },
    ]
  }
});
