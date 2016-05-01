(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["page-elements/page-title"],depth0,{"name":"page-elements/page-title","hash":{"title":"CSS Playground"},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n\r\n<div id=\"form-elements\" class=\"section\">\r\n\r\n"
    + ((stack1 = container.invokePartial(partials["page-elements/section-title"],depth0,{"name":"page-elements/section-title","hash":{"title":"Form Elements"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"section-content\">\r\n\r\n    <div id=\"text-input\">\r\n      <h3>Text Input</h3>\r\n\r\n      <p>For desktop views, the text input will occupy 50% of the availble width of its container.  However, for tablet devices and smaller the input will occupy 100% of the available width.</p>\r\n\r\n      <form>\r\n"
    + ((stack1 = container.invokePartial(partials["form/input"],depth0,{"name":"form/input","hash":{"placeholder":"Please enter your first name...","label":"Forename: ","id":"forename"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["form/input"],depth0,{"name":"form/input","hash":{"placeholder":"Please enter your last name...","label":"Surname: ","id":"surname"},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </form>\r\n\r\n      <h4>Handlebars Template:</h4>\r\n      <code>\r\n        <pre>\r\n  &lt;div class=\"form-item\"&gt;\r\n    &lt;label for=\"&lbrace;&lbrace;id&rbrace;&rbrace;\"&gt;\r\n    &lt;div class=\"input-label\"&gt;&lbrace;&lbrace;label&rbrace;&rbrace;&lt;/div&gt;\r\n      &lt;input id=\"&lbrace;&lbrace;id&rbrace;&rbrace;\" type=\"text\" placeholder=\"&lbrace;&lbrace;placeholder&rbrace;&rbrace;\"/&gt;\r\n    &lt;/label&gt;\r\n  &lt;/div&gt;</pre>\r\n      </code>\r\n\r\n      <h4>Usage:</h4>\r\n      <code>\r\n        <pre>\r\n  &lbrace;&lbrace;> form/input\r\n      id=\"forename\"\r\n      label=\"Forename: \"\r\n      placeholder=\"Please enter your first name...\"&rbrace;&rbrace;\r\n        </pre>\r\n      </code>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});
templates['nav'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["page-elements/navigation"],depth0,{"name":"page-elements/navigation","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();
