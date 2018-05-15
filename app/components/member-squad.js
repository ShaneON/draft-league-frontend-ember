import Ember from 'ember';

export default Ember.Component.extend({
  // squad: Ember.computed.alias('member.squad')
  listTitles: ['Name', 'Position', 'Team'],

  squad: [
    {
      firstName: "Diego",
      lastName: "Costa",
      position: "ST",
      team: "CHE"
    },
    {
      firstName: "Eden",
      lastName: "Hazard",
      position: "MID",
      team: "CHE"
    },
    {
      firstName: "Michy",
      lastName: "Bat",
      position: "ST",
      team: "CHE"
    },
    {
      firstName: "Emboaba",
      lastName: "Oscar",
      position: "MID",
      team: "CHE"
    },
  ]
});
