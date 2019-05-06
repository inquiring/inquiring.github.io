module.exports = {
    block: 'page',
    title: 'I am woman',
    lang: 'ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&subset=cyrillic' },
        { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Cormorant:300,400,500,600,700&amp;subset=cyrillic' },
    ],
    scripts: [
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.4.1.min.js'},
        { elem: 'js', url: 'index.min.js' }
    ],
    mods: {
        theme: 'i'
    },
    mix: {
        block: 'theme',
        mods: {
            breakpoint: 'whitepaper-default',
            color: 'whitepaper-default',    // цвета
            color: 'mts-default',
            control: 'mts-default',
            space: 'default',    // отступы
            menu: 'default',    // размер меню
            size: 'default',    // типографика
            font: 'cormorant', // шрифт
            gap: 'medium' }
        },
    content: [
        {
            block: 'tpl-layout',
            content: [
                {
                    elem: 'content',
                    mix: [
                        { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
                        { block: 'header' }
                    ],
                    content: [
                        {
                            elem: 'container', elemMods: { align: 'center', size: 'l' },
                            content: [
                                {
                                    block: 'header',
                                    content: [
                                        {
                                            block: 'pt-surface',
                                            attrs: { id: 'demoModal' }, // у кнопки для вызова такой модалки должен быть атрибут data-name: 'demoModal'
                                            mods: { position: 'absolute', view: 'project' },
                                            content: [
                                            {
                                                elem: 'window',
                                                content: [
                                                {
                                                    elem: 'content',
                                                    elemMods: { size: 'full', view: 'inverse', },
                                                    content: [

                                                        {
                                                            elem: 'close',
                                                            elemMods: { position: 'absolute', view: 'desktop' },
                                                            mix: { block: 'icon', mods: { 'close': 'm-primary' } },
                                                            content: {
                                                                block: 'icon', mods: { 'name': 'close', size: 'm' },
                                                            }
                                                        },
                                                        {
                                                            block: 'text',
                                                            mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                                                            mods: {
                                                                size: 'xxl',
                                                                view: 'primary',
                                                            },
                                                            content: 'Каталог'
                                                        },
                                                        {
                                                            block: 'pt-list',
                                                            mix: {
                                                                    block: 'text',
                                                                    mods: {
                                                                        size: '16-18-18',
                                                                        view: 'primary',
                                                                    },
                                                                },
                                                            content: [
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 1,
                                                                        content: 'Пальто',
                                                                    },
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 2,
                                                                        content: 'Жилеты и жакеты',
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 3,
                                                                        content: 'Костюмы',
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 4,
                                                                        content: 'Трикотаж'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 5,
                                                                        content: 'Платья'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 6,
                                                                        content: 'Блузы и топы'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 7,
                                                                        content: 'Футболки'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 8,
                                                                        content: 'Юбки и брюки'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 9,
                                                                        content: 'Аксессуары'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 10,
                                                                        content: 'О бренде'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 11,
                                                                        content: 'Оферта'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 12,
                                                                        content: 'Оплата и доставка'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 13,
                                                                        content: 'Возврат'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 14,
                                                                        content: 'Контакты'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 15,
                                                                        content: 'Sale'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 16,
                                                                        content: 'New'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 0,
                                                                        content: 'Отзывы'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 18,
                                                                        content: 'Looks'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 19,
                                                                        content: 'Блог'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 20,
                                                                        content: 'Streetstyle'
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'input',
                                                                        mods: {
                                                                            theme: 'i',
                                                                            size: 'l',
                                                                            type: 'search'
                                                                        },
                                                                        tabIndex: 21,
                                                                        placeholder: 'Найти на сайте',
                                                                    },
                                                                },
                                                                {
                                                                    elem: 'item',
                                                                    content: {
                                                                        block: 'link',
                                                                        tabIndex: 22,
                                                                        content: 'Войти в личный кабинет'
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    ]
                                                }]
                                            }],
                                        },
                                        {
                                            block: 'header', elem: 'content',
                                            content: [
                                                {
                                                    block: 'header', elem: 'header',
                                                    elemMods: { distribute: '', },
                                                    content: [
                                                        // кнопка открытия меню
                                                        {
                                                            block: 'pt-surface', elem: 'action',
                                                            attrs: { 'data-name': 'demoModal' },
                                                            content: {
                                                                block: 'button',
                                                                mods: {
                                                                    theme: 'islands',
                                                                    size: 's',
                                                                    view: 'plain'
                                                                },
                                                                mix: [
                                                                    {
                                                                        block: 'button',
                                                                        mods: { theme: 'islands-transparent'},
                                                                    },
                                                                    {
                                                                        block: 'decorator',
                                                                        mods: { 'indent-t': 's' }
                                                                    }
                                                                ],
                                                                content: {
                                                                    block: 'image',
                                                                    url: '../../common.blocks/image/icon-hamburger.png',
                                                                    width: 33,
                                                                    height: 14,
                                                                }
                                                            }
                                                        },
                                                        // logo
                                                        {
                                                            block: 'header', elem: 'logo',
                                                            content: [
                                                                {
                                                                    block: 'logo',
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'h1',
                                                                            mods: {
                                                                                view: 'primary',
                                                                                size: 'xxl',
                                                                                transform: 'uppercase',
                                                                                weight: 'black',
                                                                                },
                                                                            content: 'I am woman',
                                                                            attrs: { style: 'margin: 0' }
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'span',
                                                                            mods: {
                                                                                view: 'primary',
                                                                                size: 'm',
                                                                                transform: 'uppercase',
                                                                                weight: 'bold'
                                                                            },
                                                                            content: 'moscow'
                                                                        },
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        // три иконки
                                                        {
                                                            block: 'header', elem: 'controls-wrapper-right',
                                                            content: [
                                                                {
                                                                    block: 'button',
                                                                    mods: {
                                                                        theme: 'islands',
                                                                        size: 'm',
                                                                        view: 'plain'
                                                                    },
                                                                    mix: {
                                                                        block: 'button',
                                                                        mods: {
                                                                            theme: 'islands-transparent'
                                                                        },
                                                                    },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: {
                                                                            view: 'primary',
                                                                            name: 'magnifying-glass',
                                                                            size: 's'
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    block: 'button',
                                                                    mods: {
                                                                        theme: 'islands',
                                                                        size: 'm',
                                                                        view: 'plain'
                                                                    },
                                                                    mix: {
                                                                        block: 'button',
                                                                        mods: {
                                                                            theme: 'islands-transparent'
                                                                        },
                                                                    },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: {
                                                                            view: 'primary',
                                                                            name: 'user-avatar',
                                                                            size: 's'
                                                                        },
                                                                    },
                                                                },
                                                                {
                                                                    block: 'button',
                                                                    mods: {
                                                                        theme: 'islands',
                                                                        size: 'm',
                                                                        view: 'plain'
                                                                    },
                                                                    mix: {
                                                                        block: 'button',
                                                                        mods: {
                                                                            theme: 'islands-transparent'
                                                                        },
                                                                    },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: {
                                                                            view: 'primary',
                                                                            name: 'shoping-bag',
                                                                            size: 's'
                                                                        },
                                                                    },
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                                // Боковая колонка left
                                                {
                                                    block: 'header', elem: 'aside-left',
                                                    content: {
                                                        block: 'text',
                                                        mods: {
                                                            view: 'brand',
                                                            size: '14-14-18',
                                                            weight: 'light'
                                                        },
                                                        content: 'Распродажа  SS’18'
                                                    }
                                                },
                                                // slider
                                                {
                                                    block: 'header', elem: 'slider-wrapper',
                                                    content: [
                                                        {
                                                            block: 'carousel',
                                                            mods: { orientation: 'horizontal', animate: true },
                                                            content: [
                                                                {
                                                                    elem: 'inner', elemMods: { 'direction': 'row', content: 'center' },
                                                                    content: [
                                                                        // элемент карусели
                                                                        {
                                                                            elem: 'item',
                                                                            elemMods: { state: 'active' },
                                                                            content: {
                                                                                block: 'pt-card',
                                                                                mix: { block: 'header-card-bg' },
                                                                                content: [
                                                                                    {
                                                                                        block: 'picture-bg',
                                                                                        tag: 'picture',
                                                                                        content: [
                                                                                            {
                                                                                                tag: 'source',
                                                                                                attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/header-card-bg-1-desktop.jpg' },
                                                                                            },
                                                                                            {
                                                                                                tag: 'source',
                                                                                                attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/header-card-bg-1-tablet.jpg' },
                                                                                            },
                                                                                            {
                                                                                                block: 'image',
                                                                                                url: '../../common.blocks/image/header-card-bg-1-mobile.jpg',
                                                                                                alt: ''
                                                                                            },
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        block: 'pt-card',
                                                                                        mix: { block: 'header-card' },
                                                                                        content: [
                                                                                        {
                                                                                            tag: 'picture',
                                                                                            content: [
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/header-card-1-desktop.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/header-card-1-tablet.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    block: 'image',
                                                                                                    mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover'}},
                                                                                                    url: '../../common.blocks/image/header-card-1-mobile.jpg',
                                                                                                    alt: ''
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            elem: 'footer',
                                                                                            content: {
                                                                                                block: 'info',
                                                                                                attrs: { style: 'width: 100%'},
                                                                                                content: [
                                                                                                    {
                                                                                                        block: 'text',
                                                                                                        mods: {
                                                                                                            view: 'brand',
                                                                                                            size: 'xxl',
                                                                                                            align: 'center'
                                                                                                        },
                                                                                                        content: 'Хлопковое платье в полоску'
                                                                                                    },
                                                                                                    {
                                                                                                        block: 'pt-icon-plus',
                                                                                                        mods: { 'vertical-align': 'center', distribute: 'end' },
                                                                                                        mix: { block: 'text', mods: { size: '14-16-18', view: 'brand' }},
                                                                                                        content: [
                                                                                                            {
                                                                                                                elem: 'icon',
                                                                                                                elemMods: { 'indent-r': 's' },
                                                                                                                content: {
                                                                                                                    block: 'line-price'
                                                                                                                }
                                                                                                            },
                                                                                                            {
                                                                                                                elem: 'block',
                                                                                                                content: '9 900 рублей'
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                ]
                                                                                            }
                                                                                        }]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        // элемент карусели
                                                                        {
                                                                            elem: 'item',
                                                                            content: {
                                                                                block: 'pt-card',
                                                                                mix: { block: 'header-card-bg' },
                                                                                content: [
                                                                                    {
                                                                                        block: 'picture-bg',
                                                                                        tag: 'picture',
                                                                                        content: [
                                                                                            {
                                                                                                tag: 'source',
                                                                                                attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/header-card-bg-2-desktop.jpg' },
                                                                                            },
                                                                                            {
                                                                                                tag: 'source',
                                                                                                attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/header-card-bg-2-tablet.jpg' },
                                                                                            },
                                                                                            {
                                                                                                block: 'image',
                                                                                                url: '../../common.blocks/image/header-card-bg-2-mobile.jpg',
                                                                                                alt: ''
                                                                                            },
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        block: 'pt-card',
                                                                                        mix: { block: 'header-card' },
                                                                                        content: [
                                                                                        {
                                                                                            tag: 'picture',
                                                                                            content: [
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/header-card-2-desktop.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/header-card-2-tablet.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    block: 'image',
                                                                                                    url: '../../common.blocks/image/header-card-2-mobile.jpg',
                                                                                                    alt: ''
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            elem: 'footer',
                                                                                            content: {
                                                                                                block: 'info',
                                                                                                attrs: { style: 'width: 100%'},
                                                                                                content: [
                                                                                                    {
                                                                                                        block: 'text',
                                                                                                        mods: {
                                                                                                            view: 'brand',
                                                                                                            size: 'xxl',
                                                                                                            align: 'center'
                                                                                                        },
                                                                                                        content: 'Спортивный желтый костюм'
                                                                                                    },
                                                                                                    {
                                                                                                        block: 'pt-icon-plus',
                                                                                                        mods: { 'vertical-align': 'center', distribute: 'end' },
                                                                                                        mix: { block: 'text', mods: { size: '14-16-18', view: 'brand' }},
                                                                                                        content: [
                                                                                                            {
                                                                                                                elem: 'icon',
                                                                                                                elemMods: { 'indent-r': 's' },
                                                                                                                content: {
                                                                                                                    block: 'line-price'
                                                                                                                }
                                                                                                            },
                                                                                                            {
                                                                                                                elem: 'block',
                                                                                                                content: '9 900 рублей'
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                ]
                                                                                            }
                                                                                        }]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        },
                                                                        // элемент карусели
                                                                        {
                                                                            elem: 'item',
                                                                            content: {
                                                                                block: 'pt-card',
                                                                                mix: { block: 'header-card-bg' },
                                                                                content: [
                                                                                    {
                                                                                        block: 'picture-bg',
                                                                                        tag: 'picture',
                                                                                        content: [
                                                                                            {
                                                                                                tag: 'source',
                                                                                                attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/header-card-bg-3-desktop.jpg' },
                                                                                            },
                                                                                            {
                                                                                                tag: 'source',
                                                                                                attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/header-card-bg-3-tablet.jpg' },
                                                                                            },
                                                                                            {
                                                                                                block: 'image',
                                                                                                url: '../../common.blocks/image/header-card-bg-3-mobile.jpg',
                                                                                                alt: ''
                                                                                            },
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        block: 'pt-card',
                                                                                        mix: { block: 'header-card' },
                                                                                        content: [
                                                                                        {
                                                                                            tag: 'picture',
                                                                                            content: [
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/header-card-3-desktop.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    tag: 'source',
                                                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/header-card-3-tablet.jpg' },
                                                                                                },
                                                                                                {
                                                                                                    block: 'image',
                                                                                                    url: '../../common.blocks/image/header-card-3-mobile.jpg',
                                                                                                    alt: ''
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            elem: 'footer',
                                                                                            content: {
                                                                                                block: 'info',
                                                                                                attrs: { style: 'width: 100%'},
                                                                                                content: [
                                                                                                    {
                                                                                                        block: 'text',
                                                                                                        mods: {
                                                                                                            view: 'brand',
                                                                                                            size: 'xxl',
                                                                                                            align: 'center'
                                                                                                        },
                                                                                                        content: 'Платье — халат со стразами'
                                                                                                    },
                                                                                                    {
                                                                                                        block: 'pt-icon-plus',
                                                                                                        mods: { 'vertical-align': 'center', distribute: 'end' },
                                                                                                        mix: { block: 'text', mods: { size: '14-16-18', view: 'brand' }},
                                                                                                        content: [
                                                                                                            {
                                                                                                                elem: 'icon',
                                                                                                                elemMods: { 'indent-r': 's' },
                                                                                                                content: {
                                                                                                                    block: 'line-price'
                                                                                                                }
                                                                                                            },
                                                                                                            {
                                                                                                                elem: 'block',
                                                                                                                content: '9 900 рублей'
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                ]
                                                                                            }
                                                                                        }]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'control',
                                                                    elemMods: { type: 'left', position: 'bottom' },
                                                                    content: [
                                                                        {
                                                                            block: 'icon',
                                                                            mods: { size: 'm', name: 'arrow-left', view: 'brand' },
                                                                            mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                                        },
                                                                        {
                                                                            elem: 'number-group',
                                                                            attrs: { style: 'display: flex'},
                                                                            mix: { block: 'decorator', mods: { 'indent-l': 'm' }},
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    tag: 'span',
                                                                                    mods: {
                                                                                        size: '18-24-36',
                                                                                        view: 'brand'
                                                                                    },
                                                                                    content: '1/'
                                                                                },
                                                                                {
                                                                                    block: 'text',
                                                                                    tag: 'span',
                                                                                    mix: { block: 'decorator', mods: { 'space-t': 'l' }},
                                                                                    mods: {
                                                                                        size: '14-18-24',
                                                                                        view: 'primary'
                                                                                    },
                                                                                    content: '3'
                                                                                }
                                                                            ]
                                                                        },

                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'control',
                                                                    elemMods: { type: 'right', position: 'bottom' },
                                                                    content: {
                                                                        block: 'icon',
                                                                        mods: { size: 'm', name: 'arrow-right', view: 'brand' },
                                                                        mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                                    },

                                                                },
                                                            ]
                                                        },

                                                    ],
                                                },
                                                // Боковая колонка right
                                                {
                                                    block: 'header', elem: 'aside-right',
                                                    content: {
                                                        block: 'text',
                                                        mods: { size: 'xxl' },
                                                        mix: { block: 'decorator', mods: { 'indent-b': 'xs' }},
                                                        content: [
                                                            {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 'xxl'
                                                                },
                                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                                                                content: '1'
                                                            },
                                                            {
                                                                block: 'text',
                                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                                                                content: '2'
                                                            },
                                                            {
                                                                block: 'text',
                                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                                                                content: '3'
                                                            },
                                                            {
                                                                block: 'text',
                                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                                                                content: '4'
                                                            },
                                                            {
                                                                block: 'text',
                                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                                                                content: '5'
                                                            },
                                                            {
                                                                block: 'text',
                                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                                                                content: '6'
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    block: 'header', elem: 'footer',
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                                size: '24-36-48'
                                                            },
                                                            mix: [{ block: 'decorator', mods: {'indent-b': 'xxxl'}}, { block: 'header', elem: 'title',}],
                                                            content: [
                                                                {
                                                                    html: 'Новая <br> круизная коллекция ‘19'
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            block: 'link',
                                                            attrs: { href: '#' },
                                                            mix: {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'brand',
                                                                    size: '14-16-18',
                                                                    decoration: 'i-underline'
                                                                },
                                                            },
                                                            content: 'Перейти в каталог'
                                                        },
                                                        {
                                                            block: 'info',
                                                            content: [
                                                                {
                                                                    block: 'pt-list',
                                                                    mix: [
                                                                        { block: 'theme', mods: { font: 'openSans' }},
                                                                        { block: 'socials' }
                                                                    ],
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            mix: { block: 'decorator', mods: {'indent-r': 's' }},
                                                                            content: {
                                                                                block: 'link',
                                                                                mix: {
                                                                                    block: 'text',
                                                                                    mods: {
                                                                                        display: 'inline',
                                                                                        size: 's',
                                                                                        view: 'primary'
                                                                                    }
                                                                                },
                                                                                content: {
                                                                                    block: 'pt-icon-plus',
                                                                                    mods: { 'vertical-align': 'top' },
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'icon',
                                                                                            elemMods: { 'indent-r': 's' },
                                                                                            content: ''
                                                                                        },
                                                                                        {
                                                                                            elem: 'block',
                                                                                            content: 'Facebook'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            mix: { block: 'decorator', mods: {'indent-r': 's' }},
                                                                            content: {
                                                                                block: 'link',
                                                                                mix: {
                                                                                    block: 'text',
                                                                                    mods: {
                                                                                        display: 'inline',
                                                                                        size: 's',
                                                                                        view: 'primary'
                                                                                    }
                                                                                },
                                                                                content: {
                                                                                    block: 'pt-icon-plus',
                                                                                    mods: { 'vertical-align': 'top' },
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'icon',
                                                                                            elemMods: { 'indent-r': 's' },
                                                                                            content: {
                                                                                                block: 'line'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem: 'block',
                                                                                            content: 'Youtube'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            mix: { block: 'decorator', mods: {'indent-r': 's' }},
                                                                            content: {
                                                                                block: 'link',
                                                                                mix: {
                                                                                    block: 'text',
                                                                                    mods: {
                                                                                        display: 'inline',
                                                                                        size: 's',
                                                                                        view: 'primary'
                                                                                    }
                                                                                },
                                                                                content: {
                                                                                    block: 'pt-icon-plus',
                                                                                    mods: { 'vertical-align': 'top' },
                                                                                    content: [
                                                                                        {
                                                                                            elem: 'icon',
                                                                                            elemMods: { 'indent-r': 's' },
                                                                                            content: {
                                                                                                block: 'line'
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            elem: 'block',
                                                                                            content: 'Vkontakte'
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            }
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    block: 'link',
                                                                    mix: [
                                                                        { block: 'decorator', mods: {'indent-v': 'xl' } },
                                                                        {
                                                                            block: 'text',
                                                                            mods: {
                                                                                view: 'primary',
                                                                                size: '14-16-18',
                                                                                align: 'right',
                                                                                weight: 'light',
                                                                                decoration: 'underline'
                                                                            }
                                                                        }
                                                                    ],
                                                                    content: 'Смотреть все'
                                                                },
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                }
                            ]
                        }
                    ]
                },
                // Новое  поступление
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
                    content: {
                        elem: 'container', elemMods: { align: 'center', size: 'l' },
                        attrs: { style: 'max-width: 1107px;' },
                        content: [
                            {
                                elem: 'section',
                                content: [
                                    {
                                        block: 'text',
                                        tag: 'h2',
                                        mods: {
                                            view: 'brand',
                                            size: '24-36-48',
                                            align: 'center'
                                        },
                                        mix: { block: 'decorator', mods: {'indent-b': 'xl' } },
                                        content: 'Новое  поступление'
                                    },
                                    {
                                        block: 'text',
                                        mods: {
                                            view: 'primary',
                                            size: '14-16-18',
                                            align: 'center'
                                        },
                                        content: [
                                            {
                                                block: 'text',
                                                mods: {
                                                    display: 'inline',
                                                    decoration: 'underline'
                                                },
                                                content: 'Платья'
                                            },
                                            {
                                                block: 'text',
                                                mods: {
                                                    display: 'inline'
                                                },
                                                mix: { block: 'decorator', mods: { 'indent-h': 'l'}},
                                                content: 'Блузы и топы'
                                            },
                                            {
                                                block: 'text', mods: { display: 'inline' },
                                                content: 'Брюки и юбки'
                                            }
                                        ]
                                    },
                                    // carousel
                                    {
                                        block: 'carousel',
                                        mods: { orientation: 'horizontal', animate: true },
                                        content: [
                                            {
                                                elem: 'inner', elemMods: { 'direction': 'row', content: 'between' },
                                                content: [
                                                    // элемент карусели
                                                    {
                                                        elem: 'item',
                                                        elemMods: { 's-state': 'active' },
                                                        content: {
                                                            block: 'pt-card',
                                                            mix: [
                                                                { block: 'new-card' },
                                                                { block: 'link' }
                                                            ],
                                                            content: [
                                                                {
                                                                    elem: 'content',
                                                                    content: {
                                                                        tag: 'picture',
                                                                        content: [
                                                                            {
                                                                                tag: 'source',
                                                                                attrs: { media: '(min-width:  1024px)', srcset: '../../common.blocks/image/new-card-1-desktop.jpg' },
                                                                            },
                                                                            {
                                                                                block: 'image',
                                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                                url: '../../common.blocks/image/new-card-1-mobile.jpg',
                                                                                alt: ''
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'content',
                                                                    mix: [
                                                                        { block: 'decorator', mods: { 'space-a': 'xs' } },
                                                                        {  block: 'text', mods: { view: 'primary', weight: 'semibold'}}
                                                                    ],
                                                                    content: {
                                                                        block: 'info',
                                                                        attrs: { style: 'width: 100%'},
                                                                        content: [
                                                                            {
                                                                                block: 'text',
                                                                                tag: 'h3',
                                                                                attrs: { style: 'margin: 0;font-weight: 500;' },
                                                                                mods: {
                                                                                    size: '18-24-30',
                                                                                    align: 'center'
                                                                                },
                                                                                content: 'Шелковое платье'
                                                                            },
                                                                            {
                                                                                block: 'pt-icon-plus',
                                                                                mods: { 'vertical-align': 'top', distribute: 'center' },
                                                                                attrs: { style: 'height: 30px;' },
                                                                                content: [
                                                                                    {
                                                                                        elem: 'icon',
                                                                                        elemMods: { 'indent-r': 's' },
                                                                                        content: {
                                                                                            block: 'line-price'
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'block',
                                                                                        mix: { block: 'text', mods: { size: '14-16-20' }},
                                                                                        content: '4 800 рублей'
                                                                                    }
                                                                                ]
                                                                            },
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    // элемент карусели
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'active', 's-state': 'active' },
                                                        content: {
                                                            block: 'pt-card',
                                                            mix: { block: 'new-card' },
                                                            content: [
                                                                {
                                                                    elem: 'content',
                                                                    content: {
                                                                        tag: 'picture',
                                                                        content: [
                                                                            {
                                                                                tag: 'source',
                                                                                attrs: { media: '(min-width:  1024px)', srcset: '../../common.blocks/image/new-card-2-desktop.jpg' },
                                                                            },
                                                                            {
                                                                                block: 'image',
                                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                                url: '../../common.blocks/image/new-card-2-mobile.jpg',

                                                                                alt: ''
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            {
                                                                elem: 'content',
                                                                mix: [
                                                                    { block: 'decorator', mods: { 'space-a': 'xs' } },
                                                                    {  block: 'text', mods: { view: 'primary', weight: 'semibold'}}
                                                                ],
                                                                content: {
                                                                    block: 'info',
                                                                    attrs: { style: 'width: 100%'},
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'h3',
                                                                            attrs: { style: 'margin: 0;font-weight: 500;' },
                                                                            mods: {
                                                                                size: '18-24-30',
                                                                                align: 'center'
                                                                            },
                                                                            content: 'Этническое платье'
                                                                        },
                                                                        {
                                                                            block: 'pt-icon-plus',
                                                                            mods: { 'vertical-align': 'top', distribute: 'center' },
                                                                            attrs: { style: 'height: 30px;' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'icon',
                                                                                    elemMods: { 'indent-r': 's' },
                                                                                    content: {
                                                                                        block: 'line-price'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    elem: 'block',
                                                                                    mix: { block: 'text', mods: { size: '14-16-20' }},
                                                                                    content: '7 800 рублей'
                                                                                }
                                                                            ]
                                                                        },
                                                                    ]
                                                                }
                                                            }]
                                                        }
                                                    },
                                                    // элемент карусели
                                                    {
                                                        elem: 'item',
                                                        elemMods: { 's-state': 'active' },
                                                        content: {
                                                            block: 'pt-card',
                                                            mix: { block: 'new-card' },
                                                            content: [
                                                                {
                                                                    elem: 'content',
                                                                    content: {
                                                                        tag: 'picture',
                                                                        content: [
                                                                            {
                                                                                tag: 'source',
                                                                                attrs: { media: '(min-width:  1024px)', srcset: '../../common.blocks/image/new-card-3-desktop.jpg' },
                                                                            },
                                                                            {
                                                                                block: 'image',
                                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                                url: '../../common.blocks/image/new-card-3-mobile.jpg',
                                                                                alt: ''
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            {
                                                                elem: 'content',
                                                                mix: [
                                                                    { block: 'decorator', mods: { 'space-a': 'xs' } },
                                                                    {  block: 'text', mods: { view: 'primary', weight: 'semibold'}}
                                                                ],
                                                                content: {
                                                                    block: 'info',
                                                                    attrs: { style: 'width: 100%'},
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            tag: 'h3',
                                                                            attrs: { style: 'margin: 0;font-weight: 500;' },
                                                                            mods: {
                                                                                size: '18-24-30',
                                                                                align: 'center'
                                                                            },
                                                                            content: 'Платье - боди'
                                                                        },
                                                                        {
                                                                            block: 'pt-icon-plus',
                                                                            mods: { 'vertical-align': 'top', distribute: 'center' },
                                                                            attrs: { style: 'height: 30px;' },
                                                                            content: [
                                                                                {
                                                                                    elem: 'icon',
                                                                                    elemMods: { 'indent-r': 's' },
                                                                                    content: {
                                                                                        block: 'line-price'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    elem: 'block',
                                                                                    mix: { block: 'text', mods: { size: '14-16-20' }},
                                                                                    content: '11 700 рублей'
                                                                                }
                                                                            ]
                                                                        },
                                                                    ]
                                                                }
                                                            }]
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                elem: 'control',
                                                elemMods: { type: 'left' },
                                                content: {
                                                    block: 'icon',
                                                    mods: { size: 'm', name: 'arrow-left', view: 'primary' },
                                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                }
                                            },
                                            {
                                                elem: 'control',
                                                elemMods: { type: 'right' },
                                                content: {
                                                    block: 'icon',
                                                    mods: { size: 'm', name: 'arrow-right', view: 'primary' },
                                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        block: 'text',
                                        mix: { block: 'decorator', mods: { 'indent-v': '' } },
                                        mods: {
                                            view: 'primary',
                                            size: '14-14-18',
                                            align: 'center',
                                            weight: 'light',
                                            decoration: 'underline'
                                        },

                                        content: {
                                            block: 'link',
                                            content: 'Смотреть все'
                                        }
                                    },
                                ],
                            },
                        ]
                    }
                },
                // О бренде
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
                    content: {
                        elem: 'container', elemMods: { align: 'center', size: 'l' },
                        content: {
                            block: 'brand',
                            content: [
                                {
                                    block: 'text',
                                    tag: 'h2',
                                    mods: {
                                        view: 'brand',
                                        size: '24-36-48',
                                        align: 'center',
                                        weight: 'regular'
                                    },
                                    mix: { block: 'decorator', mods: {'indent-v': 'xl' } },
                                    content: 'О бренде'
                                },
                                {
                                    elem: 'content',
                                    content: [
                                        {
                                            elem: 'wrapper-brand-card', elemMods: { type: 'left' },
                                            content: {
                                                block: 'pt-card',
                                                mix: { block: 'brand-card' },
                                                content: [
                                                    {
                                                        tag: 'picture',
                                                        content: [
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  1024px)', srcset: '../../common.blocks/image/brand-card-1-desktop.jpg' },
                                                            },
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/brand-card-1-tablet.jpg' },
                                                            },
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'pt-card', elem: 'image', elemMods: { 'size': 'cover' } },
                                                                url: '../../common.blocks/image/brand-card-1-mobile.jpg',
                                                                alt: ''
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        block: 'brand-card', elem: 'content', elemMods: { type: 'top' },
                                                        content: {
                                                            block: 'info',
                                                            attrs: { style: 'width: 100%'},
                                                            mix: {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: '16-16-20',
                                                                    weight: 'light',
                                                                }
                                                            },
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    block: 'decorator', mods: { 'indent-b': 'm' },
                                                                    content: 'Концепция «свободной женщины» была придумана и создана основателем и дизайнером Кристиной Беккер на нальном этапе воплощения ее в реальность.'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    block: 'decorator', mods: { 'indent-b': 'm' },
                                                                    content: 'Идея разработки свободных кроем моделей с яркими дизайнерскими акцентами составляет основу бренда, которая получила настоящий успех и имиджевую популярность'
                                                                },
                                                            ]
                                                        }
                                                    },
                                                ]
                                            },
                                        },
                                        {
                                            elem: 'wrapper-brand-card', elemMods: { type: 'right' },
                                            content: {
                                                block: 'pt-card',
                                                mix: { block: 'brand-card', mods: { type: 'right' } },
                                                content: [
                                                    {
                                                        tag: 'picture',
                                                        content: [
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  1024px)', srcset: '../../common.blocks/image/brand-card-2-desktop.jpg' },
                                                            },
                                                            {
                                                                tag: 'source',
                                                                attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/brand-card-2-tablet.jpg' },
                                                            },
                                                            {
                                                                block: 'image',
                                                                mix: { block: 'pt-card', elem: 'image', elemMods: { 'size': 'cover' } },
                                                                url: '../../common.blocks/image/brand-card-1-mobile.jpg',
                                                                alt: ''
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        block: 'brand-card', elem: 'content', elemMods: { type: 'bottom' },
                                                        content: {
                                                            block: 'info',
                                                            attrs: { style: 'width: 100%'},
                                                            mix: {
                                                                block: 'text',
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: '16-16-20',
                                                                    weight: 'light',
                                                                }
                                                            },
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    content: 'Ключевыми моделями бренда I AM WOMEN стали рубашки и брюки с безупречной посадкой; а также платья, подчеркивающие женсвенные формы и жилеты, вписывающиеся в любой гардероб своременой женщины. Каждая модель сохраняет свою актуальность в течение нескольких сезонов.'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        },

                                    ]
                                },
                            ]
                        }
                    }
                },
                // Блог
                {
                    elem: 'content',
                    attrs: { style: 'overflow: hidden; padding: 0' },
                    content: {
                        elem: 'container', elemMods: { align: 'center', size: 'l' },
                        content: [
                            {
                                elem: 'section',
                                content: [
                                    {
                                        block: 'text',
                                        tag: 'h2',
                                        mods: {
                                            view: 'brand',
                                            size: '24-48-48',
                                            align: 'center',
                                        },
                                        mix: { block: 'decorator', mods: {'indent-v': 'xl' } },
                                        content: 'Блог'
                                    },
                                    {
                                        block: 'carousel',
                                        mods: { orientation: 'horizontal', animate: true },
                                        content: [
                                            {
                                                elem: 'inner', elemMods: { 'direction': 'row' },
                                                attrs: { style: 'overflow-x: scroll' },
                                                content: [
                                                    // элемент карусели 1
                                                    {
                                                        elem: 'item',
                                                        elemMods: { 's-state': 'active' },
                                                        content: {
                                                            block: 'pt-card',
                                                            mix: { block: 'blog-card' },
                                                            content: [
                                                            {
                                                                elem: 'content',
                                                                content: {
                                                                    tag: 'picture',
                                                                    content: [
                                                                        {
                                                                            tag: 'source',
                                                                            attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/blog-image-1-desktop.jpg' },
                                                                        },
                                                                        {
                                                                            tag: 'source',
                                                                            attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/blog-image-1-tablet.jpg' },
                                                                        },
                                                                        {
                                                                            block: 'image',
                                                                            mix: { block: 'pt-card', elem: 'image' },
                                                                            url: '../../common.blocks/image/blog-image-1-mobile.jpg',
                                                                            alt: ''
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                elem: 'content',
                                                                content: {
                                                                    block: 'info',
                                                                    attrs: { style: 'width: 100%'},
                                                                    mix: {
                                                                        block: 'text',
                                                                        mods: {
                                                                            view: 'primary',
                                                                            align: 'center',
                                                                        },
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            mods: {
                                                                                size: '18-24-30',
                                                                                weight: 'semibold',
                                                                            },
                                                                            mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                            content: 'Лучший выбор: костюмы’18'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: {
                                                                                size: '16',
                                                                                weight: 'light',
                                                                                spacing: '08'
                                                                            },
                                                                            content: 'Проще говоря, выбирайте более светлые и более темные оттенки одного цвета, в конкретном случае — родственные фиолетовому. Такой образ может легко вписаться в рамки повседневной жизни'
                                                                        },
                                                                    ]
                                                                }
                                                            }]
                                                        }
                                                    },
                                                    // элемент карусели 2
                                                    {
                                                        elem: 'item',
                                                        elemMods: { state: 'active', 's-state': 'active' },
                                                        content: [
                                                            {
                                                                block: 'pt-card',
                                                                mix: { block: 'blog-card' },
                                                                content: [
                                                                    {
                                                                        elem: 'content',
                                                                        content: {
                                                                            tag: 'picture',
                                                                            content: [
                                                                                {
                                                                                    tag: 'source',
                                                                                    attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/blog-image-2-desktop.jpg' },
                                                                                },
                                                                                {
                                                                                    tag: 'source',
                                                                                    attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/blog-image-2-tablet.jpg' },
                                                                                },
                                                                                {
                                                                                    block: 'image',
                                                                                    mix: { block: 'pt-card', elem: 'image' },
                                                                                    url: '../../common.blocks/image/blog-image-2-mobile.jpg',
                                                                                    alt: ''
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'content',
                                                                        content: {
                                                                            block: 'info',
                                                                            attrs: { style: 'width: 100%'},
                                                                            mix: {
                                                                                block: 'text',
                                                                                mods: {
                                                                                    view: 'primary',
                                                                                    align: 'center',
                                                                                },
                                                                            },
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: {
                                                                                        size: '18-24-30',
                                                                                        weight: 'semibold',
                                                                                    },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    content: 'Аксессуары осень — зима ‘18'
                                                                                },
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: {
                                                                                        size: '16',
                                                                                        weight: 'light',
                                                                                        spacing: '08'
                                                                                    },
                                                                                    // block: 'decorator', mods: { 'indent-b': 'm' },
                                                                                    content: 'Аксессуары являются важнейшим частью для создания целостного образа. Правильно подобранные украшения помогут сделать лук более гармоничным и стильным, ну а неправильно — испортят ваш лук'
                                                                                },
                                                                            ]
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                        ]
                                                    },
                                                    // элемент карусели 3
                                                    {
                                                        elem: 'item',
                                                        elemMods: { 's-state': 'active' },
                                                        content: [
                                                            {
                                                                block: 'pt-card',
                                                                mix: { block: 'blog-card' },
                                                                content: [
                                                                {
                                                                    elem: 'content',
                                                                    content: {
                                                                        tag: 'picture',
                                                                        content: [
                                                                            {
                                                                                tag: 'source',
                                                                                attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/blog-image-3-desktop.jpg' },
                                                                            },
                                                                            {
                                                                                tag: 'source',
                                                                                attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/blog-image-3-tablet.jpg' },
                                                                            },
                                                                            {
                                                                                block: 'image',
                                                                                mix: { block: 'pt-card', elem: 'image' },
                                                                                url: '../../common.blocks/image/blog-image-3-mobile.jpg',
                                                                                alt: ''
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    elem: 'content',
                                                                    content: {
                                                                        block: 'info',
                                                                        attrs: { style: 'width: 100%'},
                                                                        mix: {
                                                                            block: 'text',
                                                                            mods: {
                                                                                view: 'primary',
                                                                                align: 'center',
                                                                            },
                                                                        },
                                                                        content: [
                                                                            {
                                                                                block: 'text',
                                                                                mods: {
                                                                                    size: '18-24-30',
                                                                                    weight: 'semibold',
                                                                                },
                                                                                mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                content: '3 крутых образа для офиса'
                                                                            },
                                                                            {
                                                                                block: 'text',
                                                                                mods: {
                                                                                    size: '16',
                                                                                    weight: 'light',
                                                                                    spacing: '08'
                                                                                },
                                                                                content: 'Кому-то нравится строгий стиль в одежде, а кому-то приходится его придерживаться из-за офисного дресс-кода. Так или иначе, не стоит превращать деловой стиль в скучный и консервативный'
                                                                            },
                                                                        ]
                                                                    }
                                                                }]
                                                            }
                                                        ]
                                                    },
                                                    // элемент карусели 4
                                                    {
                                                        elem: 'item',
                                                        elemMods: { 's-state': 'active' },
                                                        content: {
                                                            block: 'pt-card',
                                                            mix: { block: 'blog-card' },
                                                            content: [
                                                            {
                                                                elem: 'content',
                                                                content: {
                                                                    tag: 'picture',
                                                                    content: [
                                                                        {
                                                                            tag: 'source',
                                                                            attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/blog-image-4-desktop.jpg' },
                                                                        },
                                                                        {
                                                                            tag: 'source',
                                                                            attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/blog-image-4-tablet.jpg' },
                                                                        },
                                                                        {
                                                                            block: 'image',
                                                                            mix: { block: 'pt-card', elem: 'image' },
                                                                            url: '../../common.blocks/image/blog-image-4-mobile.jpg',
                                                                            alt: ''
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                            {
                                                                elem: 'content',
                                                                content: {
                                                                    block: 'info',
                                                                    attrs: { style: 'width: 100%'},
                                                                    mix: {
                                                                        block: 'text',
                                                                        mods: {
                                                                            view: 'primary',
                                                                            align: 'center',
                                                                        },
                                                                    },
                                                                    content: [
                                                                        {
                                                                            block: 'text',
                                                                            mods: {
                                                                                size: '18-24-30',
                                                                                weight: 'semibold',
                                                                            },
                                                                            mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                            content: 'С чем носить ультрафиолет?'
                                                                        },
                                                                        {
                                                                            block: 'text',
                                                                            mods: {
                                                                                size: '16',
                                                                                weight: 'light',
                                                                                spacing: '08'
                                                                            },
                                                                            // block: 'decorator', mods: { 'indent-b': 'm' },
                                                                            content: 'Уже не первый сезон монохромные образы являются одной из главных тенденций. Дизайнеры и стилисты призывают подбирать вещи в рамках одного сектора цветового круга'
                                                                        },
                                                                    ]
                                                                }
                                                            }]
                                                        }
                                                    },
                                                ]
                                            },
                                            {
                                                elem: 'control',
                                                elemMods: { type: 'left' },
                                                attrs: { style: 'left: 10px;'},
                                                content: {
                                                    block: 'icon',
                                                    mods: { size: 'm', name: 'arrow-left', view: 'primary' },
                                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                }
                                            },
                                            {
                                                elem: 'control',
                                                elemMods: { type: 'right' },
                                                attrs: { style: 'right: -5px;'},
                                                content: {
                                                    block: 'icon',
                                                    mods: { size: 'm', name: 'arrow-right', view: 'primary' },
                                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' }},
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    }
                },
                // Перейти в блог
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent': 'auto', 'indent-v': 'xxl' } },
                    content: {
                        block: 'link',
                        attrs: { href: '#' },
                        mix: {
                            block: 'text',
                            mods: {
                                view: 'brand',
                                size: '14-14-18',
                                align: 'center',
                                decoration: 'i-underline'
                            },
                        },
                        content: 'Перейти в блог'
                    },
                },
                // Подписаться
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
                    content: {
                        elem: 'container', elemMods: { align: 'center', size: 'l' },
                        attrs: { style: 'max-width: 1180px;' },
                        content: [
                            {
                                elem: 'section',
                                content: [
                                    {
                                        block: 'text',
                                        tag: 'h2',
                                        mods: {
                                            view: 'brand',
                                            size: '24-48-48',
                                            align: 'center',
                                        },
                                        mix: { block: 'decorator', mods: {'indent-v': 'xl' } },
                                        content: 'Подпишись на новости',
                                        attrs: { style: 'font-size: 0; margin: 0' }
                                    },
                                    {
                                        block: 'pt-card',
                                        mix: [
                                            { block: 'form-card' },
                                            { block: 'theme', mods: { color: 'mts-default', control: 'mts-default' }}
                                        ],
                                        content: [
                                            {
                                                tag: 'picture',
                                                content: [
                                                    {
                                                        tag: 'source',
                                                        attrs: { media: '(min-width:  1266px)', srcset: '../../common.blocks/image/form-card-desktop.jpg' },
                                                    },
                                                    {
                                                        tag: 'source',
                                                        attrs: { media: '(min-width:  700px)', srcset: '../../common.blocks/image/form-card-tablet.jpg' },
                                                    },
                                                    {
                                                        block: 'image',
                                                        mix: { block: 'pt-card', elem: 'image', elemMods:{ size:'cover' } },
                                                        url: '../../common.blocks/image/form-card-mobile.jpg',
                                                        alt: ''
                                                    },
                                                ]
                                            },
                                            {
                                                elem: 'content',
                                                mix: [
                                                    { block: 'form-card',  elem: 'content' },
                                                ],
                                                content: [
                                                    {
                                                        block: 'text',
                                                        mods: {
                                                            view: 'brand',
                                                            align: 'center',
                                                            size: '18-24-36',
                                                            weight: 'semibold',
                                                        },
                                                        mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                        content: {
                                                            html: 'Подпишись на новости I&nbspAM&nbspWOMEN <br> и получите скидку 5% на&nbspследующую покупку'
                                                        }
                                                    },
                                                    {
                                                        block: 'pt-form',
                                                        mix: { block: 'form' },
                                                        content: [
                                                            {
                                                                elem: 'item', elemMods: { 'vertical-align': 'center' },
                                                                content: [
                                                                    {
                                                                        block: 'input',
                                                                        mods: {
                                                                            theme: 'f',
                                                                            size: 'l',
                                                                            type: 'search'
                                                                        },
                                                                        placeholder: 'Ваш E-mail',
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem: 'item',
                                                                mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                content: {
                                                                    block: 'button', mods: { size: 'm', 'view': 'primary', width: 'full' },
                                                                    content: 'Подписаться'
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: {
                                                            view: 'primary',
                                                            align: 'center',
                                                            size: '10-11-12',
                                                            weight: 'light',
                                                        },
                                                        mix: [
                                                            { block: 'theme', mods: { font: 'openSans' }},
                                                        ],
                                                        content: {
                                                            html: 'Подписываясь на новости, вы даёте согласие <br> на обработку персональных данных'
                                                        }
                                                    },
                                                ]
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                // footer
                {
                   block: 'footer',
                   content: [
                       {
                           elem: 'section-left',
                           content: {
                                block: 'pt-list',
                                mix: [
                                    { block: 'footer', elem: 'menu' },
                                    { block: 'text', mods: { view: 'primary' }},
                                ],
                                content: [
                                    {
                                        elem: 'item',
                                        mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Каталог'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Пальто'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Жилеты и жакеты'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Костюмы'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Трикотаж'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Платья'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Блузы и топы'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Футболки'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Юбки и брюки'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Аксессуары'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'О бренде'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Оферта'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Оплата и доставка'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Возврат'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Контакты'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Sale'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'New'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Looks'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            attrs: { href: '#' },
                                            mix: { block: 'text', mods: { view: 'link-primary' }},
                                            content: 'Блог'
                                        }
                                    }
                                ]
                            },
                       },
                       {
                           elem: 'section-right',
                           content: [
                               {
                                   block: 'pt-list',
                                   content: [
                                       {
                                           elem: 'item', elemMods: { distribute: 'default' },
                                           mix: [
                                               { block: 'decorator', mods: { 'indent-b': 's' }},
                                               { block: 'contacts' },
                                               { block: 'text',
                                               mods: {
                                                   size: '16-16-18',
                                                   view: 'primary',
                                               },}
                                           ],
                                           content: [
                                                {
                                                    block: 'text',
                                                    mix: { block: 'contacts', elem: 'intro' },
                                                    content: 'Звонок с сайта:'
                                                },
                                                {
                                                    block: 'link',
                                                    mix: [
                                                        { block: 'contacts', elem: 'number' },
                                                        { block: 'text',
                                                            mods: {
                                                                view: 'primary',
                                                            }
                                                        }
                                                    ],
                                                    attrs: { href: 'tel:84957929312' },
                                                    mix: { block: 'text', mods: { view: 'link-primary' }},
                                                    content: '+7 495 792 93 12'
                                                }
                                           ]
                                       },
                                       {
                                           elem: 'item', elemMods: { distribute: 'default' },
                                           mix: { block: 'socials' },
                                           content: [
                                               {
                                                   block: 'text',
                                                   mods: {
                                                       size: 'm',
                                                       view: 'primary',
                                                   },
                                                   mix: { block: 'socials', elem: 'intro' },
                                                   content: [
                                                       {
                                                           tag: 'span',
                                                           content: 'Присоединяйся'
                                                       },
                                                       {
                                                           tag: 'span',
                                                           content: ' к нам'
                                                       },
                                                       {
                                                           tag: 'span',
                                                           content: ':'
                                                       }
                                                   ]
                                               },
                                               {
                                                   block: 'pt-list',
                                                   mix: { block: 'theme', mods: { font:'openSans' }},
                                                   content: [
                                                        {
                                                            elem: 'item', elemMods: { 'indent-r': 'l' },
                                                            mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                            content: [
                                                                {
                                                                    block: 'link',
                                                                    attrs: { href: '#' },
                                                                    mix: { block: 'text', mods: { size: 'm', view: 'link-primary' }},
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        content: 'Facebook'
                                                                    }
                                                                }
                                                            ]
                                                       },
                                                       {
                                                           elem: 'item', elemMods: {'indent-r': 'l'},
                                                           mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                           content: [
                                                                {
                                                                    block: 'link',
                                                                    attrs: { href: '#' },
                                                                    mix: { block: 'text', mods: { size: 'm', view: 'link-primary' }},
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        content: 'Youtube'
                                                                    }
                                                                }
                                                           ]
                                                       },
                                                       {
                                                           elem: 'item', elemMods: {'indent-r': ''},
                                                           mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                           content: [
                                                                {
                                                                    block: 'link',
                                                                    attrs: { href: '#' },
                                                                    mix: { block: 'text', mods: { size: 'm', view: 'link-primary' }},
                                                                    content: {
                                                                        block: 'text',
                                                                        tag: 'span',
                                                                        content: 'Vkontakte'
                                                                    }
                                                                }
                                                           ]
                                                       }
                                                   ]
                                               },
                                           ]
                                       },
                                       {
                                           elem: 'item', elemMods: { distribute: 'default' },
                                           mix: [
                                               { block: 'decorator', mods: { 'indent-b': 's' }},
                                               { block: 'pay' }
                                           ],
                                           content: [
                                               {
                                                   block: 'text',
                                                   mix: { block: 'pay', elem: 'intro' },
                                                   mods: {
                                                       size: 'm',
                                                       view: 'primary',
                                                       weight: ''
                                                   },
                                                   content: 'Принимаем к оплате:'
                                               },
                                               {
                                                   block: 'pt-list',
                                                   mix: { block: 'pay', elem: 'list' },
                                                   content: [
                                                       // visa
                                                       {
                                                           elem: 'item',
                                                           mix: { block: 'pt-icon-plus' } ,
                                                           content: [
                                                               {
                                                                   block: 'pt-icon-plus', elem: 'icon', elemMods: {'indent-r': 'l'},
                                                                   content: {
                                                                       block: 'image',
                                                                       url: '../../common.blocks/image/visa.svg',
                                                                       width:'36',
                                                                       alt: ''
                                                                   }
                                                               },
                                                               {
                                                                   block: 'pt-icon-plus', elem: 'block',
                                                                   attrs: { style: 'font-size: 0' },
                                                                   content: 'visa'
                                                               }
                                                           ]
                                                       },
                                                       // masterCard
                                                       {
                                                           elem: 'item',
                                                           mix: { block: 'pt-icon-plus' } ,
                                                           content: [
                                                               {
                                                                   block: 'pt-icon-plus', elem: 'icon', elemMods: {'indent-r': 'l'},
                                                                   content: {
                                                                       block: 'image',
                                                                       url: '../../common.blocks/image/mastercard.svg',
                                                                       width:'57',
                                                                       alt: ''
                                                                   }
                                                               },
                                                               {
                                                                   block: 'pt-icon-plus', elem: 'block',
                                                                   attrs: { style: 'font-size: 0' },
                                                                   content: 'masterCard'
                                                               }
                                                           ]
                                                       },
                                                       // PayPal
                                                       {
                                                           elem: 'item',
                                                           mix: { block: 'pt-icon-plus' } ,
                                                           content: [
                                                               {
                                                                   block: 'pt-icon-plus', elem: 'icon', elemMods: {'indent-r': ''},
                                                                   content: {
                                                                       block: 'image',
                                                                       url: '../../common.blocks/image/paypal.svg',
                                                                       width:'36',
                                                                       alt: ''
                                                                   }
                                                               },
                                                               {
                                                                   block: 'pt-icon-plus', elem: 'block',
                                                                   attrs: { style: 'font-size: 0' },
                                                                   content: 'PayPal'
                                                               }
                                                           ]
                                                       },
                                                   ]
                                               },

                                           ]
                                       },
                                       {
                                           elem: 'item', elemMods: { distribute: 'default' },
                                           mix: [
                                               { block: 'decorator', mods: { 'indent-b': 's' }},
                                               { block: 'pay-comment', }
                                           ],
                                           content: [
                                               {
                                                   block: 'text',
                                                   mix: { block: 'pay-comment', elem: 'intro' },
                                                   mods: {
                                                       size: 'm',
                                                       view: 'primary',
                                                   },
                                                   content: 'Примечание к оплате:'
                                               },
                                               {
                                                   block: 'text',
                                                   mods: {
                                                       align: '',
                                                       decoration: '',
                                                       display: '',
                                                       font: '',
                                                       size: 's',
                                                       spacing: '',
                                                       style: '',
                                                       transform: '',
                                                       type: '',
                                                       view: 'primary',
                                                       weight: ''
                                                   },
                                                   mix: [
                                                       { block: 'pay-comment', elem : 'comment' }
                                                   ],
                                                   content: [
                                                       {
                                                           tag: 'span',
                                                           content: 'Вы можете оплатить наличными при '
                                                       },
                                                       {
                                                           tag: 'span',
                                                           content: 'получении либо выбрать другой'
                                                       },
                                                        {
                                                            block: 'link',
                                                            attrs: { href: '#' },
                                                            mix: {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 's',
                                                                    view: 'link-primary',
                                                                    decoration: 'underline',
                                                                    weight: 'bold'
                                                                },
                                                            },
                                                            content: ' способ оплаты'
                                                        }
                                                   ]
                                               }
                                           ]
                                       }
                                   ]
                               },
                               {
                                   block: 'text',
                                   mix: { block: 'footer', elem: 'copyright' },
                                   mods: {
                                       view: 'primary',
                                       align: 'right',
                                       size: 'm',
                                       weight: 'regular',
                                       transform: 'uppercase'
                                   },
                                   content: ' © 2008–2018 I AM WOMEN'
                               },
                           ]
                       },
                    ]
                },
            ]
        },
    ]
};
