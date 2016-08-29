import { Component } from 'react';
import BEMTransformer from './transformer';

const transformer = new BEMTransformer();

class BEMComponent extends Component {
  constructor(props) {
    super(props);

    this.bem_blocks = this.bem_blocks || [];
    this.bem_block_modifiers = this.bem_block_modifiers || [];
    this.render = this.bemWrapper(this.render).bind(this);
  }

  bemWrapper(renderer) {
    return () => {
      return transformer.transform(
        renderer(),
        this.bem_blocks,
        this.bem_block_modifiers,
        this.bem_translate_class
      );
    };
  };
}

export default BEMComponent;
