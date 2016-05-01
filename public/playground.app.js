var NavModel = Backbone.Model.extend({
  defaults: {
    "nav-items": [
              {
                "text": "Page Elements",
                "path": "#page-elements",
                "sublinks": [{
                  "text": "Headings",
                  "path": "#headings"
                },
                {
                  "text": "Menus",
                  "path": "#menus"
                },
                {
                  "text": "Navigation",
                  "path": "#navigation"
                },
                {
                  "text": "Footers",
                  "path": "#footers"
                }
                ]
              },
              {
                "text": "Form Elements",
                "path": "#form-elements",
                "sublinks": [{
                  "text": "Text Input",
                  "path": "#text-input"
                },
                {
                  "text": "Check Boxes",
                  "path": "#check-boxes"
                },
                {
                  "text": "Radio Buttons",
                  "path": "#radio-buttons"
                },
                {
                  "text": "Buttons",
                  "path": "#buttons"
                }]
              },
              {
                "text": "Tables",
                "path": "#tables"
              }]
  }
});

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['forms'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["page-elements/page-title"],depth0,{"name":"page-elements/page-title","hash":{"title":"CSS Playground"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<div id=\"form-elements\" class=\"section\">\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["page-elements/section-title"],depth0,{"name":"page-elements/section-title","hash":{"title":"Form Elements"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"section-content\">\r\n\r\n    <div id=\"text-input\">\r\n      <h3>Text Input</h3>\r\n\r\n      <p>For desktop views, the text input will occupy 50% of the availble width of its container.  However, for tablet devices and smaller the input will occupy 100% of the available width.</p>\r\n\r\n      <form>\r\n"
    + ((stack1 = container.invokePartial(partials["form/input"],depth0,{"name":"form/input","hash":{"placeholder":"Please enter your first name...","label":"Forename: ","id":"forename"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["form/input"],depth0,{"name":"form/input","hash":{"placeholder":"Please enter your last name...","label":"Surname: ","id":"surname"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </form>\r\n\r\n      <h4>Handlebars Template:</h4>\r\n      <code>\r\n        <pre>\r\n  &lt;div class=\"form-item\"&gt;\r\n    &lt;label for=\"&lbrace;&lbrace;id&rbrace;&rbrace;\"&gt;\r\n    &lt;div class=\"input-label\"&gt;&lbrace;&lbrace;label&rbrace;&rbrace;&lt;/div&gt;\r\n      &lt;input id=\"&lbrace;&lbrace;id&rbrace;&rbrace;\" type=\"text\" placeholder=\"&lbrace;&lbrace;placeholder&rbrace;&rbrace;\"/&gt;\r\n    &lt;/label&gt;\r\n  &lt;/div&gt;</pre>\r\n      </code>\r\n\r\n      <h4>Usage:</h4>\r\n      <code>\r\n        <pre>\r\n  &lbrace;&lbrace;> form/input\r\n      id=\"forename\"\r\n      label=\"Forename: \"\r\n      placeholder=\"Please enter your first name...\"&rbrace;&rbrace;\r\n        </pre>\r\n      </code>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["page-elements/page-title"],depth0,{"name":"page-elements/page-title","hash":{"title":"CSS Playground"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n<div id=\"main-menu\" class=\"section\">\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["page-elements/section-title"],depth0,{"name":"page-elements/section-title","hash":{"title":"Menu"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"section-content\">\r\n\r\n    <div class=\"menu\">\r\n"
    + ((stack1 = container.invokePartial(partials["page-elements/navigation"],depth0,{"name":"page-elements/navigation","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div>\r\n<!--\r\n            <ul>\r\n              <li>\r\n                <p>Page Elements</p>\r\n                <ul>\r\n                  <li>Headings</li>\r\n                  <li>Menus</li>\r\n                  <li>Navigation</li>\r\n                  <li>Footers</li>\r\n                </ul>\r\n              </li>\r\n              <li>\r\n                <p>Forms</p>\r\n                <ul>\r\n                  <li>Text Input</li>\r\n                  <li>Check Boxes</li>\r\n                  <li>Radio Buttons</li>\r\n                  <li>Buttons</li>\r\n                </ul>\r\n              </li>\r\n              <li>\r\n                <p>Tables</p>\r\n              </li>\r\n            </div>\r\n-->\r\n\r\n  </div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});
templates['nav'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["page-elements/navigation"],depth0,{"name":"page-elements/navigation","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();

var HomeView = Backbone.View.extend({
  template: Handlebars.templates.forms,
  render: function() {
    this.el.innerHTML = this.template();
    return this;
  }
});

var HomeView = Backbone.View.extend({
  template: Handlebars.templates.home,
  render: function() {
    var model = new NavModel();
    this.el.innerHTML = this.template(model.toJSON());
    return this;
  }
});

var NavView = Backbone.View.extend({
  template: Handlebars.templates.nav,
  render: function() {
    var model = new NavModel();
    console.log(model.toJSON());
    this.el.innerHTML = this.template(model.toJSON());
    return this;
  }
});

var CssPlaygroundRouter = Backbone.Router.extend({

  mainDom: $("#page"),
  navDom: $("#navigation"),
  routes: {
    '': 'home',
    'forms': 'forms'
  },
  home: function() {
    var view = new HomeView();
    var nav = new NavView();
    this.mainDom.empty().prepend(view.render().el);
    this.navDom.empty().prepend(nav.render().el);
  },
  forms: function() {
    var view = new FormsView();
    this.mainDom.empty().prepend(view.render().el);
  }
});

Handlebars.partials = Handlebars.templates;

var cssPlaygroundRouter = new CssPlaygroundRouter();

Backbone.history.start({
    pushState: true,
    root: '/CSS-Playground/'
});
