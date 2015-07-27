Ext.define('ArqAdmin.view.dashboard.DashboardMain', {
    extend: 'Ext.panel.Panel',

    xtype: 'dashboard-main',

    requires: [
        'ArqAdmin.view.dashboard.DashboardViewModel',
        'ArqAdmin.view.dashboard.DashboardViewController',
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
        'Ext.chart.interactions.ItemHighlight'
    ],

    //itemId: 'dashboard-main',
    //cls: 'dashboard-main',
    cls: 'kpi-main',

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },
    reference: 'dashboardMain',

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
                '<a class="thumb" href="#">',
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
            listeners: {
                itemclick: 'onDataviewItemClick'
            }
        },
        {
            xtype: 'component',
            html: '<hr class="hr-dashboard">',
            margin: '0 20px'
        },
        {
            xtype: 'container',
            cls: 'kpi-meta-charts',

            layout: {
                type: 'hbox',
                align: 'stretch'
            },

            items: [
                {
                    xtype: 'container',
                    cls: 'kpi-meta-charts',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    items: [
                        {
                            xtype: 'container',
                            height: 230,
                            cls: 'kpi-meta-charts',

                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },

                            items: [{
                                title: 'DEPARTAMENTO DE CULTURA',

                                margin: '0 10px 0 20px',
                                width: 280,
                                bodyCls: 'redemption-body',

                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },

                                items: [{
                                    xtype: 'container',
                                    layout: {
                                        type: 'hbox',
                                        align: 'stretch'
                                    },
                                    flex: 1,
                                    items: [{
                                        xtype: 'polar',
                                        flex: 1,
                                        animation: true,
                                        padding: '10px 0 10px 10px',
                                        donut: true,
                                        interactions: ['rotate'],
                                        colors: ['#2ac8ef', '#ececec'],

                                        store: {
                                            fields: ['name', 'data1'],
                                            data: [
                                                {name: 'metric one', data1: 25},
                                                {name: 'metric two', data1: 75}
                                            ]
                                        },

                                        sprites: [{
                                            type: 'text',
                                            x: 40,
                                            y: 71,
                                            text: '25%',
                                            font: '30px 300 Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif',
                                            fillStyle: '#69708a'
                                        }],

                                        series: [{
                                            type: 'pie',
                                            xField: 'data1',
                                            colors: ['#2ac8ef', '#ececec'],
                                            donut: 85
                                        }]
                                    }, {
                                        xtype: 'polar',
                                        flex: 1,
                                        padding: '10px 10px 10px 0',
                                        animation: true,
                                        donut: true,
                                        interactions: ['rotate'],
                                        colors: ['#11c897', '#ececec'],

                                        store: {
                                            fields: ['name', 'data1'],
                                            data: [
                                                {name: 'metric one', data1: 50},
                                                {name: 'metric two', data1: 50}
                                            ]
                                        },

                                        sprites: [{
                                            type: 'text',
                                            x: 40,
                                            y: 71,
                                            text: '50%',
                                            font: '30px 300 Proxima Nova, Helvetica Neue, Helvetica, Arial, sans-serif',
                                            fillStyle: '#69708a'
                                        }],

                                        series: [{
                                            type: 'pie',
                                            xField: 'data1',
                                            colors: ['#11c897', '#ececec'],
                                            donut: 85
                                        }]
                                    }]
                                }, {
                                    xtype: 'label',
                                    html: '<span>IMAGEM</span><span>1.024</span>',
                                    cls: 'kpi-in-store'
                                }, {
                                    xtype: 'label',
                                    html: '<span>METADADOS</span><span>2.051</span>',
                                    cls: 'kpi-online'
                                }]
                            }, {
                                xtype: 'panel',
                                bodyCls: 'statistics-body',
                                margin: '0 20px 0 0',
                                flex: 1,
                                title: 'PROCESSO DE DIGITALIZAÇÃO',
                                tpl: [
                                    '<div class="statistic-header">Andamento por acervo</div>',
                                    '<tpl for=".">',
                                    '<div class="statistic-tag {status}">{text}</div>',
                                    '<div class="statistic-description">{description}</div>',
                                    '<div class="sparkline">',
                                    '<div class="sparkline-inner sparkline-inner-{status}" style="width: {[values.ratio * 100]}%;"></div>',
                                    '</div>',
                                    '</tpl>'
                                ],
                                data: [{
                                    status: 'active',
                                    text: 'Em andamento',
                                    description: 'DEPARTAMENTO DE CULTURA',
                                    ratio: 0.5
                                }, {
                                    status: 'paused',
                                    text: 'Aguardando',
                                    description: 'COMISSÃO IV CENTENÁRIO',
                                    ratio: 0.3
                                }, {
                                    status: 'ended',
                                    text: 'Pendente',
                                    description: 'BIBLIOGRÁFICO',
                                    ratio: 0.1
                                }]
                            }]
                        },
                        {
                            xtype: 'container',
                            height: 180,
                            cls: 'kpi-meta-charts',

                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },

                            items: [
                                {
                                    title: 'OUTROS INDICADORES',

                                    margin: '0 10px 0 20px',
                                    flex: 1,
                                    //width: 380,
                                    bodyCls: 'redemption-body',

                                    layout: {
                                        type: 'vbox',
                                        align: 'stretch'
                                    },

                                    items: [{
                                        xtype: 'container',
                                        layout: {
                                            type: 'hbox',
                                            align: 'stretch'
                                        },
                                        flex: 1,
                                        items: []
                                    }]
                                },
                                {
                                    xtype: 'panel',
                                    bodyCls: 'statistics-body',
                                    margin: '0 20px 0 0',
                                    flex: 1,
                                    title: 'QTD POR FUNDOS'
                                },
                                {
                                    xtype: 'panel',
                                    bodyCls: 'statistics-body',
                                    margin: '0 20px 0 0',
                                    flex: 1,
                                    title: 'QTD POR FUNDOS'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    bodyCls: 'statistics-body',
                    margin: '0 20px 0 0',
                    //flex: 1,
                    width: 280,
                    title: 'TERMOS PESQUISADOS'
                }



            ]
        }
    ]

});