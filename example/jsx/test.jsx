import React from 'react';
import ReactDOM from 'react-dom';
import { BEMMixin } from '../../src';

var Test = React.createClass({
  mixins: [BEMMixin],

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

document.addEventListener("DOMContentLoaded", function() {

  ReactDOM.render(
    <Test />,
    document.getElementById("target")
  );

});
