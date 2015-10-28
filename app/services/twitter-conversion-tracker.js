import TwitterConversionTracker from 'ember-twitter-conversion-tracking/services/twitter-conversion-tracker';
import config from '../config/environment';

export default TwitterConversionTracker.extend({
  id: config['ember-twitter-conversion-tracking'].id
});
