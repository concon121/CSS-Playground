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
