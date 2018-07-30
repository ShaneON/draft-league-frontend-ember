import Ember from 'ember';

export default Ember.Controller.extend({
  navTitle: "The Draft",

  actions: {
    showAddPlayerModal(player) {
      this.set('selectedPlayerToAdd', player);
      this.set('isShowingAddPlayerModal', true);
    },

    showRemovePlayerModal(player) {
      this.set('selectedPlayerToRemove', player);
      this.set('isShowingRemovePlayerModal', true);
    }
  },
});
