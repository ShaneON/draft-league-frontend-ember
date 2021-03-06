import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sign-in');
  this.route('registration');
  this.route('members', function() {
    this.route('show', { path: '/:member_id'}, function() {
      this.route('draft');
    });
  });
  this.route('transfers');
});

export default Router;
