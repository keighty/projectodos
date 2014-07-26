Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('projects', {
    path: '/',
    waitOn: function() { return [Meteor.subscribe('projects') ];}
  });
  this.route('profileEdit', {
    path: '/profile/edit'
  });
});