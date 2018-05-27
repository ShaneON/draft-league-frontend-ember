import Ember from 'ember';
import isStarting from '../../../utils/is-starting';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  players: [
    {
      "name": "Cech",
      "pos": "GK",
      "team": "ARS",
      "points": "202",
      "isStarting": true
    },
    {
      "name": "Ederson",
      "pos": "GK",
      "team": "MC",
      "points": "134",
      "isStarting": false
    },
    {
      "name": "Hazard",
      "pos": "MID",
      "team": "CHE",
      "points": "100",
      "isStarting": true
    },
    {
      "name": "Herrera",
      "pos": "MID",
      "team": "MUN",
      "points": "130",
      "isStarting": true
    },
    {
      "name": "lingard",
      "pos": "MID",
      "team": "MUN",
      "points": "130",
      "isStarting": false
    },
    {
      "name": "blah",
      "pos": "MID",
      "team": "MUN",
      "points": "130",
      "isStarting": true
    },
    {
      "name": "mangan",
      "pos": "MID",
      "team": "MUN",
      "points": "130",
      "isStarting": true
    },
    {
      "name": "terry",
      "pos": "DEF",
      "team": "CHE",
      "points": "202",
      "isStarting": true
    },
    {
      "name": "cahill",
      "pos": "DEF",
      "team": "CHE",
      "points": "202",
      "isStarting": true
    },
    {
      "name": "button",
      "pos": "DEF",
      "team": "CHE",
      "points": "202",
      "isStarting": true
    },
    {
      "name": "bailly",
      "pos": "DEF",
      "team": "MUN",
      "points": "202",
      "isStarting": true
    },
    {
      "name": "manshunken",
      "pos": "DEF",
      "team": "MUN",
      "points": "202",
      "isStarting": false
    },
    {
      "name": "Costa",
      "pos": "ST",
      "team": "CHE",
      "points": "202",
      "isStarting": true
    },
    {
      "name": "Lukaku",
      "pos": "ST",
      "team": "MUN",
      "points": "252",
      "isStarting": true
    },
    {
      "name": "Aguero",
      "pos": "ST",
      "team": "MC",
      "points": "232",
      "isStarting": false
    },
    {
      "name": "defoe",
      "pos": "ST",
      "team": "MC",
      "points": "232",
      "isStarting": false
    },
  ],

  actions: {
    addPlayer(player) {
      const member = this.modelFor('members.show');
      member.get('players').pushObject(player);
      member.save();
      // console.log('Add player: ' + player.get('lastName'));
    },

    removePlayer(player) {
      const member = this.modelFor('members.show');
      member.get('players').pushObject(player);
      member.save();
      // console.log('Remove player: ' + player.lastName); //=========fake data
    }
  },

  model() {
    return Ember.RSVP.hash({
      players: this.get('store').findAll('player'),
      member: this.modelFor('members.show')
    });
  }
});
