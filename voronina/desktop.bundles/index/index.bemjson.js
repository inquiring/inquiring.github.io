module.exports = {
    block: 'page',
    title: 'Voronina',
    lang: 'ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.4.1.min.js'},
        { elem: 'js', url: 'index.min.js' }
    ],
    mods: { theme: 'islands' },
    mix: {
        block: 'theme',
        mods: {
                breakpoint: 'default',
                color: 'whitepaper-default',    // цвета
                space: 'default',    // отступы
                menu: 'default',    // размер меню
                size: 'default',    // типографика
                font: 'SourceSerifRoman', // шрифт
                gap: 'medium',
                control: 'whitepaper-default'
            },
        },
    content: [
        {
            block: 'tpl-layout', mods: { view: 'line' },
            content: [
                // header
                {
                    block: 'header',
                    mix: { block: 'tpl-layout', elem: 'container', elemMods: { align: 'center', size: 'l' }},
                    content: [
                        {
                            elem: 'top',
                            content: [
                                {
                                    block: 'logo',
                                    mix: { block: 'header', elem: 'logo' },
                                    tag: 'a',
                                    attrs: { href: 'index.html' },
                                },
                                // menu
                                {
                                    block: 'menu',
                                    mix: { block: 'header', elem: 'menu' },
                                    attrs: { style: 'visibility: hidden;' },
                                    content: [
                                        // кнопка закрытия меню
                                        {
                                            block: 'menu-toggle',
                                            tag: 'a',
                                            mix: [
                                                { block: 'menu', elem: 'menu-toggle' },
                                                { block: 'menu-toggle', mods: { type: 'close' }}
                                            ],
                                            attrs: { onclick: "document.querySelector('.header__menu').style.visibility='hidden';" },
                                        },
                                        {
                                            block: 'menu', elem: 'list',
                                            content: [
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'link',
                                                        attrs: { href: '#portfolio' },
                                                        mix: {
                                                            block: 'text',
                                                            mods: {
                                                                align: 'center',
                                                                size: '22-37-18',
                                                                view: 'link',
                                                            },
                                                        },
                                                        content: 'Портфолио'
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'link',
                                                        attrs: { href: '#about' },
                                                        mix: {
                                                            block: 'text',
                                                            mods: {
                                                                align: 'center',
                                                                size: '22-37-18',
                                                                view: 'link',
                                                            },
                                                        },
                                                        content: 'Обо мне'
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'link',
                                                        attrs: { href: '#price' },
                                                        mix: {
                                                            block: 'text',
                                                            mods: {
                                                                align: 'center',
                                                                size: '22-37-18',
                                                                view: 'link',
                                                            },
                                                        },
                                                        content: 'Стоимость'
                                                    }
                                                },
                                                {
                                                    elem: 'item',
                                                    content: {
                                                        block: 'link',
                                                        attrs: { href: '#contacts' },
                                                        mix: {
                                                            block: 'text',
                                                            mods: {
                                                                align: 'center',
                                                                size: '22-37-18',
                                                                view: 'link',
                                                            },
                                                        },
                                                        content: 'Контакты'
                                                    }
                                                },
                                            ]
                                        }
                                    ],
                                },
                                // кнопка открытия меню
                                {
                                    block: 'menu-toggle',
                                    tag: 'a',
                                    mix: [
                                        { block: 'header', elem: 'menu-toggle' },
                                        { block: 'menu-toggle', mods: { type: 'open' }},
                                        { block: 'theme', mods: { color: 'whitepaper-portal-brand'}},
                                    ],
                                    attrs: {onclick: "document.querySelector('.header__menu').style.visibility='visible';" },
                                },
                                // phone
                                {
                                    block: 'header', elem: 'phone',
                                    content: {
                                        block: 'link',
                                        attrs: { href: 'tel:89166677112' },
                                        mix: {
                                            block: 'text',
                                            mods: {
                                                size: 'l',
                                                view: 'link',
                                            },
                                        },
                                        content: '+ 7 916 66 77 112'
                                    }
                                }
                            ]
                        },
                        {
                            elem: 'middle',
                            mix: [
                                { block: 'theme', mods: { control: 'whitepaper-inverse'}},
                                { block: 'theme', mods: { color: 'whitepaper-portal-brand'}},
                            ],
                            content: [
                                {
                                    block: 'paginator', mods: { align: 'right' },
                                    mix: { block: 'header', elem: 'paginator' },
                                    content: [
                                        {
                                            elem: 'item',
                                            elemMods: { type: 'current' },

                                        },
                                        {
                                            elem: 'item',

                                        },
                                        {
                                            elem: 'item',

                                        },
                                        {
                                            elem: 'item',

                                        },
                                        {
                                            elem: 'item',

                                        },
                                        {
                                            elem: 'item',

                                        }
                                    ]
                                },
                                {
                                    elem: 'center',
                                    content: [
                                        {
                                            block: 'text',
                                            tag: 'h1',
                                            mods: {
                                                view: 'primary',
                                                weight: 'regular',
                                                size: '30-36-48'
                                            },
                                            mix: { block: 'header', elem: 'title' },
                                            content: 'Дарья Воронина'
                                        },
                                        {
                                            block: 'header', elem: 'subtitle',
                                            content: {
                                                block: 'text',
                                                tag: 'p',
                                                mods: {
                                                    view: 'primary',
                                                    weight: 'light',
                                                    size: '14-16-18'
                                                },
                                                content: {
                                                    html: 'Food — фотограф и food — стилист <br> в Москве и Московской области'
                                                }
                                            }
                                        },
                                        {
                                            block: 'button',
                                            mix: { block: 'header', elem: 'button' },
                                            mods: {
                                                view: 'voronina',
                                                size: 'm',
                                            },
                                            url: '#',
                                            content: [
                                                {
                                                    elem: 'text',
                                                    content: 'портфолио'
                                                },
                                                {
                                                    block: 'icon', mods: { view: 'primary' },
                                                    mix: { block: 'decorator', mods: { 'indent-l': 's' } },
                                                    content: {
                                                        html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="6px"> <path fill-rule="evenodd"  stroke="var(--color-control-typo-primary)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="" d="M1.084,1.947 L27.103,1.947 "/></svg>'
                                                    }
                                                }
                                            ]
                                        },
                                    ],
                                },
                                {
                                    block: 'image',
                                    url: '../../common.blocks/image/header-photo-desktop.jpg',
                                    alt: 'Дарья Воронина',
                                    mix: {
                                        block: 'header', elem: 'photo',
                                    }
                                },
                            ]
                        },
                        // social-links
                        {
                            block: 'social-links',
                            mix: { block: 'header', elem: 'social-links' },
                            content: [
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        content: 'instagram'
                                    }
                                },
                                {
                                    elem: 'item',
                                    content: {
                                        block: 'link',
                                        content: 'facebook'
                                    }
                                }
                            ],
                        }

                    ]
                },
                {
                    block: 'separator'
                },
                {
                    tag: 'a',
                    attrs: { name:'portfolio' }
                },
                // portfolio
                {
                    block: 'portfolio',
                    content: {
                        block: 'tpl-layout', elem: 'container', elemMods: { align: 'center', size: 'l' },
                        content: [
                            {
                                elem: 'heading',
                                mix: [
                                    { block: 'portfolio',  elem: 'heading' },
                                    {
                                        block: 'text',
                                        mods: {
                                            align: 'center',
                                            size: 'l',
                                            weight: 'regular',
                                            transform: 'uppercase'
                                        },
                                    }
                                ],
                                // tag: 'h2',
                                content: 'портфолио'
                            },
                            {
                                elem: 'section',
                                mix: { block: 'portfolio', elem: 'top' },
                                content: [
                                    {
                                        block: 'paginator', mods: { align: 'right' },
                                        mix: { block: 'portfolio', elem: 'paginator' },
                                        content: [
                                            {
                                                elem: 'item',
                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { type: 'current' },
                                            },
                                            {
                                                elem: 'item',
                                            },
                                            {
                                                elem: 'item',
                                            },
                                            {
                                                elem: 'item',
                                            },
                                            {
                                                elem: 'item',
                                            }
                                        ]
                                    },
                                    //
                                    {
                                        block: 'portfolio', elem: 'column-left',
                                        content: {
                                            block: 'card', mods: { size: 's' },
                                            mix: {
                                                block: 'pt-card', mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                            },
                                            content: [
                                                {
                                                    block: 'pt-card', elem: 'content',
                                                    content: {
                                                        tag: 'picture',
                                                        content: [
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/portfolio-image-1-desktop.jpg' },
                                                            },
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/portfolio-image-1-tablet.jpg' },
                                                            },
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                url: '../../common.blocks/image/portfolio-image-1-mobile.jpg',
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    block: 'pt-card', elem: 'content',
                                                    content: {
                                                        block: 'info',
                                                        content: [
                                                            {
                                                                block: 'link',
                                                                attrs: { href: '#'},
                                                                mix: {
                                                                    block: 'text',
                                                                    mods: {
                                                                        size: 's',
                                                                        view: 'link',
                                                                    },
                                                                },
                                                                content: '#cоцсети'
                                                            },
                                                            {
                                                                block: 'text',
                                                                mix: { block: 'card', elem: 'header'},
                                                                mods: {
                                                                    size: 's',
                                                                    view: 'primary',
                                                                    weight: 'bold',
                                                                },
                                                                content: 'Фото контент для социальных сетей кондитерской «Леди Мармелад»'
                                                            }
                                                        ]
                                                    }

                                                }
                                            ]
                                        },
                                    },
                                    {
                                        block: 'portfolio', elem: 'column-middle',
                                        content: [
                                            {
                                                block: 'card', mods: { size: 'xs' },
                                                mix: {
                                                    block: 'pt-card', mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                                },
                                                content: [
                                                    {
                                                        block: 'pt-card', elem: 'content',
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/portfolio-image-2-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/portfolio-image-2-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'pt-card', elem: 'image' },
                                                                    url: '../../common.blocks/image/portfolio-image-2-mobile.jpg',
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        block: 'pt-card', elem: 'content',
                                                        content: {
                                                            block: 'info',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    attrs: { href: '#'},
                                                                    mix: {
                                                                        block: 'text',
                                                                        mods: {
                                                                            size: 's',
                                                                            view: 'link',
                                                                        },
                                                                    },
                                                                    content: '#cоцсети'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mix: { block: 'card', elem: 'header'},
                                                                    mods: {
                                                                        size: 's',
                                                                        view: 'primary',
                                                                        weight: 'bold'
                                                                    },
                                                                    content: 'Фото контент для инстаграма ресторана «Funky Food»'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'card', mods: { size: 'xs' },
                                                mix: {
                                                    block: 'pt-card', mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                                },
                                                content: [
                                                    {
                                                        block: 'pt-card', elem: 'content',
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/portfolio-image-3-desktop.jpg' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/portfolio-image-3-tablet.jpg' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'pt-card', elem: 'image' },
                                                                    url: '../../common.blocks/image/portfolio-image-3-mobile.jpg',
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        block: 'pt-card', elem: 'content',
                                                        content: {
                                                            block: 'info',
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    attrs: { href: '#'},
                                                                    mix: {
                                                                        block: 'text',
                                                                        mods: {
                                                                            size: 's',
                                                                            view: 'link',
                                                                        },
                                                                    },
                                                                    content: '#менюресторана'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mix: { block: 'card', elem: 'header'},
                                                                    mods: {
                                                                        size: 's',
                                                                        view: 'primary',
                                                                        weight: 'bold'
                                                                    },
                                                                    content: 'Съемка меню ресторана «Хорошая еда»'
                                                                }
                                                            ]
                                                        }

                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        block: 'portfolio', elem: 'column-right',
                                        content: {
                                            block: 'card', mods: { size: 'xs' },
                                            mix: {
                                                block: 'pt-card', mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                            },
                                            content: [
                                                {
                                                    block: 'pt-card', elem: 'content',
                                                    content: {
                                                        tag: 'picture',
                                                        content: [
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/portfolio-image-4-desktop.jpg' },
                                                            },
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/portfolio-image-4-tablet.jpg' },
                                                            },
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                url: '../../common.blocks/image/portfolio-image-4-mobile.jpg',
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    block: 'pt-card', elem: 'content',
                                                    content: {
                                                        block: 'info',
                                                        content: [
                                                            {
                                                                block: 'link',
                                                                attrs: { href: '#'},
                                                                mix: {
                                                                    block: 'text',
                                                                    mods: {
                                                                        size: 's',
                                                                        view: 'link',
                                                                    },
                                                                },
                                                                content: '#рекламнаясъемка'
                                                            },
                                                            {
                                                                block: 'text',
                                                                mix: { block: 'card', elem: 'header'},
                                                                mods: {
                                                                    size: 's',
                                                                    view: 'primary',
                                                                    weight: 'bold'
                                                                },
                                                                content: 'Съемка для баннерной рекламной печати ресторана «Бранч»'
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                    },
                                    //
                                    {
                                        block: 'social-links', mods: { orientation: 'vertical' },
                                        mix: { block: 'portfolio', elem: 'social-links' },
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    content: 'instagram'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    content: 'facebook'
                                                }
                                            }
                                        ]
                                    }

                                ]
                            },
                            {
                                elem: 'section',
                                mix: [
                                    { block: 'portfolio', elem: 'bottom' },
                                    { block: 'theme', mods: { control: 'whitepaper-inverse'}},
                                    { block: 'theme', mods: { color: 'whitepaper-portal-brand'}},
                                ],
                                content: [
                                    {
                                        block: 'portfolio', elem: 'bottom-image'
                                    },
                                    {
                                        block: 'portfolio', elem: 'details',
                                        content: [
                                            {
                                                block: 'text',
                                                tag: 'h3',
                                                mix: [
                                                    { block: 'portfolio', elem: 'details-header' },
                                                    { block: 'decorator', mods: { 'indent-b': 'l' } },
                                                ],
                                                mods: {
                                                    size: 'l',
                                                    view: 'primary',
                                                    weight: 'regular'
                                                },
                                                content: 'Подробное портфолио'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                mix: [
                                                    { block: 'portfolio', elem: 'details-desc' },
                                                    { block: 'decorator', mods: { 'indent-b': 's' } },
                                                ],
                                                mods: {
                                                    size: '14-16-18',
                                                    view: 'primary'
                                                },
                                                content: {
                                                    html: 'С описанием задач заказчика,<br> полного процесса работы и финальным результатом'
                                                }
                                            },
                                            {
                                                block: 'pt-icon-plus', mods: { 'vertical-align': 'center' },
                                                content: [
                                                    {
                                                        block: 'button',
                                                        mix: [
                                                            { block: 'pt-icon-plus', elem: 'block' },
                                                            { block: 'portfolio', elem: 'button' }
                                                        ],
                                                        mods: {
                                                            view: 'voronina',
                                                            size: 'm'
                                                        },
                                                        content: [
                                                            {
                                                                elem: 'text',
                                                                content: 'скачать в pdf'
                                                            },
                                                            {
                                                                block: 'icon', mods: { view: 'primary' },
                                                                mix: { block: 'decorator', mods: { 'indent-l': 's' } },
                                                                content: {
                                                                    html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="6px"> <path fill-rule="evenodd"  stroke="var(--color-typo-primary)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="" d="M1.084,1.947 L27.103,1.947 "/></svg>'
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-l': 's' },
                                                        content: {
                                                            tag: 'picture',
                                                            content: [
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/pdf-desktop.png' },
                                                                },
                                                                {
                                                                    tag: 'source',
                                                                    attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/pdf-tablet.png' },
                                                                },
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'pt-card', elem: 'image' },
                                                                    url: '../../common.blocks/image/pdf-mobile.png',
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    // social-links
                                    {
                                        block: 'social-links', mods: { orientation: 'vertical' },
                                        mix: { block: 'portfolio', elem: 'social-links' },
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    content: 'instagram'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    content: 'facebook'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                },
                {
                    block: 'separator'
                },
                {
                    tag: 'a',
                    attrs: { name:'about' }
                },
                // about
                {
                    block: 'about',
                    mix: { block: 'tpl-layout', elem: 'container', elemMods: { align: 'center', size: 'l' },},
                    content: [
                            {
                                block: 'tpl-layout', elem: 'heading',
                                tag: 'h2',
                                mix: [
                                    { block: 'about', elem: 'heading' },
                                    {
                                        block: 'text',
                                        mods: {
                                            align: 'center',
                                            size: 'l',
                                            weight: 'regular',
                                            view: 'primary'
                                        },
                                    },
                                ],
                                content: 'Обо мне'
                            },
                            {
                                block: 'about', elem: 'top',
                                mix: { block: 'tpl-layout', elem: 'section' },
                                content: [
                                    {
                                        block: 'paginator', mods: { align: 'right' },
                                        mix: { block: 'about', elem: 'paginator' },
                                        content: [
                                            {
                                                elem: 'item',

                                            },
                                            {
                                                elem: 'item',

                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { type: 'current' },

                                            },
                                            {
                                                elem: 'item',

                                            },
                                            {
                                                elem: 'item',

                                            },
                                            {
                                                elem: 'item',

                                            }
                                        ]
                                    },
                                    {
                                        block: 'about', elem: 'left',
                                        content: [
                                            {
                                                block: 'about', elem: 'image', elemMods: { type: 'left' },
                                                content: {
                                                    tag: 'picture',
                                                    content: [
                                                        {
                                                            tag: 'source',
                                                            attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/aboutMe-image-1-desktop.jpg' },
                                                        },
                                                        {
                                                            tag: 'source',
                                                            attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/aboutMe-image-1-tablet.jpg' },
                                                        },
                                                        {
                                                            block: 'image',
                                                            attrs: { style: 'width: 100%;' },
                                                            url: '../../common.blocks/image/aboutMe-image-1-mobile.jpg',
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                block: 'about', elem: 'image', elemMods: { type: 'right' },
                                                content: {
                                                    tag: 'picture',
                                                    content: [
                                                        {
                                                            tag: 'source',
                                                            attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/aboutMe-image-2-desktop.jpg' },
                                                        },
                                                        {
                                                            tag: 'source',
                                                            attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/aboutMe-image-2-tablet.jpg' },
                                                        },
                                                        {
                                                            block: 'image',
                                                            attrs: { style: 'width: 100%;' },
                                                            url: '../../common.blocks/image/aboutMe-image-2-mobile.jpg',
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        block: 'about', elem: 'right',
                                        content: [
                                            {
                                                block: 'about', elem: 'desc',
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: '14-16-18', view: 'primary' },
                                                        tag: 'p',
                                                        content: 'Во всех фотосъемках еды, я работаю как фуд-фотограф и фуд-стилист. Создаю креативные концепции, реализую ваши идеи. Разрабатываю рецепты, вкусно снимаю. Провожу обучение'
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: {
                                                            size: '14-16-18', 'l-max': 'hidden'
                                                        },
                                                        tag: 'p',
                                                        content: 'Всегда открыта к сотрудничеству и рада новым предложениям'
                                                    },
                                                ]
                                            },
                                            {
                                                block: 'contact-links',
                                                mix: { block: 'about', elem: 'contact-links' },
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: '14-16-18', view: 'primary' },
                                                                mix: { block: 'decorator', mods: { 'indent-r': 's' }},
                                                                content: 'Mail:'
                                                            },
                                                            {
                                                                block: 'link',
                                                                attrs: { href: 'mailto:daria.voronina@gmail.com' },
                                                                mix: { block: 'text', mods: { size: '14-16-18', view: 'link' }},
                                                                content: 'daria.voronina@gmail.com'
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        elem: 'item',
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: '14-16-18', view: 'primary' },
                                                                mix: { block: 'decorator', mods: { 'indent-r': 's' }},
                                                                content: 'Tel.:'
                                                            },
                                                            {
                                                                block: 'link',
                                                                attrs: { href: 'tel:89166677112' },
                                                                mix: { block: 'text', mods: { size: '14-16-18', view: 'link' }},
                                                                content: '+ 7 916 66 77 112'
                                                            }
                                                        ]
                                                    },
                                                ]
                                            },
                                            {
                                                block: 'button',
                                                mix: { block: 'about', elem: 'button' },
                                                mods: {
                                                    view: 'voronina',
                                                    size: 'm'
                                                },
                                                content: [
                                                    {
                                                        elem: 'text',
                                                        content: 'работать со мной'
                                                    },
                                                    {
                                                        block: 'icon', mods: { view: 'primary' },
                                                        mix: { block: 'decorator', mods: { 'indent-l': 's' } },
                                                        content: {
                                                            html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="6px"> <path fill-rule="evenodd"  stroke="var(--color-typo-primary)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="" d="M1.084,1.947 L27.103,1.947 "/></svg>'
                                                        }
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                    // social-links
                                    {
                                        block: 'social-links', mods: { orientation: 'vertical' },
                                        mix: { block: 'about', elem: 'social-links' },
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    content: 'instagram'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    content: 'facebook'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                },
                {
                    block: 'separator'
                },
                {
                    tag: 'a',
                    attrs: { name:'price' }
                },
                // price
                {
                    block: 'price',
                    // mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl', 'space-t': 'xxxxxxl' } },
                    content: {
                        block: 'tpl-layout', elem: 'container', elemMods: { align: 'center', size: 'l' },
                        content: [
                            {
                                block: 'price', elem: 'heading',
                                mix: [
                                    {
                                        block: 'text',
                                        mods: {
                                            align: 'center',
                                            size: '18-24-36',
                                            weight: 'regular',
                                            view: 'primary'
                                        },
                                    },
                                    { block: 'tpl-layout', elem: 'heading' }
                                ],
                                tag: 'h2',
                                content: 'Cтоимость'
                            },
                            {
                                block: 'price', elem: 'top',
                                mix: { block: 'tpl-layout', elem: 'section' },
                                content: [
                                    {
                                        block: 'paginator', mods: { align: 'right' },
                                        mix: { block: 'price', elem: 'paginator' },
                                        content: [
                                            {
                                                elem: 'item',
                                            },
                                            {
                                                elem: 'item',
                                                elemMods: { type: 'current' },
                                            },
                                            {
                                                elem: 'item',
                                            },
                                            {
                                                elem: 'item',
                                            },
                                            {
                                                elem: 'item',
                                            },
                                            {
                                                elem: 'item',
                                            }
                                        ]
                                    },
                                    {
                                        block: 'price', elem: 'column', elemMods: { type: 'left' },
                                        content:{
                                            block: 'price-card',
                                            mix: {
                                                block: 'pt-card', mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                            },
                                            content: [
                                                {
                                                    block: 'pt-card', elem: 'image',
                                                    content: {
                                                        tag: 'picture',
                                                        content: [
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/price-image-1-desktop.jpg' },
                                                            },
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/price-image-1-tablet.jpg' },
                                                            },
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                url: '../../common.blocks/image/price-image-1-mobile.jpg',
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    block: 'pt-card', elem: 'content',
                                                    content: [
                                                        {
                                                            block: 'pt-table',
                                                            mix: { block: 'decorator', mods: { 'indent-h': 'xxs', 'space-a': 's' } },
                                                            content: [
                                                                {
                                                                    elem: 'row', elemMods: { view: 'head' },
                                                                    content: [
                                                                        {
                                                                            elem: 'col',
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', weight: 'bold' },
                                                                                mix: { block: 'price-card', elem: 'title' },
                                                                                content: '12 часов  съемки'
                                                                            },
                                                                        },
                                                                        {
                                                                            elem: 'col', elemMods: { grow: 'evenly', align: 'right' },
                                                                            content: ''
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            elem: 'col',
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', weight: 'bold' },
                                                                                mix: { block: 'price-card', elem: 'title' },
                                                                                content: ''
                                                                            },
                                                                        },
                                                                        {
                                                                            elem: 'col', elemMods: { grow: 'evenly', align: 'right' },
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', align: 'right', display: 'inline-block' },
                                                                                content: {
                                                                                    block: 'pt-icon-plus', mods: { 'vertical-align': 'center' },
                                                                                    content: [
                                                                                    {
                                                                                        elem: 'icon',
                                                                                        content: [
                                                                                        {
                                                                                            elem: 'icon', elemMods: { 'indent-r': 'xs' },
                                                                                            content: {
                                                                                                html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="6px"> <path fill-rule="evenodd"  stroke="var(--color-typo-brand)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M1.876,1.828 L13.833,1.828 "/></svg>'
                                                                                            }
                                                                                        }]
                                                                                    },
                                                                                    {
                                                                                        elem: 'block',
                                                                                        content: [
                                                                                        {
                                                                                            content: '30 000 рублей'
                                                                                        }]
                                                                                    }]
                                                                                },
                                                                            },
                                                                        }
                                                                    ]
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            block: 'pt-list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center', view: 'primary' }},
                                                                    content: 'Подготовка к съемке от 1 недели'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center', view: 'primary' }},
                                                                    content: 'Предварительный дизайн — проект'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center', view: 'primary' }},
                                                                    content: 'Food - стилизация'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center', view: 'primary' }},
                                                                    content: 'Расширенный реквизит'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center', view: 'primary' }},
                                                                    content: 'Цветокоррекция и пост-обработка'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center', view: 'primary' }},
                                                                    content: 'Результаты в течение 3-х дней'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        block: 'price', elem: 'column', elemMods: { type: 'middle' },
                                        content: {
                                            block: 'price-card',
                                            mix: {
                                                block: 'pt-card', mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                            },
                                            content: [
                                                {
                                                    block: 'pt-card', elem: 'image',
                                                    content: {
                                                        tag: 'picture',
                                                        content: [
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/price-image-2-desktop.jpg' },
                                                            },
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/price-image-2-tablet.jpg' },
                                                            },
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                url: '../../common.blocks/image/price-image-2-mobile.jpg',
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    block: 'pt-card', elem: 'content',
                                                    content: [
                                                        {
                                                            block: 'pt-table',
                                                            mix: { block: 'decorator', mods: { 'indent-h': 'xxs', 'space-a': 's' } },
                                                            content: [
                                                                {
                                                                    elem: 'row', elemMods: { view: 'head' },
                                                                    content: [
                                                                        {
                                                                            elem: 'col',
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', weight: 'bold' },
                                                                                mix: { block: 'price-card', elem: 'title' },
                                                                                content: '4 часа  съемки'
                                                                            },
                                                                        },
                                                                        {
                                                                            elem: 'col', elemMods: { grow: 'evenly', align: 'right' },
                                                                            content: ''
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            elem: 'col',
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', weight: 'bold' },
                                                                                mix: { block: 'price-card', elem: 'title' },
                                                                                content: ''
                                                                            },
                                                                        },
                                                                        {
                                                                            elem: 'col', elemMods: { grow: 'evenly', align: 'right' },
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', align: 'right', display: 'inline-block' },
                                                                                content: {
                                                                                    block: 'pt-icon-plus', mods: { 'vertical-align': 'center' },
                                                                                    content: [
                                                                                    {
                                                                                        elem: 'icon',
                                                                                        content: [
                                                                                        {
                                                                                            elem: 'icon', elemMods: { 'indent-r': 'xs' },
                                                                                            content: {
                                                                                                html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="6px"> <path fill-rule="evenodd"  stroke="var(--color-typo-brand)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M1.876,1.828 L13.833,1.828 "/></svg>'
                                                                                            }
                                                                                        }]
                                                                                    },
                                                                                    {
                                                                                        elem: 'block',
                                                                                        content: [
                                                                                        {
                                                                                            content: '15 000 рублей'
                                                                                        }]
                                                                                    }]
                                                                                },
                                                                            },
                                                                        }
                                                                    ]
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            block: 'pt-list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: 'Подготовка к съемке — 1 день'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: 'Food - стилизация'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: 'Использование реквизита'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: 'Цветокоррекция и постобработка '
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: 'Результаты в течение 3-х дней'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    },
                                    {
                                        block: 'price', elem: 'column', elemMods: { type: 'right' },
                                        content: {
                                            block: 'price-card',
                                            mix: {
                                                block: 'pt-card', mods: { border: 'all', shadow: 'cloud', view: 'default' },
                                            },
                                            content: [
                                                {
                                                    block: 'pt-card', elem: 'image',
                                                    content: {
                                                        tag: 'picture',
                                                        content: [
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  1440px)', srcset: '../../common.blocks/image/price-image-3-desktop.jpg' },
                                                            },
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  720px)', srcset: '../../common.blocks/image/price-image-3-tablet.jpg' },
                                                            },
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                url: '../../common.blocks/image/price-image-3-mobile.jpg',
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    block: 'pt-card', elem: 'content',
                                                    content: [
                                                        {
                                                            block: 'pt-table',
                                                            mix: { block: 'decorator', mods: { 'indent-h': 'xxs', 'space-a': 's' } },
                                                            content: [
                                                                {
                                                                    elem: 'row', elemMods: { view: 'head' },
                                                                    content: [
                                                                        {
                                                                            elem: 'col',
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', weight: 'bold' },
                                                                                mix: { block: 'price-card', elem: 'title' },
                                                                                content: '1 час  съемки'
                                                                            },
                                                                        },
                                                                        {
                                                                            elem: 'col', elemMods: { grow: 'evenly', align: 'right' },
                                                                            content: ''
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'row',
                                                                    content: [
                                                                        {
                                                                            elem: 'col',
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', weight: 'bold' },
                                                                                mix: { block: 'price-card', elem: 'title' },
                                                                                content: ''
                                                                            },
                                                                        },
                                                                        {
                                                                            elem: 'col', elemMods: { grow: 'evenly', align: 'right' },
                                                                            content: {
                                                                                block: 'text', mods: { size: 'l', view: 'brand', align: 'right', display: 'inline-block' },
                                                                                content: {
                                                                                    block: 'pt-icon-plus', mods: { 'vertical-align': 'center' },
                                                                                    content: [
                                                                                    {
                                                                                        elem: 'icon',
                                                                                        content: [
                                                                                        {
                                                                                            elem: 'icon', elemMods: { 'indent-r': 'xs' },
                                                                                            content: {
                                                                                                html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="6px"> <path fill-rule="evenodd"  stroke="var(--color-typo-brand)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M1.876,1.828 L13.833,1.828 "/></svg>'
                                                                                            }
                                                                                        }]
                                                                                    },
                                                                                    {
                                                                                        elem: 'block',
                                                                                        content: [
                                                                                        {
                                                                                            content: '4 000 рублей'
                                                                                        }]
                                                                                    }]
                                                                                },
                                                                            },
                                                                        }
                                                                    ]
                                                                }

                                                            ]
                                                        },
                                                        {
                                                            block: 'pt-list',
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: 'Food - стилизация'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: 'Использование реквизита'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: 'Цветокоррекция'
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    mix: { block: 'text', mods: { size: 's', align: 'center' }},
                                                                    content: {
                                                                        html: 'Результаты в течение <br> 5-и дней'
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    },
                                    // social-links
                                    {
                                        block: 'social-links', mods: { orientation: 'vertical' },
                                        mix: { block: 'price', elem: 'social-links' },
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    content: 'instagram'
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    content: 'facebook'
                                                }
                                            }
                                        ]
                                    }

                                ]
                            },
                        ]
                    }
                },
                {
                    block: 'separator'
                },
                {
                    tag: 'a',
                    attrs: { name:'contacts' }
                },
                // page-footer
                {
                    block: 'page-footer',
                    content: {
                        block: 'tpl-layout', elem: 'container', elemMods: { align: 'center', size: 'l' },
                        content: [
                            {
                                block: 'page-footer', elem: 'heading',
                                mix: [
                                    {
                                        block: 'text',
                                        mods: {
                                            align: 'center',
                                            size: '18-24-36',
                                            weight: 'regular',
                                            view: 'primary'
                                        },
                                    },
                                    {
                                        block: 'tpl-layout', elem: 'heading'
                                    }
                                ],
                                tag: 'h2',
                                content: 'Свяжитесь со мной'
                            },
                            {
                                elem: 'section', elemMods: { 'border-h': 'ghost'},
                                content: [
                                    {
                                        block: 'pt-list',
                                        mix: [
                                            { block: 'contact-links' },
                                            { block: 'page-footer', elem: 'contact-links' }
                                        ],
                                        content: [
                                            {
                                                elem: 'item',
                                                mix: { block: 'contact-links', elem: 'item' },
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 's', view: 'primary' },
                                                        content: 'Skype'
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'l', view: 'brand' },
                                                        mix: { block: 'decorator', mods: { 'indent-h': 'xs' }},
                                                        content: '///'
                                                    },
                                                    {
                                                        block: 'link',
                                                        attrs: { href: 'skype:daria.voronina' },
                                                        mix: { block: 'text', mods: { size: 's', view: 'link' }},
                                                        content: 'daria.voronina'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                mix: { block: 'contact-links', elem: 'item' },
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 's', view: 'primary' },
                                                        content: 'E-mail'
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'l', view: 'brand' },
                                                        mix: { block: 'decorator', mods: { 'indent-h': 'xs' }},
                                                        content: '///'
                                                    },
                                                    {
                                                        block: 'link',
                                                        attrs: { href: 'mailto:daria.voronina@gmail.com' },
                                                        mix: { block: 'text', mods: { size: 's', view: 'link' }},
                                                        content: 'daria.voronina@gmail.com'
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'item',
                                                mix: { block: 'contact-links', elem: 'item' },
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: { size: 's', view: 'primary' },
                                                        content: 'Phone'
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'l', view: 'brand' },
                                                        mix: { block: 'decorator', mods: { 'indent-h': 'xs' }},
                                                        content: '///'
                                                    },
                                                    {
                                                        block: 'link',
                                                        attrs: { href: 'tel:89166677112' },
                                                        mix: { block: 'text', mods: { size: 's', view: 'link' }},
                                                        content: '+ 7 916 66 77 112'
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                elem: 'section',
                                content: [
                                    {
                                        block: 'pt-list',
                                        mix: [
                                            { block: 'social-links' },
                                            { block: 'page-footer', elem: 'social-links' }
                                        ],
                                        content: [
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    mix: { block: 'social-links', elem: 'link' },
                                                    content: {
                                                        block: 'social-icon',
                                                        mods: {
                                                            size: 'm',
                                                            view: 'primary',
                                                            name: ''
                                                        },
                                                        content: {
                                                            html: '<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"> <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M301.004,125.217H265.44 c-7.044,0-14.153,7.28-14.153,12.696v36.264h49.647c-1.999,27.807-6.103,53.235-6.103,53.235h-43.798V385h-65.266V227.395h-31.771 v-53.029h31.771v-43.356c0-7.928-1.606-61.009,66.872-61.009h48.366V125.217z"/> </svg>'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    mix: { block: 'social-links', elem: 'link' },
                                                    content: {
                                                        block: 'social-icon',
                                                        mods: {
                                                            size: 'm',
                                                            view: 'primary',
                                                            name: ''
                                                        },
                                                        content: {
                                                            html: '<svg width="32" height="32" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 364 364" style="enable-background:new 0 0 364 364;" xml:space="preserve"> <g> <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M244.424,83.438H119.577c-19.925,0-36.139,16.213-36.139,36.139v124.846 c0,19.929,16.214,36.143,36.139,36.143h124.847c19.928,0,36.142-16.214,36.142-36.143V119.577 C280.566,99.652,264.352,83.438,244.424,83.438z M181.998,246.894c-35.779,0-64.892-29.113-64.892-64.896 c0-35.779,29.113-64.892,64.892-64.892c35.783,0,64.896,29.113,64.896,64.892C246.894,217.781,217.781,246.894,181.998,246.894z M248.982,130.525c-8.471,0-15.359-6.888-15.359-15.354c0-8.467,6.888-15.355,15.359-15.355c8.466,0,15.354,6.888,15.354,15.355 C264.336,123.638,257.448,130.525,248.982,130.525z"/><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M181.998,144.531c-20.655,0-37.475,16.812-37.475,37.467 c0,20.663,16.82,37.479,37.475,37.479c20.663,0,37.471-16.816,37.471-37.479C219.469,161.343,202.661,144.531,181.998,144.531z"/><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v364h364V0H0z M307.984,244.423c0,35.053-28.508,63.561-63.56,63.561 H119.577c-35.049,0-63.561-28.508-63.561-63.561V119.577c0-35.049,28.512-63.561,63.561-63.561h124.847 c35.052,0,63.56,28.512,63.56,63.561V244.423z"/></g></svg>'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    mix: { block: 'social-links', elem: 'link' },
                                                    content: {
                                                        block: 'social-icon',
                                                        mods: {
                                                            size: 'm',
                                                            view: 'primary',
                                                            name: ''
                                                        },
                                                        content: {
                                                            html: '<svg width="32" height="32" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M341.098,251.727c10.445,10.19,21.49,19.784,30.865,31.049 c4.142,4.978,8.06,10.113,11.046,15.881c4.239,8.264,0.397,17.318-6.985,17.817l-45.875-0.02c-11.841,0.973-21.277-3.801-29.235-11.902c-6.328-6.45-12.243-13.354-18.352-20.023c-2.486-2.746-5.115-5.314-8.239-7.362 c-6.267-4.061-11.703-2.828-15.285,3.699c-3.643,6.649-4.499,14.031-4.835,21.435c-0.499,10.807-3.76,13.634-14.607,14.154 c-23.208,1.075-45.218-2.451-65.659-14.134c-18.052-10.307-32.022-24.879-44.184-41.356 c-23.702-32.124-41.855-67.391-58.154-103.673c-3.684-8.177-0.993-12.559,7.999-12.717c14.99-0.296,29.974-0.26,44.943-0.02 c6.089,0.102,10.129,3.582,12.458,9.334c8.101,19.906,18.01,38.85,30.448,56.427c3.327,4.677,6.71,9.334,11.504,12.636 c5.314,3.663,9.375,2.466,11.881-3.485c1.595-3.78,2.293-7.8,2.629-11.841c1.192-13.833,1.335-27.681-0.718-41.473 c-1.274-8.621-6.149-14.195-14.745-15.825c-4.382-0.836-3.725-2.446-1.615-4.958c3.704-4.315,7.189-7.006,14.093-7.006h51.847 c8.177,1.595,10.011,5.278,11.122,13.497l0.041,57.619c-0.097,3.184,1.595,12.615,7.306,14.704 c4.575,1.513,7.622-2.171,10.368-5.075c12.417-13.176,21.277-28.756,29.194-44.877c3.505-7.087,6.532-14.449,9.477-21.817 c2.17-5.452,5.553-8.137,11.703-8.04l49.916,0.061c1.472,0,2.986,0,4.438,0.239c8.396,1.452,10.705,5.075,8.096,13.293 c-4.076,12.875-12.06,23.625-19.84,34.391c-8.341,11.525-17.216,22.647-25.495,34.233 C331.087,237.201,331.683,242.535,341.098,251.727z"/></svg>'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                elem: 'item',
                                                content: {
                                                    block: 'link',
                                                    mix: { block: 'social-links', elem: 'link' },
                                                    content: {
                                                        block: 'social-icon',
                                                        mods: {
                                                            size: 'm',
                                                            view: 'primary',
                                                            name: ''
                                                        },
                                                        content: {
                                                            html: '<svg width="32" height="32" id="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M251.83,297.635c-19.57,0-37.973-10.516-44.227-22.557c0,0-10.516,41.691-12.71,49.78c-7.84,28.437-30.926,56.874-32.684,59.176c-1.229,1.649-4.013,1.105-4.324-1.026c-0.482-3.656-6.379-39.497,0.545-68.728c3.469-14.701,23.272-98.627,23.272-98.627s-5.771-11.543-5.771-28.624c0-26.85,15.556-46.856,34.939-46.856c16.474,0,24.377,12.337,24.377,27.177c0,16.521-10.516,41.318-15.977,64.216c-4.511,19.212,9.598,34.831,28.546,34.831c34.332,0,57.371-43.993,57.371-96.138c0-39.684-26.678-69.397-75.292-69.397c-54.867,0-89.075,40.96-89.075,86.649c0,15.805,4.667,26.928,11.963,35.499c3.345,4.014,3.765,5.585,2.613,10.143c-0.917,3.344-2.862,11.309-3.765,14.529c-1.151,4.559-4.931,6.191-9.053,4.496c-25.217-10.329-37.009-37.989-37.009-69.164C105.569,131.619,148.832,70,234.874,70c69.101,0,114.557,50.013,114.557,103.667C349.431,244.635,309.995,297.635,251.83,297.635z"/></svg>'
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                        },
                },
            ]
        },
    ]
};
