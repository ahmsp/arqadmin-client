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
            width: 350,
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
                            text: 'Buscar:'
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
                            tooltip: 'Limpa os filtros e recarrega todos os itens do acervo',
                            handler: 'onClearAllFilters'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowList',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('list'),
                            tooltip: 'Visualizar resultado em lista',
                            handler: 'setResultsPanelActiveItem'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowTable',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('table'),
                            tooltip: 'Visualizar resultado em tabela',
                            handler: 'setResultsPanelActiveItem'

                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('images2'),
                            // text: 'Imagens',
                            tooltip: 'Visualizar imagens',
                            disabled: true,
                            // bind: {
                            //     disabled: '{!resultTable.selection}'
                            // },
                            handler: 'showImageViewerWindow'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            reference: 'btnFavourites',
                            enableToggle: true,
                            cls: 'btn-favourites',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('star'),
                            tooltip: 'Mostrar meus favoritos',
                            handler: 'onFilterLikes'
                        }
                    ]
                },
                {
                    xtype: 'LikesToolbar'
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