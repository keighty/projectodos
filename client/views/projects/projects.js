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
