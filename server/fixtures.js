if ( Meteor.users.find().count() === 0 ) {
  Accounts.createUser({
    username: 'keighty',
    email: 'keighty.leonard@gmail.com',
    password: 'foobar'
  });
}

if (Projects.find().count() === 0) {
  var adminUser = Meteor.users.findOne();
  var now = new Date().getTime();

  var learningProject_id = Projects.insert({
    title: "learningGrid",
    description: "meteor application to track my learning goals",
    category: "web",
    userId: adminUser._id,
    submitted: now - 7 * 3600 * 1000
  });

  Todos.insert({
    project_id: learningProject_id,
    description: "add collection for adding sources/urls to learning page",
    submitted: now - 7 * 3600 * 1000,
    rank: "2",
    category: "story",
    complete: true,
    date_completed: now - 7 * 3600 * 1001
  });

  Todos.insert({
    project_id: learningProject_id,
    description: "allow links to be missing http://",
    submitted: now - 7 * 3600 * 100,
    rank: "3",
    category: "bug",
    complete: true,
    date_completed: now - 7 * 3600 * 150
  });

  Todos.insert({
    project_id: learningProject_id,
    description: "add background styling to swimlanes",
    submitted: now - 7 * 3600 * 500,
    rank: "1",
    category: "story",
    complete: false
  });

  Projects.insert({
    title: "projectodos",
    description: "meteor application to track project tasks",
    category: "web",
    userId: adminUser._id,
    submitted: now - 7 * 3600 * 2000
  });
}
