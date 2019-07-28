modules.define('e-accordion',
        ['i-bem-dom', 'jquery'], function(provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {

    onSetMod: {
        'js' : {
            'inited' : function() {
                this._current = this.findChildElem('short', 'current', true);
            }
        }
    },

}));

});
