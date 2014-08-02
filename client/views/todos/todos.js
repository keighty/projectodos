Template.todo.helpers({
  checked: function() {
    return !!this.date_completed;
  }
});

Template.todo.events({
  'click .check': function(e, t) {
    var date = null;
    if(!this.date_completed) {date = new Date().getTime();}
    Todos.update(this._id, { $set: {date_completed: date } }, function(error) {
      if(error)
        throw new Meteor.Error(500, "Your todo was not saved. Try again. " + error);
      else
        Meteor.flush();
    });
  }
});