var CssPlaygroundRouter = Backbone.Router.extend({

  mainDom: $("#page"),
  navDom: $("#navigation"),
  routes: {
    '': 'home'
  },
  home: function() {
    var view = new HomeView();
    var nav = new NavView();
    this.mainDom.empty().prepend(view.render().el);
    this.navDom.empty().prepend(nav.render().el);
  }
});
