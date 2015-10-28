/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-twitter-conversion-tracking',

  contentFor: function(type) {
    if (type === 'head') {
      return "<script src='//platform.twitter.com/oct.js' type='text/javascript'></script>";
    }
  }
};
