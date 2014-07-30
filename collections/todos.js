Todos = new Meteor.Collection('todos');

Todos.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
  newTodo: function(newTodo){
    var user = Meteor.user();

    if(!user)
      throw new Meteor.Error(401, "You must log in before adding todos");

    var todo = _.extend(_.pick(newTodo, 'description', 'project_id'), {
      complete: false,
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    todo._id = Todos.insert(todo);
    if(todo._id){
      return todo._id;
    } else {
      throw new Meteor.Error(422, "Your todo was not saved. Try again.");
    }
  }
});
