modules.define('e-accordion__short', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('e-accordion', 'short', {
    onSetMod: {
        js: {
            inited: function() {
                this._domEvents('short').on('click', function() {
                    this.toggleMod('current', true);
                });
            }
        }
    }
}));

});
