Ext.define('ArqAdmin.view.documental.ModuleDocumental', {
    extend: 'Ext.container.Container',
    xtype: 'module-documental',

    requires: [
        'ArqAdmin.view.documental.DetailsPanel',
        'ArqAdmin.view.documental.DocumentalController',
        'ArqAdmin.view.documental.DocumentalModel',
        'ArqAdmin.view.documental.FilterForm',
        'ArqAdmin.view.documental.EditForm',
        'ArqAdmin.view.documental.ResultTable',
        'ArqAdmin.view.documental.ResultList',
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.panel.Panel',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'documental',
    viewModel: {
        type: 'documental'
    },
    reference: 'moduleDocumental',
    layout: 'border',

    items: [
        {
            xtype: 'documental-filterform',
            region: 'west',
            split: true,
            width: 320,
            collapsible: true,
            collapsed: true
        },
        {
            xtype: 'panel',
            region: 'center',
            reference: 'resultsPanel',
            itemId: 'resultsPanel',
            layout: 'card',
            bodyBorder: true,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    itemId: 'toolbarHeader',
                    ui: 'toolbar-dark',
                    items: [
                        {
                            xtype: 'label',
                            style: {
                                color: '#fff',
                                'font-size': '14px',
                                'line-height': '16px',
                                'font-weight': 'bold'
                            },
                            text: 'Ítens do Acervo'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnAdd',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('add'),
                            //text: 'Novo',
                            tooltip: 'Adicionar novo item',
                            listeners: {
                                click: 'onAdd'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('edit'),
                            //text: 'Editar',
                            tooltip: 'Editar o item selecionado',
                            bind: {
                                disabled: '{!resultTable.selection}'
                            },
                            handler: 'onEdit'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnClearFilters',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('filter'),
                            //text: 'Limpar filtros',
                            tooltip: 'Limpar filtros',
                            handler: 'onGridClearFilters'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowTable',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('table'),
                            tooltip: 'Visualizar resultado em tabela',
                            handler: 'setResultsPanelActiveItem'

                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowList',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('list'),
                            tooltip: 'Visualizar resultado em lista',
                            handler: 'setResultsPanelActiveItem'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'result-table'
                },
                {
                    xtype: 'result-list'
                }
            ]
        },
        {
            xtype: 'panel',
            region: 'east',
            split: true,
            reference: 'displayPanel',
            width: 450,
            layout: 'card',
            bodyBorder: true,
            collapsible: true,
            title: {
                bind: '{displayPanelTitle}'
            },
            defaults: {
                listeners: {
                    activate: 'onDisplayPanelChildActivate'
                }
            },
            items: [
                {
                    xtype: 'panel',
                    reference: 'documentalMessageContainer',
                    items: [
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'container',
                                    html: [
                                        '<p>Selecione um registro na lista para exibir os detalhes. ',
                                        'Para editar o registro clique no botão "Editar" com o registro selecionado.<br>',
                                        'Para adicionar um registro clique no botão "Novo".</p>'
                                    ],
                                    padding: '25px 35px',
                                    style: {
                                        'text-align': 'center'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'documental-detailspanel'
                },
                {
                    xtype: 'documental-editform'
                }
            ]
        }
    ]

});