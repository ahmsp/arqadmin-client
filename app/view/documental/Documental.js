/*
 * File: app/view/documental/Container.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ArqAdmin.view.documental.Documental', {
    extend: 'Ext.container.Container',
    xtype: 'documental',

    requires: [
        'ArqAdmin.view.documental.DocumentalViewModel',
        'ArqAdmin.view.documental.DocumentalViewController',
        'ArqAdmin.view.documental.Grid',
        'ArqAdmin.view.documental.List',
        'ArqAdmin.view.documental.Details',
        'ArqAdmin.view.documental.Form',
        'Ext.toolbar.Toolbar',
        'Ext.form.Label',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.form.Panel'
    ],

    controller: 'documental',
    viewModel: {
        type: 'documental'
    },
    reference: 'documental',
    layout: 'border',

    items: [
        {
            xtype: 'panel',
            region: 'west',
            split: true,
            reference: 'filter',
            autoScroll: true,
            width: 300,
            collapsed: true,
            collapsible: true,
            title: 'Pesquisa no Acervo'
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
                            itemId: 'btnShowTable',
                            glyph: 58882,
                            tooltip: 'Visualizar resultado em tabela',
                            tooltipType: 'title'
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnShowList',
                            glyph: 58881,
                            tooltip: 'Visualizar resultado em lista',
                            tooltipType: 'title'
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