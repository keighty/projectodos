Session.set('addTodo', false);
Session.set('addProject', false);

Template.projects.helpers({
  addProject: function() {
    return Session.equals('addProject', true);
  }
});

Template.projects.events({
  'click .alert-info': function(e, t) {
    Router.go('projectPage', {_id: this._id});
  },
  'click #addProject': function(e, t) {
    Session.set('addProject', true);
    Meteor.flush();
  },
  'keyup #newProject': function(e, t) {
    if(e.which == 13) {
      var newProject = {title: e.target.value};
      if(newProject.title) {
        Meteor.call('newProject', newProject, function(error, projectId) {
          if(error) {
            throw new Meteor.Error(500, 'Item not saved');
          } else {
            e.target.value = '';
            Session.set('addProject', false);
            Meteor.flush();
          }
        })
      }
    }
  }
});

Template.projectPage.helpers({
  addTodo: function() {
    return Session.equals('addTodo', true);
  }
});

Template.projectPage.events({
  'click #addTodo': function(e, t) {
    Session.set('addTodo', true);
    Meteor.flush(); // flush the DOM to load changed markup
    focusText($("#newTodo"));
  },
  'keyup #newTodo': function (e,t){
    if(e.which == 13){
      var newTodo = {
        project_id: this.project._id,
        description: e.target.value
      };
      if(newTodo) {
        Meteor.call('newTodo', newTodo, function(error, itemId) {
          if(error) {
            throw new Meteor.Error(500, "Item not saved");
          } else {
            Session.set('addTodo', false);
            Meteor.flush();
          }
        });
      }
      e.target.value = '';
    }
  }
});
