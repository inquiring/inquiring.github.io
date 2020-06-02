modules.define('new-menu', ['i-bem-dom', 'link', 'jquery'], function(provide, bemDom, Link, $) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var link = this.findChildBlock(Link);
                this._current = this.findChildElems('icon');

                this._events(link).on('click', function() {

                    this.toggleMod('visible', true);
                    this._current.toggleMod('visible');
                });
            }
        }
    },
}));

});
