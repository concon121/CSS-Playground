var HomeView = Backbone.View.extend({
  template: Handlebars.templates.home,
  render: function() {
    this.el.innerHTML = this.template();
    return this;
  }
});
