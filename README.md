Meteor Pen Editor
=================

[Pen](https://github.com/sofish/pen) Editor packaged for Meteor

[Live demo](http://pendemo.meteor.com/)


##How to Use

First define a template:
```Handlebars
<template name="penEditable">
  <div id="editor">
    {{{content}}}
  </div>
</template>
```
Then add a `rendered` callback to initialize the editor
```Javascript
Template.penEditable.rendered = function () {
  this._editor = new Pen('#editor');
};
```
Additionally, you should also destroy the `Pen` instance when
the template gets destroyed
```Javascript
Template.penEditable.destroyed = function () {
  this._editor.destroy();
};
```

