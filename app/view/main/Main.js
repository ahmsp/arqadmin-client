Ext.define('ArqAdmin.view.main.Main', {
    extend: 'Ext.container.Viewport',

    xtype: 'app-main',

    requires: [
        'ArqAdmin.view.main.MainController',
        'ArqAdmin.view.main.MainModel',
        'ArqAdmin.view.dashboard.DashboardMain',
        'ArqAdmin.view.documental.Documental',
        'ArqAdmin.view.fotografico.Container',
        'ArqAdmin.view.sepultamento.Container',
        'ArqAdmin.view.footer.Panel',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.form.Label'
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'component',
            region: 'north',
            reference: 'headerTitle',
            cls: 'header-title',
            html: [
                '<img class="image-acervo" src="resources/img/arq-admin-black.png">',
                '<img class="image-pmsp" src="resources/img/logo_prefeitura.gif">'
            ]
        },
        {
            xtype: 'container',
            region: 'north',
            reference: 'navigation',
            height: 47,
            itemId: 'navigation',
            style: {
                'border-bottom': '1px solid rgb(0, 58, 73)'
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    ui: 'toolbar-plain',
                    defaults: {
                        height: 30
                    },
                    defaultButtonUI: 'default',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'btnDashboard',
                            glyph: 61481,
                            text: 'Painel'
                        },
                        {
                            xtype: 'button',
                            glyph: 58883,
                            text: 'Cadastro no Acervo',
                            menu: {
                                xtype: 'menu',
                                minWidth: 200,
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'menuitemDocumental',
                                        text: 'Dcoumental / Cartográfico'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'menuitemFotografico',
                                        text: 'Fotográfico'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'menuitemSepultamento',
                                        text: 'Registro de Sepultamento'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: 61457,
                            text: 'Relatórios'
                        },
                        {
                            xtype: 'button',
                            glyph: 58892,
                            text: 'Estatísticas'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            glyph: 58885,
                            text: 'Administração',
                            menu: {
                                xtype: 'menu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'documental',
                                        glyph: 58894,
                                        text: 'Usuários'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'sepultamento',
                                        text: 'Registro de Sepultamento'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'fotografico',
                                        text: 'Fotográfico'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator',
                            height: 28,
                            style: {
                                'border-left-color': 'rgb(90, 112, 116)'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: 58891,
                            text: 'Alexandre Cyro Pereira',
                            menu: {
                                xtype: 'menu',
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'documental',
                                        text: 'Documental / Cartográfico'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'sepultamento',
                                        text: 'Registro de Sepultamento'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        itemId: 'fotografico',
                                        text: 'Fotográfico'
                                    }
                                ]
                            }
                        },
                        {
                            xtype: 'tbseparator',
                            height: 28,
                            style: {
                                'border-left-color': 'rgb(90, 112, 116)'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: 58886,
                            text: 'Sair',
                            listeners: {
                                click: 'onLogout'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'toolbar',
            region: 'north',
            margin: '8 8 0',
            ui: 'toolbar-dark',
            items: [
                {
                    xtype: 'label',
                    style: {
                        color: '#fff',
                        'font-size': '18px',
                        'font-weight': '400'
                    },
                    bind: {
                        text: '{moduleTitle}'
                    }
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    itemId: 'btnMaximize',
                    glyph: 58880,
                    tooltip: 'Maximizar',
                    tooltipType: 'title'
                }
            ]
        },
        {
            xtype: 'container',
            region: 'center',
            reference: 'modulescontainer',
            padding: '8 8 0',
            layout: 'card',
            items: [
                {
                    xtype: 'dashboard-main'
                },
                {
                    xtype: 'documental'
                },
                {
                    xtype: 'fotograficocontainer'
                },
                {
                    xtype: 'sepultamentocontainer'
                }
            ],
            listeners: {
                afterlayout: 'onContainerAfterLayout'
            }
        },
        {
            xtype: 'footerpanel',
            collapsed: true,
            collapsible: true,
            region: 'south',
            split: true
        }
    ]
});
