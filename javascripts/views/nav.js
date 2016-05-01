var NavView = Backbone.View.extend({
  template: Handlebars.templates.nav,
  render: function() {
    this.el.innerHTML = this.template({"nav-items": [{
              "text": "Form Elements",
              "path": "#form-elements",
              "sublinks": [{
                "text": "Text Input",
                "path": "#text-input"
              }]
            }]});
    return this;
  }
});
