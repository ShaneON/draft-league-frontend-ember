import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    this.set('member', model)
  },

  model(params) {
    return this.get('store').findRecord('member', params.member_id);
  }
});
