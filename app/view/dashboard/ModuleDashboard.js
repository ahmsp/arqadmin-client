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
        'ArqAdmin.view.dashboard.SearchHistoryGrid'
    ],

    //itemId: 'dashboard-main', //todo: change to module-dashboard
    //cls: 'dashboard-main', //todo: change to module-dashboard
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
            margin: '0 0 20px 0',
            //flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },

            items: [
                {
                    xtype: 'container',
                    cls: 'kpi-meta-charts',
                    margin: '0',

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
                                        animation: false,
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
                                        animation: false,
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
                            margin: '10px 0 0 0',
                            height: 300,
                            cls: 'kpi-meta-charts',
                            flex: 1,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },

                            items: [
                                {
                                    xtype: 'search-history',
                                    flex: 1,
                                    margin: '0 20px 0 20px',
                                    bodyCls: 'redemption-body',
                                    cls: 'search-history'
                                    //bodyCls: 'statistics-body',
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    bodyCls: 'statistics-totals-body',
                    width: 280,
                    margin: '0 20px 0 0',
                    title: 'REGISTROS CADASTRADOS',
                    tpl: [
                        '<div class="statistic-totals-header-total">Total de registros <span>{total:this.numberFormat}</span></div>',
                        '<div class="statistic-totals-header">ACERVOS</div>',
                        '<tpl for="acervos">',
                            '<div class="statistic-totals-description">{description} <span>{ratio:this.numberFormat}</span></div>',
                            '<div class="sparkline-totals">',
                                '<div class="sparkline-totals-inner sparkline-totals-inner-{status}" style="width: {[(values.ratio / parent.total) * 100]}%;"></div>',
                            '</div>',
                        '</tpl>',
                        '<div class="statistic-totals-header">FUNDOS</div>',
                        '<tpl for="fundos">',
                            '<div class="statistic-totals-description">{description} <span>{ratio:this.numberFormat}</span></div>',
                            '<div class="sparkline-totals">',
                                '<div class="sparkline-totals-inner sparkline-totals-inner-{status}" style="width: {[(values.ratio / parent.total) * 100]}%;"></div>',
                            '</div>',
                        '</tpl>',
                        '<div class="statistic-totals-header">FUNDO PMSP</div>',
                        '<tpl for="pmsp">',
                        '<div class="statistic-totals-description">{description} <span>{ratio:this.numberFormat}</span></div>',
                        '<div class="sparkline-totals">',
                        '<div class="sparkline-totals-inner sparkline-totals-inner-{status}" style="width: {[(values.ratio / parent.total) * 100]}%;"></div>',
                        '</div>',
                        '</tpl>',
                        {
                            numberFormat: function(value){
                                Ext.util.Format.decimalSeparator  = ",";
                                return Ext.util.Format.number(value, '000,000');
                            }
                        }
                    ],
                    data: {
                        total: 120117,
                        acervos: [
                            {
                                status: 'darkblue',
                                description: 'Textual/Cartográfico',
                                ratio: 59111
                            },
                            {
                                status: 'orange',
                                description: 'REGISTROS DE SEPULTAMENTO',
                                ratio: 51938
                            },
                            {
                                status: 'darkgreen',
                                description: 'FOTOGRÁFICO',
                                ratio: 9068
                            }
                        ],
                        fundos: [
                            {
                                status: 'purple',
                                description: 'Prefeitura Municipal <br>de São Paulo',
                                ratio: 102634
                            },
                            {
                                status: 'high',
                                description: 'Comissão do IV Centenário <br>da Cidade de São Paulo',
                                ratio: 7379
                            },
                            {
                                status: 'red',
                                description: 'Severo & Villares <br>(Desenhos Técnicos)',
                                ratio: 679
                            }
                        ],
                        pmsp: [
                            {
                                status: 'green',
                                description: 'Serviço Funerário Municipal <br>(Termos de Sepultamento)',
                                ratio: 51938
                            },
                            {
                                status: 'yellow',
                                description: 'Diretoria de Obras e Viação <br>(Obras Particulares)',
                                ratio: 39427
                            },
                            {
                                status: 'violet',
                                description: 'Diretoria de Polícia e Higiene <br>(Alvarás e Licenças)',
                                ratio: 7864
                            }
                        ]
                    }
                }
            ]
        }
    ]

});