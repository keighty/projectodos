Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('projects', {
    path: '/',
    waitOn: function() { return [Meteor.subscribe('projects') ];}
  });
  this.route('projectPage', {
    path: '/:_id',
    waitOn: function() {
      return [Meteor.subscribe('project', this.params._id)];
    },
    data: function() {
      return Projects.findOne(this.params._id);
    }
  });
  this.route('profileEdit', {
    path: '/profile/edit'
  });
});