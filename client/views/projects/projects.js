Template.projects.events({
  'click .alert-info': function(e, t) {
    Router.go('projectPage', {_id: this._id});
  }
});
