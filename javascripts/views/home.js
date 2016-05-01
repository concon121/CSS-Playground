var HomeView = Backbone.View.extend({
  template: Handlebars.templates.home,
  render: function() {
    var model = new NavModel();
    this.el.innerHTML = this.template(model.toJSON());
    return this;
  }
});
