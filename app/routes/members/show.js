import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    controller.set('member', model)
    this._super(...arguments)
  },

  model(params) {
    return this.get('store').findRecord('member', params.member_id);
  }
});
