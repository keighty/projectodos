Session.set('addTodo', false);

Template.projects.events({
  'click .alert-info': function(e, t) {
    Router.go('projectPage', {_id: this._id});
  }
});

Template.projectPage.helpers({
  addTodo: function() {
    return Session.equals('addTodo', true);
  }
});

Template.projectPage.events({
  'click .add-todo': function(e, t) {
    Session.set('addTodo', true);
    Meteor.flush;
  }
});
