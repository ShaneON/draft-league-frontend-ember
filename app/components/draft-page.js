import Ember from 'ember';

export default Ember.Component.extend({

  navTitle: "The Draft",

  actions: {
    showAddPlayerModal(player) {
      this.set('selectedPlayer', player);
      this.set('isShowingAddPlayerModal', true);
    }
  },
});
