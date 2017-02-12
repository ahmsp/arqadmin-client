Ext.define('ArqAdmin.view.fotografico.ModuleFotografico', {
    extend: 'Ext.container.Container',
    xtype: 'module-fotografico',

    requires: [
        'ArqAdmin.view.fotografico.DetailsPanel',
        'ArqAdmin.view.fotografico.FotograficoController',
        'ArqAdmin.view.fotografico.FotograficoModel',
        'ArqAdmin.view.fotografico.FilterForm',
        'ArqAdmin.view.fotografico.EditForm',
        'ArqAdmin.view.fotografico.ResultTable',
        'ArqAdmin.view.fotografico.ResultList',
        'ArqAdmin.view.fotografico.ResultGallery',
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card',
        'Ext.panel.Panel',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Toolbar',
        'ArqAdmin.view.fotografico.image.ImageViewerWindow',
        'ArqAdmin.view.staticData.StaticDataWindow'
    ],

    controller: 'fotografico',
    viewModel: {
        type: 'fotografico'
    },
    reference: 'moduleFotografico',
    layout: 'border',

    items: [
        {
            xtype: 'fotografico-filterform',
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
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'checkboxfield',
                            reference: 'checkboxWithImage',
                            boxLabel: 'Com imagem',
                            checked: false,
                            inputValue: '1',
                            style: {
                                color: '#fff',
                                fontWeight: 'bold'
                            },
                            autoEl: {
                                el: 'div',
                                'data-qtip': 'Filtra por itens que contenham imagens digitalizadas.<br>Para exibir todos os itens, desative o filtro.'
                            },
                            listeners: {
                                change: 'onCheckboxWithImageChange'
                            }
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
                            xtype: 'button',
                            itemId: 'btnShowGallery',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('gallery'),
                            tooltip: 'Visualizar galeria de imagens',
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
                            bind: {
                                disabled: '{!resultTable.selection}'
                            },
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
                    xtype: 'fotografico-result-list'
                },
                {
                    xtype: 'fotografico-result-table'
                },
                {
                    xtype: 'fotografico-result-gallery'
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
                    xtype: 'info-panel'
                },
                {
                    xtype: 'fotografico-detailspanel'
                },
                {
                    xtype: 'fotografico-editform'
                }
            ]
        }
    ]

});