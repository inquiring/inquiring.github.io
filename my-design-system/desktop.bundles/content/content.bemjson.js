module.exports = {
    block: 'page',
    title: 'Page content',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'content.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'content.min.js' }],
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
            content: [
                // текст в content.html
                {
                    elem: 'container', elemMods: { align: 'center', size: 's', 'indent-b': '' },
                    content: [
                        {
                            block: 'text', mods: { view: 'primary', size: 'xxl', type: 'h1' },
                            tag: 'h1',
                            content: [
                                {
                                    elem: 'word', elemMods: { width: 'l' }
                                },
                                {
                                    elem: 'word', elemMods: { width: 'l' }
                                },
                            ]
                        },
                        {
                            block: 'text', mods: { view: 'primary', size: 'l', type: 'p' },
                            content: [
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'm' }
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

                            ]
                        },
                        {
                            block: 'text', mods: { view: 'primary', size: 'l', type: 'p' },
                            content: [
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'm' }
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

                            ]
                        },

                    ]
                },
                // event в content.html
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
                                        's-col': '5',
                                        'm-col': '5'
                                    },
                                    content: {
                                        block: 'event',
                                        mix: [
                                            { block: 'card', mods: { view: 'default', }},
                                            { block: 'theme', mods: { color: 'project-inverse' },},
                                        ],
                                        content: [
                                            {
                                                elem: 'content',
                                                mix: [
                                                    {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'vertical-align': 'center',
                                                            distribute: 'center',
                                                            'space-a': 'xxl'
                                                        },
                                                    },
                                                ],
                                                content: [
                                                    {
                                                        elem: 'preview',
                                                        content: [
                                                            {
                                                                elem: 'speaker',
                                                                content: {
                                                                    block: 'avatar', mods: { size: 'm' }
                                                                },
                                                            },
                                                            {
                                                                block: 'brand-logo', mods: { size: 'm', name: 'mts' }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        elem: 'title',
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'xxl',
                                                                align: 'center'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word', elemMods: { width: 'l' }
                                                                },
                                                            ]
                                                        },
                                                    },
                                                    {
                                                        elem: 'description',
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'l',
                                                                align: 'center'
                                                            },
                                                            content: [
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
                                                                    elem: 'word', elemMods: { width: 'l' }
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
                                                                    elem: 'word', elemMods: { width: 'l' }
                                                                },
                                                            ]
                                                        },
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
                                                            'vertical-align': 'center',
                                                            distribute: 'center',
                                                            'space-a': 'xxl'
                                                        },
                                                    },
                                                ],
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: {
                                                            view: 'link',
                                                            size: 'xl',
                                                            align: 'center'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'word', elemMods: { width: 's' }
                                                            },
                                                            {
                                                                elem: 'word', elemMods: { width: 's' }
                                                            },
                                                        ]
                                                    },
                                                ]
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
                                    content: {
                                        block: 'event',
                                        mix: [
                                            { block: 'card', mods: { view: 'default', }},
                                            { block: 'theme', mods: { color: 'project-inverse' },},
                                        ],
                                        content: [
                                            {
                                                elem: 'content',
                                                mix: [
                                                    {
                                                        block: 'card',
                                                        elem: 'content',
                                                        elemMods: {
                                                            'vertical-align': 'center',
                                                            distribute: 'center',
                                                            'space-a': 'xxl'
                                                        },
                                                    },
                                                ],
                                                content: [
                                                    {
                                                        elem: 'preview',
                                                        content: [
                                                            {
                                                                elem: 'speaker',
                                                                content: {
                                                                    block: 'avatar', mods: { size: 'm' }
                                                                },
                                                            },
                                                            {
                                                                block: 'brand-logo', mods: { size: 'm', name: 'yota' }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        elem: 'title',
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'xxl',
                                                                align: 'center'
                                                            },
                                                            content: [
                                                                {
                                                                    elem: 'word', elemMods: { width: 'l' }
                                                                },
                                                            ]
                                                        },
                                                    },
                                                    {
                                                        elem: 'description',
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: 'l',
                                                                align: 'center'
                                                            },
                                                            content: [
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
                                                                    elem: 'word', elemMods: { width: 'l' }
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
                                                                    elem: 'word', elemMods: { width: 'l' }
                                                                },
                                                            ]
                                                        },
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
                                                            'vertical-align': 'center',
                                                            distribute: 'center',
                                                            'space-a': 'xxl'
                                                        },
                                                    },
                                                ],
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: {
                                                            view: 'link',
                                                            size: 'xl',
                                                            align: 'center'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'word', elemMods: { width: 's' }
                                                            },
                                                            {
                                                                elem: 'word', elemMods: { width: 's' }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        ]
                                    },
                                }
                            ]
                        }
                    ]
                },
                // текст в content.html
                {
                    elem: 'container', elemMods: { align: 'center', size: 's', 'indent-b': 'xxl' },
                    content: [
                        {
                            block: 'text', mods: { view: 'primary', size: 'xxl', type: 'h2' },
                            tag: 'h2',
                            content: [
                                {
                                    elem: 'word', elemMods: { width: 'm' }
                                },
                                {
                                    elem: 'word', elemMods: { width: 'm' }
                                },
                            ]
                        },
                        {
                            block: 'text', mods: { view: 'primary', size: 'l', type: 'p' },
                            content: [
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                            ]
                        },
                        {
                            block: 'text', mods: { view: 'primary', size: 'xxl', type: 'h3' },
                            tag: 'h3',
                            content: [
                                {
                                    elem: 'word', elemMods: { width: 'm' }
                                },
                                {
                                    elem: 'word', elemMods: { width: 'l' }
                                },
                            ]
                        },
                        {
                            block: 'text', mods: { view: 'primary', size: 'l', type: 'p' },
                            content: [
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'l' }
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
                                    elem: 'word', elemMods: { width: 'm' }
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
                                    elem: 'word', elemMods: { width: 'l' }
                                },
                                {
                                    elem: 'word', elemMods: { width: 'm' }
                                },
                                {
                                    elem: 'word', elemMods: { width: 'm' }
                                },
                            ]
                        }
                    ]
                },
            ]
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
