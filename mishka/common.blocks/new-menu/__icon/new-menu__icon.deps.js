[{
    mustDeps : [
        { block : 'i-bem-dom' }
    ],
    shouldDeps : [
        { mod : 'disabled' },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        { block : 'keyboard', elem : 'codes' },
        'control',
        'events'
    ]
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'new-menu', elem: 'icon' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'new-menu', elem: 'icon', mods : { pseudo : true } }
}]
