import RSVP from 'rsvp';
import Route from '@ember/routing/route';
//import Computed from '@ember/object/computed';
// export default Route.extend({
//   model(){
//     return RSVP.hash({
//       sighting: this.store.createRecord('sighting'),
//       cryptids: this.store.findAll('cryptid'),
//       witnesses: this.store.findAll('witness')
//     });
//   },
//   actions: {
//     willTranstion() {
//       var sighting = this.get('controller.model.sighting');
//       if(sighting.get('hasDirtyAttributes')){
//         sighting.deleteRecord();
//       }
//     }
//   }
// });
import Ember from 'ember';
export default Route.extend({
  model() {
    return RSVP.hash({
      sighting: this.store.createRecord('sighting'),
      cryptids: this.store.findAll('cryptid'),
      witnesses: this.store.findAll('witness')
    });
  },
  sighting: Ember.computed.alias('controller.model.sighting'),
  actions: {
    willTransition() {
      var sighting = this.get('controller.model.sighting');
      if (sighting.get('hasDirtyAttributes')) {
        sighting.deleteRecord();
      }
    },
    create() {
      var self = this;
      this.get('sighting').save().then(function() {
        self.transitionTo('sightings');
      });
    },
    cancel() {
      this.get('sighting').deleteRecord();
      this.transitionTo('sightings');
    },
    didMakeWitnessSelection(value) {
      this.get('sighting').set('witnesses', value);
    },
    didMakeCryptidSelection(value) {
      this.get('sighting').set('cryptid', value);
    }
  }
});
