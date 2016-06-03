Ext.define('ArqAdmin.view.dashboard.widgets.ChartsFake', {
    extend: 'Ext.container.Container',

    xtype: 'widgets-charts-fake',

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

});