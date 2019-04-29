modules.define('product__buy', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('product', 'buy', {
    onSetMod: {
        js: {
            inited: function() {
                const products = Array.prototype.slice.call(document.querySelectorAll('.pt-form__item'));

                products.forEach((product) => {
                    const checkbox = product.querySelector('input[type=checkbox]');
                    const buy =  product.querySelector('.product__buy');
                    const card = product.querySelector('.pt-card');

                    const handlerStatusProduct = () => {
                        if (!checkbox.hasAttribute('checked')) {
                            checkbox.setAttribute('checked', 'checked');
                            card.classList.remove('product_view_default');
                            card.classList.add('product_view_selected');
                        } else {
                            checkbox.removeAttribute('checked');
                            card.classList.remove('product_view_selected');
                            card.classList.add('product_view_default');
                            card.classList.remove('product_view_selected');
                        }
                    }

                    if (checkbox.hasAttribute('disabled')) {
                        card.classList.add('product_view_disabled');
                        buy.innerHTML = card.dataset.disabled;
                    }

                    checkbox.addEventListener('change', handlerStatusProduct);
                    card.addEventListener('click', handlerStatusProduct);
                    card.addEventListener('mouseLeave', () => {
                        if (checkbox.hasAttribute('checked')) {
                            card.classList.add('product_view_selected');
                        } else {
                            card.classList.remove('product_view_selected');
                        }
                    })

                });
            }
        }
    }
}));

});
