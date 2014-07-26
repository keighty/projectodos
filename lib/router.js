Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('projects', {
    path: '/'
  });
  this.route('profileEdit', {
    path: '/profile/edit'
  });
});