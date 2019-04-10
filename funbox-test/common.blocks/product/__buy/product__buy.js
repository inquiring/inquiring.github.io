modules.define('product__buy', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('product', 'buy', {
    onSetMod: {
        js: {
            inited: function() {
                const products = Array.prototype.slice.call(document.querySelectorAll('.pt-form__item'));
                console.log(products);

                products.forEach((product) => {
                    const checkbox = product.querySelector('input[type=checkbox]');
                    console.log(checkbox);
                    const buy =  product.querySelector('.product__buy');
                    console.log(buy);
                    const card = product.querySelector('.pt-card');
                    console.log(card);
                    const textSelected = product.querySelector('.text_for_selected');
                    console.log(textSelected);

                    const handlerStatusProduct = () => {
                        if (!checkbox.hasAttribute('checked')) {
                            checkbox.setAttribute('checked', 'checked');
                            card.classList.add('product_view_selected');
                            buy.classList.add('visually-hidden');
                            textSelected.classList.remove('visually-hidden');
                        } else {
                            checkbox.removeAttribute('checked');
                            card.classList.remove('product_view_selected');
                            buy.classList.remove('visually-hidden');
                            textSelected.classList.add('visually-hidden');
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
