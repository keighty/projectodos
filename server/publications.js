Meteor.publish('projects', function() {
  return Projects.find({userId: this.userId});
});

Meteor.publish('project', function(id) {
  return Projects.find(id);
});

Meteor.publish('todos', function(projectId) {
  return Todos.find({project_id: projectId}, {sort: {date_completed: 1}});
});
