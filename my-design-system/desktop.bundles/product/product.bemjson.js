module.exports = {
    block: 'page',
    title: 'Page product',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'product.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'product.min.js' }],
    mix: {
		block: 'theme',
		mods: {
            space: 'default', // отступы
            size: 'default', // типографика
            color: 'project-default',
            gap: 'small', // отступы в сетках
        }
	},
    content: [
        // header
        {
            block: 'header',
            mix: { block: 'layout' },
            content: {
                elem: 'content',
                content: {
                    elem: 'container',
                    mix: { block: 'layout', elem: 'container', elemMods: { align: 'center', size: 'm' }},
                    content: {
                        elem: 'inner',
                        content: [
                            {
                                block: 'header', elem: 'logo'
                            },
                        ]
                    }
                }
            }
        },
        // cover в product.html
        {
            block: 'layout',
            content: {
                elem: 'content',
                content: [
                    {
                        elem: 'container', elemMods: { align: 'center', size: 'm', 'space-v': 'xxxxl' },
                        content: [
                            {
                                block: 'grid',
                                mods: {
                                    'col-gap': 'half',
                                    'row-gap': 'full',
                                    'm-columns': '12'
                                },
                                content: [
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '5',
                                            'm-col': '8'
                                        },
                                        content: [
                                            {
                                                block: 'text',
                                                tag: 'h1',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'l',
                                                    type: 'h1',
                                                },
                                                content: {
                                                    elem: 'word',
                                                    elemMods: {
                                                        width: 'l'
                                                    }
                                                },
                                            },
                                            {
                                                block: 'text',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'm',
                                                },
                                                content: [
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },

                                                ]
                                            },
                                            {
                                                block: 'text',
                                                tag: 'h2',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'l',
                                                    type: 'h2',
                                                },
                                                content: {
                                                    elem: 'word',
                                                    elemMods: {
                                                        width: 'l'
                                                    },
                                                },
                                            },
                                            {
                                                block: 'text',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'm',
                                                },
                                                content: [
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'l' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 'm' }
                                                    },
                                                    {
                                                        elem: 'word', elemMods: { width: 's' }
                                                    },
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '5',
                                            'm-col': '4'
                                        },
                                        content: {
                                            block: 'cover',
                                            mix: [
                                                {
                                                    block: 'card',
                                                    mods: {
                                                        view: 'default'
                                                    }
                                                },
                                                {
                                                    block: 'theme',
                                                    mods: {
                                                        color: 'project-brand'
                                                    },
                                                },
                                            ],
                                            content: [
                                                {
                                                    elem: 'info',
                                                    mix: [
                                                        {
                                                            block: 'card',
                                                            elem: 'content',
                                                            elemMods: {
                                                                'space-a': 'xxl'
                                                            }
                                                        }
                                                    ],
                                                    content: {
                                                            elem: 'preview',
                                                            mix: [
                                                                { block: 'theme', mods: { color: 'project-brand' },},
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'image', mods: { border: 'all', placeholder: 'default-inverse' },
                                                                    mix: { block: 'cover', elem: 'pic', elemMods: { 'indent-b': 'm' } }
                                                                },
                                                                {
                                                                    block: 'text', mods: { view: 'primary', size: 'xxl' },
                                                                    content: [
                                                                        {
                                                                            elem: 'word', elemMods: { width: 'l' }
                                                                        },
                                                                        {
                                                                            elem: 'word', elemMods: { width: 's' }
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text', mods: { view: 'primary', size: 'xxl' },
                                                                    content: [
                                                                        {
                                                                            elem: 'word', elemMods: { width: 'l' }
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: {
                                                        block: 'card', elem: 'footer', elemMods: { 'space-a': 'xxl' }
                                                    },
                                                    content: {
                                                        block: 'button', mods: { size: 'l', width: 'full' }
                                                    }
                                                }
                                            ]
                                        },
                                    }
                                ]
                            },
                        ]
                    },
                ]
            }
        },
        // product в product.html
        {
            block: 'layout',
            mix: {
                block: 'theme',
                mods: { color: 'project-inverse' }
            },
            attrs: {
                style: 'background: var(--color-bg-default);'
            },
            content: {
                elem: 'content',
                content: [
                    // cover в product.html
                    {
                        elem: 'container', elemMods: { align: 'center', size: 'm', 'space-v': 'xxxxl' },
                        content: [
                            {
                                block: 'text',
                                mods: { view: 'primary', size: 'xl' },
                                mix: { block: 'product', elem: 'title' },
                                content: [{ elem: 'word', elemMods: { width: 'l' }},{ elem: 'word', elemMods: { width: 'l' }}],
                            },
                            {
                                block: 'grid',
                                mods: {
                                    'col-gap': 'full',
                                    'row-gap': 'half',
                                    'm-columns': '12'
                                },
                                content: [
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '2',
                                            'm-col': '3'
                                        },
                                        // product
                                        content: {
                                            block: 'product',
                                            mix: [
                                                {
                                                    block: 'card',
                                                    mods: {
                                                        view: 'default',
                                                        border: 'all'
                                                    }
                                                },
                                            ],
                                            content: [
                                                {
                                                    elem: 'content',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'image',
                                                        content: {
                                                            block: 'image',
                                                            mods: {
                                                                placeholder: 'default'
                                                            },
                                                        }
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'info',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'l',
                                                                },
                                                                content: {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                            },
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'm',
                                                                },
                                                                content: {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '2',
                                            'm-col': '3'
                                        },
                                        // product
                                        content: {
                                            block: 'product',
                                            mix: [
                                                {
                                                    block: 'card',
                                                    mods: {
                                                        view: 'default',
                                                        border: 'all'
                                                    }
                                                },
                                            ],
                                            content: [
                                                {
                                                    elem: 'content',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'image',
                                                        content: {
                                                            block: 'image',
                                                            mods: {
                                                                placeholder: 'default'
                                                            },
                                                        }
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'info',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'l',
                                                                },
                                                                content: {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                            },
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'm',
                                                                },
                                                                content: {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '2',
                                            'm-col': '3'
                                        },
                                        // product
                                        content: {
                                            block: 'product',
                                            mix: [
                                                {
                                                    block: 'card',
                                                    mods: {
                                                        view: 'default',
                                                        border: 'all'
                                                    }
                                                },
                                            ],
                                            content: [
                                                {
                                                    elem: 'content',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'image',
                                                        content: {
                                                            block: 'image',
                                                            mods: {
                                                                placeholder: 'default'
                                                            },
                                                        }
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'info',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'l',
                                                                },
                                                                content: {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                            },
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'm',
                                                                },
                                                                content: {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '2',
                                            'm-col': '3'
                                        },
                                        // product
                                        content: {
                                            block: 'product',
                                            mix: [
                                                {
                                                    block: 'card',
                                                    mods: {
                                                        view: 'default',
                                                        border: 'all'
                                                    }
                                                },
                                            ],
                                            content: [
                                                {
                                                    elem: 'content',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'image',
                                                        content: {
                                                            block: 'image',
                                                            mods: {
                                                                placeholder: 'default'
                                                            },
                                                        }
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'info',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'l',
                                                                },
                                                                content: {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                            },
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'm',
                                                                },
                                                                content: {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    },
                                ]
                            },
                        ]
                    }
                ]
            },
        },
        // footer
        {
            block: 'footer',
            mix: { block: 'layout' },
            content: {
            elem: 'content',
            content: {
                elem: 'container',
                mix: {
                    block: 'layout',
                    elem: 'container', elemMods: { align: 'center', size: 'm' },
                },
                content: {
                    block: 'grid',
                    mods: {
                        'col-gap': 'full',
                        'row-gap': 'full',
                        'm-columns': '10'
                    },
                    content: [
                        {
                            block: 'grid',
                            elem: 'fraction',
                            elemMods: {
                                's-col': '5',
                                'm-col': '5'
                            },
                            content: {
                                block: 'text', mods: { view: 'primary', size: 'xxl' },
                                content: [
                                    {
                                        elem: 'word', elemMods: { width: 'l' }
                                    },
                                    {
                                        elem: 'word', elemMods: { width: 's' }
                                    },
                                ]
                            },
                        },
                        {
                            block: 'grid',
                            elem: 'fraction',
                            elemMods: {
                                's-col': '5',
                                'm-col': '5'
                            },
                            content: {
                                block: 'text', mods: { view: 'primary', size: 'xxl', align: 'right' },
                                content: [
                                    {
                                        elem: 'word', elemMods: { width: 'l' }
                                    },
                                ]
                            },
                        },
                    ]
                }
            }
            },
        }
    ]
};
