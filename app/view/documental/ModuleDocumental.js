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
        'ArqAdmin.view.documental.ResultGallery',
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
                            checked: true,
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
                                change: 'onCheckboxWithImageChange',
                                afterRender: function (checkbox) {
                                    var el = checkbox.getEl(),
                                        anchor = 'top',
                                        delay = 3000,
                                        msg = 'Para exibir todos os itens,<br>desative o filtro de imagens.';

                                    ArqAdmin.util.Util.showTooltipHint(el, anchor, msg, delay);
                                }
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
                    xtype: 'result-list'
                },
                {
                    xtype: 'result-table'
                },
                {
                    xtype: 'result-gallery'
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
                    reference: 'documentalMessageContainer',
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
                    xtype: 'documental-detailspanel'
                },
                {
                    xtype: 'documental-editform'
                }
            ]
        }
    ]

});