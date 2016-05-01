var HomeView = Backbone.View.extend({
  template: Handlebars.templates.forms,
  render: function() {
    this.el.innerHTML = this.template();
    return this;
  }
});
