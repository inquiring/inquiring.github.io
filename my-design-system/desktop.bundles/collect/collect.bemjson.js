module.exports = {
    block: 'page',
    title: 'Page collect',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'collect.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'collect.min.js' }],
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
                    // collect в collect.html
                    {
                        elem: 'container', elemMods: { align: 'center', size: 'm', 'space-v': 'xxxxxl', },
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
                                            'm-col': '3'
                                        },
                                        content: {
                                            block: 'collect', mods: { border: 'all'},
                                            mix: [
                                                { block: 'card', mods: { view: 'default', border: 'all' }},
                                                { block: 'theme', mods: { color: 'project-inverse' },},
                                            ],
                                            content: [
                                                {
                                                    elem: 'image',
                                                    mix: [
                                                        { block: 'card', elem: 'content' }
                                                    ],
                                                    content: {
                                                        block: 'image', mods: { placeholder: 'default' },
                                                    },
                                                },
                                                {
                                                    elem: 'progress',
                                                    content: {
                                                        elem: 'done',
                                                        elemMods: { size: 'two-third' }
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: [
                                                        {
                                                            block: 'card', elem: 'footer', elemMods: { 'space-a': 'l' }
                                                        }
                                                    ],
                                                    content: {
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                mix: {
                                                                    block: 'text', mods: { view: 'primary', size: 'l' },
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'text', elem: 'word', elemMods: { width: 'l' }
                                                                    },
                                                                    {
                                                                        block: 'text', elem: 'word', elemMods: { width: 'm' }
                                                                    },
                                                                ]

                                                            },
                                                            {
                                                                block: 'text', mods: { view: 'secondary', size: 'm' },
                                                                content: [
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
                                                                        elem: 'word', elemMods: { width: 's' }
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
                                                                ]
                                                            },
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
                                            's-col': '5',
                                            'm-col': '3'
                                        },
                                        content: {
                                            block: 'collect', mods: { border: 'all'},
                                            mix: [
                                                { block: 'card', mods: { view: 'default', border: 'all' }},
                                                { block: 'theme', mods: { color: 'project-inverse' },},
                                            ],
                                            content: [
                                                {
                                                    elem: 'image',
                                                    mix: [
                                                        { block: 'card', elem: 'content' }
                                                    ],
                                                    content: {
                                                        block: 'image', mods: { placeholder: 'default' },
                                                    },
                                                },
                                                {
                                                    elem: 'progress',
                                                    content: {
                                                        elem: 'done',
                                                        elemMods: { size: 'one-third' }
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: [
                                                        {
                                                            block: 'card', elem: 'footer', elemMods: { 'space-a': 'l' }
                                                        }
                                                    ],
                                                    content: {
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                mix: {
                                                                    block: 'text', mods: { view: 'primary', size: 'l' },
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'text', elem: 'word', elemMods: { width: 'l' }
                                                                    },
                                                                    {
                                                                        block: 'text', elem: 'word', elemMods: { width: 'm' }
                                                                    },
                                                                ]

                                                            },
                                                            {
                                                                block: 'text', mods: { view: 'secondary', size: 'm' },
                                                                content: [
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
                                                                        elem: 'word', elemMods: { width: 's' }
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
                                                                ]
                                                            },
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
                                            's-col': '5',
                                            'm-col': '3'
                                        },
                                        content: {
                                            block: 'collect', mods: { border: 'all'},
                                            mix: [
                                                { block: 'card', mods: { view: 'default', border: 'all' }},
                                                { block: 'theme', mods: { color: 'project-inverse' },},
                                            ],
                                            content: [
                                                {
                                                    elem: 'image',
                                                    mix: [
                                                        { block: 'card', elem: 'content' }
                                                    ],
                                                    content: {
                                                        block: 'image', mods: { placeholder: 'default' },
                                                    },
                                                },
                                                {
                                                    elem: 'progress',
                                                    content: {
                                                        elem: 'done',
                                                        elemMods: { size: 'half' }
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: [
                                                        {
                                                            block: 'card', elem: 'footer', elemMods: { 'space-a': 'l' }
                                                        }
                                                    ],
                                                    content: {
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                mix: {
                                                                    block: 'text', mods: { view: 'primary', size: 'l' },
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'text', elem: 'word', elemMods: { width: 'l' }
                                                                    },
                                                                    {
                                                                        block: 'text', elem: 'word', elemMods: { width: 'm' }
                                                                    },
                                                                ]

                                                            },
                                                            {
                                                                block: 'text', mods: { view: 'secondary', size: 'm' },
                                                                content: [
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
                                                                        elem: 'word', elemMods: { width: 's' }
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
                                                                ]
                                                            },
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
                                            's-col': '5',
                                            'm-col': '3'
                                        },
                                        content: {
                                            block: 'collect', mods: { border: 'all'},
                                            mix: [
                                                { block: 'card', mods: { view: 'default', border: 'all' }},
                                                { block: 'theme', mods: { color: 'project-inverse' },},
                                            ],
                                            content: [
                                                {
                                                    elem: 'image',
                                                    mix: [
                                                        { block: 'card', elem: 'content' }
                                                    ],
                                                    content: {
                                                        block: 'image', mods: { placeholder: 'default' },
                                                    },
                                                },
                                                {
                                                    elem: 'progress',
                                                    content: {
                                                        elem: 'done',
                                                        elemMods: { size: 'two-third' }
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: [
                                                        {
                                                            block: 'card', elem: 'footer', elemMods: { 'space-a': 'l' }
                                                        }
                                                    ],
                                                    content: {
                                                        content: [
                                                            {
                                                                elem: 'title',
                                                                mix: {
                                                                    block: 'text', mods: { view: 'primary', size: 'l' },
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'text', elem: 'word', elemMods: { width: 'l' }
                                                                    },
                                                                    {
                                                                        block: 'text', elem: 'word', elemMods: { width: 'm' }
                                                                    },
                                                                ]

                                                            },
                                                            {
                                                                block: 'text', mods: { view: 'secondary', size: 'm' },
                                                                content: [
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
                                                                        elem: 'word', elemMods: { width: 's' }
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
                                                                ]
                                                            },
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    },
                                ]
                            },
                        ]
                    },
                ]
            }
        },
        {
            block: 'layout',
            content: {
                elem: 'content',
                content: [
                    // articles, offer, subscription в collect.html
                    {
                        elem: 'container', elemMods: { align: 'center', size: 'm', 'space-v': 'xxxxl' },
                        content: [
                            {
                                block: 'grid',
                                mods: {
                                    'col-gap': 'full',
                                    'row-gap': 'full',
                                    'm-columns': '12'
                                },
                                content: [
                                    // articles
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '5',
                                            'm-col': '5'
                                        },
                                        content:  {
                                            block: 'articles',
                                            mix: [
                                                { block: 'list', mods: { view: 'default', }},
                                            ],
                                            content: [
                                                {
                                                    elem: 'article',
                                                    mix: {
                                                        block: 'list',
                                                        elem: 'item',
                                                        elemMods: {
                                                            'indent-b': 'xl'
                                                        },
                                                    },
                                                    content: {
                                                        elem: 'unit',
                                                        mix: {
                                                            block: 'icon-plus',
                                                            mods: {
                                                                'vertical-align': 'center'
                                                            },
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                mix: [
                                                                {
                                                                    block: 'theme',
                                                                    mods: {
                                                                        color: 'project-inverse'
                                                                    },

                                                                },
                                                                {
                                                                    block: 'icon-plus',
                                                                    elem: 'icon',
                                                                    elemMods: {
                                                                        'indent-r': 'm'
                                                                    },
                                                                }],
                                                                content: {
                                                                    block: 'image', mods: { placeholder: 'default-inverse' },
                                                                }
                                                            },
                                                            {
                                                                elem: 'content',
                                                                mix: {
                                                                    block: 'icon-plus',
                                                                    elem: 'block',
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        mods: {
                                                                            view: 'secondary',
                                                                            size: 'l'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                        ]
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        mods: {
                                                                            view: 'primary',
                                                                            size: 'l'
                                                                        },
                                                                        content: [
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
                                                                        mods: {
                                                                            view: 'link',
                                                                            size: 'm'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'article',
                                                    mix: {
                                                        block: 'list',
                                                        elem: 'item',
                                                        elemMods: {
                                                            'indent-b': 'xl'
                                                        },
                                                    },
                                                    content: {
                                                        elem: 'unit',
                                                        mix: {
                                                            block: 'icon-plus',
                                                            mods: {
                                                                'vertical-align': 'center'
                                                            },
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                mix: [
                                                                {
                                                                    block: 'theme',
                                                                    mods: {
                                                                        color: 'project-inverse'
                                                                    },

                                                                },
                                                                {
                                                                    block: 'icon-plus',
                                                                    elem: 'icon',
                                                                    elemMods: {
                                                                        'indent-r': 'm'
                                                                    },
                                                                }],
                                                                content: {
                                                                    block: 'image', mods: { placeholder: 'default-inverse' },
                                                                }
                                                            },
                                                            {
                                                                elem: 'content',
                                                                mix: {
                                                                    block: 'icon-plus',
                                                                    elem: 'block',
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        mods: {
                                                                            view: 'secondary',
                                                                            size: 'l'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                        ]
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        mods: {
                                                                            view: 'primary',
                                                                            size: 'l'
                                                                        },
                                                                        content: [
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
                                                                        mods: {
                                                                            view: 'link',
                                                                            size: 'm'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'article',
                                                    mix: {
                                                        block: 'list',
                                                        elem: 'item',
                                                        elemMods: {
                                                            'indent-b': 'xl'
                                                        },
                                                    },
                                                    content: {
                                                        elem: 'unit',
                                                        mix: {
                                                            block: 'icon-plus',
                                                            mods: {
                                                                'vertical-align': 'center'
                                                            },
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'pic',
                                                                mix: [
                                                                {
                                                                    block: 'theme',
                                                                    mods: {
                                                                        color: 'project-inverse'
                                                                    },

                                                                },
                                                                {
                                                                    block: 'icon-plus',
                                                                    elem: 'icon',
                                                                    elemMods: {
                                                                        'indent-r': 'm'
                                                                    },
                                                                }],
                                                                content: {
                                                                    block: 'image', mods: { placeholder: 'default-inverse' },
                                                                }
                                                            },
                                                            {
                                                                elem: 'content',
                                                                mix: {
                                                                    block: 'icon-plus',
                                                                    elem: 'block',
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'text',
                                                                        mods: {
                                                                            view: 'secondary',
                                                                            size: 'l'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                        ]
                                                                    },
                                                                    {
                                                                        block: 'text',
                                                                        mods: {
                                                                            view: 'primary',
                                                                            size: 'l'
                                                                        },
                                                                        content: [
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
                                                                        mods: {
                                                                            view: 'link',
                                                                            size: 'm'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'm' }
                                                                            },
                                                                            {
                                                                                elem: 'word', elemMods: { width: 's' }
                                                                            },
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    },
                                    // offer
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '5',
                                            'm-col': '3'
                                        },
                                        content: {
                                            block: 'offer',
                                            mix: [
                                                { block: 'card', mods: { view: 'default' }},
                                                { block: 'theme', mods: { color: 'megafon-brand' },},
                                            ],
                                            content: [
                                                {
                                                    elem: 'partner',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'space-a': 'xl'
                                                        },
                                                    },
                                                    content: {
                                                        block: 'brand-logo',
                                                        mods: {
                                                            name: 'megafon',
                                                            size: 'm'
                                                        },
                                                    }
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': 'xl'
                                                        },
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'ghost',
                                                                size: 's'
                                                            },
                                                            content: {
                                                                elem: 'word', elemMods: { width: 'm' }
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'xxl'
                                                            },
                                                            content: {
                                                                elem: 'word', elemMods: { width: 'm' }
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'secondary',
                                                                size: 'm'
                                                            },
                                                            content: [
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
                                                                    elem: 'word', elemMods: { width: 'l' }
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
                                                                    elem: 'word', elemMods: { width: 'l' }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    },
                                    // subscribtion
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '5',
                                            'm-col': '4'
                                        },
                                        content: {
                                            block: 'subscription',
                                            mix: [
                                                { block: 'card', mods: { view: 'default'}},
                                                { block: 'theme', mods: { color: 'project-brand' },},
                                            ],
                                            content: [
                                                {
                                                    elem: 'info',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'space-a': 'xl'
                                                        },
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'xxl'
                                                            },
                                                            content: {
                                                                elem: 'word', elemMods: { width: 'l' }
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'l'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word', elemMods: { width: 'l' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'l'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word', elemMods: { width: 'l' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'l'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'l'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word', elemMods: { width: 'l' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'l'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                },
                                                                {
                                                                    elem: 'word', elemMods: { width: 's' }
                                                                }
                                                            ]
                                                        },
                                                    ]
                                                },
                                                {

                                                    elem: 'footer',
                                                    mix: [
                                                        {
                                                            block: 'card',
                                                            elem: 'footer',
                                                            elemMods: {
                                                                'space-a': 'xl'
                                                            },
                                                        }
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'subscription', elem: 'control',
                                                            mix: {
                                                                block: 'list',
                                                                elem: 'item',
                                                                elemMods: {
                                                                    'space-b': 's'
                                                                },
                                                            },
                                                            content: [
                                                                {
                                                                    block: 'input', mods: { size: 'l' }
                                                                },
                                                                {
                                                                    block: 'button', mods: { size: 'l', width: 'full' }
                                                                }
                                                            ]
                                                        },
                                                    ]
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
