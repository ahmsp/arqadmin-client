Ext.define('ArqAdmin.view.fotografico.FilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'fotografico-filterform',

    reference: 'filterForm',

    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Ext.form.Label'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: true,
    bodyPadding: 10,
    title: 'Pesquisa Detalhada',
    formBind: true,
    defaults: {
        // labelWidth: 110,
        margin: '5 0',
        triggers: {
            clear: {
                type: 'clear',
                clearOnEscape: true
            }
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
                    flex: 1,
                    text: 'Limpar formulário',
                    handler: 'onFilterFormButtonClearClick'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    text: 'Pesquisar',
                    handler: 'onFilterFormButtonFilterClick',
                    reference: 'btnPesquisar'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('info'),
                    tooltip: 'Informações sobre a pesquisa',
                    handler: 'onInfoButtonClick'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'fieldset',
            border: '1 0 0 0',
            // margin: '0 0 20',
            padding: '10 0 0',
            defaults: {
                margin: '5 0'
            },
            referenceHolder: true,
            collapsible: true,
            // collapsed: true,
            title: 'Classificação',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Fundo',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            name: 'ft_fundo_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtFundos',
                            displayField: 'fundo',
                            valueField: 'id',
                            operator: 'eq',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_ft_fundo_id',
                            queryMode: 'local',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Grupo',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            name: 'ft_grupo_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtGrupos',
                            displayField: 'grupo',
                            valueField: 'id',
                            operator: 'eq',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_ft_grupo_id',
                            queryMode: 'local',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Série',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            name: 'ft_serie_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtSeries',
                            displayField: 'serie',
                            valueField: 'id',
                            operator: 'eq',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_ft_serie_id',
                            queryMode: 'local',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Tipologia',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            name: 'ft_tipologia_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtTipologias',
                            displayField: 'tipologia',
                            valueField: 'id',
                            operator: 'eq',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_ft_tipologia_id',
                            queryMode: 'local',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            border: '1 0 0 0',
            // margin: '0 0 20',
            padding: '10 0 0',
            defaults: {
                margin: '5 0'
            },
            referenceHolder: true,
            collapsible: true,
            title: 'Dados Gerais',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Cód. imagem',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'imagem_identificacao',
                            operator: 'like',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_imagem_identificacao',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Data da Imagem',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'data_imagem',
                            operator: 'like',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_data_imagem',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Autoria',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'autoria',
                            operator: 'like',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_autoria',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Bairro',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'bairro',
                            operator: 'like',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_bairro',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Assunto',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'assunto',
                            operator: 'like',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_assunto',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Título',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'titulo',
                            operator: 'like',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_titulo',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            border: '1 0 0 0',
            // margin: '0 0 20',
            padding: '10 0 0',
            defaults: {
                margin: '5 0'
            },
            referenceHolder: true,
            collapsible: true,
            title: 'Dados da Imagem',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Cromia',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            name: 'ft_cromia_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtCromias',
                            displayField: 'cromia',
                            valueField: 'id',
                            operator: 'eq',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_ft_cromia_id',
                            queryMode: 'local',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Categoria',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            name: 'ft_categoria_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtCategorias',
                            displayField: 'categoria',
                            valueField: 'id',
                            operator: 'eq',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_ft_categoria_id',
                            queryMode: 'local',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Campo',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            name: 'ft_campo_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtCampos',
                            displayField: 'campo',
                            valueField: 'id',
                            operator: 'eq',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_ft_campo_id',
                            queryMode: 'local',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Tipo',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'tipo',
                            operator: 'like',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_tipo',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Ambiente',
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            name: 'ft_ambiente_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtAmbientes',
                            displayField: 'ambiente',
                            valueField: 'id',
                            operator: 'eq',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_ft_ambiente_id',
                            queryMode: 'local',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Enquadramento',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'enquadramento',
                            operator: 'like',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'combobox',
                            name: 'lo_enquadramento',
                            editable: false,
                            tabIndex: -1,
                            margin: '0 0 0 5',
                            ui: 'combo-plain',
                            width: 106,
                            valueField: 'id',
                            displayField: 'text',
                            value: 'and',
                            bind: {
                                store: '{logicalOperators}'
                            }
                        }
                    ]
                }
            ]
        }
    ]
});