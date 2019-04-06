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
            gap: 'small' }     // отступы в сетках
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
                                mods: { 'xs-ratio': '1', 's-columns': '8', 'm-columns': '12', 'col-gap': 'full', 'row-gap': 'full'  },
                                content: [
                                    {
                                        elem: 'fraction',
                                        elemMods: { 'xs-col':'1', 'xs-order': '', 's-col':'8', 's-order': '', 'm-col':'12', 'm-row':'' },
                                        content: {
                                            block: 'text',
                                            mods: { size: '36', view: 'primary', weight: 'regular', align: 'center', },
                                            mix: [
                                                { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
                                                { block: 'theme', mods: { color: 'whitepaper-success', font: 'exo2' } },
                                            ],
                                            content: 'Ты сегодня покормил кота?'
                                        }
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 'xs-col':'1', 'xs-order': '', 's-col':'4', 's-order': '', 'm-col':'4', 'm-row':'' },
                                        content: [
                                            {
                                                block: 'pt-card',
                                                mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                                mix: [
                                                    { block: 'product',  mods: { view: 'default' } },
                                                ],
                                                content: [
                                                {
                                                    elem: 'image',
                                                    mix: { block: 'product', elem: 'image' },
                                                },
                                                {
                                                    elem: 'header',
                                                    mix: { block: 'product', elem: 'header' },
                                                    content: {
                                                        elem: 'info',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                tag: 'span',
                                                                mods: { size: 'm', view: 'secondary', weight: 'regular' },
                                                                mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                content: 'Сказочное заморское яство'
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
                                                    { block: 'theme', mods: { color: 'whitepaper-success' } },
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
                                                                block: 'link',
                                                                mods: { theme: 'project' },
                                                                mix: { block: 'text',  mods: { decoration: 'underline-project', display: 'inline' }},
                                                                url: '#' ,
                                                                content: 'купи'
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
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
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 'xs-col':'1', 'xs-order': '', 's-col':'4', 's-order': '', 'm-col':'4', 'm-row':'' },
                                        content: [
                                            {
                                                block: 'pt-card',
                                                mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                                mix: [
                                                    { block: 'product',  mods: { view: 'selected' } },
                                                ],
                                                content: [
                                                {
                                                    elem: 'image',
                                                    mix: { block: 'product', elem: 'image' },
                                                },
                                                {
                                                    elem: 'header',
                                                    mix: { block: 'product', elem: 'header' },
                                                    content: {
                                                        elem: 'info',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                tag: 'span',
                                                                mods: { size: 'm', view: 'secondary', weight: 'regular' },
                                                                mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                content: 'Сказочное заморское яство'
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
                                                    { block: 'theme', mods: { color: 'whitepaper-success' } },
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
                                                                block: 'link',
                                                                mods: { theme: 'project' },
                                                                mix: { block: 'text',  mods: { decoration: 'underline-project', display: 'inline' }},
                                                                url: '#' ,
                                                                content: 'купи'
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
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
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { 'xs-col':'1', 'xs-order': '', 's-col':'4', 's-order': '', 'm-col':'4', 'm-row':'' },
                                        content: [
                                            {
                                                block: 'pt-card',
                                                mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                                mix: [
                                                    { block: 'product',  mods: { view: 'disabled' } },
                                                ],
                                                content: [
                                                {
                                                    elem: 'image',
                                                    mix: { block: 'product', elem: 'image' },
                                                },
                                                {
                                                    elem: 'header',
                                                    mix: { block: 'product', elem: 'header' },
                                                    content: {
                                                        elem: 'info',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                tag: 'span',
                                                                mods: { size: 'm', view: 'secondary', weight: 'regular' },
                                                                mix: { block: 'decorator', mods: {'indent-v': 'xxs' }},
                                                                content: 'Сказочное заморское яство'
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
                                                    { block: 'theme', mods: { color: 'whitepaper-success' } },
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
                                                                block: 'link',
                                                                mods: { theme: 'project' },
                                                                mix: { block: 'text',  mods: { decoration: 'underline-project', display: 'inline' }},
                                                                url: '#' ,
                                                                content: 'купи'
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
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
                                                mods: { size: 's', view: 'primary', weight: 'regular', align: 'center', },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-v': 'm', 'indent-r': 'm' }},
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
