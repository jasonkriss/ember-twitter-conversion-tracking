import Ember from 'ember';

export default Ember.Service.extend({
  id: null,

  track(params = {}) {
    return twttr.conversion.trackPid(this.id, params);
  }
});
