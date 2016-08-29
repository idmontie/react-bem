import BEMTransformer from './transformer';

var transformer = new BEMTransformer();

export default {
  getInitialState: function() {
    this.bem_blocks = this.bem_blocks || [];
    this.bem_block_modifiers = this.bem_block_modifiers || [];
    return null;
  },

  render: function() {
    return transformer.transform(
        this.bem_render(),
        this.bem_blocks,
        this.bem_block_modifiers,
        this.bem_translate_class
      );
  }
};
