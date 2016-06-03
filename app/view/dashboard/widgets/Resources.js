Ext.define('ArqAdmin.view.dashboard.widgets.Resources', {
    extend: 'Ext.panel.Panel',

    xtype: 'widgets-resources',

    // bodyCls: 'statistics-body',
    title: 'RECURSOS DE PESQUISA',
    items: [
        {
            xtype: 'dataview',
            bind: '{researchResources}',
            cls: 'dashboard-resources',
            itemSelector: 'div.thumb-wrap',
            trackOver: true,

            tpl: [
                '<tpl for=".">',
                '<div class="thumb-wrap">',
                    '<div class="thumb">',
                        '<div class="thumb-icon"><img src="{src}" alt="{title}" height="150" width="150"></div>',
                        '<div class="thumb-text-container">',
                            '<div class="thumb-title">{title}</div>',
                            '<div class="thumb-text">{text}</div>',
                        '</div>',
                    '</div>',
                '</div>',
                '</tpl>'
            ]
        }
    ]
});