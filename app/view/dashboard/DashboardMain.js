Ext.define('ArqAdmin.view.dashboard.DashboardMain', {
    extend: 'Ext.panel.Panel',

    xtype: 'dashboard-main',

    requires: [
        'ArqAdmin.view.dashboard.DashboardViewModel',
        'ArqAdmin.view.dashboard.DashboardViewController',
        'Ext.view.View',
        'Ext.XTemplate'
    ],

    itemId: 'dashboard-main',
    cls: 'dashboard-main',

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },
    reference: 'dashboardMain',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'dataview',
            cls: 'dashboard-dataview',
            itemSelector: 'div.thumb-wrap',
            tpl: [
                '<tpl for=".">',
                '<div class="thumb-wrap">',
                '<a class="thumb" href="{url}" target="_blank">',
                '<div class="thumb-icon"><img src="{thumb}" alt="{title}" height="57" width="57"></div>',
                '<div class="thumb-title-container">',
                '<div class="thumb-title">Acervo<br />{title}</div>',
                '<div class="thumb-title-small">{qtd} registros cadastrados</div>',
                '</div>',
                '<div class="thumb-download"></div>',
                '</a>',
                '</div>',
                '</tpl>'
            ],

            data: [
                {
                    "acervo": "doc",
                    "title": "DOCUMENTAL E CARTOGRÁFICO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "59.162",
                    "thumb": "resources/img/acervo_docs_2.png",
                    "url": "resources/reports/Q42013Report.pdf"
                },
                {
                    "acervo": "foto",
                    "title": "FOTOGRÁFICO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "7.766",
                    "thumb": "resources/img/acervo_foto_1.png",
                    "url": "resources/reports/Q42013Report.pdf"
                },
                {
                    "acervo": "sepult",
                    "title": "REGISTROS DE SEPULTAMENTO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "51.938",
                    "thumb": "resources/img/acervo_cemit_1.jpg",
                    "url": "resources/reports/Q42013Report.pdf"
                }
            ]
        }]

});