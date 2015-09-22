Ext.define('ArqAdmin.view.documental.Documental', {
    extend: 'Ext.container.Container',
    xtype: 'documental',

    requires: [
        'ArqAdmin.view.documental.Details',
        'ArqAdmin.view.documental.DocumentalViewController',
        'ArqAdmin.view.documental.DocumentalViewModel',
        'ArqAdmin.view.documental.FilterForm',
        'ArqAdmin.view.documental.Form',
        'ArqAdmin.view.documental.Table',
        'ArqAdmin.view.documental.List',
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
    reference: 'documental',
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
            reference: 'lists',
            itemId: 'lists',
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
                            itemId: 'btnClearFilters',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('filter'),
                            tooltip: 'Limpar filtros'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowTable',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('table'),
                            tooltip: 'Visualizar resultado em tabela'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowList',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('list'),
                            tooltip: 'Visualizar resultado em lista'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'documental-table'
                },
                {
                    xtype: 'documental-list'
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
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'toolbar-light',
                    items: [
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('add'),
                            text: 'Novo',
                            listeners: {
                                click: 'onAdd'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('edit'),
                            text: 'Editar',
                            bind: {
                                disabled: '{!documentalTable.selection}'
                            },
                            listeners: {
                                click: 'onEdit'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('remove'),
                            text: 'Remover',
                            bind: {
                                disabled: '{!editFormActive}'
                            },
                            listeners: {
                                click: 'onRemove'
                            }
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'saveButton',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('save'),
                            text: 'Salvar',
                            bind: {
                                disabled: '{!editFormActive}'
                            },
                            reference: 'btnSave',
                            listeners: {
                                click: 'onSave'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancelButton',
                            glyph: ArqAdmin.util.Glyphs.getGlyph('cancel'),
                            text: 'Cancelar',
                            bind: {
                                disabled: '{!editFormActive}'
                            },
                            listeners: {
                                click: 'onCancelEdit'
                            }
                        }
                    ]
                }
            ],
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
                },{
                    xtype: 'documental-details'
                },{
                    xtype: 'documental-form'
                }
            ]
        }
    ]

});