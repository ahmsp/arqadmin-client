Ext.define('ArqAdmin.view.sepultamento.ModuleSepultamento', {
    extend: 'Ext.container.Container',
    xtype: 'module-sepultamento',

    requires: [
        'ArqAdmin.view.sepultamento.DetailsPanel',
        'ArqAdmin.view.sepultamento.SepultamentoController',
        'ArqAdmin.view.sepultamento.SepultamentoModel',
        'ArqAdmin.view.sepultamento.FilterForm',
        'ArqAdmin.view.sepultamento.EditForm',
        'ArqAdmin.view.sepultamento.ResultTable',
        'ArqAdmin.view.sepultamento.ResultList',
        // 'ArqAdmin.view.sepultamento.ThumbsDataview',
        // 'ArqAdmin.view.sepultamento.ResultGallery',
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.panel.Panel',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Toolbar',
        'ArqAdmin.view.documental.image.ImageViewerWindow',
        'ArqAdmin.view.staticData.StaticDataWindow'
    ],

    controller: 'sepultamento',
    viewModel: {
        type: 'sepultamento'
    },
    reference: 'moduleSepultamento',
    layout: 'border',

    items: [
        {
            xtype: 'sepultamento-filterform',
            region: 'west',
            split: true,
            width: 400,
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
                            text: 'Pesquisa:'
                        },
                        {
                            xtype: 'textfield',
                            reference: 'searchAllField',
                            width: 250,
                            selectOnFocus: 'true',
                            name: 'query',
                            triggers: {
                                search: {
                                    cls: 'x-form-search-trigger',
                                    handler: 'onSearchfieldTriggerClick'
                                }
                            },
                            listeners: {
                                specialkey: 'onSearchfieldSpecialkey'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'default-small',
                            cls: 'button-info',
                            border: false,
                            glyph: ArqAdmin.util.Glyphs.getGlyph('info'),
                            tooltip: 'Informações sobre a pesquisa',
                            handler: 'onInfoButtonClick'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('reload'),
                            tooltip: 'Limpar todos os filtros',
                            handler: 'onClearAllFilters'
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('filter'),
                            tooltip: 'Limpar filtros da tabela',
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
                        },
                        // {
                        //     xtype: 'button',
                        //     itemId: 'btnShowGallery',
                        //     glyph: ArqAdmin.util.Glyphs.getGlyph('gallery'),
                        //     tooltip: 'Visualizar galeria de imagens',
                        //     handler: 'setResultsPanelActiveItem'
                        // },
                        {
                            xtype: 'tbseparator',
                            hidden: true,
                            bind: {
                                hidden: '{!hasRole}'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnAdd',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('add'),
                            // text: 'Novo',
                            tooltip: 'Adicionar novo item',
                            hidden: true,
                            bind: {
                                hidden: '{!hasRole}'
                            },
                            listeners: {
                                click: 'onAdd'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('edit'),
                            // text: 'Editar',
                            tooltip: 'Editar o item selecionado',
                            hidden: true,
                            bind: {
                                disabled: '{!resultTable.selection}',
                                hidden: '{!hasRole}'
                            },
                            handler: 'onEdit'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'sepultamento-result-table'
                },
                {
                    xtype: 'sepultamento-result-list'
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
            bind: {
                title: '{displayPanelTitle}'
            },
            defaults: {
                listeners: {
                    activate: 'onDisplayPanelChildActivate'
                }
            },
            items: [
                {
                    xtype: 'panel',
                    reference: 'sepultamentoMessageContainer',
                    items: [
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'container',
                                    html: [
                                        '<p>Selecione um registro na listagem para exibir os detalhes.<br>',
                                        'Se preferir, você pode recolher ou expandir este painel<br>',
                                        'clicando na seta do lado direito do título do painel.</p>'
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
                    xtype: 'sepultamento-detailspanel'
                },
                {
                    xtype: 'sepultamento-editform'
                }
            ]
        }
    ]

});