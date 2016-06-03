Ext.define('ArqAdmin.view.dashboard.ModuleDashboard', {
    extend: 'Ext.panel.Panel',

    xtype: 'module-dashboard',

    requires: [
        'ArqAdmin.view.dashboard.DashboardModel',
        'ArqAdmin.view.dashboard.DashboardController',
        'Ext.view.View',
        'Ext.XTemplate',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar',
        'Ext.chart.series.Bar3D',
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.interactions.ItemHighlight',
        'ArqAdmin.view.dashboard.SearchHistoryGrid',
        'ArqAdmin.view.dashboard.widgets.VolumeAcervos',
        'ArqAdmin.view.dashboard.widgets.Resources'
    ],

    cls: 'kpi-main',

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },
    reference: 'moduleDashboard',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    scrollable: 'y',

    items: [
        {
            xtype: 'dataview',
            bind: '{acervos}',
            cls: 'dashboard-dataview',
            itemSelector: 'div.thumb-wrap',
            trackOver: true,

            tpl: [
                '<tpl for=".">',
                '<div class="thumb-wrap">',
                '<a class="thumb" href="#{acervo}">',
                '<div class="thumb-icon"><img src="{thumb}" alt="{title}" height="58" width="58"></div>',
                '<div class="thumb-title-container">',
                '<div class="thumb-title">{[this.getTitle(values.acervo)]}<br />{title}</div>',
                '<div class="thumb-title-small">{qtd} registros cadastrados</div>',
                '</div>',
                '<div class="thumb-download"></div>',
                '</a>',
                '</div>',
                '</tpl>',
                {
                    getTitle: function (acervo) {
                        return acervo == 'documental' ? 'Acervos' : 'Acervo';
                    }
                }
            ]
        },
        {
            xtype: 'component',
            html: '<hr class="hr-dashboard">',
            margin: '0 20px'
        },
        {
            xtype: 'container',
            cls: 'kpi-meta-charts',
            margin: '0 0 20px 0',
            layout: {
                type: 'hbox',
                // align: 'stretch'
                align: 'begin'
            },
            items: [
                // {
                //     xtype: 'widgets-charts-fake'
                // },
                {
                    xtype: 'widgets-resources',
                    flex: 1,
                    margin: '0 20px 0 20px'
                },
                {
                    xtype: 'widgets-volume-acervos'
                }
            ]
        }
    ]

});