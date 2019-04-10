module.exports = {
    block: 'page',
    title: 'Ты сегодня покормил кота?',
    lang: 'ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Exo+2&amp;subset=cyrillic' },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    mix: {
        block: 'theme',
        mods: {
            color: 'whitepaper-normal',    // цвета
            breakpoint: 'default', //
            space: 'default',    // отступы
            menu: 'default',    // размер меню
            size: 'default',    // типографика
            font: 'TrebuchetMS',
            gap: 'small', // отступы в сетках
            control: 'whitepaper-default'  }
    },
    content: [
        {
            block: 'tpl-layout',
            mix: { block: 'theme', mods: { bg: 'image' } },
            content: [
                {
                    elem: 'section',
                    mix: [
                        { block: 'decorator', mods: { 'indent-v': 'xxxxl' } },
                    ],
                    content: {
                        elem: 'container',
                        elemMods: { size: 'm', align: 'center' },
                        content: {
                            elem: 'content',
                            content: {
                                block: 'tpl-grid',
                                mods: { 'col-gap': 'full', 'row-gap': 'full', 's-columns': '6', },
                                mix: { block: 'pt-form' },
                                content: [
                                    //оглавнение
                                    {
                                        elem: 'fraction',
                                        elemMods: { 's-col':'6', },
                                        mix: [
                                            { block: 'decorator', mods: {'indent-h': 'auto' }},

                                        ],
                                        content: {
                                            block: 'text',
                                            mods: { size: '36', view: 'primary', weight: 'regular', align: 'center', },
                                            mix: [
                                                { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                { block: 'theme', mods: { color: 'whitepaper-success', font: 'exo2' } },
                                            ],
                                            content: 'Ты сегодня покормил кота?'
                                        }
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 's-col':'3', 'm-col':'2' },
                                        mix: [
                                            { block: 'decorator', mods: {'indent-h': 'auto' }},

                                        ],
                                        content: {
                                           block: 'pt-form', elem: 'item',
                                           content: [
                                                // pt-card
                                                {
                                                    block: 'pt-card',
                                                    mix: [
                                                        { block: 'product',  mods: { view: 'default' } },
                                                    ],
                                                    content: [
                                                    {
                                                        elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image' },
                                                    },
                                                    {
                                                        elem: 'content',
                                                        mix: { block: 'decorator', mods: { 'space-h': 'xxxxl', 'space-v': 'l' }},
                                                        content: {
                                                            elem: 'info',
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'm', view: 'secondary', },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            mods: { for: 'default' },
                                                                            tag: 'span',
                                                                            content: 'Сказочное заморское яство'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { for: 'select' },
                                                                            tag: 'span',
                                                                            content: 'Котэ не одобряет?'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'xxxxl', view: 'primary', weight: 'bold' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: 'Нямушки'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'xxl', view: 'primary', weight: 'bold' },
                                                                    mix: { block: 'decorator', mods: {'indent-b': 'm' }},
                                                                    content: 'с фуа-гра'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: '14', view: 'secondary', weight: 'regular' },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            mods: { weight: 'bold' },
                                                                            mix: { block: 'decorator', mods: {'indent-r': 'xxs' }},
                                                                            content: '10'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            content: 'порций'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: '14', view: 'secondary', weight: 'regular' },
                                                                    content: 'мышь в подарок'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right' },
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-informer',
                                                            mods: { view: '' },
                                                            mix: [
                                                                { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                                { block: 'brand-logo', mods: { form: 'round', size: 'l' } },
                                                            ],
                                                            content: {
                                                                elem: 'action',
                                                                elemMods: { distribute: 'center', 'space-a': 's' },
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        mods: { size: '42', view: 'primary', weight: 'regular', align: 'center' },
                                                                        content: '0,5'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        mods: { size: 'xl', view: 'primary', weight: 'regular', align: 'center' },
                                                                        content: 'кг'
                                                                    },
                                                                ]
                                                            }
                                                        }
                                                    }]
                                                },
                                                // подпись под картой default
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'default' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                        { block: 'product', elem: 'buy', js: true },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Чего сидишь? Порадуй котэ,'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: { view: 'blue' },
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'checkbox',
                                                                    mods: {
                                                                        theme: 'hidden',
                                                                        size: 'm',
                                                                    },
                                                                    name: 'foiegras',
                                                                    val: 'foiegras',
                                                                    text: 'купи'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    tag: 'span',
                                                                    content: '.'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                // подпись под картой selected
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'selected' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Печень утки разварная с артишоками.'
                                                        },
                                                    ]
                                                },
                                                // подпись под картой disabled
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'disabled' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: { view: 'yellow' },
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Печалька, с фуа-гра закончился.'
                                                        },
                                                    ]
                                                },
                                           ]
                                        }
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 's-col':'3', 'm-col':'2' },
                                        mix: [
                                            { block: 'decorator', mods: {'indent-h': 'auto' }},
                                        ],
                                        content: {
                                            block: 'pt-form', elem: 'item',
                                            content: [
                                                // pt-card
                                                {
                                                    block: 'pt-card',
                                                    mix: [
                                                        { block: 'product',  mods: { view: 'selected' } },
                                                    ],
                                                    content: [
                                                    {
                                                        elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image' },
                                                    },
                                                    {
                                                        elem: 'content',
                                                        mix: { block: 'decorator', mods: { 'space-h': 'xxxxl', 'space-v': 'l' }},
                                                        content: {
                                                            elem: 'info',
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'm', view: 'secondary', },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            mods: { for: 'default' },
                                                                            tag: 'span',
                                                                            content: 'Сказочное заморское яство'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { for: 'select' },
                                                                            tag: 'span',
                                                                            content: 'Котэ не одобряет?'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'xxxxl', view: 'primary', weight: 'bold' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: 'Нямушки'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'xxl', view: 'primary', weight: 'bold' },
                                                                    mix: { block: 'decorator', mods: {'indent-b': 'm' }},
                                                                    content: 'с рыбой'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: '14', view: 'secondary', weight: 'regular' },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            mods: { weight: 'bold' },
                                                                            mix: { block: 'decorator', mods: {'indent-r': 'xxs' }},
                                                                            content: '40'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            content: 'порций'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: '14', view: 'secondary', weight: 'regular' },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            mods: { weight: 'bold' },
                                                                            mix: { block: 'decorator', mods: {'indent-r': 'xxs' }},
                                                                            content: '2'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            content: 'мыши в подарок'
                                                                        }
                                                                    ]
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right' },
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-informer',
                                                            mods: { view: '' },
                                                            mix: [
                                                                { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                                { block: 'brand-logo', mods: { form: 'round', size: 'l' } },
                                                            ],
                                                            content: {
                                                                elem: 'action',
                                                                elemMods: { distribute: 'center', 'space-a': 's' },
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        mods: { size: '42', view: 'primary', weight: 'regular', align: 'center' },
                                                                        content: '2'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        mods: { size: 'xl', view: 'primary', weight: 'regular', align: 'center' },
                                                                        content: 'кг'
                                                                    },
                                                                ]
                                                            }
                                                        }
                                                    }]
                                                },
                                                // подпись под картой default
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'default' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                        { block: 'product', elem: 'buy', js: true },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Чего сидишь? Порадуй котэ,'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: { view: 'blue' },
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'checkbox',
                                                                    mods: {
                                                                        theme: 'hidden',
                                                                        size: 'm',
                                                                    },
                                                                    name: 'fish',
                                                                    val: 'fish',
                                                                    text: 'купи'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    tag: 'span',
                                                                    content: '.'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                // подпись под картой selected
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'selected' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
                                                        },
                                                    ]
                                                },
                                                // подпись под картой disabled
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'disabled' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: { view: 'yellow' },
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Печалька, с рыбой закончился.'
                                                        },
                                                    ]
                                                },
                                            ]
                                        }
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 's-col':'6', 'm-col':'2' },
                                        mix: { block: 'decorator', mods: {'indent-h': 'auto' }},
                                        content: {
                                            block: 'pt-form', elem: 'item',
                                            content: [
                                                // pt-card
                                                {
                                                    block: 'pt-card',
                                                    mix: [
                                                        { block: 'product',  mods: { view: 'disabled' } },
                                                    ],
                                                    content: [
                                                    {
                                                        elem: 'image', elemMods: { size: 'cover' },
                                                        mix: { block: 'product', elem: 'image' },
                                                    },
                                                    {
                                                        elem: 'content',
                                                        mix: { block: 'decorator', mods: { 'space-h': 'xxxxl', 'space-v': 'l' }},
                                                        content: {
                                                            elem: 'info',
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'm', view: 'secondary', },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            mods: { for: 'default' },
                                                                            tag: 'span',
                                                                            content: 'Сказочное заморское яство'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: { for: 'select' },
                                                                            tag: 'span',
                                                                            content: 'Котэ не одобряет?'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'xxxxl', view: 'primary', weight: 'bold' },
                                                                    mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                    content: 'Нямушки'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'xxl', view: 'primary', weight: 'bold' },
                                                                    mix: { block: 'decorator', mods: {'indent-b': 'm' }},
                                                                    content: 'с курой'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: '14', view: 'secondary', weight: 'regular' },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            mods: { weight: 'bold' },
                                                                            mix: { block: 'decorator', mods: {'indent-r': 'xxs' }},
                                                                            content: '100'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            content: 'порций'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: '14', view: 'secondary', weight: 'regular' },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            mods: { weight: 'bold' },
                                                                            mix: { block: 'decorator', mods: {'indent-r': 'xxs' }},
                                                                            content: '5'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            content: 'мышей в подарок'
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: '14', view: 'secondary', weight: 'regular' },
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        content: 'заказчик доволен'
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        elem: 'footer',
                                                        elemMods: { distribute: 'right' },
                                                        mix: { block: 'product', elem: 'footer' },
                                                        content: {
                                                            block: 'pt-informer',
                                                            mods: { view: 'default' },
                                                            mix: [
                                                                { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                                { block: 'brand-logo', mods: { form: 'round', size: 'l' } },
                                                            ],
                                                            content: {
                                                                elem: 'action',
                                                                elemMods: { distribute: 'center', 'space-a': 's' },
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        mods: { size: '42', view: 'primary', weight: 'regular', align: 'center' },
                                                                        content: '5'
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        mods: { size: 'xl', view: 'primary', weight: 'regular', align: 'center' },
                                                                        content: 'кг'
                                                                    },
                                                                ]
                                                            }
                                                        }
                                                    }]
                                                },
                                                // подпись под картой default
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'default' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                        { block: 'product', elem: 'buy', js: true },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Чего сидишь? Порадуй котэ,'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: { view: 'blue' },
                                                            tag: 'span',
                                                            content: [
                                                                {
                                                                    block: 'checkbox',
                                                                    mods: {
                                                                        theme: 'hidden',
                                                                        size: 'm',
                                                                    },
                                                                    name: 'chicken',
                                                                    val: 'chicken',
                                                                    text: 'купи'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    tag: 'span',
                                                                    content: '.'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                // подпись под картой selected
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'selected' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Филе из цыплят с трюфелями в бульоне.'
                                                        },
                                                    ]
                                                },
                                                // подпись под картой disabled
                                                {
                                                    block: 'text',
                                                    mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', for: 'disabled' },
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-v': 'm', }},
                                                        { block: 'theme', mods: { color: 'whitepaper-success' } },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: { view: 'yellow' },
                                                            mix: [
                                                                { block: 'decorator', mods: { 'indent-r': 'xxs' }},
                                                            ],
                                                            tag: 'span',
                                                            content: 'Печалька, с курой закончился.'
                                                        },
                                                    ]
                                                },
                                            ]
                                        }
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 's-col':'6', },
                                        mix: { block: 'decorator', mods: {'indent-h': 'auto' }},
                                        content: {
                                            block: 'button',
                                            mods: {
                                                size: 'l',
                                                view: 'primary',
                                                type: 'submit'
                                            },
                                            content: 'оформить заказ'
                                        }
                                    },

                                ]
                            }
                        },

                    }
                }
            ]
        },
    ]
};
