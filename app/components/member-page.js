import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  navTitle: Ember.computed.alias('member.name')
});
