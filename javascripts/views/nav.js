var NavView = Backbone.View.extend({
  template: Handlebars.templates.nav,
  render: function() {
    var model = new NavModel();
    console.log(model.toJSON());
    this.el.innerHTML = this.template(model.toJSON());
    return this;
  }
});
