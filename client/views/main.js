Handlebars.registerHelper('formatDate', function(date) {
  return $.datepicker.formatDate('dd-M-yy', date);
});
