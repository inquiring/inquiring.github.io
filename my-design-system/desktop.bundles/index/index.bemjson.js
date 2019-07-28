module.exports = {
    block: 'page',
    title: 'Page index',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
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
                            {
                                block: 'onoffswitch',
                                content: {
                                    elem: 'switch'
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            block: 'layout',
            content: {
                elem: 'content',
                content: [
                    // payment, warning в index.html
                    {
                        elem: 'container', elemMods: { align: 'center', size: 'm', 'indent-b': 'xxl' },
                        content: [
                            {
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
                                            's-col': '',
                                            'm-col': '5'
                                        },
                                        //payment
                                        content: {
                                        block: 'payment',
                                        mix: [
                                            {
                                                block: 'form',
                                                mods: {
                                                    border: 'all'
                                                },
                                            },
                                        ],
                                        content: [
                                                {
                                                    elem: 'header',
                                                    mix: [
                                                        {
                                                            block: 'form',
                                                            elem: 'item',
                                                            elemMods: {
                                                                'space-v': 'l',
                                                                'space-h': 'xl',
                                                                border: 'bottom'
                                                            },
                                                        },
                                                    ],
                                                    content: {
                                                        block: 'text',
                                                        mods: {
                                                            size: 'xxl',
                                                            view: 'primary',
                                                        },
                                                        content: { elem: 'word', elemMods: { width: 'l' }}
                                                    }
                                                },
                                                {
                                                    elem: 'content',
                                                    mix: [
                                                        {
                                                            block: 'form',
                                                            elem: 'item',
                                                            elemMods: {
                                                                'space-v': 'xxxl',
                                                                'space-h': 'xl',
                                                                border: 'bottom',
                                                            }
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            block: 'form',
                                                            elem: 'item',
                                                            elemMods: {
                                                                'indent-b': 'xl',
                                                                distribute: 'between',
                                                                'vertical-align': 'center'
                                                            },
                                                            content: [
                                                                {
                                                                    block: 'form',
                                                                    elem: 'label',
                                                                    elemMods: {
                                                                        width: 'default'
                                                                    },
                                                                    content: {
                                                                        block: 'text',
                                                                        mods: {
                                                                            size: 'l',
                                                                            view: 'primary'
                                                                        },
                                                                        content: {
                                                                            elem: 'word',
                                                                            elemMods: {
                                                                                width: 'l'
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    block: 'input',
                                                                    mods: {
                                                                        size: 'l'
                                                                    }
                                                                }
                                                            ],
                                                        },
                                                        {
                                                            block: 'form',
                                                            elem: 'item',
                                                            elemMods: {
                                                                'indent-b': 'xl',
                                                                distribute: 'between',
                                                                'vertical-align': 'center'
                                                            },
                                                            content: [
                                                                {
                                                                    block: 'form',
                                                                    elem: 'label',
                                                                    elemMods: {
                                                                        width: 'default'
                                                                    },
                                                                    content: {
                                                                        block: 'text',
                                                                        mods: {
                                                                            size: 'l',
                                                                            view: 'primary'
                                                                        },
                                                                        content: {
                                                                            elem: 'word',
                                                                            elemMods: {
                                                                                width: 'l'
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    block: 'input',
                                                                    mods: {
                                                                        size: 'l'
                                                                    }
                                                                }
                                                            ],
                                                        },
                                                    ]
                                                },
                                                {
                                                    elem: 'footer',
                                                    mix: [
                                                        {
                                                            block: 'form',
                                                            elem: 'item',
                                                            elemMods: {
                                                                distribute: 'between',
                                                                border: 'bottom',
                                                                'vertical-align': 'center',
                                                                'space-v': 'l',
                                                                'space-h': 'xl',
                                                            },
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            elem:  'label',
                                                            mix: [
                                                                {
                                                                    block: 'form',
                                                                    elem: 'label',
                                                                    elemMods: {
                                                                        width: 'default'
                                                                    }
                                                                }
                                                            ],
                                                            content: {
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
                                                                }
                                                            }
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {
                                                                size: 'l'
                                                            }
                                                        }
                                                    ],
                                                }
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
                                        // warning
                                        content: {
                                            block: 'warning',
                                            mix: [
                                                {
                                                    block: 'informer',
                                                    mods: {
                                                        view: 'default',
                                                        border: 'all'
                                                    },
                                                },
                                                {
                                                    block: 'theme',
                                                    mods: {
                                                        color: 'project-warning'
                                                    }
                                                }
                                            ],
                                            content: [
                                                {
                                                    elem: 'content',
                                                    mix: {
                                                        block: 'informer',
                                                        elem: 'content',
                                                        elemMods: {
                                                            distribute: 'center',
                                                            'space-a': 'xxl'
                                                        }
                                                    },
                                                    content: [
                                                        {
                                                            block: 'placeholder',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'm'
                                                            },
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'xl',
                                                                align: 'center'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 's'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 's'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 's'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                                {
                                                    elem: 'button-wrapper',
                                                    mix: [
                                                        {
                                                            block: 'informer',
                                                            elem: 'action',
                                                            elemMods: {
                                                                distribute: 'center',
                                                                'space-a': 'xl'
                                                            },
                                                        }
                                                    ],
                                                    content: {
                                                        block: 'button',
                                                        mods: {
                                                            size: 'l'
                                                        }
                                                    }
                                                },
                                            ]
                                        },
                                    },
                                ]
                            },
                        ]
                    },
                    // product в index.html
                    {
                        elem: 'container', elemMods: { align: 'center', size: 'm', 'indent-b': 'xxl' },
                        content: [
                            {
                                block: 'grid',
                                mods: {
                                    'col-gap': 'half',
                                    'row-gap': 'full',
                                    'm-columns': '10'
                                },
                                content: [
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '2',
                                            'm-col': '2'
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
                                                                placeholder: 'default-inverse'
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
                                            'm-col': '2'
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
                                                                placeholder: 'default-inverse'
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
                                            'm-col': '2'
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
                                                                placeholder: 'default-inverse'
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
                                            'm-col': '2'
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
                                                                placeholder: 'default-inverse'
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
                                            'm-col': '2'
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
                                                                placeholder: 'default-inverse'
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
                    },
                    // history, commercial в index.html
                    {
                        elem: 'container', elemMods: { align: 'center', size: 'm', 'indent-b': 'xxl' },
                        content: [
                            {
                                block: 'grid',
                                mods: {
                                    'col-gap': 'full',
                                    'row-gap': 'full',
                                    'm-columns': '12'
                                },
                                content: [
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '8',
                                            'm-col': '8'
                                        },
                                        // history
                                        content: {
                                            block: 'history',
                                            mix: [
                                                {
                                                    block: 'list',
                                                    mods: {
                                                        view: 'default',
                                                        border: 'all'
                                                    }
                                                },
                                                {
                                                    block: 'e-accordion',
                                                    js: true
                                                },
                                            ],
                                            content: [
                                                // yota
                                                {
                                                    elem: 'transaction',
                                                    mix: [
                                                        {
                                                            block: 'list',
                                                            elem: 'item',
                                                            elemMods: {
                                                                border: 'bottom',
                                                                'space-a': 'l'
                                                            }
                                                        },
                                                        {
                                                            block: 'e-accordion',
                                                            elem: 'item',
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            elem: 'show',
                                                            mix: [
                                                                { block: 'e-accordion', elem: 'short',  },
                                                                { block: 'list', elem: 'item', elemMods: { 'vertical-align': 'center', 'indent-t': 'm'}},
                                                                { elem: 'details' },
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'time',
                                                                    content: [
                                                                        {
                                                                            block: 'text', mods: { view: 'ghost', size: 's' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text', mods: { view: 'ghost', size: 's' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'destination',
                                                                    mix: { block: 'icon-plus', mods: { 'vertical-align': 'center' } },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            mix: { block: 'icon-plus', elem: 'icon', elemMods: { 'indent-r': 's', 'indent-l': 'l' } },
                                                                            content: {
                                                                                block: 'brand-logo', mods: { name: 'yota', size: 'm' }
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'icon-plus', elem: 'block', },
                                                                            content: [
                                                                                {
                                                                                    block: 'text', mods: { view: 'primary', size: 'l' },
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'word', elemMods: { width: 'l' }
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text', mods: { view: 'primary', size: 'm' },
                                                                    content: [
                                                                        {
                                                                            elem: 'word', elemMods: { width: 'm' }
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            elem: 'hide',
                                                            mix: [
                                                                { block: 'e-accordion', elem: 'more', elemMods: { view: 'default' }},
                                                                { block: 'list', elem: 'item', elemMods: { 'indent-t': 'm' }},
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'description',
                                                                    mix: { block: 'list', elem: 'item', elemMods: { 'indent-b': 'm' }},
                                                                    content: [
                                                                        {
                                                                            block: 'text', mods: { view: 'primary', size: 'l' },
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
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text', mods: { view: 'primary', size: 'l' },
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
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'actions',
                                                                    mix: { block: 'list', elem: 'item', elemMods: { distribute: 'between', 'indent-b': 'l' }},
                                                                    content: {
                                                                        block: 'text', mods: { view: 'primary', size: 'l' },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'l' }
                                                                            },
                                                                        ]
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                // mts
                                                {
                                                    elem: 'transaction',
                                                    mix: [
                                                        {
                                                            block: 'list',
                                                            elem: 'item',
                                                            elemMods: {
                                                                border: 'bottom',
                                                                'space-a': 'l'
                                                            }
                                                        },
                                                        {
                                                            block: 'e-accordion',
                                                            elem: 'item',
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            elem: 'show',
                                                            mix: [
                                                                { block: 'e-accordion', elem: 'short', },
                                                                { block: 'list', elem: 'item', elemMods: { 'vertical-align': 'center', 'indent-t': 'm'}},
                                                                { elem: 'details' },
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'time',
                                                                    content: [
                                                                        {
                                                                            block: 'text', mods: { view: 'ghost', size: 's' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text', mods: { view: 'ghost', size: 's' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'destination',
                                                                    mix: { block: 'icon-plus', mods: { 'vertical-align': 'center' } },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            mix: { block: 'icon-plus', elem: 'icon', elemMods: { 'indent-r': 's', 'indent-l': 'l' } },
                                                                            content: {
                                                                                block: 'brand-logo', mods: { name: 'mts', size: 'm' }
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'icon-plus', elem: 'block', },
                                                                            content: [
                                                                                {
                                                                                    block: 'text', mods: { view: 'primary', size: 'l' },
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'word', elemMods: { width: 'l' }
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text', mods: { view: 'primary', size: 'm' },
                                                                    content: [
                                                                        {
                                                                            elem: 'word', elemMods: { width: 'm' }
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            elem: 'hide',
                                                            mix: [
                                                                { block: 'e-accordion', elem: 'more', elemMods: { view: 'default' }},
                                                                { block: 'list', elem: 'item', elemMods: { 'indent-t': 'm' }},
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'description',
                                                                    mix: { block: 'list', elem: 'item', elemMods: { 'indent-b': 'm' }},
                                                                    content: [
                                                                        {
                                                                            block: 'text', mods: { view: 'primary', size: 'l' },
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
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text', mods: { view: 'primary', size: 'l' },
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
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'actions',
                                                                    mix: { block: 'list', elem: 'item', elemMods: { distribute: 'between', 'indent-b': 'l' }},
                                                                    content: {
                                                                        block: 'text', mods: { view: 'primary', size: 'l' },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'l' }
                                                                            },
                                                                        ]
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                // kcell
                                                {
                                                    elem: 'transaction',
                                                    mix: [
                                                        {
                                                            block: 'list',
                                                            elem: 'item',
                                                            elemMods: {
                                                                border: 'bottom',
                                                                'space-a': 'l'
                                                            }
                                                        },
                                                        {
                                                            block: 'e-accordion',
                                                            elem: 'item',
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            elem: 'show',
                                                            mix: [
                                                                { block: 'e-accordion', elem: 'short' },
                                                                { block: 'list', elem: 'item', elemMods: { 'vertical-align': 'center', 'indent-t': 'm'}},
                                                                { elem: 'details' },
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'time',
                                                                    content: [
                                                                        {
                                                                            block: 'text', mods: { view: 'ghost', size: 's' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text', mods: { view: 'ghost', size: 's' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'destination',
                                                                    mix: { block: 'icon-plus', mods: { 'vertical-align': 'center' } },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            mix: { block: 'icon-plus', elem: 'icon', elemMods: { 'indent-r': 's', 'indent-l': 'l' } },
                                                                            content: {
                                                                                block: 'brand-logo', mods: { name: 'kcell', size: 'm' }
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'icon-plus', elem: 'block', },
                                                                            content: [
                                                                                {
                                                                                    block: 'text', mods: { view: 'primary', size: 'l' },
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'word', elemMods: { width: 'l' }
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text', mods: { view: 'primary', size: 'm' },
                                                                    content: [
                                                                        {
                                                                            elem: 'word', elemMods: { width: 'm' }
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            elem: 'hide',
                                                            mix: [
                                                                { block: 'e-accordion', elem: 'more', elemMods: { view: 'default' }},
                                                                { block: 'list', elem: 'item', elemMods: { 'indent-t': 'm' }},
                                                                { block: 'e-accordion_hide' },
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'description',
                                                                    mix: { block: 'list', elem: 'item', elemMods: { 'indent-b': 'm' }},
                                                                    content: [
                                                                        {
                                                                            block: 'text', mods: { view: 'primary', size: 'l' },
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
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text', mods: { view: 'primary', size: 'l' },
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
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'actions',
                                                                    mix: { block: 'list', elem: 'item', elemMods: { distribute: 'between', 'indent-b': 'l' }},
                                                                    content: {
                                                                        block: 'text', mods: { view: 'primary', size: 'l' },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'l' }
                                                                            },
                                                                        ]
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                // megafon
                                                {
                                                    elem: 'transaction',
                                                    mix: [
                                                        {
                                                            block: 'list',
                                                            elem: 'item',
                                                            elemMods: {
                                                                border: 'bottom',
                                                                'space-a': 'l'
                                                            }
                                                        },
                                                        {
                                                            block: 'e-accordion',
                                                            elem: 'item',
                                                        },
                                                    ],
                                                    content: [
                                                        {
                                                            elem: 'show',
                                                            mix: [
                                                                { block: 'e-accordion', elem: 'short' },
                                                                { block: 'list', elem: 'item', elemMods: { 'vertical-align': 'center', 'indent-t': 'm'}},
                                                                { elem: 'details' },
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'time',
                                                                    content: [
                                                                        {
                                                                            block: 'text', mods: { view: 'ghost', size: 's' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                                },
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text', mods: { view: 'ghost', size: 's' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'word', elemMods: { width: 'm' }
                                                                                },
                                                                            ]
                                                                        }

                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'destination',
                                                                    mix: { block: 'icon-plus', mods: { 'vertical-align': 'center' } },
                                                                    content: [
                                                                        {
                                                                            elem: 'pic',
                                                                            mix: { block: 'icon-plus', elem: 'icon', elemMods: { 'indent-r': 's', 'indent-l': 'l' } },
                                                                            content: {
                                                                                block: 'brand-logo', mods: { name: 'megafon', size: 'm' }
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'label',
                                                                            mix: { block: 'icon-plus', elem: 'block', },
                                                                            content: [
                                                                                {
                                                                                    block: 'text', mods: { view: 'primary', size: 'l' },
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'word', elemMods: { width: 'l' }
                                                                                        },
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'text', mods: { view: 'primary', size: 'm' },
                                                                    content: [
                                                                        {
                                                                            elem: 'word', elemMods: { width: 'm' }
                                                                        },
                                                                    ]
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            elem: 'hide',
                                                            mix: [
                                                                { block: 'e-accordion', elem: 'more', elemMods: { view: 'default' }},
                                                                { block: 'list', elem: 'item', elemMods: { 'indent-t': 'm' }},
                                                                { block: 'e-accordion_hide' },
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'description',
                                                                    mix: { block: 'list', elem: 'item', elemMods: { 'indent-b': 'm' }},
                                                                    content: [
                                                                        {
                                                                            block: 'text', mods: { view: 'primary', size: 'l' },
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
                                                                            ]
                                                                        },
                                                                        {
                                                                            block: 'text', mods: { view: 'primary', size: 'l' },
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
                                                                            ]
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'actions',
                                                                    mix: { block: 'list', elem: 'item', elemMods: { distribute: 'between', 'indent-b': 'l' }},
                                                                    content: {
                                                                        block: 'text', mods: { view: 'primary', size: 'l' },
                                                                        content: [
                                                                            {
                                                                                elem: 'word', elemMods: { width: 'l' }
                                                                            },
                                                                        ]
                                                                    },
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        block: 'grid',
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': '8',
                                            'm-col': '4'
                                        },
                                        // commercial
                                        content: {
                                            block: 'commercial',
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
                                                    elem: 'pic',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'space-a': 'xxl'
                                                        }
                                                    },
                                                    content: {
                                                        elem: 'image',
                                                        content: {
                                                            block: 'image',
                                                            mods: {
                                                                placeholder: 'default-inverse'
                                                            },
                                                        }
                                                    }
                                                },
                                                {
                                                    elem: 'info',
                                                    mix: {
                                                        block: 'card',
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': 'xxl'
                                                        }
                                                    },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 's'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 's'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 's'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'l'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'word',
                                                                    elemMods: {
                                                                        width: 'm'
                                                                    }
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            // контейнер для переключателей между страницами
                                                            elem: 'navigation',
                                                            elemMods: {
                                                                'indent-t': 's'
                                                            },
                                                            content: [
                                                                // квадратная кнопка для переключения на страницу
                                                                {
                                                                    elem: 'page-button',
                                                                    elemMods: {
                                                                        view: 'primary',
                                                                        'size': 's',
                                                                        'indent-h': 'xs'
                                                                    },
                                                                },
                                                                // квадратная кнопка для переключения на страницу
                                                                {
                                                                    elem: 'page-button',
                                                                    elemMods: {
                                                                        view: 'primary',
                                                                        'size': 's',
                                                                        'indent-h': 'xs'
                                                                    },
                                                                },
                                                                // квадратная кнопка для переключения на страницу
                                                                {
                                                                    elem: 'page-button',
                                                                    elemMods: {
                                                                        view: 'primary',
                                                                        'size': 's',
                                                                        'indent-h': 'xs'
                                                                    },
                                                                }
                                                            ]
                                                        }
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
