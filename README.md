# React BEM [![Build Status](https://travis-ci.org/cuzzo/react-bem.svg?branch=master)](https://travis-ci.org/cuzzo/react-bem)

BEM class names are systematic. So why write them yourself?

# Usage

React BEM automatically generates BEM style classes on React components... So you don't have to.

# Installation

Using NPM?

```bash
npm i react-auto-bem
```

Using bower?

```bash
bower install react-bem
```

# Higher Order Component Example

This example uses the [transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)
loader:

```javascript
import { BEMComponent } from 'react-bem';

class Header extends BEMComponent {
  bem_blocks = ["widget"]
  bem_block_modifiers = ["christmas"]

  render() {
    return (
      <header className="no-overwrite">
        <h1><span modifiers="blinking">HEADER:</span> This is the Header</h1>
      </header>
    );
  }
}
```

Translates to:

```html
<header class="no-overwrite widget--christmas__header widget__header" data-reactid=".0">
    <h1 class="widget--christmas__h1 widget__h1" data-reactid=".0.0">
        <span class="widget--christmas__span--blinking widget--christmas__span widget__span--blinking widget__span" data-reactid=".0.0.0"></span>
        <span data-reactid=".0.0.1">
             This is the Header
        </span>
    </h1>
</header>
```

# Mixin Example

JSX Component:

```javascript
var Header = React.createClass({
  mixins: [ReactBEM],

  bem_blocks: ["widget"],
  bem_block_modifiers: ["christmas"],

  bem_render: function() {
    return (
      <header className="no-overwrite">
        <h1><span modifiers="blinking">HEADER:</span> This is the Header</h1>
      </header>
    );
  }
});
```

You can see it live, how it attaches the BEM classes, [here](http://cuzzo.github.io/react-bem/example/ "React autogenerate BEM class names example").

# Custom E

Don't want the E in BEM to be the HTML element name? Don't blame you.

```javascript
var Header = React.createClass({
  mixins: [ReactBEM],

  bem_blocks: ["widget"],
  bem_block_modifiers: ["christmas"],

  bem_render: function() {
    return (
      <header className="no-overwrite">
        <h1 role="title"><span modifiers="blinking">HEADER:</span> This is the Header</h1>
      </header>
    );
  }
});
```

Translates to:

```html
<header class="no-overwrite widget--christmas__header widget__header" data-reactid=".0">
    <h1 class="widget--christmas__title widget__title" role="title" data-reactid=".0.0">
        <span class="widget--christmas__span--blinking widget--christmas__span widget__span--blinking widget__span" data-reactid=".0.0.0"></span>
        <span data-reactid=".0.0.1">
             This is the Header
        </span>
    </h1>
</header>
```

There's a lot of reasons why you should be styling with **more** than just the class attribute. But say you want to define a role and use something different for your BEM element. Or say you just have a religion about not using the role attribute. Fine.

```javascript
var Header = React.createClass({
  mixins: [ReactBEM],

  bem_blocks: ["widget"],
  bem_block_modifiers: ["christmas"],

  bem_render: function() {
    return (
      <header className="no-overwrite">
        <h1 role="somerole" bem_element="title"><span modifiers="blinking">HEADER:</span> This is the Header</h1>
      </header>
    );
  }
});
```

Translates to:

```html
<header class="no-overwrite widget--christmas__header widget__header" data-reactid=".0">
    <h1 class="widget--christmas__title widget__title" role="somerole" data-reactid=".0.0">
        <span class="widget--christmas__span--blinking widget--christmas__span widget__span--blinking widget__span" data-reactid=".0.0.0"></span>
        <span data-reactid=".0.0.1">
             This is the Header
        </span>
    </h1>
</header>
```

Other Resources
---------------
* [react-bem-helper](https://github.com/marcohamersma/react-bem-helper "React BEM Helper") - A React BEM Helper.
* [bem-classnames](https://github.com/pocotan001/bem-classnames "React BEM class name manager") - A React BEM class name manager.
* [bem-cn](https://github.com/albburtsev/bem-cn "React BEM class name generator") - A React BEM class name generator.
* [b_](https://github.com/azproduction/b_ "React BEM class name formatter") - A React class name formatter.


# License

React BEM is free--as in BSD. Hack your heart out, hackers.
