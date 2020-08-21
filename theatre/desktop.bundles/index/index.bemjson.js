module.exports = {
    block: 'page',
    title: 'Grand Theatre',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap' },
        { elem: 'css', url: 'index.min.css' },
    ],
    scripts: [
        { elem: 'js', url: '/my-menu/my-menu.js' },
        { elem: 'js', url: 'index.min.js' },
    ],
    mods: { theme: '' },
    mix: {
        block: 'theme',
        mods: { color: 'whitepaper-portal-inverse', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: '' }
    },
    content: [{
            tag: 'header',
            block: 'tpl-layout',
            content: {
                elem: 'section',
                content: {
                    elem: 'content',
                    content: {
                        elem: 'section',
                        content: {
                            elem: 'container',
                            elemMods: { distribute: 'center', size: 'm' },
                            content: {
                                block: 'main-header',
                                content: [{
                                    tag: 'nav',
                                    block: 'main-navigation',
                                    content: [{
                                            tag: 'h2',
                                            elem: 'title',
                                            content: 'главное меню'
                                        },
                                        {
                                            tag: 'button',
                                            block: 'btn',
                                            mods: { for: 'main-navigation-handle' },
                                            mix: { block: 'main-navigation', elem: 'handle' },
                                            attrs: { type: 'button', 'data-open-text': "Показать меню", 'data-close-text': "Скрыть меню" },
                                            content: [{
                                                    tag: 'span',
                                                    elem: 'icon',
                                                    mix: { block: 'main-navigation', elem: 'handle-icon' },
                                                    content: [
                                                        { tag: 'span', block: 'main-navigation', elem: 'handle-icon-line' },
                                                        { tag: 'span', block: 'main-navigation', elem: 'handle-icon-line' },
                                                        { tag: 'span', block: 'main-navigation', elem: 'handle-icon-line' },
                                                    ]
                                                },
                                                {
                                                    tag: 'span',
                                                    elem: 'text',
                                                    mix: { block: 'main-navigation', elem: 'handle-text' },
                                                    content: 'Показать меню'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'content',
                                            content: [{
                                                    block: 'new-menu',
                                                    mix: { block: 'main-header', elem: 'menu' },
                                                    content: [{
                                                            elem: 'item',
                                                            content: {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 'm',
                                                                    view: 'primary',
                                                                    weight: 'bold',
                                                                    transform: 'uppercase'
                                                                },
                                                                mix: { block: 'new-menu', elem: 'link' },
                                                                tag: 'a',
                                                                attrs: { href: '#1' },
                                                                content: 'Главная'
                                                            },
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 'm',
                                                                    view: 'primary',
                                                                    weight: 'bold',
                                                                    transform: 'uppercase'
                                                                },
                                                                mix: { block: 'new-menu', elem: 'link' },
                                                                tag: 'a',
                                                                attrs: { href: '#2' },
                                                                content: 'О театре'
                                                            }
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 'm',
                                                                    view: 'primary',
                                                                    weight: 'bold',
                                                                    transform: 'uppercase'
                                                                },
                                                                mix: { block: 'new-menu', elem: 'link' },
                                                                tag: 'a',
                                                                attrs: { href: '#3' },
                                                                content: 'наши постановки'
                                                            }
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 'm',
                                                                    view: 'primary',
                                                                    weight: 'bold',
                                                                    transform: 'uppercase'
                                                                },
                                                                mix: { block: 'new-menu', elem: 'link' },
                                                                tag: 'a',
                                                                attrs: { href: '#4' },
                                                                content: 'партнеры театра'
                                                            }
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 'm',
                                                                    view: 'primary',
                                                                    weight: 'bold',
                                                                    transform: 'uppercase'
                                                                },
                                                                mix: { block: 'new-menu', elem: 'link' },
                                                                tag: 'a',
                                                                attrs: { href: '#5' },
                                                                content: 'контакты'
                                                            }
                                                        },
                                                    ]
                                                },
                                                {
                                                    elem: 'social-networks',
                                                    content: {
                                                        block: 'info',
                                                        content: [{
                                                                block: 'text',
                                                                mix: { block: 'info', elem: 'text' },
                                                                mods: {
                                                                    view: 'primary',
                                                                    size: 'm',
                                                                    weight: 'bold',
                                                                    transform: 'uppercase'
                                                                },
                                                                content: '----------- контактная информация'
                                                            },
                                                            {
                                                                block: 'pt-list',
                                                                mix: [{ block: 'socials', mods: { view: 'info' } }, { block: 'info', elem: 'socials' }, ],
                                                                content: [{
                                                                        elem: 'item',
                                                                        mix: { block: 'socials', elem: 'item', },
                                                                        content: {
                                                                            block: 'socials',
                                                                            elem: 'link',
                                                                            attrs: { href: '#' },
                                                                            content: {
                                                                                block: 'pt-icon-plus',
                                                                                mods: { 'vertical-align': 'top' },
                                                                                content: [{
                                                                                        elem: 'icon',
                                                                                        content: {
                                                                                            block: 'icon',
                                                                                            mods: {
                                                                                                size: 'm',
                                                                                                view: 'primary'
                                                                                            },
                                                                                            content: {
                                                                                                html: '<svg width="24" height="24" viewBox="0 0 21 20"><path d="M16.195 3.585a1.207 1.207 0 1 0-.001 2.414 1.207 1.207 0 0 0 .001-2.414zm2.792 9.414c0 3.364-1.636 4.999-5 4.999H7.988c-3.364 0-5-1.635-5-5V7c0-3.364 1.636-5 5-5h6c3.363 0 5 1.636 5 5v5.999zm-5-13H7.988C3.538 0 .99 2.55.99 7v6c0 4.45 2.548 6.999 7 6.999h5.998c4.451 0 7-2.548 7-7V7c0-4.451-2.549-7-7-7zm-2.999 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-8a4.999 4.999 0 1 0 0 10 4.999 4.999 0 0 0 0-10z" fill="" stroke="none"></path></svg>'
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'block',
                                                                                        elemMods: { 'indent-l': 's' },
                                                                                        attrs: { style: 'font-size: 0;' },
                                                                                        content: 'Instagram'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        mix: { block: 'socials', elem: 'item', },
                                                                        content: {
                                                                            block: 'socials',
                                                                            elem: 'link',
                                                                            attrs: { href: '#' },
                                                                            content: {
                                                                                block: 'pt-icon-plus',
                                                                                mods: { 'vertical-align': 'top' },
                                                                                content: [{
                                                                                        elem: 'icon',
                                                                                        content: {
                                                                                            block: 'icon',
                                                                                            mods: {
                                                                                                size: 'm',
                                                                                                view: 'primary'
                                                                                            },
                                                                                            content: {
                                                                                                html: '<svg width="24" height="24" id="svg-facebook" viewBox="0 0 21 20"><path d="M18.982 0H2.983A2 2 0 0 0 .984 2v15.998c0 1.105.894 2 2 2h8.998v-8H8.983v-3h3V6.67a3.544 3.544 0 0 1 3.666-3.542l2.333.08V6h-2.045a.956.956 0 0 0-.955.955v2.044h3l-.584 3h-2.416v7.999h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2" fill="" stroke="none"></path></svg>'
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'block',
                                                                                        elemMods: { 'indent-l': 's' },
                                                                                        attrs: { style: 'font-size: 0;' },
                                                                                        content: 'Facebook'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        mix: { block: 'socials', elem: 'item', },
                                                                        content: {
                                                                            block: 'socials',
                                                                            elem: 'link',
                                                                            attrs: { href: '#' },
                                                                            content: {
                                                                                block: 'pt-icon-plus',
                                                                                mods: { 'vertical-align': 'top' },
                                                                                content: [{
                                                                                        elem: 'icon',
                                                                                        content: {
                                                                                            block: 'icon',
                                                                                            mods: {
                                                                                                size: 'm',
                                                                                                view: 'primary'
                                                                                            },
                                                                                            content: {
                                                                                                html: '<svg width="24" height="24" id="svg-youtube" viewBox="0 0 22 16"><path d="M9 5v6l5.5-3.056L9 5m1.812 11c-1.723-.042-3.61-.074-5.497-.138a26.226 26.226 0 0 1-2.418-.197c-1.312-.166-2.129-.936-2.474-2.256-.162-.616-.231-1.243-.286-1.874a38.811 38.811 0 0 1-.118-4.536C.053 5.813.14 4.63.24 3.45c.047-.55.21-1.081.442-1.583C1.118.924 1.872.41 2.854.292 3.704.189 4.564.146 5.42.12 7.22.063 9.022.01 10.823 0c1.548-.007 3.098.045 4.648.078a48.4 48.4 0 0 1 1.992.076c.641.04 1.29.057 1.918.18 1.016.2 1.713.834 2.07 1.85.212.606.323 1.23.382 1.87.16 1.685.195 3.375.148 5.064a57.833 57.833 0 0 1-.221 3.402 4.716 4.716 0 0 1-.467 1.643c-.453.935-1.219 1.448-2.202 1.531-1.43.122-2.868.182-4.302.235-1.27.046-2.542.047-3.977.071" fill="" stroke=""></path></svg>'
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'block',
                                                                                        elemMods: { 'indent-l': 's' },
                                                                                        attrs: { style: 'font-size: 0;' },
                                                                                        content: 'Youtube'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    },
                                                                    {
                                                                        elem: 'item',
                                                                        mix: { block: 'socials', elem: 'item', },
                                                                        content: {
                                                                            block: 'socials',
                                                                            elem: 'link',
                                                                            attrs: { href: '#' },
                                                                            content: {
                                                                                block: 'pt-icon-plus',
                                                                                mods: { 'vertical-align': 'top' },
                                                                                content: [{
                                                                                        elem: 'icon',
                                                                                        content: {
                                                                                            block: 'icon',
                                                                                            mods: {
                                                                                                size: 'm',
                                                                                                view: 'primary'
                                                                                            },
                                                                                            content: {
                                                                                                html: '<svg width="24" height="24" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M25.862 12.643a1.654 1.654 0 0 0-.088-.16c-.451-.766-1.313-1.707-2.586-2.823l-.026-.025-.014-.013-.014-.013h-.013c-.578-.52-.943-.869-1.096-1.048-.28-.34-.343-.685-.19-1.035.108-.264.514-.821 1.218-1.673.37-.451.663-.813.88-1.086 1.561-1.959 2.238-3.21 2.03-3.756l-.08-.127c-.054-.077-.194-.147-.42-.211-.226-.064-.514-.075-.866-.032l-3.899.025a.535.535 0 0 0-.27.007L20.25.71l-.068.032-.053.039a.59.59 0 0 0-.15.134.868.868 0 0 0-.134.223 20.36 20.36 0 0 1-1.45 2.875c-.333.528-.64.986-.92 1.373-.28.388-.514.673-.703.856-.19.183-.361.33-.515.44-.153.112-.27.158-.352.141a10.423 10.423 0 0 1-.23-.05.87.87 0 0 1-.305-.314 1.345 1.345 0 0 1-.155-.498 5.215 5.215 0 0 1-.048-.518c-.004-.144-.002-.349.007-.613.01-.264.014-.443.014-.536 0-.324.006-.675.02-1.054.014-.38.024-.68.034-.901.009-.222.013-.456.013-.703 0-.247-.016-.44-.047-.581a1.906 1.906 0 0 0-.142-.409.701.701 0 0 0-.277-.307 1.618 1.618 0 0 0-.454-.172C13.858.066 13.25.01 12.508.002 10.83-.015 9.751.087 9.273.309c-.19.093-.361.221-.514.383-.163.187-.185.29-.068.306.541.077.925.26 1.15.55l.082.153c.063.11.126.307.19.588.063.28.103.592.121.932a9.376 9.376 0 0 1 0 1.597c-.045.443-.088.788-.129 1.035-.04.247-.101.447-.182.6a2.495 2.495 0 0 1-.163.281.227.227 0 0 1-.067.064c-.118.043-.24.064-.366.064s-.28-.06-.46-.179a3.185 3.185 0 0 1-.562-.492 6.595 6.595 0 0 1-.657-.875 15.013 15.013 0 0 1-.758-1.328l-.216-.37c-.135-.24-.32-.586-.555-1.042a19.527 19.527 0 0 1-.623-1.323.85.85 0 0 0-.325-.408L5.104.806a.945.945 0 0 0-.217-.108 1.504 1.504 0 0 0-.311-.083L.866.64C.489.64.23.721.096.883L.04.96A.394.394 0 0 0 0 1.164c0 .094.027.209.081.345a41.17 41.17 0 0 0 1.767 3.475C2.484 6.1 3.037 7 3.506 7.68c.47.681.948 1.324 1.435 1.929.487.604.81.992.968 1.162.158.17.282.298.372.384l.339.306c.216.205.534.45.954.735.42.285.884.566 1.394.843a7.83 7.83 0 0 0 1.78.677 6.503 6.503 0 0 0 1.977.211h1.557c.316-.026.555-.12.717-.281l.054-.064c.036-.05.07-.13.101-.236.032-.107.048-.224.048-.351-.01-.367.02-.697.088-.99.067-.294.144-.516.23-.665.086-.149.183-.274.291-.377.108-.102.185-.163.23-.185a.891.891 0 0 1 .108-.045c.217-.068.472-.002.766.199.293.2.568.447.825.74.258.295.567.624.928.99.36.367.677.64.947.818l.27.154c.182.102.416.196.705.28.288.086.541.107.758.065l3.465-.051c.343 0 .61-.054.799-.16.19-.107.302-.224.338-.351a.934.934 0 0 0 .007-.435 1.534 1.534 0 0 0-.095-.338z" fill="" fill-opacity=""/></svg>'
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        elem: 'block',
                                                                                        elemMods: { 'indent-l': 's' },
                                                                                        attrs: { style: 'font-size: 0;' },
                                                                                        content: 'Vkontakte'
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }
                                                                    }
                                                                ]
                                                            },
                                                        ]
                                                    },
                                                }
                                            ]
                                        },
                                        {
                                            block: 'text',
                                            tag: 'a',
                                            attrs: { href: '#', style: 'z-index: 1;' },
                                            mods: {
                                                size: 'm',
                                                view: 'primary',
                                                weight: 'bold',
                                                transform: 'uppercase'
                                            },
                                            content: '+7 495 123-45-67'
                                        },
                                    ]
                                }, ],
                            },
                        }
                    }
                }
            }
        },
        {
            tag: 'main',
            block: 'tpl-layout',
            content: [{
                    elem: 'section',
                    attrs: { id: '1' },
                    content: [{
                        elem: 'content',
                        mix: { block: 'section-bg-1' },
                        content: {
                            elem: 'container',
                            elemMods: { distribute: 'center', size: 'm' },
                            content: [{
                                block: 'tpl-grid',
                                mods: {
                                    'col-gap': 'full',
                                    // 'row-gap': 'full',
                                    's-columns': 8,
                                    'm-columns': 12,
                                },
                                mix: { block: 'afisha' },
                                content: [{
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': 1,
                                            'm-col': 1,
                                        },
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': 7,
                                            'm-col': 7,
                                        },
                                        attrs: { style: 'margin: 0 auto;' },
                                        content: [{
                                                block: 'text',
                                                tag: 'h1',
                                                mods: {
                                                    type: 'h1',
                                                    size: '4xl',
                                                    view: 'primary',
                                                    weight: 'bold',
                                                    transform: 'uppercase'
                                                },
                                                content: 'большой театр'
                                            },
                                            {
                                                block: 'text',
                                                tag: 'p',
                                                attrs: { style: 'max-width: 540px' },
                                                mods: {
                                                    type: 'p',
                                                    size: 'm',
                                                    view: 'primary',
                                                    weight: 'normal',

                                                },
                                                content: 'Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года — Петербургская консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных зданий в Европе XVIII.'
                                            },
                                            {
                                                block: 'button',
                                                mix: { block: 'decorator', mods: { 'indent-t': 'xl' } },
                                                mods: {
                                                    theme: 'islands',
                                                    size: 'xl',
                                                },
                                                text: 'Афиша'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: {
                                            's-col': 'hidden',
                                            'm-col': 4,
                                        },
                                        // carousel
                                        content: {
                                            block: 'carousel',
                                            attrs: { style: 'width: 280px;' },
                                            mods: { orientation: 'horizontal', animate: true },
                                            content: [{
                                                    elem: 'inner',
                                                    content: [
                                                        // элемент карусели
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'image',
                                                                width: '280',
                                                                height: '400',
                                                                alt: 'репертуар 1',
                                                                url: "../../common.blocks/image/carousel/image2.jpg"
                                                            }
                                                        },
                                                        // элемент карусели
                                                        {
                                                            elem: 'item',
                                                            elemMods: { state: 'active', },
                                                            content: {
                                                                block: 'image',
                                                                width: '280',
                                                                height: '400',
                                                                alt: 'репертуар 2',
                                                                url: "../../common.blocks/image/carousel/image1.png"
                                                            }
                                                        },
                                                        // элемент карусели
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'image',
                                                                width: '280',
                                                                height: '400',
                                                                alt: 'репертуар 3',
                                                                url: "../../common.blocks/image/carousel/image3.jpg"
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'control',
                                                    elemMods: { type: 'left' },
                                                    content: {
                                                        block: 'pt-icon-plus',
                                                        mods: { distribute: 'between' },
                                                        content: [{
                                                                elem: 'icon',
                                                                content: {
                                                                    block: 'icon',
                                                                    mods: { size: '', name: 'arrow-left', view: 'primary' },
                                                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                                                    content: {
                                                                        html: '<svg xmlns="http://www.w3.org/2000/svg" width="41" height="16" viewBox="0 0 41 16" fill=""><path d="M0.292892 7.2929C-0.0976296 7.68342 -0.0976295 8.31659 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928935C7.68054 0.538411 7.04738 0.538411 6.65685 0.928935L0.292892 7.2929ZM41 7L1 7L1 9L41 9L41 7Z" fill=""/></svg>'
                                                                    }
                                                                },
                                                            },
                                                            {
                                                                elem: 'block',
                                                                content: [{
                                                                    block: 'text',
                                                                    mods: {
                                                                        size: 'l',
                                                                        view: 'primary',
                                                                        weight: '',
                                                                        transform: 'uppercase'
                                                                    },
                                                                    content: 'Пред'
                                                                }, ]
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'control',
                                                    elemMods: { type: 'right' },
                                                    content: [{
                                                        block: 'pt-icon-plus',
                                                        mods: { distribute: 'between' },
                                                        content: [{
                                                                elem: 'block',
                                                                content: [{
                                                                    block: 'text',
                                                                    mods: {
                                                                        size: 'l',
                                                                        view: 'primary',
                                                                        weight: '',
                                                                        transform: 'uppercase'
                                                                    },
                                                                    content: 'след'
                                                                }, ]
                                                            },
                                                            {
                                                                elem: 'icon',
                                                                content: {
                                                                    block: 'icon',
                                                                    mods: { size: '', name: 'arrow-left', view: 'primary' },
                                                                    mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                                                    content: {
                                                                        html: '<svg xmlns="http://www.w3.org/2000/svg" width="41" height="16" viewBox="0 0 41 16" fill=""><path d="M40.7071 8.70711C41.0976 8.31659 41.0976 7.68342 40.7071 7.2929L34.3431 0.928938C33.9526 0.538414 33.3195 0.538414 32.9289 0.928938C32.5384 1.31946 32.5384 1.95263 32.9289 2.34315L38.5858 8.00001L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM-1.74846e-07 9L40 9.00001L40 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill=""/></svg>'
                                                                    }
                                                                },
                                                            },
                                                        ]
                                                    }]
                                                },
                                            ]
                                        },
                                    },
                                ]
                            }, ],
                        }
                    }, ]
                },
                // о театре
                {
                    elem: 'section',
                    attrs: { id: '2' },
                    content: [{
                            elem: 'heading',
                            content: {
                                block: 'text',
                                tag: 'h2',
                                mods: {
                                    type: 'h2',
                                    size: '3xl',
                                    view: 'primary',
                                    weight: 'bold',
                                    align: 'center',
                                    transform: 'uppercase'
                                },
                                content: [{
                                        tag: 'span',
                                        block: 'text',
                                        mods: {
                                            view: 'brand',
                                            display: 'inline'
                                        },
                                        mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                        content: 'о'
                                    },
                                    {
                                        tag: 'span',
                                        block: 'text',
                                        mods: {
                                            view: 'primary',
                                            display: 'inline'
                                        },
                                        content: 'театре'
                                    }
                                ]
                            }
                        },
                        {
                            elem: 'content',
                            content: {
                                elem: 'container',
                                elemMods: { distribute: 'center', size: 'm' },
                                content: {
                                    block: 'tpl-grid',
                                    mods: {
                                        'col-gap': 'full',
                                        'row-gap': 'full',
                                        's-columns': 8,
                                        'm-columns': 12,
                                    },
                                    content: [{
                                            elem: 'fraction',
                                            elemMods: {
                                                's-col': 5,
                                                'm-col': 5,
                                            },
                                            content: [{
                                                    block: 'text',
                                                    mods: {
                                                        size: 'xl',
                                                        type: 'p',
                                                        view: 'primary',
                                                        weight: 'bold',
                                                        transform: 'uppercase',
                                                        align: 'center'
                                                    },
                                                    content: 'Самый лучший театр СПБ'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        size: 'm',
                                                        type: 'p',
                                                        view: 'primary',
                                                        align: 'center'
                                                    },
                                                    content: 'Как свидетельствуют архивные документы, первое каменное здание Большого театра начали возводить в 1775 году по проекту Антонио Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не мог лично наблюдать за ходом работ, Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу Филиппу Тишбейну создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М. А. Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом открытия можно считать 1784 год.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'fraction',
                                            elemMods: {
                                                's-col': 3,
                                                'm-col': 2,
                                            },
                                            content: [{
                                                    block: 'text',
                                                    mods: {
                                                        size: 'l',
                                                        type: 'p',
                                                        view: 'primary',
                                                        weight: 'bold',
                                                        transform: 'uppercase'
                                                    },
                                                    content: 'немного о цифрах'
                                                },
                                                {
                                                    block: 'pt-icon-plus',
                                                    mods: {
                                                        'xs-direction': 'column'
                                                    },
                                                    content: [{
                                                            elem: 'icon',
                                                            content: {
                                                                block: 'icon',
                                                                mods: {
                                                                    view: 'primary'
                                                                },
                                                                content: {
                                                                    html: '<svg width="70" height="70" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M27.667 12.538h-.944v-.944a1.026 1.026 0 1 0-2.052 0v.944h-.944a1.026 1.026 0 0 0 0 2.052h.944v.944a1.026 1.026 0 1 0 2.052 0v-.944h.944a1.026 1.026 0 1 0 0-2.052zm18.605 0h-.944v-.944a1.026 1.026 0 0 0-2.052 0v.944h-.945a1.026 1.026 0 1 0 0 2.052h.945v.944a1.026 1.026 0 1 0 2.052 0v-.944h.944a1.026 1.026 0 1 0 0-2.052zM27.667 26.629h-.944v-.944a1.026 1.026 0 1 0-2.052 0v.945h-.944a1.026 1.026 0 0 0 0 2.051h.944v.945a1.026 1.026 0 1 0 2.052 0v-.945h.944a1.026 1.026 0 1 0 0-2.052zm18.605 0h-.944v-.944a1.026 1.026 0 1 0-2.052 0v.945h-.945a1.026 1.026 0 0 0 0 2.051h.945v.945a1.026 1.026 0 1 0 2.052 0v-.945h.944a1.026 1.026 0 1 0 0-2.052z" fill=""/><path d="M63.456 29.052H49.879c-1.16 0-2.103.943-2.103 2.103v2.778c0 1.16.943 2.103 2.103 2.103h.197v4.644a5.338 5.338 0 0 0-3.313-1.15H22.968c-1.25 0-2.401.43-3.314 1.15v-4.654h.467c1.16 0 2.103-.944 2.103-2.103v-2.778c0-1.16-.943-2.103-2.103-2.103H6.544c-1.16 0-2.103.943-2.103 2.103v2.778c0 1.16.943 2.103 2.103 2.103h.467V49.12a4.019 4.019 0 0 0 3.663 3.998v2.046a2.95 2.95 0 0 0 2.947 2.948h2.351v9.836h-1.469a1.026 1.026 0 1 0 0 2.052h10.252a1.026 1.026 0 0 0 0-2.052h-1.47v-9.836h23.16v9.836h-1.47a1.026 1.026 0 1 0 0 2.052h10.252a1.026 1.026 0 0 0 0-2.052h-1.469v-9.836h2.351a2.95 2.95 0 0 0 2.947-2.948v-2.046a4.019 4.019 0 0 0 3.663-3.998V36.037h.737c1.16 0 2.104-.944 2.104-2.103v-2.778c0-1.16-.944-2.103-2.104-2.103zm-40.489 12.53h23.796a3.318 3.318 0 0 1 3.314 3.314v6.187H19.654v-6.187a3.318 3.318 0 0 1 3.314-3.314zM6.545 33.974a.052.052 0 0 1-.051-.051v-2.778c0-.028.023-.051.051-.051h13.577c.028 0 .051.023.051.051v2.778a.052.052 0 0 1-.051.051H6.544zm4.481 17.109a1.964 1.964 0 0 1-1.962-1.962V36.026h8.539v15.057h-6.577zm10.209 16.865h-3.21v-9.836h3.21v9.836zm30.472 0h-3.21v-9.836h3.21v9.836zm5.298-12.784a.896.896 0 0 1-.895.896H13.621a.896.896 0 0 1-.895-.896v-2.03h44.278v2.03zm3.663-6.043c0 1.081-.88 1.962-1.962 1.962h-6.576V36.036h8.538v13.085zm2.84-15.188a.052.052 0 0 1-.05.051H49.878a.052.052 0 0 1-.051-.051v-2.778c0-.028.023-.051.051-.051h13.577c.028 0 .052.023.052.051v2.778zM57.697 8.455C57.696 3.793 53.903 0 49.24 0H20.486c-4.662 0-8.455 3.793-8.455 8.455V25.27a1.026 1.026 0 0 0 2.052 0V8.455a6.41 6.41 0 0 1 6.403-6.403h28.755c3.53 0 6.403 2.872 6.403 6.408l.08 16.814a1.026 1.026 0 0 0 1.025 1.02h.005a1.026 1.026 0 0 0 1.021-1.03l-.08-16.809z" fill=""/></svg>'
                                                                }
                                                            }
                                                        },
                                                        {
                                                            elem: 'block',
                                                            content: {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 'm',
                                                                    type: 'p',
                                                                    view: 'primary',
                                                                    transform: 'uppercase'
                                                                },
                                                                content: '1600 посадочный мест'
                                                            },
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'pt-icon-plus',
                                                    mods: {
                                                        'xs-direction': 'column'
                                                    },
                                                    content: [{
                                                            elem: 'icon',
                                                            content: {
                                                                block: 'icon',
                                                                mods: {
                                                                    view: 'primary'
                                                                },
                                                                content: {
                                                                    html: '<svg width="70" height="70" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M68.927 33.641V3.936c0-.567-.46-1.027-1.027-1.027H2.1c-.567 0-1.027.46-1.027 1.027V33.64A2.011 2.011 0 0 0 0 35.418v2.108c0 .77.436 1.44 1.073 1.777v26.761c0 .567.46 1.027 1.027 1.027h65.8c.567 0 1.027-.46 1.027-1.027V39.303A2.011 2.011 0 0 0 70 37.526v-2.108c0-.77-.436-1.44-1.073-1.777zM66.486 4.963c-.412.604-1.171 1.313-2.373 2.068l-.044.028a17.047 17.047 0 0 1-.315.19l-.169.099-.138.08-.138.076-.173.096-.032.017c-.148.08-.303.16-.46.241l-.128.065-.185.091-.172.084a23.06 23.06 0 0 1-.834.385l-.068.03c-.42.184-.866.369-1.342.553-.615.239-1.271.475-1.973.707A57.443 57.443 0 0 1 51.84 11.4a1.047 1.047 0 0 0-.103.015c-2.045.428-4.197.78-6.397 1.046-.028.004-.055.01-.082.015A87.003 87.003 0 0 1 35 13.077a87.05 87.05 0 0 1-10.257-.6c-.027-.006-.054-.012-.082-.015a75.83 75.83 0 0 1-6.397-1.046 1.017 1.017 0 0 0-.103-.016 57.48 57.48 0 0 1-6.103-1.627 40.953 40.953 0 0 1-1.973-.707 33.528 33.528 0 0 1-1.342-.552l-.068-.031a29.615 29.615 0 0 1-.666-.304l-.168-.08-.172-.084c-.062-.03-.124-.06-.184-.091l-.128-.065c-.156-.08-.309-.16-.456-.24-.012-.006-.025-.012-.036-.019-.06-.031-.116-.063-.173-.095l-.138-.077-.139-.08a18.083 18.083 0 0 1-.169-.098l-.1-.06a15.709 15.709 0 0 1-.214-.131l-.045-.028c-1.202-.755-1.961-1.463-2.372-2.068h62.97zM3.126 7.569c.317.274.68.553 1.092.835 1.09.755 2.545 1.54 4.476 2.325C8.692 17.18 6.81 24.359 5.2 29.32a1.027 1.027 0 1 0 1.953.634c1.594-4.911 3.444-11.948 3.584-18.461.22.076.445.153.676.229a58.01 58.01 0 0 0 5.326 1.467c-2.17 6.735-5.71 12.287-8.361 15.824a1.027 1.027 0 1 0 1.643 1.232c2.774-3.7 6.487-9.532 8.739-16.629 1.414.277 2.87.518 4.356.72-2.175 5.33-6.527 10.82-9.916 14.6a1.027 1.027 0 1 0 1.53 1.371c6.318-7.048 9.188-12.33 10.49-15.71 3.174.35 6.463.533 9.779.533s6.605-.183 9.779-.534c2.22 5.775 6.89 11.696 10.499 15.721a1.027 1.027 0 0 0 1.53-1.37c-3.393-3.784-7.749-9.277-9.925-14.61a76.495 76.495 0 0 0 4.356-.72c2.254 7.104 5.974 12.942 8.753 16.646a1.025 1.025 0 0 0 1.437.205c.454-.34.546-.984.205-1.437-2.656-3.541-6.201-9.1-8.374-15.842a58.058 58.058 0 0 0 5.326-1.467c.23-.076.455-.153.676-.23.14 6.51 1.988 13.543 3.58 18.45a1.027 1.027 0 0 0 1.954-.633c-1.609-4.959-3.488-12.133-3.49-18.581 1.93-.785 3.385-1.57 4.476-2.325.412-.282.775-.561 1.091-.835v25.839h-5.696c-1.109 0-2.01.901-2.01 2.01v2.108c0 .546.22 1.041.574 1.404a150.237 150.237 0 0 0-2.074 6.832H12.333c-.71-2.57-1.452-4.943-2.074-6.832.355-.363.575-.858.575-1.404v-2.108c0-1.108-.902-2.01-2.01-2.01H3.127V7.568zM2.055 37.482v-2.02H8.78v2.02H2.054zm5.284 27.221a.652.652 0 0 1-.573.334H3.127V39.536h.984c3.74 12.663 4.947 22.043 3.227 25.167zm5.035.334V59.37c0-1.22.993-2.213 2.214-2.213h5.333c1.22 0 2.213.993 2.213 2.213v5.668h-9.76zm11.814 0V59.37c0-1.22.993-2.213 2.214-2.213h5.333c1.22 0 2.213.993 2.213 2.213v5.668h-9.76zm11.814 0V59.37c0-1.22.994-2.213 2.214-2.213h5.333c1.22 0 2.214.993 2.214 2.213v5.668h-9.76zm21.575 0h-9.76V59.37c0-1.22.993-2.213 2.213-2.213h5.333c1.22 0 2.214.993 2.214 2.213v5.668zm2.054 0V59.37a4.272 4.272 0 0 0-4.268-4.267H50.03a4.258 4.258 0 0 0-3.24 1.495 4.258 4.258 0 0 0-3.24-1.495h-5.334a4.259 4.259 0 0 0-3.24 1.495 4.259 4.259 0 0 0-3.241-1.495h-5.333a4.259 4.259 0 0 0-3.24 1.495 4.259 4.259 0 0 0-3.241-1.495h-5.333a4.272 4.272 0 0 0-4.268 4.267v5.668h-.877c2.081-5.26-.893-17.612-3.19-25.501h2.045c.97 2.947 2.24 7.096 3.213 11.31a1.027 1.027 0 1 0 2-.462c-.198-.862-.41-1.721-.628-2.568h44.236c-.22.855-.434 1.722-.634 2.593a1.027 1.027 0 1 0 2.001.462c.974-4.223 2.246-8.382 3.219-11.335h2.045c-2.298 7.889-5.272 20.24-3.19 25.501h-.93zm7.243 0h-3.638a.652.652 0 0 1-.573-.334c-1.72-3.124-.513-12.504 3.227-25.167h.984v25.501zm1.073-27.555H61.22v-2.02h6.726v2.02z" fill=""/></svg>'
                                                                }
                                                            }
                                                        },
                                                        {
                                                            elem: 'block',
                                                            content: {
                                                                block: 'text',
                                                                mods: {
                                                                    size: 'm',
                                                                    type: 'p',
                                                                    view: 'primary',
                                                                    transform: 'uppercase'
                                                                },
                                                                content: '350 лет истории'
                                                            },
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            elem: 'fraction',
                                            elemMods: {
                                                's-col': 12,
                                                'm-col': 5,
                                                'xs-col': 'hidden',
                                                's-col': 'hidden'
                                            },
                                            content: {
                                                block: 'image',
                                                width: '350',
                                                height: '292',
                                                alt: 'большой театр',
                                                url: "../../common.blocks/image/theatre.jpg"
                                            }
                                        },
                                    ]
                                }
                            },
                        }
                    ]
                },
                // наши постановки
                {
                    elem: 'section',
                    attrs: { id: '3' },
                    content: [{
                            elem: 'heading',
                            content: {
                                elem: 'heading',
                                content: {
                                    block: 'text',
                                    tag: 'h2',
                                    mods: {
                                        type: 'h2',
                                        size: '3xl',
                                        view: 'primary',
                                        weight: 'bold',
                                        align: 'center',
                                        transform: 'uppercase'
                                    },
                                    content: [{
                                            tag: 'span',
                                            block: 'text',
                                            mods: {
                                                view: 'brand',
                                                display: 'inline'
                                            },
                                            mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                            content: 'наши'
                                        },
                                        {
                                            tag: 'span',
                                            block: 'text',
                                            mods: {
                                                view: 'primary',
                                                display: 'inline'
                                            },
                                            content: 'постановки'
                                        }
                                    ]
                                }
                            },
                        },
                        {
                            elem: 'content',
                            attrs: { style: 'padding: 0;' },
                            content: {
                                elem: 'container',
                                elemMods: { distribute: 'center', size: '' },
                                content: {
                                    block: 'tpl-grid',
                                    mods: { 'xs-columns': '3', 's-columns': '8' },
                                    content: [{
                                            elem: 'fraction',
                                            elemMods: { 'xs-col': '2', 's-col': '2' },
                                            content: {
                                                block: 'pt-card',
                                                attrs: { style: 'height: 100%;' },
                                                content: [{
                                                        elem: 'image',
                                                        mix: { block: 'production', mods: { image: '1' } },
                                                    },
                                                    {
                                                        elem: 'header',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        },
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                size: '2xl',
                                                                view: 'primary',
                                                                weight: 'bold',
                                                                align: '',
                                                                transform: 'uppercase'
                                                            },
                                                            content: 'ОСКАР 2020'
                                                        }
                                                    },
                                                    {
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': 'xl',
                                                        },
                                                        content: {
                                                            block: 'text',
                                                            attrs: {
                                                                style: 'transform: rotate(180deg); writing-mode: vertical-rl;'
                                                            },
                                                            mods: {
                                                                size: 'l',
                                                                view: 'primary',
                                                                weight: 'bold',
                                                                align: '',
                                                                transform: 'uppercase'
                                                            },
                                                            content: 'сентябрь 2020'
                                                        }
                                                    }
                                                ]
                                            },
                                        },
                                        {
                                            elem: 'fraction',
                                            elemMods: { 'xs-col': '1', 's-col': '2' },
                                            content: {
                                                block: 'pt-card',
                                                attrs: { style: 'height: 100%;' },
                                                content: [{
                                                    elem: 'image',
                                                    mix: { block: 'production', mods: { image: '2' } },
                                                }, ]
                                            },
                                        },
                                        {
                                            elem: 'fraction',
                                            elemMods: {
                                                'xs-col': '2',
                                                's-col': '2',
                                                'xs-col': 'hidden',
                                            },
                                            content: {
                                                block: 'pt-card',
                                                attrs: { style: 'height: 100%;' },
                                                content: [{
                                                        elem: 'image',
                                                        mix: { block: 'production', mods: { image: '3' } },
                                                    },
                                                    {
                                                        elem: 'header',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        },
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                size: '2xl',
                                                                view: 'primary',
                                                                weight: 'bold',
                                                                align: '',
                                                                transform: 'uppercase'
                                                            },
                                                            content: 'золотой грамофон'
                                                        }
                                                    },
                                                    {
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': '5xl',
                                                        },
                                                        content: {
                                                            block: 'text',
                                                            attrs: {
                                                                style: 'transform: rotate(-90deg);'
                                                            },
                                                            mods: {
                                                                size: 'l',
                                                                view: 'primary',
                                                                weight: 'bold',
                                                                align: '',
                                                                transform: 'uppercase'
                                                            },
                                                            content: 'июль 2020'
                                                        }
                                                    }
                                                ]
                                            },
                                        },
                                        {
                                            elem: 'fraction',
                                            elemMods: {
                                                'xs-col': '2',
                                                's-col': '2',
                                                'xs-col': 'hidden',
                                            },
                                            content: {
                                                block: 'pt-card',
                                                attrs: { style: 'height: 100%;' },
                                                content: [{
                                                        elem: 'image',
                                                        mix: { block: 'production', mods: { image: '4' } },
                                                    },
                                                    {
                                                        elem: 'header',
                                                        elemMods: {
                                                            'space-a': 'm'
                                                        },
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                size: '2xl',
                                                                view: 'primary',
                                                                weight: 'bold',
                                                                align: '',
                                                                transform: 'uppercase'
                                                            },
                                                            content: 'щелкунчик'
                                                        }
                                                    },
                                                    {
                                                        elem: 'footer',
                                                        elemMods: {
                                                            'space-a': '5xl',
                                                        },
                                                        content: {
                                                            block: 'text',
                                                            attrs: {
                                                                style: 'transform: rotate(-90deg);'
                                                            },
                                                            mods: {
                                                                size: 'l',
                                                                view: 'primary',
                                                                weight: 'bold',
                                                                align: '',
                                                                transform: 'uppercase'
                                                            },
                                                            content: 'май 2020'
                                                        }
                                                    }
                                                ]
                                            },
                                        }
                                    ]
                                }
                            },
                        }
                    ]
                },
                // наши награды
                {
                    elem: 'section',
                    content: [{
                            elem: 'heading',
                            content: {
                                block: 'text',
                                tag: 'h2',
                                mods: {
                                    type: 'h2',
                                    size: '2xl',
                                    view: 'primary',
                                    weight: 'bold',
                                    align: 'center',
                                    transform: 'uppercase'
                                },
                                content: ''
                            }
                        },
                        {
                            elem: 'content',
                            content: {
                                elem: 'container',
                                elemMods: { distribute: 'center', size: 's' },
                                content: {
                                    block: 'tpl-grid',
                                    mods: {
                                        'col-gap': 'full',
                                        'xs-ratio': '1-1-1',
                                        's-columns': 6,
                                    },
                                    mix: { block: 'rewarding' },
                                    content: [{
                                            elem: 'fraction',
                                            elemMods: {
                                                'xs-col': 1,
                                                's-col': 3,
                                            },
                                            content: [{
                                                    block: 'text',
                                                    mods: {
                                                        size: '4xl',
                                                        view: 'brand',
                                                        weight: 'bold',
                                                        align: 'right'
                                                    },
                                                    content: '2018'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        size: '4xl',
                                                        view: 'brand',
                                                        weight: 'bold',
                                                        align: 'right'
                                                    },
                                                    content: '2019'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        size: '4xl',
                                                        view: 'brand',
                                                        weight: 'bold',
                                                        align: 'right'
                                                    },
                                                    content: '2020'
                                                },
                                            ]
                                        },
                                        {
                                            elem: 'fraction',
                                            elemMods: {
                                                'xs-col': 2,
                                                's-col': 3,
                                                'xs-row': 3,
                                            },
                                            attrs: { style: 'margin:auto' },
                                            content: {
                                                block: 'pt-icon-plus',
                                                mods: { 'vertical-align': 'center', 'distribute': 'between', 'indent-r': 's' },
                                                attrs: { style: 'flex-wrap: wrap;' },
                                                content: [{
                                                        elem: 'icon',
                                                        content: [{
                                                                block: 'icon',
                                                                mods: { size: 'm', view: 'brand' },
                                                                mix: { block: 'decorator', mods: { 'indent-r': 's' } },
                                                                content: {
                                                                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13 0L8.98166 7.90286L0 9.16286L6.5 15.3171L4.96332 24L13 19.9029L21.0367 24L19.5 15.3171L26 9.17143L17.0183 7.90286L13 0Z" fill=""/></svg>'
                                                                }
                                                            },
                                                            {
                                                                block: 'icon',
                                                                mods: {
                                                                    size: 'm',
                                                                    view: 'brand '
                                                                },
                                                                mix: { block: 'decorator', mods: { 'indent-r': 's' } },
                                                                content: {
                                                                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13 0L8.98166 7.90286L0 9.16286L6.5 15.3171L4.96332 24L13 19.9029L21.0367 24L19.5 15.3171L26 9.17143L17.0183 7.90286L13 0Z" fill=""/></svg>'
                                                                }
                                                            },
                                                            {
                                                                block: 'icon',
                                                                mods: { size: 'm', view: 'brand' },
                                                                mix: { block: 'decorator', mods: { 'indent-r': 's' } },
                                                                content: {
                                                                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13 0L8.98166 7.90286L0 9.16286L6.5 15.3171L4.96332 24L13 19.9029L21.0367 24L19.5 15.3171L26 9.17143L17.0183 7.90286L13 0Z" fill=""/></svg>'
                                                                }
                                                            },
                                                            {
                                                                block: 'icon',
                                                                mods: { size: 'm', view: 'brand' },
                                                                mix: { block: 'decorator', mods: { 'indent-r': 's' } },
                                                                content: {
                                                                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13 0L8.98166 7.90286L0 9.16286L6.5 15.3171L4.96332 24L13 19.9029L21.0367 24L19.5 15.3171L26 9.17143L17.0183 7.90286L13 0Z" fill=""/></svg>'
                                                                }
                                                            },
                                                            {
                                                                block: 'icon',
                                                                mods: { size: 'm', view: 'brand' },
                                                                mix: { block: 'decorator', mods: { 'indent-r': 's' } },
                                                                content: {
                                                                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13 0L8.98166 7.90286L0 9.16286L6.5 15.3171L4.96332 24L13 19.9029L21.0367 24L19.5 15.3171L26 9.17143L17.0183 7.90286L13 0Z" fill=""/></svg>'
                                                                }
                                                            },

                                                        ]
                                                    },
                                                    {
                                                        elem: 'block',
                                                        attrs: { style: 'width: 100%' },
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                size: '2xl',
                                                                view: 'primary',
                                                                weight: 'bold',
                                                                align: '',
                                                            },
                                                            content: [
                                                                { html: 'Лучший театр<br> по мнению театральных<br> критиков Парижа' },
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            },
                        }
                    ]
                },
                // партнеры театра
                {
                    elem: 'section',
                    attrs: { id: '4' },
                    content: [{
                            elem: 'heading',
                            content: {
                                elem: 'heading',
                                content: {
                                    block: 'text',
                                    tag: 'h2',
                                    mods: {
                                        type: 'h2',
                                        size: '3xl',
                                        view: 'primary',
                                        weight: 'bold',
                                        align: 'center',
                                        transform: 'uppercase'
                                    },
                                    content: [{
                                            tag: 'span',
                                            block: 'text',
                                            mods: {
                                                view: 'brand',
                                                display: 'inline'
                                            },
                                            mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                            content: 'партнеры'
                                        },
                                        {
                                            tag: 'span',
                                            block: 'text',
                                            mods: {
                                                view: 'primary',
                                                display: 'inline'
                                            },
                                            content: 'театра'
                                        }
                                    ]
                                }
                            },
                        },
                        {
                            elem: 'content',
                            content: {
                                elem: 'container',
                                elemMods: { distribute: 'center', size: 'm' },
                                content: {
                                    block: 'tpl-grid',
                                    mods: {
                                        'xs-ratio': '1-1',
                                        's-ratio': '1-1-1',
                                        'm-ratio': '1-1-1-1',
                                        'col-gap': 'full'
                                    },
                                    content: [{
                                            block: 'link',
                                            mix: { block: 'partner' },
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'gazprom'
                                                },

                                                content: {
                                                    html: '<svg width="200" height="96" viewBox="0 0 200 96" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M61.7714 62.7649H74.4643V66.9057H68.4262V95.9999H61.7714V62.7649Z" fill="var(--color-typo-primary)" /><path d="M81.9926 83.5232L83.1331 66.9057H83.5151L84.6556 83.5232H81.9926ZM74.6229 95.9999H81.1385L81.7552 87.1736H84.893L85.5123 95.9999H92.0253L88.5546 62.7649H78.0936L74.6229 95.9999Z" fill="var(--color-typo-primary)" /><path d="M101.554 84.3676V90.6333C101.554 91.4778 102.208 91.7229 102.59 91.7229C103.218 91.7229 103.654 91.2054 103.654 90.6333V82.8966C103.654 81.8614 103.463 80.7173 100.981 80.7173H98.2793V77.0669H101.09C102.972 77.0669 103.654 76.631 103.654 74.5878V67.9953C103.654 67.4233 103.218 66.9057 102.59 66.9057C102.208 66.9057 101.554 67.1236 101.554 67.9953V73.4164H94.896V68.7036C94.896 66.3881 95.1688 62.7649 99.8346 62.7649H105.346C110.012 62.7649 110.312 66.3881 110.312 68.7036V74.0158C110.312 77.6389 107.774 78.6196 105.783 78.5379V78.8648C110.257 78.7558 110.312 82.1883 110.312 83.3597V90.0612C110.312 92.404 110.012 95.9999 105.346 95.9999H99.8346C95.1688 95.9999 94.896 92.404 94.896 90.0612V84.3676H101.554Z" fill="var(--color-typo-primary)" /><path d="M114.678 62.7649H130.094V95.9999H123.437V66.9057H121.336V95.9999H114.678V62.7649Z" fill="var(--color-typo-primary)" /><path d="M141.118 81.0442V66.9057H141.991C142.7 66.9057 143.219 67.505 143.219 68.5674V79.3824C143.219 80.4448 142.7 81.0442 141.991 81.0442H141.118ZM134.46 95.9999H141.118V84.6946H144.938C149.576 84.6946 149.876 81.0986 149.876 78.7558V68.7036C149.876 66.3881 149.576 62.7649 144.938 62.7649H134.46V95.9999Z" fill="var(--color-typo-primary)" /><path d="M163.001 90.6333C163.001 91.2054 162.564 91.7229 161.937 91.7229C161.555 91.7229 160.9 91.4778 160.9 90.6333V67.9953C160.9 67.1236 161.555 66.9057 161.937 66.9057C162.564 66.9057 163.001 67.4233 163.001 67.9953V90.6333ZM154.242 90.0612C154.242 92.404 154.543 95.9999 159.181 95.9999H164.72C169.358 95.9999 169.658 92.404 169.658 90.0612V68.7036C169.658 66.3881 169.358 62.7649 164.72 62.7649H159.181C154.543 62.7649 154.242 66.3881 154.242 68.7036V90.0612Z" fill="var(--color-typo-primary)" /><path d="M191.323 62.7649H200V95.9999H193.342V75.1599H193.097L189.659 95.9999H184.338L180.928 75.1599H180.682V95.9999H174.025V62.7649H182.674L187.012 86.1384L191.323 62.7649Z" fill="var(--color-typo-primary)" /><path d="M53.1468 17.3258C51.1086 8.41771 46.0009 1.1714 45.2969 0C44.1837 1.66175 40.1101 8.06357 38.0391 15.1464C35.7772 23.0738 35.4443 30.1022 36.2247 36.9944C36.9996 43.9138 39.9272 51.0239 39.9272 51.0239C41.4825 54.7288 43.8126 58.7333 45.3297 60.6947C47.5534 57.8071 52.6639 49.1987 54.2573 37.9751C55.1441 31.7095 55.1822 26.2339 53.1468 17.3258ZM45.2969 58.4609C44.2956 56.5812 42.7403 53.0126 42.593 47.4552C42.5548 42.1158 44.7021 37.512 45.3297 36.5585C45.889 37.512 47.7389 41.5165 47.9599 46.9921C48.11 52.3315 46.331 56.554 45.2969 58.4609ZM52.5547 32.445C52.4783 35.8502 52.0718 39.4461 51.5534 41.5982C51.7389 37.8934 51.2942 32.6902 50.4429 28.6039C49.5916 24.5449 47.1823 17.7344 45.2587 14.6016C43.4825 17.5982 41.2942 23.4824 40.1483 28.5767C38.9968 33.6709 38.9641 39.8548 38.9641 41.7072C38.6585 40.1544 37.8945 34.5699 38.1101 28.9853C38.2901 24.3814 39.3706 19.6141 39.9627 17.4348C42.2219 10.1612 44.7785 5.50284 45.2587 4.7673C45.7389 5.50284 48.9586 11.2509 50.6284 17.2713C52.2901 23.2917 52.6257 29.067 52.5547 32.445Z" fill="var(--color-typo-primary)" /><path d="M48.7527 62.765H33.2576V73.1441C33.2713 73.1441 33.2822 73.1169 33.2958 73.1169C36.9465 69.4665 42.8674 69.4665 46.5208 73.1169C50.1715 76.7401 50.1715 82.6515 46.5208 86.3019C46.5045 86.3292 46.4881 86.3292 46.4717 86.3564C46.4526 86.3564 46.4335 86.3837 46.4171 86.4109C42.7746 90.0068 38.0161 91.8048 33.2576 91.8048C28.4773 91.8048 23.697 90.0068 20.0517 86.3564C13.6234 79.9546 12.8621 70.0113 17.7625 62.765C18.4228 61.7843 19.184 60.8581 20.0517 59.9863C23.697 56.3359 28.4773 54.538 33.2576 54.538V29.5845C14.8894 29.5845 0 44.4312 0 62.765C0 81.0987 14.8894 95.9728 33.2576 95.9728C42.8346 95.9728 51.4621 91.9137 57.5303 85.4574V62.765H48.7527Z" fill="var(--color-typo-primary)" /></svg>'
                                                }
                                            },
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'partner' },
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'gazprom'
                                                },
                                                content: {
                                                    html: '<svg width="200" height="96" viewBox="0 0 200 96" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M61.7714 62.7649H74.4643V66.9057H68.4262V95.9999H61.7714V62.7649Z" fill="var(--color-typo-primary)" /><path d="M81.9926 83.5232L83.1331 66.9057H83.5151L84.6556 83.5232H81.9926ZM74.6229 95.9999H81.1385L81.7552 87.1736H84.893L85.5123 95.9999H92.0253L88.5546 62.7649H78.0936L74.6229 95.9999Z" fill="var(--color-typo-primary)" /><path d="M101.554 84.3676V90.6333C101.554 91.4778 102.208 91.7229 102.59 91.7229C103.218 91.7229 103.654 91.2054 103.654 90.6333V82.8966C103.654 81.8614 103.463 80.7173 100.981 80.7173H98.2793V77.0669H101.09C102.972 77.0669 103.654 76.631 103.654 74.5878V67.9953C103.654 67.4233 103.218 66.9057 102.59 66.9057C102.208 66.9057 101.554 67.1236 101.554 67.9953V73.4164H94.896V68.7036C94.896 66.3881 95.1688 62.7649 99.8346 62.7649H105.346C110.012 62.7649 110.312 66.3881 110.312 68.7036V74.0158C110.312 77.6389 107.774 78.6196 105.783 78.5379V78.8648C110.257 78.7558 110.312 82.1883 110.312 83.3597V90.0612C110.312 92.404 110.012 95.9999 105.346 95.9999H99.8346C95.1688 95.9999 94.896 92.404 94.896 90.0612V84.3676H101.554Z" fill="var(--color-typo-primary)" /><path d="M114.678 62.7649H130.094V95.9999H123.437V66.9057H121.336V95.9999H114.678V62.7649Z" fill="var(--color-typo-primary)" /><path d="M141.118 81.0442V66.9057H141.991C142.7 66.9057 143.219 67.505 143.219 68.5674V79.3824C143.219 80.4448 142.7 81.0442 141.991 81.0442H141.118ZM134.46 95.9999H141.118V84.6946H144.938C149.576 84.6946 149.876 81.0986 149.876 78.7558V68.7036C149.876 66.3881 149.576 62.7649 144.938 62.7649H134.46V95.9999Z" fill="var(--color-typo-primary)" /><path d="M163.001 90.6333C163.001 91.2054 162.564 91.7229 161.937 91.7229C161.555 91.7229 160.9 91.4778 160.9 90.6333V67.9953C160.9 67.1236 161.555 66.9057 161.937 66.9057C162.564 66.9057 163.001 67.4233 163.001 67.9953V90.6333ZM154.242 90.0612C154.242 92.404 154.543 95.9999 159.181 95.9999H164.72C169.358 95.9999 169.658 92.404 169.658 90.0612V68.7036C169.658 66.3881 169.358 62.7649 164.72 62.7649H159.181C154.543 62.7649 154.242 66.3881 154.242 68.7036V90.0612Z" fill="var(--color-typo-primary)" /><path d="M191.323 62.7649H200V95.9999H193.342V75.1599H193.097L189.659 95.9999H184.338L180.928 75.1599H180.682V95.9999H174.025V62.7649H182.674L187.012 86.1384L191.323 62.7649Z" fill="var(--color-typo-primary)" /><path d="M53.1468 17.3258C51.1086 8.41771 46.0009 1.1714 45.2969 0C44.1837 1.66175 40.1101 8.06357 38.0391 15.1464C35.7772 23.0738 35.4443 30.1022 36.2247 36.9944C36.9996 43.9138 39.9272 51.0239 39.9272 51.0239C41.4825 54.7288 43.8126 58.7333 45.3297 60.6947C47.5534 57.8071 52.6639 49.1987 54.2573 37.9751C55.1441 31.7095 55.1822 26.2339 53.1468 17.3258ZM45.2969 58.4609C44.2956 56.5812 42.7403 53.0126 42.593 47.4552C42.5548 42.1158 44.7021 37.512 45.3297 36.5585C45.889 37.512 47.7389 41.5165 47.9599 46.9921C48.11 52.3315 46.331 56.554 45.2969 58.4609ZM52.5547 32.445C52.4783 35.8502 52.0718 39.4461 51.5534 41.5982C51.7389 37.8934 51.2942 32.6902 50.4429 28.6039C49.5916 24.5449 47.1823 17.7344 45.2587 14.6016C43.4825 17.5982 41.2942 23.4824 40.1483 28.5767C38.9968 33.6709 38.9641 39.8548 38.9641 41.7072C38.6585 40.1544 37.8945 34.5699 38.1101 28.9853C38.2901 24.3814 39.3706 19.6141 39.9627 17.4348C42.2219 10.1612 44.7785 5.50284 45.2587 4.7673C45.7389 5.50284 48.9586 11.2509 50.6284 17.2713C52.2901 23.2917 52.6257 29.067 52.5547 32.445Z" fill="var(--color-typo-primary)" /><path d="M48.7527 62.765H33.2576V73.1441C33.2713 73.1441 33.2822 73.1169 33.2958 73.1169C36.9465 69.4665 42.8674 69.4665 46.5208 73.1169C50.1715 76.7401 50.1715 82.6515 46.5208 86.3019C46.5045 86.3292 46.4881 86.3292 46.4717 86.3564C46.4526 86.3564 46.4335 86.3837 46.4171 86.4109C42.7746 90.0068 38.0161 91.8048 33.2576 91.8048C28.4773 91.8048 23.697 90.0068 20.0517 86.3564C13.6234 79.9546 12.8621 70.0113 17.7625 62.765C18.4228 61.7843 19.184 60.8581 20.0517 59.9863C23.697 56.3359 28.4773 54.538 33.2576 54.538V29.5845C14.8894 29.5845 0 44.4312 0 62.765C0 81.0987 14.8894 95.9728 33.2576 95.9728C42.8346 95.9728 51.4621 91.9137 57.5303 85.4574V62.765H48.7527Z" fill="var(--color-typo-primary)" /></svg>'
                                                }
                                            },
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'partner' },
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'gazprom'
                                                },
                                                content: {
                                                    html: '<svg width="200" height="96" viewBox="0 0 200 96" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M61.7714 62.7649H74.4643V66.9057H68.4262V95.9999H61.7714V62.7649Z" fill="var(--color-typo-primary)" /><path d="M81.9926 83.5232L83.1331 66.9057H83.5151L84.6556 83.5232H81.9926ZM74.6229 95.9999H81.1385L81.7552 87.1736H84.893L85.5123 95.9999H92.0253L88.5546 62.7649H78.0936L74.6229 95.9999Z" fill="var(--color-typo-primary)" /><path d="M101.554 84.3676V90.6333C101.554 91.4778 102.208 91.7229 102.59 91.7229C103.218 91.7229 103.654 91.2054 103.654 90.6333V82.8966C103.654 81.8614 103.463 80.7173 100.981 80.7173H98.2793V77.0669H101.09C102.972 77.0669 103.654 76.631 103.654 74.5878V67.9953C103.654 67.4233 103.218 66.9057 102.59 66.9057C102.208 66.9057 101.554 67.1236 101.554 67.9953V73.4164H94.896V68.7036C94.896 66.3881 95.1688 62.7649 99.8346 62.7649H105.346C110.012 62.7649 110.312 66.3881 110.312 68.7036V74.0158C110.312 77.6389 107.774 78.6196 105.783 78.5379V78.8648C110.257 78.7558 110.312 82.1883 110.312 83.3597V90.0612C110.312 92.404 110.012 95.9999 105.346 95.9999H99.8346C95.1688 95.9999 94.896 92.404 94.896 90.0612V84.3676H101.554Z" fill="var(--color-typo-primary)" /><path d="M114.678 62.7649H130.094V95.9999H123.437V66.9057H121.336V95.9999H114.678V62.7649Z" fill="var(--color-typo-primary)" /><path d="M141.118 81.0442V66.9057H141.991C142.7 66.9057 143.219 67.505 143.219 68.5674V79.3824C143.219 80.4448 142.7 81.0442 141.991 81.0442H141.118ZM134.46 95.9999H141.118V84.6946H144.938C149.576 84.6946 149.876 81.0986 149.876 78.7558V68.7036C149.876 66.3881 149.576 62.7649 144.938 62.7649H134.46V95.9999Z" fill="var(--color-typo-primary)" /><path d="M163.001 90.6333C163.001 91.2054 162.564 91.7229 161.937 91.7229C161.555 91.7229 160.9 91.4778 160.9 90.6333V67.9953C160.9 67.1236 161.555 66.9057 161.937 66.9057C162.564 66.9057 163.001 67.4233 163.001 67.9953V90.6333ZM154.242 90.0612C154.242 92.404 154.543 95.9999 159.181 95.9999H164.72C169.358 95.9999 169.658 92.404 169.658 90.0612V68.7036C169.658 66.3881 169.358 62.7649 164.72 62.7649H159.181C154.543 62.7649 154.242 66.3881 154.242 68.7036V90.0612Z" fill="var(--color-typo-primary)" /><path d="M191.323 62.7649H200V95.9999H193.342V75.1599H193.097L189.659 95.9999H184.338L180.928 75.1599H180.682V95.9999H174.025V62.7649H182.674L187.012 86.1384L191.323 62.7649Z" fill="var(--color-typo-primary)" /><path d="M53.1468 17.3258C51.1086 8.41771 46.0009 1.1714 45.2969 0C44.1837 1.66175 40.1101 8.06357 38.0391 15.1464C35.7772 23.0738 35.4443 30.1022 36.2247 36.9944C36.9996 43.9138 39.9272 51.0239 39.9272 51.0239C41.4825 54.7288 43.8126 58.7333 45.3297 60.6947C47.5534 57.8071 52.6639 49.1987 54.2573 37.9751C55.1441 31.7095 55.1822 26.2339 53.1468 17.3258ZM45.2969 58.4609C44.2956 56.5812 42.7403 53.0126 42.593 47.4552C42.5548 42.1158 44.7021 37.512 45.3297 36.5585C45.889 37.512 47.7389 41.5165 47.9599 46.9921C48.11 52.3315 46.331 56.554 45.2969 58.4609ZM52.5547 32.445C52.4783 35.8502 52.0718 39.4461 51.5534 41.5982C51.7389 37.8934 51.2942 32.6902 50.4429 28.6039C49.5916 24.5449 47.1823 17.7344 45.2587 14.6016C43.4825 17.5982 41.2942 23.4824 40.1483 28.5767C38.9968 33.6709 38.9641 39.8548 38.9641 41.7072C38.6585 40.1544 37.8945 34.5699 38.1101 28.9853C38.2901 24.3814 39.3706 19.6141 39.9627 17.4348C42.2219 10.1612 44.7785 5.50284 45.2587 4.7673C45.7389 5.50284 48.9586 11.2509 50.6284 17.2713C52.2901 23.2917 52.6257 29.067 52.5547 32.445Z" fill="var(--color-typo-primary)" /><path d="M48.7527 62.765H33.2576V73.1441C33.2713 73.1441 33.2822 73.1169 33.2958 73.1169C36.9465 69.4665 42.8674 69.4665 46.5208 73.1169C50.1715 76.7401 50.1715 82.6515 46.5208 86.3019C46.5045 86.3292 46.4881 86.3292 46.4717 86.3564C46.4526 86.3564 46.4335 86.3837 46.4171 86.4109C42.7746 90.0068 38.0161 91.8048 33.2576 91.8048C28.4773 91.8048 23.697 90.0068 20.0517 86.3564C13.6234 79.9546 12.8621 70.0113 17.7625 62.765C18.4228 61.7843 19.184 60.8581 20.0517 59.9863C23.697 56.3359 28.4773 54.538 33.2576 54.538V29.5845C14.8894 29.5845 0 44.4312 0 62.765C0 81.0987 14.8894 95.9728 33.2576 95.9728C42.8346 95.9728 51.4621 91.9137 57.5303 85.4574V62.765H48.7527Z" fill="var(--color-typo-primary)" /></svg>'
                                                }
                                            },
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'partner' },
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'gazprom'
                                                },
                                                content: {
                                                    html: '<svg width="200" height="96" viewBox="0 0 200 96" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M61.7714 62.7649H74.4643V66.9057H68.4262V95.9999H61.7714V62.7649Z" fill="var(--color-typo-primary)" /><path d="M81.9926 83.5232L83.1331 66.9057H83.5151L84.6556 83.5232H81.9926ZM74.6229 95.9999H81.1385L81.7552 87.1736H84.893L85.5123 95.9999H92.0253L88.5546 62.7649H78.0936L74.6229 95.9999Z" fill="var(--color-typo-primary)" /><path d="M101.554 84.3676V90.6333C101.554 91.4778 102.208 91.7229 102.59 91.7229C103.218 91.7229 103.654 91.2054 103.654 90.6333V82.8966C103.654 81.8614 103.463 80.7173 100.981 80.7173H98.2793V77.0669H101.09C102.972 77.0669 103.654 76.631 103.654 74.5878V67.9953C103.654 67.4233 103.218 66.9057 102.59 66.9057C102.208 66.9057 101.554 67.1236 101.554 67.9953V73.4164H94.896V68.7036C94.896 66.3881 95.1688 62.7649 99.8346 62.7649H105.346C110.012 62.7649 110.312 66.3881 110.312 68.7036V74.0158C110.312 77.6389 107.774 78.6196 105.783 78.5379V78.8648C110.257 78.7558 110.312 82.1883 110.312 83.3597V90.0612C110.312 92.404 110.012 95.9999 105.346 95.9999H99.8346C95.1688 95.9999 94.896 92.404 94.896 90.0612V84.3676H101.554Z" fill="var(--color-typo-primary)" /><path d="M114.678 62.7649H130.094V95.9999H123.437V66.9057H121.336V95.9999H114.678V62.7649Z" fill="var(--color-typo-primary)" /><path d="M141.118 81.0442V66.9057H141.991C142.7 66.9057 143.219 67.505 143.219 68.5674V79.3824C143.219 80.4448 142.7 81.0442 141.991 81.0442H141.118ZM134.46 95.9999H141.118V84.6946H144.938C149.576 84.6946 149.876 81.0986 149.876 78.7558V68.7036C149.876 66.3881 149.576 62.7649 144.938 62.7649H134.46V95.9999Z" fill="var(--color-typo-primary)" /><path d="M163.001 90.6333C163.001 91.2054 162.564 91.7229 161.937 91.7229C161.555 91.7229 160.9 91.4778 160.9 90.6333V67.9953C160.9 67.1236 161.555 66.9057 161.937 66.9057C162.564 66.9057 163.001 67.4233 163.001 67.9953V90.6333ZM154.242 90.0612C154.242 92.404 154.543 95.9999 159.181 95.9999H164.72C169.358 95.9999 169.658 92.404 169.658 90.0612V68.7036C169.658 66.3881 169.358 62.7649 164.72 62.7649H159.181C154.543 62.7649 154.242 66.3881 154.242 68.7036V90.0612Z" fill="var(--color-typo-primary)" /><path d="M191.323 62.7649H200V95.9999H193.342V75.1599H193.097L189.659 95.9999H184.338L180.928 75.1599H180.682V95.9999H174.025V62.7649H182.674L187.012 86.1384L191.323 62.7649Z" fill="var(--color-typo-primary)" /><path d="M53.1468 17.3258C51.1086 8.41771 46.0009 1.1714 45.2969 0C44.1837 1.66175 40.1101 8.06357 38.0391 15.1464C35.7772 23.0738 35.4443 30.1022 36.2247 36.9944C36.9996 43.9138 39.9272 51.0239 39.9272 51.0239C41.4825 54.7288 43.8126 58.7333 45.3297 60.6947C47.5534 57.8071 52.6639 49.1987 54.2573 37.9751C55.1441 31.7095 55.1822 26.2339 53.1468 17.3258ZM45.2969 58.4609C44.2956 56.5812 42.7403 53.0126 42.593 47.4552C42.5548 42.1158 44.7021 37.512 45.3297 36.5585C45.889 37.512 47.7389 41.5165 47.9599 46.9921C48.11 52.3315 46.331 56.554 45.2969 58.4609ZM52.5547 32.445C52.4783 35.8502 52.0718 39.4461 51.5534 41.5982C51.7389 37.8934 51.2942 32.6902 50.4429 28.6039C49.5916 24.5449 47.1823 17.7344 45.2587 14.6016C43.4825 17.5982 41.2942 23.4824 40.1483 28.5767C38.9968 33.6709 38.9641 39.8548 38.9641 41.7072C38.6585 40.1544 37.8945 34.5699 38.1101 28.9853C38.2901 24.3814 39.3706 19.6141 39.9627 17.4348C42.2219 10.1612 44.7785 5.50284 45.2587 4.7673C45.7389 5.50284 48.9586 11.2509 50.6284 17.2713C52.2901 23.2917 52.6257 29.067 52.5547 32.445Z" fill="var(--color-typo-primary)" /><path d="M48.7527 62.765H33.2576V73.1441C33.2713 73.1441 33.2822 73.1169 33.2958 73.1169C36.9465 69.4665 42.8674 69.4665 46.5208 73.1169C50.1715 76.7401 50.1715 82.6515 46.5208 86.3019C46.5045 86.3292 46.4881 86.3292 46.4717 86.3564C46.4526 86.3564 46.4335 86.3837 46.4171 86.4109C42.7746 90.0068 38.0161 91.8048 33.2576 91.8048C28.4773 91.8048 23.697 90.0068 20.0517 86.3564C13.6234 79.9546 12.8621 70.0113 17.7625 62.765C18.4228 61.7843 19.184 60.8581 20.0517 59.9863C23.697 56.3359 28.4773 54.538 33.2576 54.538V29.5845C14.8894 29.5845 0 44.4312 0 62.765C0 81.0987 14.8894 95.9728 33.2576 95.9728C42.8346 95.9728 51.4621 91.9137 57.5303 85.4574V62.765H48.7527Z" fill="var(--color-typo-primary)" /></svg>'
                                                }
                                            },
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'partner' },
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'gazprom'
                                                },
                                                content: {
                                                    html: '<svg width="200" height="96" viewBox="0 0 200 96" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M61.7714 62.7649H74.4643V66.9057H68.4262V95.9999H61.7714V62.7649Z" fill="var(--color-typo-primary)" /><path d="M81.9926 83.5232L83.1331 66.9057H83.5151L84.6556 83.5232H81.9926ZM74.6229 95.9999H81.1385L81.7552 87.1736H84.893L85.5123 95.9999H92.0253L88.5546 62.7649H78.0936L74.6229 95.9999Z" fill="var(--color-typo-primary)" /><path d="M101.554 84.3676V90.6333C101.554 91.4778 102.208 91.7229 102.59 91.7229C103.218 91.7229 103.654 91.2054 103.654 90.6333V82.8966C103.654 81.8614 103.463 80.7173 100.981 80.7173H98.2793V77.0669H101.09C102.972 77.0669 103.654 76.631 103.654 74.5878V67.9953C103.654 67.4233 103.218 66.9057 102.59 66.9057C102.208 66.9057 101.554 67.1236 101.554 67.9953V73.4164H94.896V68.7036C94.896 66.3881 95.1688 62.7649 99.8346 62.7649H105.346C110.012 62.7649 110.312 66.3881 110.312 68.7036V74.0158C110.312 77.6389 107.774 78.6196 105.783 78.5379V78.8648C110.257 78.7558 110.312 82.1883 110.312 83.3597V90.0612C110.312 92.404 110.012 95.9999 105.346 95.9999H99.8346C95.1688 95.9999 94.896 92.404 94.896 90.0612V84.3676H101.554Z" fill="var(--color-typo-primary)" /><path d="M114.678 62.7649H130.094V95.9999H123.437V66.9057H121.336V95.9999H114.678V62.7649Z" fill="var(--color-typo-primary)" /><path d="M141.118 81.0442V66.9057H141.991C142.7 66.9057 143.219 67.505 143.219 68.5674V79.3824C143.219 80.4448 142.7 81.0442 141.991 81.0442H141.118ZM134.46 95.9999H141.118V84.6946H144.938C149.576 84.6946 149.876 81.0986 149.876 78.7558V68.7036C149.876 66.3881 149.576 62.7649 144.938 62.7649H134.46V95.9999Z" fill="var(--color-typo-primary)" /><path d="M163.001 90.6333C163.001 91.2054 162.564 91.7229 161.937 91.7229C161.555 91.7229 160.9 91.4778 160.9 90.6333V67.9953C160.9 67.1236 161.555 66.9057 161.937 66.9057C162.564 66.9057 163.001 67.4233 163.001 67.9953V90.6333ZM154.242 90.0612C154.242 92.404 154.543 95.9999 159.181 95.9999H164.72C169.358 95.9999 169.658 92.404 169.658 90.0612V68.7036C169.658 66.3881 169.358 62.7649 164.72 62.7649H159.181C154.543 62.7649 154.242 66.3881 154.242 68.7036V90.0612Z" fill="var(--color-typo-primary)" /><path d="M191.323 62.7649H200V95.9999H193.342V75.1599H193.097L189.659 95.9999H184.338L180.928 75.1599H180.682V95.9999H174.025V62.7649H182.674L187.012 86.1384L191.323 62.7649Z" fill="var(--color-typo-primary)" /><path d="M53.1468 17.3258C51.1086 8.41771 46.0009 1.1714 45.2969 0C44.1837 1.66175 40.1101 8.06357 38.0391 15.1464C35.7772 23.0738 35.4443 30.1022 36.2247 36.9944C36.9996 43.9138 39.9272 51.0239 39.9272 51.0239C41.4825 54.7288 43.8126 58.7333 45.3297 60.6947C47.5534 57.8071 52.6639 49.1987 54.2573 37.9751C55.1441 31.7095 55.1822 26.2339 53.1468 17.3258ZM45.2969 58.4609C44.2956 56.5812 42.7403 53.0126 42.593 47.4552C42.5548 42.1158 44.7021 37.512 45.3297 36.5585C45.889 37.512 47.7389 41.5165 47.9599 46.9921C48.11 52.3315 46.331 56.554 45.2969 58.4609ZM52.5547 32.445C52.4783 35.8502 52.0718 39.4461 51.5534 41.5982C51.7389 37.8934 51.2942 32.6902 50.4429 28.6039C49.5916 24.5449 47.1823 17.7344 45.2587 14.6016C43.4825 17.5982 41.2942 23.4824 40.1483 28.5767C38.9968 33.6709 38.9641 39.8548 38.9641 41.7072C38.6585 40.1544 37.8945 34.5699 38.1101 28.9853C38.2901 24.3814 39.3706 19.6141 39.9627 17.4348C42.2219 10.1612 44.7785 5.50284 45.2587 4.7673C45.7389 5.50284 48.9586 11.2509 50.6284 17.2713C52.2901 23.2917 52.6257 29.067 52.5547 32.445Z" fill="var(--color-typo-primary)" /><path d="M48.7527 62.765H33.2576V73.1441C33.2713 73.1441 33.2822 73.1169 33.2958 73.1169C36.9465 69.4665 42.8674 69.4665 46.5208 73.1169C50.1715 76.7401 50.1715 82.6515 46.5208 86.3019C46.5045 86.3292 46.4881 86.3292 46.4717 86.3564C46.4526 86.3564 46.4335 86.3837 46.4171 86.4109C42.7746 90.0068 38.0161 91.8048 33.2576 91.8048C28.4773 91.8048 23.697 90.0068 20.0517 86.3564C13.6234 79.9546 12.8621 70.0113 17.7625 62.765C18.4228 61.7843 19.184 60.8581 20.0517 59.9863C23.697 56.3359 28.4773 54.538 33.2576 54.538V29.5845C14.8894 29.5845 0 44.4312 0 62.765C0 81.0987 14.8894 95.9728 33.2576 95.9728C42.8346 95.9728 51.4621 91.9137 57.5303 85.4574V62.765H48.7527Z" fill="var(--color-typo-primary)" /></svg>'
                                                }
                                            },
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'partner' },
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'gazprom'
                                                },
                                                content: {
                                                    html: '<svg width="200" height="96" viewBox="0 0 200 96" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M61.7714 62.7649H74.4643V66.9057H68.4262V95.9999H61.7714V62.7649Z" fill="var(--color-typo-primary)" /><path d="M81.9926 83.5232L83.1331 66.9057H83.5151L84.6556 83.5232H81.9926ZM74.6229 95.9999H81.1385L81.7552 87.1736H84.893L85.5123 95.9999H92.0253L88.5546 62.7649H78.0936L74.6229 95.9999Z" fill="var(--color-typo-primary)" /><path d="M101.554 84.3676V90.6333C101.554 91.4778 102.208 91.7229 102.59 91.7229C103.218 91.7229 103.654 91.2054 103.654 90.6333V82.8966C103.654 81.8614 103.463 80.7173 100.981 80.7173H98.2793V77.0669H101.09C102.972 77.0669 103.654 76.631 103.654 74.5878V67.9953C103.654 67.4233 103.218 66.9057 102.59 66.9057C102.208 66.9057 101.554 67.1236 101.554 67.9953V73.4164H94.896V68.7036C94.896 66.3881 95.1688 62.7649 99.8346 62.7649H105.346C110.012 62.7649 110.312 66.3881 110.312 68.7036V74.0158C110.312 77.6389 107.774 78.6196 105.783 78.5379V78.8648C110.257 78.7558 110.312 82.1883 110.312 83.3597V90.0612C110.312 92.404 110.012 95.9999 105.346 95.9999H99.8346C95.1688 95.9999 94.896 92.404 94.896 90.0612V84.3676H101.554Z" fill="var(--color-typo-primary)" /><path d="M114.678 62.7649H130.094V95.9999H123.437V66.9057H121.336V95.9999H114.678V62.7649Z" fill="var(--color-typo-primary)" /><path d="M141.118 81.0442V66.9057H141.991C142.7 66.9057 143.219 67.505 143.219 68.5674V79.3824C143.219 80.4448 142.7 81.0442 141.991 81.0442H141.118ZM134.46 95.9999H141.118V84.6946H144.938C149.576 84.6946 149.876 81.0986 149.876 78.7558V68.7036C149.876 66.3881 149.576 62.7649 144.938 62.7649H134.46V95.9999Z" fill="var(--color-typo-primary)" /><path d="M163.001 90.6333C163.001 91.2054 162.564 91.7229 161.937 91.7229C161.555 91.7229 160.9 91.4778 160.9 90.6333V67.9953C160.9 67.1236 161.555 66.9057 161.937 66.9057C162.564 66.9057 163.001 67.4233 163.001 67.9953V90.6333ZM154.242 90.0612C154.242 92.404 154.543 95.9999 159.181 95.9999H164.72C169.358 95.9999 169.658 92.404 169.658 90.0612V68.7036C169.658 66.3881 169.358 62.7649 164.72 62.7649H159.181C154.543 62.7649 154.242 66.3881 154.242 68.7036V90.0612Z" fill="var(--color-typo-primary)" /><path d="M191.323 62.7649H200V95.9999H193.342V75.1599H193.097L189.659 95.9999H184.338L180.928 75.1599H180.682V95.9999H174.025V62.7649H182.674L187.012 86.1384L191.323 62.7649Z" fill="var(--color-typo-primary)" /><path d="M53.1468 17.3258C51.1086 8.41771 46.0009 1.1714 45.2969 0C44.1837 1.66175 40.1101 8.06357 38.0391 15.1464C35.7772 23.0738 35.4443 30.1022 36.2247 36.9944C36.9996 43.9138 39.9272 51.0239 39.9272 51.0239C41.4825 54.7288 43.8126 58.7333 45.3297 60.6947C47.5534 57.8071 52.6639 49.1987 54.2573 37.9751C55.1441 31.7095 55.1822 26.2339 53.1468 17.3258ZM45.2969 58.4609C44.2956 56.5812 42.7403 53.0126 42.593 47.4552C42.5548 42.1158 44.7021 37.512 45.3297 36.5585C45.889 37.512 47.7389 41.5165 47.9599 46.9921C48.11 52.3315 46.331 56.554 45.2969 58.4609ZM52.5547 32.445C52.4783 35.8502 52.0718 39.4461 51.5534 41.5982C51.7389 37.8934 51.2942 32.6902 50.4429 28.6039C49.5916 24.5449 47.1823 17.7344 45.2587 14.6016C43.4825 17.5982 41.2942 23.4824 40.1483 28.5767C38.9968 33.6709 38.9641 39.8548 38.9641 41.7072C38.6585 40.1544 37.8945 34.5699 38.1101 28.9853C38.2901 24.3814 39.3706 19.6141 39.9627 17.4348C42.2219 10.1612 44.7785 5.50284 45.2587 4.7673C45.7389 5.50284 48.9586 11.2509 50.6284 17.2713C52.2901 23.2917 52.6257 29.067 52.5547 32.445Z" fill="var(--color-typo-primary)" /><path d="M48.7527 62.765H33.2576V73.1441C33.2713 73.1441 33.2822 73.1169 33.2958 73.1169C36.9465 69.4665 42.8674 69.4665 46.5208 73.1169C50.1715 76.7401 50.1715 82.6515 46.5208 86.3019C46.5045 86.3292 46.4881 86.3292 46.4717 86.3564C46.4526 86.3564 46.4335 86.3837 46.4171 86.4109C42.7746 90.0068 38.0161 91.8048 33.2576 91.8048C28.4773 91.8048 23.697 90.0068 20.0517 86.3564C13.6234 79.9546 12.8621 70.0113 17.7625 62.765C18.4228 61.7843 19.184 60.8581 20.0517 59.9863C23.697 56.3359 28.4773 54.538 33.2576 54.538V29.5845C14.8894 29.5845 0 44.4312 0 62.765C0 81.0987 14.8894 95.9728 33.2576 95.9728C42.8346 95.9728 51.4621 91.9137 57.5303 85.4574V62.765H48.7527Z" fill="var(--color-typo-primary)" /></svg>'
                                                }
                                            },
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'partner' },
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'gazprom'
                                                },
                                                content: {
                                                    html: '<svg width="200" height="96" viewBox="0 0 200 96" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M61.7714 62.7649H74.4643V66.9057H68.4262V95.9999H61.7714V62.7649Z" fill="var(--color-typo-primary)" /><path d="M81.9926 83.5232L83.1331 66.9057H83.5151L84.6556 83.5232H81.9926ZM74.6229 95.9999H81.1385L81.7552 87.1736H84.893L85.5123 95.9999H92.0253L88.5546 62.7649H78.0936L74.6229 95.9999Z" fill="var(--color-typo-primary)" /><path d="M101.554 84.3676V90.6333C101.554 91.4778 102.208 91.7229 102.59 91.7229C103.218 91.7229 103.654 91.2054 103.654 90.6333V82.8966C103.654 81.8614 103.463 80.7173 100.981 80.7173H98.2793V77.0669H101.09C102.972 77.0669 103.654 76.631 103.654 74.5878V67.9953C103.654 67.4233 103.218 66.9057 102.59 66.9057C102.208 66.9057 101.554 67.1236 101.554 67.9953V73.4164H94.896V68.7036C94.896 66.3881 95.1688 62.7649 99.8346 62.7649H105.346C110.012 62.7649 110.312 66.3881 110.312 68.7036V74.0158C110.312 77.6389 107.774 78.6196 105.783 78.5379V78.8648C110.257 78.7558 110.312 82.1883 110.312 83.3597V90.0612C110.312 92.404 110.012 95.9999 105.346 95.9999H99.8346C95.1688 95.9999 94.896 92.404 94.896 90.0612V84.3676H101.554Z" fill="var(--color-typo-primary)" /><path d="M114.678 62.7649H130.094V95.9999H123.437V66.9057H121.336V95.9999H114.678V62.7649Z" fill="var(--color-typo-primary)" /><path d="M141.118 81.0442V66.9057H141.991C142.7 66.9057 143.219 67.505 143.219 68.5674V79.3824C143.219 80.4448 142.7 81.0442 141.991 81.0442H141.118ZM134.46 95.9999H141.118V84.6946H144.938C149.576 84.6946 149.876 81.0986 149.876 78.7558V68.7036C149.876 66.3881 149.576 62.7649 144.938 62.7649H134.46V95.9999Z" fill="var(--color-typo-primary)" /><path d="M163.001 90.6333C163.001 91.2054 162.564 91.7229 161.937 91.7229C161.555 91.7229 160.9 91.4778 160.9 90.6333V67.9953C160.9 67.1236 161.555 66.9057 161.937 66.9057C162.564 66.9057 163.001 67.4233 163.001 67.9953V90.6333ZM154.242 90.0612C154.242 92.404 154.543 95.9999 159.181 95.9999H164.72C169.358 95.9999 169.658 92.404 169.658 90.0612V68.7036C169.658 66.3881 169.358 62.7649 164.72 62.7649H159.181C154.543 62.7649 154.242 66.3881 154.242 68.7036V90.0612Z" fill="var(--color-typo-primary)" /><path d="M191.323 62.7649H200V95.9999H193.342V75.1599H193.097L189.659 95.9999H184.338L180.928 75.1599H180.682V95.9999H174.025V62.7649H182.674L187.012 86.1384L191.323 62.7649Z" fill="var(--color-typo-primary)" /><path d="M53.1468 17.3258C51.1086 8.41771 46.0009 1.1714 45.2969 0C44.1837 1.66175 40.1101 8.06357 38.0391 15.1464C35.7772 23.0738 35.4443 30.1022 36.2247 36.9944C36.9996 43.9138 39.9272 51.0239 39.9272 51.0239C41.4825 54.7288 43.8126 58.7333 45.3297 60.6947C47.5534 57.8071 52.6639 49.1987 54.2573 37.9751C55.1441 31.7095 55.1822 26.2339 53.1468 17.3258ZM45.2969 58.4609C44.2956 56.5812 42.7403 53.0126 42.593 47.4552C42.5548 42.1158 44.7021 37.512 45.3297 36.5585C45.889 37.512 47.7389 41.5165 47.9599 46.9921C48.11 52.3315 46.331 56.554 45.2969 58.4609ZM52.5547 32.445C52.4783 35.8502 52.0718 39.4461 51.5534 41.5982C51.7389 37.8934 51.2942 32.6902 50.4429 28.6039C49.5916 24.5449 47.1823 17.7344 45.2587 14.6016C43.4825 17.5982 41.2942 23.4824 40.1483 28.5767C38.9968 33.6709 38.9641 39.8548 38.9641 41.7072C38.6585 40.1544 37.8945 34.5699 38.1101 28.9853C38.2901 24.3814 39.3706 19.6141 39.9627 17.4348C42.2219 10.1612 44.7785 5.50284 45.2587 4.7673C45.7389 5.50284 48.9586 11.2509 50.6284 17.2713C52.2901 23.2917 52.6257 29.067 52.5547 32.445Z" fill="var(--color-typo-primary)" /><path d="M48.7527 62.765H33.2576V73.1441C33.2713 73.1441 33.2822 73.1169 33.2958 73.1169C36.9465 69.4665 42.8674 69.4665 46.5208 73.1169C50.1715 76.7401 50.1715 82.6515 46.5208 86.3019C46.5045 86.3292 46.4881 86.3292 46.4717 86.3564C46.4526 86.3564 46.4335 86.3837 46.4171 86.4109C42.7746 90.0068 38.0161 91.8048 33.2576 91.8048C28.4773 91.8048 23.697 90.0068 20.0517 86.3564C13.6234 79.9546 12.8621 70.0113 17.7625 62.765C18.4228 61.7843 19.184 60.8581 20.0517 59.9863C23.697 56.3359 28.4773 54.538 33.2576 54.538V29.5845C14.8894 29.5845 0 44.4312 0 62.765C0 81.0987 14.8894 95.9728 33.2576 95.9728C42.8346 95.9728 51.4621 91.9137 57.5303 85.4574V62.765H48.7527Z" fill="var(--color-typo-primary)" /></svg>'
                                                }
                                            },
                                        },
                                        {
                                            block: 'link',
                                            mix: { block: 'partner' },
                                            content: {
                                                block: 'icon',
                                                mods: {
                                                    view: 'primary',
                                                    size: 'gazprom'
                                                },
                                                content: {
                                                    html: '<svg width="200" height="96" viewBox="0 0 200 96" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M61.7714 62.7649H74.4643V66.9057H68.4262V95.9999H61.7714V62.7649Z" fill="var(--color-typo-primary)" /><path d="M81.9926 83.5232L83.1331 66.9057H83.5151L84.6556 83.5232H81.9926ZM74.6229 95.9999H81.1385L81.7552 87.1736H84.893L85.5123 95.9999H92.0253L88.5546 62.7649H78.0936L74.6229 95.9999Z" fill="var(--color-typo-primary)" /><path d="M101.554 84.3676V90.6333C101.554 91.4778 102.208 91.7229 102.59 91.7229C103.218 91.7229 103.654 91.2054 103.654 90.6333V82.8966C103.654 81.8614 103.463 80.7173 100.981 80.7173H98.2793V77.0669H101.09C102.972 77.0669 103.654 76.631 103.654 74.5878V67.9953C103.654 67.4233 103.218 66.9057 102.59 66.9057C102.208 66.9057 101.554 67.1236 101.554 67.9953V73.4164H94.896V68.7036C94.896 66.3881 95.1688 62.7649 99.8346 62.7649H105.346C110.012 62.7649 110.312 66.3881 110.312 68.7036V74.0158C110.312 77.6389 107.774 78.6196 105.783 78.5379V78.8648C110.257 78.7558 110.312 82.1883 110.312 83.3597V90.0612C110.312 92.404 110.012 95.9999 105.346 95.9999H99.8346C95.1688 95.9999 94.896 92.404 94.896 90.0612V84.3676H101.554Z" fill="var(--color-typo-primary)" /><path d="M114.678 62.7649H130.094V95.9999H123.437V66.9057H121.336V95.9999H114.678V62.7649Z" fill="var(--color-typo-primary)" /><path d="M141.118 81.0442V66.9057H141.991C142.7 66.9057 143.219 67.505 143.219 68.5674V79.3824C143.219 80.4448 142.7 81.0442 141.991 81.0442H141.118ZM134.46 95.9999H141.118V84.6946H144.938C149.576 84.6946 149.876 81.0986 149.876 78.7558V68.7036C149.876 66.3881 149.576 62.7649 144.938 62.7649H134.46V95.9999Z" fill="var(--color-typo-primary)" /><path d="M163.001 90.6333C163.001 91.2054 162.564 91.7229 161.937 91.7229C161.555 91.7229 160.9 91.4778 160.9 90.6333V67.9953C160.9 67.1236 161.555 66.9057 161.937 66.9057C162.564 66.9057 163.001 67.4233 163.001 67.9953V90.6333ZM154.242 90.0612C154.242 92.404 154.543 95.9999 159.181 95.9999H164.72C169.358 95.9999 169.658 92.404 169.658 90.0612V68.7036C169.658 66.3881 169.358 62.7649 164.72 62.7649H159.181C154.543 62.7649 154.242 66.3881 154.242 68.7036V90.0612Z" fill="var(--color-typo-primary)" /><path d="M191.323 62.7649H200V95.9999H193.342V75.1599H193.097L189.659 95.9999H184.338L180.928 75.1599H180.682V95.9999H174.025V62.7649H182.674L187.012 86.1384L191.323 62.7649Z" fill="var(--color-typo-primary)" /><path d="M53.1468 17.3258C51.1086 8.41771 46.0009 1.1714 45.2969 0C44.1837 1.66175 40.1101 8.06357 38.0391 15.1464C35.7772 23.0738 35.4443 30.1022 36.2247 36.9944C36.9996 43.9138 39.9272 51.0239 39.9272 51.0239C41.4825 54.7288 43.8126 58.7333 45.3297 60.6947C47.5534 57.8071 52.6639 49.1987 54.2573 37.9751C55.1441 31.7095 55.1822 26.2339 53.1468 17.3258ZM45.2969 58.4609C44.2956 56.5812 42.7403 53.0126 42.593 47.4552C42.5548 42.1158 44.7021 37.512 45.3297 36.5585C45.889 37.512 47.7389 41.5165 47.9599 46.9921C48.11 52.3315 46.331 56.554 45.2969 58.4609ZM52.5547 32.445C52.4783 35.8502 52.0718 39.4461 51.5534 41.5982C51.7389 37.8934 51.2942 32.6902 50.4429 28.6039C49.5916 24.5449 47.1823 17.7344 45.2587 14.6016C43.4825 17.5982 41.2942 23.4824 40.1483 28.5767C38.9968 33.6709 38.9641 39.8548 38.9641 41.7072C38.6585 40.1544 37.8945 34.5699 38.1101 28.9853C38.2901 24.3814 39.3706 19.6141 39.9627 17.4348C42.2219 10.1612 44.7785 5.50284 45.2587 4.7673C45.7389 5.50284 48.9586 11.2509 50.6284 17.2713C52.2901 23.2917 52.6257 29.067 52.5547 32.445Z" fill="var(--color-typo-primary)" /><path d="M48.7527 62.765H33.2576V73.1441C33.2713 73.1441 33.2822 73.1169 33.2958 73.1169C36.9465 69.4665 42.8674 69.4665 46.5208 73.1169C50.1715 76.7401 50.1715 82.6515 46.5208 86.3019C46.5045 86.3292 46.4881 86.3292 46.4717 86.3564C46.4526 86.3564 46.4335 86.3837 46.4171 86.4109C42.7746 90.0068 38.0161 91.8048 33.2576 91.8048C28.4773 91.8048 23.697 90.0068 20.0517 86.3564C13.6234 79.9546 12.8621 70.0113 17.7625 62.765C18.4228 61.7843 19.184 60.8581 20.0517 59.9863C23.697 56.3359 28.4773 54.538 33.2576 54.538V29.5845C14.8894 29.5845 0 44.4312 0 62.765C0 81.0987 14.8894 95.9728 33.2576 95.9728C42.8346 95.9728 51.4621 91.9137 57.5303 85.4574V62.765H48.7527Z" fill="var(--color-typo-primary)" /></svg>'
                                                }
                                            },
                                        }
                                    ]
                                },
                            }
                        }
                    ]
                },
                // стать меценатом
                {
                    elem: 'section',
                    attrs: { id: '5' },
                    mix: { block: 'decorator', mods: { 'space-b': '2xl' } },
                    content: [{
                            elem: 'heading',
                            content: {
                                elem: 'heading',
                                content: {
                                    block: 'text',
                                    tag: 'h2',
                                    mods: {
                                        type: 'h2',
                                        size: '3xl',
                                        view: 'primary',
                                        weight: 'bold',
                                        align: 'center',
                                        transform: 'uppercase'
                                    },
                                    content: [{
                                            tag: 'span',
                                            block: 'text',
                                            mods: {
                                                view: 'brand',
                                                display: 'inline'
                                            },
                                            mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                            content: 'стать'
                                        },
                                        {
                                            tag: 'span',
                                            block: 'text',
                                            mods: {
                                                view: 'primary',
                                                display: 'inline'
                                            },
                                            content: 'меценатом'
                                        }
                                    ]
                                }
                            },
                        },
                        {
                            elem: 'content',
                            content: {
                                elem: 'container',
                                elemMods: { distribute: 'center', size: 'm' },
                                mix: { block: 'maecenas' },
                                content: [{
                                        block: 'tpl-grid',
                                        mix: { block: 'maecenas', elem: 'col' },
                                        mods: {
                                            'col-gap': 'full',
                                            'row-gap': 'full',
                                            'xs-columns': 2,
                                            's-columns': 6,
                                            'm-columns': 12,
                                        },
                                        content: [{
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 1,
                                                    's-col': 2,
                                                    'm-col': 4,
                                                },
                                                content: {
                                                    block: 'input',
                                                    mods: {
                                                        theme: 'simple',
                                                        size: 'm',
                                                        width: 'available'
                                                    },
                                                    placeholder: 'имя'
                                                }
                                            },
                                            {
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 1,
                                                    's-col': 2,
                                                    'm-col': 4,
                                                },
                                                content: {
                                                    block: 'input',
                                                    mods: {
                                                        theme: 'simple',
                                                        size: 'm',
                                                        width: 'available'
                                                    },
                                                    placeholder: 'компания'
                                                }
                                            },
                                            {
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 1,
                                                    's-col': 2,
                                                    'm-col': 4,
                                                },
                                                attrs: { style: 'grid-row-start: 2;' },
                                                content: {
                                                    block: 'input',
                                                    mods: {
                                                        theme: 'simple',
                                                        size: 'm',
                                                        width: 'available'
                                                    },
                                                    placeholder: 'телефон'
                                                }
                                            },
                                            {
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 1,
                                                    's-col': 2,
                                                    'm-col': 4,
                                                },
                                                attrs: { style: 'grid-row-start: 2;' },
                                                content: {
                                                    block: 'input',
                                                    mods: {
                                                        theme: 'simple',
                                                        size: 'm',
                                                        width: 'available'
                                                    },
                                                    placeholder: 'E-mail'
                                                }
                                            },
                                            {
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 2,
                                                    's-col': 2,
                                                    's-row': 2,
                                                    'm-col': 4,
                                                },
                                                content: {
                                                    block: 'textarea',
                                                    attrs: { style: 'min-height: 5em;' },
                                                    mods: {
                                                        theme: 'simple',
                                                        size: 'm',
                                                        width: 'available'
                                                    },
                                                    placeholder: 'сообщение'
                                                }
                                            },
                                            {
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 2,
                                                    's-col': 2,
                                                    'm-col': 5,
                                                    's-order': 1
                                                },
                                                attrs: { style: 'margin: auto; margin-right: 0;' },
                                                content: {
                                                    block: 'button',
                                                    mods: {
                                                        theme: 'islands',
                                                        size: 'xl',
                                                        type: 'submit'
                                                    },
                                                    text: 'отправить'
                                                }
                                            },
                                            {
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 2,
                                                    's-col': 4,
                                                    'm-col': 7,
                                                },
                                                attrs: { style: 'padding: var(--space-l)' },
                                                content: {
                                                    block: 'text',
                                                    mods: {
                                                        size: 's',
                                                        view: 'secondary'
                                                    },
                                                    content: '* Ваши данные не будут переданы третьим лицам, 100% вероятность. Конфиденциальность мы гарантируем, и защищаем персональные данные согласно законку ФЗ-52.'
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        block: 'tpl-grid',
                                        mix: { block: 'maecenas', elem: 'col' },
                                        mods: {
                                            'col-gap': 'full',
                                            'row-gap': 'full',
                                            'xs-columns': 2,
                                            's-columns': 6,

                                        },
                                        content: [{
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 1,
                                                    's-col': 3,
                                                    'm-col': 12,
                                                },
                                                content: {
                                                    block: 'text',
                                                    mods: {
                                                        size: 'm',
                                                        view: 'primary'
                                                    },
                                                    content: [{
                                                            block: 'text',
                                                            mods: {
                                                                size: 'm',
                                                                view: 'primary'
                                                            },
                                                            content: '+7 (812) 123-45-55'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {
                                                                size: 'm',
                                                                view: 'primary'
                                                            },
                                                            content: '+7 (812) 123-45-66'
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                elem: 'fraction',
                                                elemMods: {
                                                    'xs-col': 1,
                                                    's-col': 3,
                                                    'm-col': 12,
                                                },
                                                content: {
                                                    block: 'text',
                                                    mods: {
                                                        size: 'm',
                                                        view: 'primary'
                                                    },
                                                    content: [{
                                                            content: 'info@theater.ru'
                                                        },
                                                        {
                                                            content: 'г. санкт-петербург, невский 140'
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                        }
                    ]
                },
            ],
        },
        // footer
        {
            tag: 'footer',
            block: 'tpl-layout',
            content: {
                elem: 'section',
                content: {
                    elem: 'content',
                    content: {
                        elem: 'section',
                        content: {
                            elem: 'container',
                            elemMods: { distribute: 'center', size: 'm' },
                            content: {
                                block: 'page-footer',
                                content: [{
                                        block: 'text',
                                        mods: {
                                            view: 'secondary',
                                            size: 's',
                                            display: ''
                                        },
                                        content: '(с) Все права защищены. Большой театр. 2020'
                                    },
                                    {
                                        block: 'text',
                                        mods: {
                                            view: 'secondary',
                                            size: 's',
                                            align: 'right',
                                            display: ''
                                        },
                                        content: 'Разработано d-e-n.ru'
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        },
    ]
};
