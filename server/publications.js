Meteor.publish('projects', function() {
  return Projects.find({userId: this.userId});
});

Meteor.publish('project', function(id) {
  return Projects.find(id);
});