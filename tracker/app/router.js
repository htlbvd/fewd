import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sightings', function() {
    this.route('new');
  });
  this.route('sighting', function() {
    this.route('edit',{path:"sightings/:sighting_id/edit"});
  });
  this.route('cryptids');
  this.route('cryptid',{path:'cryptids/:cryptid_id'});
  this.route('witnesses');
  this.route('witness');
});

export default Router;
