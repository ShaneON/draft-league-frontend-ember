import Ember from 'ember';

export default Ember.Controller.extend({
  navTitle: Ember.computed.alias('member.name')
});
