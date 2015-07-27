Ext.define('ArqAdmin.view.documental.Documental', {
    extend: 'Ext.container.Container',
    xtype: 'documental',

    requires: [
        'ArqAdmin.view.documental.Details',
        'ArqAdmin.view.documental.DocumentalViewController',
        'ArqAdmin.view.documental.DocumentalViewModel',
        'ArqAdmin.view.documental.FilterForm',
        'ArqAdmin.view.documental.Form',
        'ArqAdmin.view.documental.Grid',
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
            collapsible: true
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
                            glyph: 61616,
                            tooltip: 'Limpar filtros'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowTable',
                            glyph: 58882,
                            tooltip: 'Visualizar resultado em tabela'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowList',
                            glyph: 58881,
                            tooltip: 'Visualizar resultado em lista'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'documental-grid'
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
            title: 'Detalhes do registro',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'toolbar-light',
                    items: [
                        {
                            xtype: 'button',
                            glyph: 57412,
                            text: 'Novo',
                            listeners: {
                                click: 'add'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: 58895,
                            text: 'Editar',
                            bind: {
                                disabled: '{!record}'
                            },
                            listeners: {
                                click: 'edit'
                            }
                        },
                        {
                            xtype: 'button',
                            glyph: 57413,
                            text: 'Remover',
                            bind: {
                                hidden: '{!record}'
                            },
                            listeners: {
                                click: 'remove'
                            }
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'saveButton',
                            glyph: 57414,
                            text: 'Salvar',
                            listeners: {
                                click: 'save'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancelButton',
                            glyph: 57415,
                            text: 'Cancelar',
                            listeners: {
                                click: 'cancelEdit'
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'panel',
                    reference: 'selectMessage',
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