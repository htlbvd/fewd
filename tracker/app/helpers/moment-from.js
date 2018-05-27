//import Ember from 'ember';
import { helper } from '@ember/component/helper';

export function momentFrom(params) {
  var time = window.moment(...params);
  var formatted = time.fromNow();
  // return new Ember.Handlebars.SafeString('<span class="text-primary">' + formatted + '</span>');
  return formatted;
}

export default helper(momentFrom);
