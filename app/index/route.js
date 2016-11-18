import Ember from 'ember';
import config from 'nodevember/config/environment';

export default Ember.Route.extend({
  model() {
    return fetch(config.apiUrl)
      .then((variableName) => variableName.json());
  }
});
