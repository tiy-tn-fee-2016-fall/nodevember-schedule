import Ember from 'ember';

export default Ember.Controller.extend({
  talkDetails: null,

  actions: {
    showTalk(talk) {
      this.set('talkDetails', talk);
    },

    close() {
      this.set('talkDetails', null);
    }
  }
});
