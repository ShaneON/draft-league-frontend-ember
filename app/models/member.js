import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  teamName: DS.attr('string'),
  players: DS.attr('players'),
});
