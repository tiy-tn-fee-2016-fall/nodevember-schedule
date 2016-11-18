import Ember from 'ember';
import config from 'nodevember/config/environment';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return fetch(config.apiUrl)
      .then((variableName) => variableName.json());
  }
});
