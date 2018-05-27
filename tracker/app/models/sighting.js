import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  createdAt: DS.attr('date'),
  dightedAt: DS.attr('date'),
  witnesses: DS.hasMany('witness')

});
