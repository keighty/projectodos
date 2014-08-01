Projects = new Meteor.Collection('projects');

Projects.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
  newProject: function(newProject){
    var user = Meteor.user();

    if(!user)
      throw new Meteor.Error(401, "You must log in before adding projects");

    var project = _.extend(_.pick(newProject, 'title'), {
      complete: false,
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    project._id = Projects.insert(project);
    if(project._id){
      return project._id;
    } else {
      throw new Meteor.Error(422, "Your project was not saved. Try again.");
    }
  }
});
