Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('projects', {
    path: '/',
    waitOn: function() { return [Meteor.subscribe('projects') ];},
    data: function() { return { projects: Projects.find({}) }; }
  });
  this.route('projectPage', {
    path: '/:_id',
    waitOn: function() {
      return [Meteor.subscribe('project', this.params._id), Meteor.subscribe('todos', this.params._id)];
    },
    data: function() {
      return {
        project: Projects.findOne({}),
        todos: Todos.find({})
      };
    }
  });
  this.route('profileEdit', {
    path: '/profile/edit'
  });
});