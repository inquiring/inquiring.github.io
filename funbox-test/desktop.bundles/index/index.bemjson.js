module.exports = {
    block: 'page',
    title: 'Title of the page',
    lang: 'ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
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
            font: 'circe',
            gap: 'small' }     // отступы в сетках
    },
    content: [
        {
            block: 'tpl-layout',
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
                                        elemMods: { 'xs-col':'1', 'xs-order': '', 's-col':'4', 's-order': '', 'm-col':'4', 'm-row':'' },
                                        content: [
                                            {
                                                block: 'pt-card',
                                                mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                                mix: [
                                                    { block: 'product',  mods: { view: '05' } },
                                                    { block: 'theme', mods: { font: 'ibm' } },
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
                                                        mods: { view: '05' },
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
                                            }
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
                                                    { block: 'product',  mods: { view: '2' } },
                                                    { block: 'theme', mods: { font: 'ibm' } },
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
                                                        mods: { view: '2' },
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
                                            }
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
                                                    { block: 'product',  mods: { view: '5' } },
                                                    { block: 'theme', mods: { font: 'ibm' } },
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
                                                        mods: { view: '5' },
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
                                            }
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
