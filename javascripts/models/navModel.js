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
