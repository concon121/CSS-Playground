Handlebars.partials = Handlebars.templates;

var cssPlaygroundRouter = new CssPlaygroundRouter();

Backbone.history.start({
    pushState: true,
    root: '/'
});
