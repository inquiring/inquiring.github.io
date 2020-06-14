module.exports = {
	block: 'page',
	title: 'Hello page',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'hello.min.css' },
		// { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'hello.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'medium', menu: 'default', breakpoint: 'default', font: 'ibm' }
	},
	content: [
        {
            html: '<svg class="svg-defs" focusable="false" width="0" height="0"><defs><symbol id="svg-facebook" viewBox="0 0 21 20"><path d="M18.982 0H2.983A2 2 0 0 0 .984 2v15.998c0 1.105.894 2 2 2h8.998v-8H8.983v-3h3V6.67a3.544 3.544 0 0 1 3.666-3.542l2.333.08V6h-2.045a.956.956 0 0 0-.955.955v2.044h3l-.584 3h-2.416v7.999h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2" fill="currentColor" stroke="none"></path></symbol><symbol id="svg-instagram" viewBox="0 0 21 20"><path d="M16.195 3.585a1.207 1.207 0 1 0-.001 2.414 1.207 1.207 0 0 0 .001-2.414zm2.792 9.414c0 3.364-1.636 4.999-5 4.999H7.988c-3.364 0-5-1.635-5-5V7c0-3.364 1.636-5 5-5h6c3.363 0 5 1.636 5 5v5.999zm-5-13H7.988C3.538 0 .99 2.55.99 7v6c0 4.45 2.548 6.999 7 6.999h5.998c4.451 0 7-2.548 7-7V7c0-4.451-2.549-7-7-7zm-2.999 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-8a4.999 4.999 0 1 0 0 10 4.999 4.999 0 0 0 0-10z" fill="currentColor" stroke="none"></path></symbol><symbol id="svg-twitter" viewBox="0 0 20 16"><path d="M0 14.204c2.254.205 4.241-.335 6.04-1.674-1.884-.161-3.144-1.082-3.839-2.824a4.4 4.4 0 0 0 1.821-.062C1.98 9.042.898 7.728.781 5.656c.575.247 1.152.447 1.789.447C.755 4.616.355 2.832 1.336.703 3.582 3.299 6.389 4.718 9.82 4.95c-.026-.293-.063-.558-.072-.823-.031-.96.246-1.828.855-2.58.957-1.183 2.213-1.69 3.735-1.54a3.815 3.815 0 0 1 2.027.824c.133.104.249.229.386.328a.33.33 0 0 0 .226.057 7.837 7.837 0 0 0 2.239-.821c.059-.033.123-.06.224-.108-.322.948-.905 1.646-1.715 2.17l.02.05c.372-.077.748-.138 1.114-.237.369-.1.727-.234 1.133-.37-.202.257-.376.49-.563.712a8.519 8.519 0 0 1-1.378 1.285c-.057.043-.09.153-.088.23.024.924-.056 1.838-.258 2.74a12.064 12.064 0 0 1-1.31 3.388 11.8 11.8 0 0 1-1.44 2 11.187 11.187 0 0 1-2.342 1.989c-.775.492-1.601.883-2.474 1.169-.919.302-1.866.487-2.833.558-1.177.085-2.348.03-3.503-.22A11.642 11.642 0 0 1 0 14.205" fill="currentColor" stroke="none"></path></symbol><symbol id="svg-youtube" viewBox="0 0 22 16"><path d="M9 5v6l5.5-3.056L9 5m1.812 11c-1.723-.042-3.61-.074-5.497-.138a26.226 26.226 0 0 1-2.418-.197c-1.312-.166-2.129-.936-2.474-2.256-.162-.616-.231-1.243-.286-1.874a38.811 38.811 0 0 1-.118-4.536C.053 5.813.14 4.63.24 3.45c.047-.55.21-1.081.442-1.583C1.118.924 1.872.41 2.854.292 3.704.189 4.564.146 5.42.12 7.22.063 9.022.01 10.823 0c1.548-.007 3.098.045 4.648.078a48.4 48.4 0 0 1 1.992.076c.641.04 1.29.057 1.918.18 1.016.2 1.713.834 2.07 1.85.212.606.323 1.23.382 1.87.16 1.685.195 3.375.148 5.064a57.833 57.833 0 0 1-.221 3.402 4.716 4.716 0 0 1-.467 1.643c-.453.935-1.219 1.448-2.202 1.531-1.43.122-2.868.182-4.302.235-1.27.046-2.542.047-3.977.071" fill="currentColor" stroke="none"></path></symbol></defs></svg>',
            attrs: { style: 'display: none' },
        },
        {
            block: 'tpl-layout',
            content: [
                {
                    elem: 'section',
                    // mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                    attrs: { style: 'background-color: #18318d;'},
                    // attrs: { style: 'background-color: var(--color-bg-brand)'},
                    content: [
                        {
                            elem: 'content',
                            attrs: { style: 'padding: var(--col-gap-third) var(--gap); text-align: right;' },
                            content: {
                                elem: 'container',
                                elemMods: {size: 's', distribute: 'center'},
                                attrs: { style: 'display: flex; justify-content: space-between;'},
                                content: [
                                    {
                                        block: 'icon',
                                        mods: {
                                            view: 'alert',
                                            size: 'm'
                                        },
                                        content: {
                                            html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 611.999 611.999" style="enable-background:new 0 0 611.999 611.999;" xml:space="preserve"><g><path d="M216.02,611.195c5.978,3.178,12.284-3.704,8.624-9.4c-19.866-30.919-38.678-82.947-8.706-149.952   c49.982-111.737,80.396-169.609,80.396-169.609s16.177,67.536,60.029,127.585c42.205,57.793,65.306,130.478,28.064,191.029   c-3.495,5.683,2.668,12.388,8.607,9.349c46.1-23.582,97.806-70.885,103.64-165.017c2.151-28.764-1.075-69.034-17.206-119.851   c-20.741-64.406-46.239-94.459-60.992-107.365c-4.413-3.861-11.276-0.439-10.914,5.413c4.299,69.494-21.845,87.129-36.726,47.386   c-5.943-15.874-9.409-43.33-9.409-76.766c0-55.665-16.15-112.967-51.755-159.531c-9.259-12.109-20.093-23.424-32.523-33.073   c-4.5-3.494-11.023,0.018-10.611,5.7c2.734,37.736,0.257,145.885-94.624,275.089c-86.029,119.851-52.693,211.896-40.864,236.826   C153.666,566.767,185.212,594.814,216.02,611.195z"/></g></svg>'
                                        }
                                    },
                                    {
                                        block: 'text',
                                        attrs: { href: 'tel:80000000000' },
                                        mods: {
                                            type: '',
                                            align: 'right',
                                            size: 'l',
                                            view: 'link',
                                        },
                                        content: '+7 (000) 000-00-00'
                                    },
                                ]
                            }
                        }
                    ]
                },
                // шапка
                {
                    elem: 'section',
                    // mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                    attrs: { style: 'padding-bottom: var(--gap);'},
                    mix: { block: 'site-header' },
                    content: [
                        {
                            elem: 'heading',
                            mix: { block: 'decorator', mods: {'indent-b': 'xs', 'space-h': 'm'} },
                            content: [
                                {
                                    block: 'text',
                                    mods: {
                                        type: 'h1',
                                        align: 'center',
                                        size: '2xl',
                                        view: 'primary',
                                    },
                                    content: 'Автономная газификация домов и предприятий'
                                },
                                {
                                    block: 'text',
                                    mods: {
                                        type: 'p',
                                        align: 'center',
                                        size: 'm',
                                        style: '',
                                        view: 'brand',
                                    },
                                    content: 'Работаем по Нижегородской, Владимирской и Ивановской областям'
                                },
                            ]
                        },
                    ]
                },
                // <!-- Разделы главного содержимого -->
                {
                    elem: 'section',
                    // mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                    // attrs: { style: 'margin-bottom: var(--gap);'},
                    content: [
                        {
                            elem: 'content',
                            content: {
                                elem: 'container',
                                elemMods: {size: 's', distribute: 'center'},
                                content: {
                                    block: 'tpl-grid',
                                    mods: {
                                        // 's-ratio': '1-1',
                                        // 'm-ratio': '1-1-1',
                                        // 'l-ratio': '1-1-1-1',
                                        'col-gap': 'full',
                                        'row-gap': 'full'
                                    },
                                    content: [
                                        {
                                            elem: 'fraction',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        type: '',
                                                        align: '',
                                                        size: 'm',
                                                        view: 'brand',
                                                    },
                                                    content: ''
                                                },
                                            ],
                                        },
                                        // {
                                        //     elem: 'fraction',
                                        //     content: {
                                        //         block: 'text',
                                        //         mods: {
                                        //             type: '',
                                        //             align: '',
                                        //             size: 'm',
                                        //             view: 'brand',
                                        //         },
                                        //         content: 'Не имея реакции с серой, газовое оборудование будет работать верой и правдой на 30% дольше, по сравнению с традиционными отопительными агрегатами'
                                        //     },
                                        // },
                                    ]
                                },
                            }
                        }
                    ]
                },
                {
                    elem: 'section',
                    attrs: { style: 'background-color: #ffcc00;'},
                    content: [
                        {
                            elem: 'heading',
                            attrs: { style: 'margin: 2em 0 1em;' },
                            content: {
                                block: 'text',
                                mods: {
                                    type: 'h2',
                                    align: 'center',
                                    size: 'xl',
                                    view: 'primary',
                                },
                                content: 'Преимущества'
                            }
                        },
                        {
                            elem: 'content',
                            attrs: { style: 'padding-bottom: var(--gap);' },
                            content: {
                                elem: 'container',
                                elemMods: {size: 's', distribute: 'center'},
                                content: {
                                    block: 'tpl-flex',
                                    mods: {
                                        'xs-ratio': '1',
                                        's-ratio': '1-1',
                                        // 's-ratio': '1-1-1',
                                        'col-gap': 'full',
                                        'row-gap': 'full',
                                    },
                                    content: [
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    type: 'p',
                                                    align: '',
                                                    size: 'm',
                                                    view: 'primary',
                                                },
                                                content: '- Экономия, т.к. себестоимость вырабатываемой теплоэнергии с помощью газовой топливной смеси в разы дешевле других аналогов'
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { style: 'margin-left: 0;' },
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    type: 'p',
                                                    align: '',
                                                    size: 'm',
                                                    view: 'primary',
                                                },
                                                content: '- Экологичность, ведь от сжигания газа ущерб окружающей среды минимален'
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { style: 'margin-left: 0;' },
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    type: 'p',
                                                    align: '',
                                                    size: 'm',
                                                    view: 'primary',
                                                },
                                                content: '- Отсутствие неприятных запахов от выхлопов'
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    type: 'p',
                                                    align: '',
                                                    size: 'm',
                                                    view: 'primary',
                                                },
                                                content: '- Долговечность оборудования примерно на четверть выше, чем у жидкостных отопительных агрегатов.'
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    type: 'p',
                                                    align: '',
                                                    size: 'm',
                                                    view: 'primary',
                                                },
                                                content: '- Широкие возможности, потому что сжиженный газ из газгольдера может использоваться не только для обогрева здания, но и для приготовления пищи.'
                                            },
                                        },
                                        {
                                            elem: 'item',
                                            attrs: { style: 'margin-left: 0;' },
                                            content: {
                                                block: 'text',
                                                mods: {
                                                    type: 'p',
                                                    align: '',
                                                    size: 'm',
                                                    view: 'primary',
                                                },
                                                content: '- Абсолютная простота эксплуатации'
                                            },
                                        },
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    elem: 'section',
                    // attrs: { style: 'padding: .5rem 1rem;'},
                    content: [
                        {
                            elem: 'heading',
                            content: {
                                block: 'text',
                                mods: {
                                    type: 'h2',
                                    align: 'center',
                                    size: 'xl',
                                    view: 'primary',
                                },
                                content: 'Наши работы'
                            }
                        },
                        {
                            elem: 'content',
                            content: {
                                elem: 'container',
                                elemMods: {size: 'm', distribute: 'center'},
                                content: {
                                    block: 'tpl-flex',
                                    mods: {
                                        'xs-ratio': '1',
                                        's-ratio': '1-1-1-1',
                                        'col-gap': 'full',
                                        'row-gap': 'full'
                                    },
                                    content: [
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'image',
                                                url: '../../common.blocks/image/image01.jpg',
                                                mods: { width: 'full'},
                                                alt: 'картинка 1'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'image',
                                                url: '../../common.blocks/image/image02.jpg',
                                                mods: { width: 'full'},
                                                alt: 'картинка 2'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'image',
                                                url: '../../common.blocks/image/image03.jpg',
                                                mods: { width: 'full'},
                                                alt: 'картинка 3'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'image',
                                                url: '../../common.blocks/image/image04.jpg',
                                                mods: { width: 'full'},
                                                alt: 'картинка 4'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'image',
                                                url: '../../common.blocks/image/image05.jpg',
                                                mods: { width: 'full'},
                                                alt: 'картинка 5'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'image',
                                                url: '../../common.blocks/image/image06.jpg',
                                                mods: { width: 'full'},
                                                alt: 'картинка 6'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'image',
                                                url: '../../common.blocks/image/image07.jpg',
                                                mods: { width: 'full'},
                                                alt: 'картинка 7'
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            content: {
                                                block: 'image',
                                                url: '../../common.blocks/image/image08.jpg',
                                                mods: { width: 'full'},
                                                alt: 'картинка 8'
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    elem: 'section',
                    // attrs: { style: 'padding: .5rem 1rem;'},
                    content: [
                        {
                            elem: 'heading',
                            content: {
                                block: 'text',
                                mods: {
                                    type: 'h2',
                                    align: 'center',
                                    size: 'xl',
                                    view: 'primary',
                                },
                                content: 'Ответим на ваши вопросы'
                            }
                        },
                        {
                            elem: 'content',
                            content: {
                                elem: 'container',
                                elemMods: { size: 's', distribute: 'center' },
                                content: {
                                    block: 'tpl-block',
                                    mods: {
                                        'xs-ratio': '1',
                                        // 's-ratio': '1-1',
                                        'col-gap': 'full',
                                        'row-gap': 'full'
                                    },
                                    content: [
                                        {
                                            elem: 'item',
                                            mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        align: 'center',
                                                        view: 'secondary'
                                                    },
                                                    content: 'Наши специалисты с удовольствием на них ответят!'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {
                                                        align: 'center',
                                                        view: 'secondary'
                                                    },
                                                    content: 'Свяжитесь с нами любым удобным способом, например, заполнив форму!'
                                                }

                                            ]
                                        },
                                        {
                                            elem: 'item',
                                            // attrs: { style: 'margin: auto;'},
                                            content: {
                                                block: 'pt-form',
                                                mods: {
                                                    border: 'around',
                                                    bordered: '',
                                                    'vertical-align': 'center',
                                                    'space-h': 'm',
                                                    'space-v': 'xs',
                                                    'structure': '20-80',
                                                },
                                                attrs: { action: 'mail.php', method: 'POST' },
                                                mix: [{ block: 'decorator', mods: { 'space-v': 'm' }}, { block: 'form' },],
                                                content: {
                                                    elem: 'section',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'legend',
                                                                content: {
                                                                    block: 'text',
                                                                    mods: {
                                                                        style: '',
                                                                        transform: 'uppercase'
                                                                    },
                                                                    content: 'форма обратной связи',
                                                                },
                                                            }
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'label',
                                                                    mix: { block: 'text'},
                                                                    content: 'Имя',
                                                                    attrs: { for: 'fname' },
                                                                },
                                                                {
                                                                    elem: 'control',
                                                                    content: {
                                                                        block: 'input',
                                                                        mods: {
                                                                            theme: 'simple',
                                                                            size: 'm',
                                                                            width: 'available',
                                                                            'has-clear': true
                                                                        },
                                                                        name: 'fname',
                                                                        val: '',
                                                                        id: 'fname',
                                                                        placeholder: 'Введите имя'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'label',
                                                                    mix: { block: 'text'},
                                                                    content: 'Телефон',
                                                                    attrs: { for: 'phone' },
                                                                },
                                                                {
                                                                    elem: 'control',
                                                                    content: {
                                                                        block: 'input',
                                                                        mods: {
                                                                            theme: 'simple',
                                                                            size: 'm',
                                                                            width: 'available',
                                                                            'has-clear': true
                                                                        },
                                                                        id: 'phone',
                                                                        placeholder: 'Введите номер телефона'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: [
                                                                {
                                                                    elem: 'label',
                                                                    mix: { block: 'text'},
                                                                    content: 'E-mail',
                                                                    attrs: { for: 'email' },
                                                                },
                                                                {
                                                                    elem: 'control',
                                                                    content: {
                                                                        block: 'input',
                                                                        mods: {
                                                                            theme: 'simple',
                                                                            size: 'm',
                                                                            width: 'available',
                                                                            'has-clear': true
                                                                        },
                                                                        id: 'email',
                                                                        name: 'email',
                                                                        placeholder: 'Введите e-mail'
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            content: {
                                                                block: 'button',
                                                                 attrs: { style: 'background: #ffcc00;'},
                                                                mods: {
                                                                    theme: 'simple',
                                                                    size: 'm',
                                                                    type: 'submit'
                                                                },
                                                                text: 'отправить'
                                                            }
                                                        },
                                                    ]
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    ]
                },
                // <!-- Подвал сайта -->
                {
                    elem: 'section',
                    attrs: { style: 'background: gainsboro; margin-top: var(--gap);' },
                    content: [
                        {
                            elem: 'content',
                            content: {
                                elem: 'container',
                                elemMods: {size: 's', distribute: 'center'},
                                content: {
                                    block: 'tpl-block',
                                    mods: {
                                        'xs-ratio': '1',
                                        's-ratio': '1-1',
                                        // 'm-ratio': '1-1',
                                        // 'l-ratio': '1-1-1-1',
                                        // 'col-gap': 'third',
                                        // 'row-gap': 'third'
                                    },
                                    content: [
                                        {
                                            elem: 'item',
                                            mix: {block: 'decorator', mods: {'space-a': 'm'}},
                                            content: {
                                                block: 'pt-list',
                                                attrs: { style: 'text-align: center;line-height: 10px;'},
                                                content: [
                                                    {
                                                        elem: 'item',
                                                        attrs: { style: 'display: inline-block; margin: 0 32px 0 0; vertical-align: top;'},
                                                        content: {
                                                            block: 'link',
                                                            attrs: { href: '#' },
                                                            content: [
                                                                {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        view: 'brand',
                                                                        size: 'm'
                                                                    },
                                                                    content: {
                                                                        html: '<svg class="svg-icon" focusable="false" data-svg-icon="" width="24" height="24"><use xlink:href="#svg-facebook"></use></svg>'
                                                                    }
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    attrs: { style: 'font-size: 0' },
                                                                    mods: {
                                                                        size: 'xs',
                                                                        view: 'primary'
                                                                    },
                                                                    content: 'Facebook'
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        elem: 'item',
                                                        attrs: { style: 'display: inline-block; margin: 0 32px 0 0; vertical-align: top;'},
                                                        content: {
                                                            block: 'link',
                                                            attrs: { href: '#' },
                                                            content: [
                                                                {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        view: 'brand',
                                                                        size: 'm'
                                                                    },
                                                                    content: {
                                                                        html: '<svg class="svg-icon" focusable="false" data-svg-icon="" width="24" height="24"><use xlink:href="#svg-instagram"></use></svg>'
                                                                    }
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    attrs: { style: 'font-size: 0' },
                                                                    mods: {
                                                                        size: 'xs',
                                                                        view: 'primary'
                                                                    },
                                                                    content: 'Instagram'
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        elem: 'item',
                                                        attrs: { style: 'display: inline-block; margin: 0; vertical-align: top;'},
                                                        content: {
                                                            block: 'link',
                                                            attrs: { href: '#' },
                                                            content: [
                                                                {
                                                                    block: 'icon',
                                                                    mods: {
                                                                        view: 'brand',
                                                                        size: 'm'
                                                                    },
                                                                    content: {
                                                                        html: '<svg class="svg-icon" focusable="false" data-svg-icon="" width="24" height="24"><use xlink:href="#svg-twitter"></use></svg>'
                                                                    }
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    attrs: { style: 'font-size: 0' },
                                                                    mods: {
                                                                        size: 'xs',
                                                                        view: 'primary'
                                                                    },
                                                                    content: 'Twitter'
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'item',
                                            mix: {block: 'decorator', mods: {'space-a': 'm'}},
                                            content: {
                                                block: 'pt-icon-plus',
                                                mods: { distribute: 'center', 'vertical-align': 'center' },
                                                content: [
                                                    {
                                                        elem: 'block',
                                                        mix: {block: 'decorator', mods: {'indent-r': 'm'}},
                                                        content: {
                                                            block: 'text',
                                                            mods: {
                                                                type: '',
                                                                align: '',
                                                                size: 'xs',
                                                                view: 'secondary',
                                                            },
                                                            content: 'Сделано c помощью'
                                                        }
                                                    },
                                                    {
                                                        elem: 'icon',
                                                        content: {
                                                            block: 'icon',
                                                            mods: {
                                                                size: ''
                                                            },
                                                            content: {
                                                                html: '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" viewBox="0 0 1293 363"><g fill="none" fill-rule="evenodd" transform="translate(0 -1)"><path fill="#0067FF" d="M142.598 265.317C135.551 272.346 135.551 283.743 142.598 290.773 149.645 297.802 161.07 297.802 168.117 290.773 175.164 283.743 175.164 272.346 168.117 265.317 161.07 258.288 149.645 258.288 142.598 265.317zM108.572 231.376C101.525 238.405 101.525 249.802 108.572 256.831 115.619 263.861 127.045 263.861 134.092 256.831 141.139 249.802 141.139 238.405 134.092 231.376 127.045 224.346 115.619 224.346 108.572 231.376zM73.836 196.727C66.789 203.757 66.789 215.154 73.836 222.183 80.883 229.212 92.308 229.212 99.355 222.183 106.403 215.154 106.403 203.757 99.355 196.727 92.308 189.698 80.883 189.698 73.836 196.727zM39.811 230.669C32.764 237.698 32.764 249.095 39.811 256.124 46.858 263.154 58.283 263.154 65.33 256.124 72.377 249.095 72.377 237.698 65.33 230.669 58.283 223.639 46.858 223.639 39.811 230.669zM5.7872 264.61C-1.2598 271.639-1.2598 283.036 5.7872 290.066 12.834 297.095 24.26 297.095 31.307 290.066 38.354 283.036 38.354 271.639 31.307 264.61 24.26 257.581 12.834 257.581 5.7872 264.61zM39.811 298.551C32.764 305.581 32.764 316.978 39.811 324.007 46.858 331.037 58.283 331.037 65.33 324.007 72.377 316.978 72.377 305.581 65.33 298.551 58.283 291.522 46.858 291.522 39.811 298.551zM73.836 264.61C66.789 271.639 66.789 283.036 73.836 290.066 80.883 297.095 92.308 297.095 99.355 290.066 106.403 283.036 106.403 271.639 99.355 264.61 92.308 257.581 80.883 257.581 73.836 264.61zM108.572 299.258C101.525 306.288 101.525 317.685 108.572 324.714 115.619 331.744 127.045 331.744 134.092 324.714 141.139 317.685 141.139 306.288 134.092 299.258 127.045 292.229 115.619 292.229 108.572 299.258zM74.545 333.2C67.498 340.229 67.498 351.626 74.545 358.656 81.592 365.685 93.017 365.685 100.064 358.656 107.111 351.626 107.111 340.229 100.064 333.2 93.017 326.17 81.592 326.17 74.545 333.2zM163.45 86C163.45 127.974 129.339 162 87.26 162 45.182 162 11.07 127.974 11.07 86 11.07 44.026 45.182 10 87.26 10 129.339 10 163.45 44.026 163.45 86z"/><path fill="#00C2FF" d="M353.754,114.503 C369.394,98.902 369.394,73.607 353.754,58.005 L308.315,12.68 C292.675,-2.922 267.317,-2.922 251.676,12.68 L206.237,58.005 C190.597,73.607 190.597,98.902 206.237,114.503 L251.676,159.828 C267.317,175.43 292.675,175.43 308.315,159.828 L353.754,114.503 Z M219.847,86.253 C219.847,119.39 246.777,146.253 279.997,146.253 C313.217,146.253 340.147,119.39 340.147,86.253 C340.147,53.116 313.217,26.253 279.997,26.253 C246.777,26.253 219.847,53.116 219.847,86.253 Z"/><rect width="144.18" height="144.18" x="207.472" y="205.735" fill="#00C2FF" rx="40" transform="rotate(90 279.562 277.825)"/><path fill="#FFF" fill-rule="nonzero" d="M465.429719,160 L452,83 L465.429719,83 L474.971888,148.167431 L488.578313,99.0711009 L503.598394,99.0711009 L517.381526,148.167431 L526.923695,83 L540,83 L526.570281,160 L509.429719,160 L496,112.84633 L482.570281,160 L465.429719,160 Z M556,161 L556,48 L570.202247,48 L570.202247,92.1018809 C575.47534,85.3714734 583.146067,82.0062696 593.213483,82.0062696 C611.070846,82.0062696 620,92.5148408 620,113.532915 L620,161 L605.797753,161 L605.797753,116.543887 C605.797753,108.632396 604.658545,102.847228 602.382022,99.1865204 C600.224719,95.5258126 595.910112,93.6959248 589.438202,93.6959248 C581.168539,93.6959248 574.756239,96.4113925 570.202247,101.84326 L570.202247,161 L556,161 Z M640,160 L640,148.167431 L667.784777,148.167431 L667.784777,94.8325688 L640,94.8325688 L640,83 L681.677165,83 L681.677165,148.167431 L707,148.167431 L707,160 L640,160 Z M665,66 L665,48 L683,48 L683,66 L665,66 Z M760.041284,162 C750.151376,162 742.851992,159.65463 738.142202,154.962963 C733.550459,150.15463 731.254587,141.534259 731.254587,129.101852 L731.254587,95.3240741 L706,95.3240741 L706,83.537037 L731.254587,83.537037 L731.254587,48 L745.206422,48 L745.206422,83.537037 L783,83.537037 L783,95.3240741 L745.206422,95.3240741 L745.206422,128.574074 C745.206422,136.666667 746.325543,142.296296 748.561927,145.462963 C750.917286,148.512037 755.390983,150.037037 761.983945,150.037037 C768.45979,150.037037 774.699541,148.923148 780.704128,146.694444 L780.704128,158.481481 C775.995268,160.826852 769.107653,162 760.041284,162 Z M833.294118,162 C822.117957,162 812.941486,158.743733 805.764706,152.230263 C798.587926,145.598996 795,135.414162 795,121.677632 C795,114.335838 796.058824,107.941101 798.176471,102.493421 C800.412074,96.9279432 803.352632,92.6647853 807,89.7039474 C810.764396,86.7431094 814.764706,84.5526316 819,83.1315789 C823.235294,81.7105263 827.705573,81 832.411765,81 C837.117957,81 841.529721,81.7105263 845.647059,83.1315789 C849.882353,84.4338989 853.882663,86.5654778 857.647059,89.5263158 C861.411455,92.4871537 864.411455,96.6904778 866.647059,102.138158 C868.882663,107.585838 870,114.039474 870,121.5 L870,124.342105 L808.941176,124.342105 C809.647059,141.75 817.882663,150.453947 833.647059,150.453947 C839.765015,150.453947 844.764706,149.151627 848.647059,146.546053 C852.529412,143.940478 854.882043,140.210215 855.705882,135.355263 L869.823529,135.355263 C869.117647,140.210215 867.470898,144.473373 864.882353,148.144737 C862.411765,151.816101 859.353251,154.598373 855.705882,156.493421 C852.176471,158.38847 848.529102,159.749688 844.764706,160.578947 C841.117337,161.526004 837.294427,162 833.294118,162 Z M809,115 L856,115 C855.16888,107.910789 852.676455,102.472544 848.522727,98.6833333 C844.368999,94.8941228 839.02809,93 832.5,93 C825.97191,93 820.631001,94.8941228 816.477273,98.6833333 C812.323545,102.472544 809.83112,107.910789 809,115 Z M886,192 L886,83.7571885 L897.676923,83.7571885 L897.676923,93.5974441 C903.692308,85.8658147 912.063563,82 922.8,82 C931.878947,82 939.48664,85.2803935 945.623077,91.8402556 C951.871255,98.4001177 955,108.475282 955,122.063898 C955,135.301076 951.936437,145.317051 945.8,152.111821 C939.663563,158.789137 932,162.127796 922.8,162.127796 C917.61336,162.127796 913.01336,161.131747 909,159.140575 C904.98664,157.149403 901.978947,154.981587 899.976923,152.638978 L899.976923,192 L886,192 Z M919.168831,151 C926.501937,151 931.948052,148.43447 935.497835,143.302469 C939.169059,138.051754 941,130.950617 941,122 C941,113.049383 939.169059,106.008545 935.497835,100.876543 C931.948052,95.6258285 926.501937,93 919.168831,93 C911.592846,93 905.203235,95.6258285 900,100.876543 L900,143.123457 C905.203235,148.374172 911.592846,151 919.168831,151 Z M991.666667,162 C983.732164,162 977.266667,160.223684 972.288889,156.671053 C967.432749,152.999688 965,147.493109 965,140.151316 C965,125.230263 975.254971,117.769737 995.755556,117.769737 C1004.28889,117.769737 1011.69942,118.776627 1017.97778,120.789474 L1017.97778,114.039474 C1017.97778,106.934211 1016.79883,101.605263 1014.42222,98.0526316 C1012.17661,94.5 1007.25497,92.7236842 999.666667,92.7236842 C986.754386,92.7236842 980.288889,98.1115305 980.288889,108.888158 L966.777778,108.888158 C966.777778,103.559211 967.788304,98.9996884 969.8,95.2105263 C971.821053,91.4213643 974.54386,88.579259 977.977778,86.6842105 C981.421053,84.6713643 984.976608,83.2503116 988.644444,82.4210526 C992.443275,81.4739958 996.466667,81 1000.73333,81 C1021.59883,81 1032.02222,91.0661011 1032.02222,111.197368 L1032.02222,146.368421 C1032.02222,147.908206 1032.32164,148.973996 1032.91111,149.565789 C1033.62222,150.157583 1034.75439,150.453947 1036.28889,150.453947 C1038.77778,150.453947 1041.68772,150.039785 1045,149.210526 L1045,159.157895 C1040.62105,161.052943 1036.11111,162 1031.48889,162 C1023.7883,162 1019.93333,158.506267 1019.93333,151.519737 L1019.93333,150.098684 C1013.88889,158.033206 1004.46667,162 991.666667,162 Z M993.958904,151 C1003.21918,151 1011.23288,148.494123 1018,143.483333 L1018,131.016667 C1012.77938,129.672544 1006.24658,129 998.410959,129 C992,129 987.135544,129.855877 983.808219,131.566667 C980.60274,133.277456 979,136.210789 979,140.366667 C979,147.455877 983.986301,151 993.958904,151 Z M1057,192 L1057,83.7571885 L1068.67692,83.7571885 L1068.67692,93.5974441 C1074.69231,85.8658147 1083.06356,82 1093.8,82 C1102.87895,82 1110.48664,85.2803935 1116.62308,91.8402556 C1122.87126,98.4001177 1126,108.475282 1126,122.063898 C1126,135.301076 1122.93644,145.317051 1116.8,152.111821 C1110.66356,158.789137 1103,162.127796 1093.8,162.127796 C1088.61336,162.127796 1084.01336,161.131747 1080,159.140575 C1075.98664,157.149403 1072.97895,154.981587 1070.97692,152.638978 L1070.97692,192 L1057,192 Z M1089.16883,151 C1096.50194,151 1101.94805,148.43447 1105.49784,143.302469 C1109.16906,138.051754 1111,130.950617 1111,122 C1111,113.049383 1109.16906,106.008545 1105.49784,100.876543 C1101.94805,95.6258285 1096.50194,93 1089.16883,93 C1081.59285,93 1075.20324,95.6258285 1070,100.876543 L1070,143.123457 C1075.20324,148.374172 1081.59285,151 1089.16883,151 Z M1174.29412,162 C1163.11146,162 1153.93498,158.743733 1146.76471,152.230263 C1139.58514,145.598996 1136,135.414162 1136,121.677632 C1136,114.335838 1137.05882,107.941101 1139.17647,102.493421 C1141.40557,96.9279432 1144.34985,92.6647853 1148,89.7039474 C1151.76161,86.7431094 1155.76471,84.5526316 1160,83.1315789 C1164.23529,81.7105263 1168.70279,81 1173.41176,81 C1178.11146,81 1182.52322,81.7105263 1186.64706,83.1315789 C1190.88235,84.4338989 1194.87616,86.5654778 1198.64706,89.5263158 C1202.40867,92.4871537 1205.40867,96.6904778 1207.64706,102.138158 C1209.87616,107.585838 1211,114.039474 1211,121.5 L1211,124.342105 L1149.94118,124.342105 C1150.64706,141.75 1158.87616,150.453947 1174.64706,150.453947 C1180.75851,150.453947 1185.76471,149.151627 1189.64706,146.546053 C1193.52941,143.940478 1195.87926,140.210215 1196.70588,135.355263 L1210.82353,135.355263 C1210.11765,140.210215 1208.4644,144.473373 1205.88235,148.144737 C1203.41176,151.816101 1200.34675,154.598373 1196.70588,156.493421 C1193.17647,158.38847 1189.52632,159.749688 1185.76471,160.578947 C1182.11455,161.526004 1178.28793,162 1174.29412,162 Z M1149,115 L1196,115 C1195.16607,107.910789 1192.67364,102.472544 1188.52273,98.6833333 C1184.36244,94.8941228 1179.02153,93 1172.5,93 C1165.9691,93 1160.62819,94.8941228 1156.47727,98.6833333 C1152.31699,102.472544 1149.82456,107.910789 1149,115 Z M1221,161 L1221,149.132287 L1240.99017,149.132287 L1240.99017,95.6390135 L1221,95.6390135 L1221,83.7713004 L1252.66585,83.7713004 L1252.66585,101.307175 C1257.97297,88.4354142 1266.93922,82 1279.55528,82 C1284.86241,82 1289.35019,82.8269176 1293,84.4798206 L1293,98.8273543 C1289.704,97.2919165 1285.33726,96.5246637 1279.90909,96.5246637 C1269.18311,96.5246637 1260.86862,100.775785 1254.9656,109.278027 L1254.9656,149.132287 L1288.40049,149.132287 L1288.40049,161 L1221,161 Z M509.041284,312 C499.151376,312 491.851992,309.65463 487.142202,304.962963 C482.550459,300.15463 480.254587,291.534259 480.254587,279.101852 L480.254587,245.324074 L455,245.324074 L455,233.537037 L480.254587,233.537037 L480.254587,198 L494.206422,198 L494.206422,233.537037 L532,233.537037 L532,245.324074 L494.206422,245.324074 L494.206422,278.574074 C494.206422,286.666667 495.324614,292.296296 497.561927,295.462963 C499.916357,298.512037 504.390983,300.037037 510.983945,300.037037 C517.45979,300.037037 523.699541,298.923148 529.704128,296.694444 L529.704128,308.481481 C524.994338,310.826852 518.106724,312 509.041284,312 Z M593.412736,310.046053 C589.284757,311.348373 584.862587,312 580.146226,312 C575.428935,312 570.948113,311.348373 566.70283,310.046053 C562.574851,308.625 558.62469,306.434522 554.851415,303.473684 C551.195444,300.512846 548.306604,296.309522 546.183962,290.861842 C544.061321,285.414162 543,279.019425 543,271.677632 C543,264.098373 544.119973,257.585838 546.360849,252.138158 C548.600794,246.57268 551.60787,242.368421 555.382075,239.526316 C559.15535,236.565478 563.165094,234.433899 567.410377,233.131579 C571.65566,231.710526 576.136482,231 580.853774,231 C585.570134,231 589.992304,231.651627 594.120283,232.953947 C598.365566,234.256267 602.315727,236.387846 605.971698,239.348684 C609.626738,242.190789 612.516509,246.335215 614.639151,251.782895 C616.879096,257.230575 618,263.684211 618,271.144737 C618,278.723996 616.879096,285.296364 614.639151,290.861842 C612.398275,296.42732 609.332547,300.690478 605.441038,303.651316 C601.666832,306.493421 597.658019,308.625 593.412736,310.046053 Z M558,271 C558,290.333333 565.833023,300 581.5,300 C597.166047,300 605,290.333333 605,271 C605,251.666667 597.166047,242 581.5,242 C565.833023,242 558,251.666667 558,271 Z M678.412736,310.046053 C674.284757,311.348373 669.862587,312 665.146226,312 C660.428935,312 655.948113,311.348373 651.70283,310.046053 C647.574851,308.625 643.62469,306.434522 639.851415,303.473684 C636.195444,300.512846 633.306604,296.309522 631.183962,290.861842 C629.061321,285.414162 628,279.019425 628,271.677632 C628,264.098373 629.119973,257.585838 631.360849,252.138158 C633.600794,246.57268 636.60787,242.368421 640.382075,239.526316 C644.15535,236.565478 648.165094,234.433899 652.410377,233.131579 C656.65566,231.710526 661.136482,231 665.853774,231 C670.570134,231 674.992304,231.651627 679.120283,232.953947 C683.365566,234.256267 687.315727,236.387846 690.971698,239.348684 C694.626738,242.190789 697.516509,246.335215 699.639151,251.782895 C701.879096,257.230575 703,263.684211 703,271.144737 C703,278.723996 701.879096,285.296364 699.639151,290.861842 C697.398275,296.42732 694.332547,300.690478 690.441038,303.651316 C686.666832,306.493421 682.658019,308.625 678.412736,310.046053 Z M643,271 C643,290.333333 650.833023,300 666.5,300 C682.166047,300 690,290.333333 690,271 C690,251.666667 682.166047,242 666.5,242 C650.833023,242 643,251.666667 643,271 Z M714,310 L714,298.133229 L740.553806,298.133229 L740.553806,208.689655 L714,208.689655 L714,197 L754.446194,197 L754.446194,298.133229 L781,298.133229 L781,310 L714,310 Z M833.378713,312 C809.829208,312 797.70297,303.237154 797,285.710526 L810.00495,285.710526 C810.590451,295.302632 818.792079,300.098684 834.608911,300.098684 C847.613861,300.098684 854.116337,296.546053 854.116337,289.440789 C854.116337,286.717417 853.003609,284.526004 850.777228,282.868421 C848.668317,281.092105 846.149648,279.789785 843.220297,278.960526 C840.408416,278.131267 836.190594,277.125312 830.566832,275.940789 C828.691936,275.585526 827.227723,275.289162 826.173267,275.052632 C817.503609,273.157583 810.766193,270.670741 805.962871,267.592105 C801.159549,264.394737 798.757426,259.479952 798.757426,252.848684 C798.757426,245.506891 801.803322,240.059211 807.89604,236.506579 C813.988757,232.835215 821.897173,231 831.621287,231 C852.827866,231 864.075391,239.171053 865.363861,255.513158 L852.358911,255.513158 C850.8355,247.105575 843.747525,242.901316 831.094059,242.901316 C818.792079,242.901316 812.641089,245.921053 812.641089,251.960526 C812.641089,253.262846 812.875104,254.447368 813.344059,255.513158 C813.813015,256.460215 814.63253,257.348373 815.804455,258.177632 C816.976381,259.006891 818.030836,259.717417 818.967822,260.309211 C820.022277,260.783206 821.60396,261.316101 823.712871,261.907895 C825.821782,262.381891 827.461738,262.796053 828.633663,263.151316 C829.922134,263.387846 831.972772,263.802943 834.784653,264.394737 C837.596535,264.868733 839.587976,265.223996 840.759901,265.460526 C849.6645,267.355575 856.40099,269.901316 860.970297,273.098684 C865.657074,276.296053 868,281.328636 868,288.197368 C868,296.249688 864.778361,302.230263 858.334158,306.138158 C852.007426,310.046053 843.689252,312 833.378713,312 Z"/></g></svg>'
                                                            }
                                                        }
                                                    }
                                                ]
                                            }

                                        },

                                    ]
                                },
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
