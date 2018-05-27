import Embe from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Embe.computed('fName', 'lName', function(){
    return this.get('fName') + ' ' + this.get('lName');
  })
});
