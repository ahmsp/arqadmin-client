Ext.define('ArqAdmin.view.documental.FilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'documental-filterform',

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
            xtype: 'combobox',
            submitValue: false,
            reference: 'filterAcervoCombo',
            fieldLabel: 'Classificação (Sugestões)',
            name: 'acervo_id',
            //emptyText: 'Selecione uma classificação...',
            displayField: 'acervo_nome',
            queryMode: 'local',
            forceSelection: true,
            typeAhead: true,
            store: 'staticData.classificacao.Acervos',
            valueField: 'id',
            listeners: {
                select: 'onAcervoComboSelect'
            }
        },
        {
            xtype: 'fieldset',
            reference: 'filterClassificFieldset',
            border: '1 0 0 0',
            itemId: 'filterClassificFieldset',
            margin: '10 0 10',
            padding: '10 0 0',
            defaults: {
                margin: '5 0',
                queryMode: 'local',
                forceSelection: true,
                typeAhead: true,
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            referenceHolder: true,
            collapsible: true,
            collapsed: true,
            title: 'Classificação',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combobox',
                    reference: 'fundoCombo',
                    fieldLabel: 'Fundo',
                    name: 'fundo_id',
                    tabIndex: -1,
                    displayField: 'fundo_nome',
                    store: 'staticData.classificacao.Fundos',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'subfundoCombo',
                    disabled: true,
                    fieldLabel: 'Subfundo',
                    tabIndex: -1,
                    name: 'subfundo_id',
                    displayField: 'subfundo_nome',
                    store: 'staticData.classificacao.Subfundos',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'grupoCombo',
                    disabled: true,
                    fieldLabel: 'Grupo',
                    tabIndex: -1,
                    name: 'grupo_id',
                    displayField: 'grupo_nome',
                    store: 'staticData.classificacao.Grupos',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'subgrupoCombo',
                    disabled: true,
                    fieldLabel: 'Subgrupo',
                    tabIndex: -1,
                    name: 'subgrupo_id',
                    displayField: 'subgrupo_nome',
                    store: 'staticData.classificacao.Subgrupos',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'serieCombo',
                    disabled: true,
                    fieldLabel: 'Série',
                    tabIndex: -1,
                    name: 'serie_id',
                    displayField: 'serie_nome',
                    store: 'staticData.classificacao.Series',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'subserieCombo',
                    disabled: true,
                    fieldLabel: 'Subsérie',
                    tabIndex: -1,
                    name: 'subserie_id',
                    displayField: 'subserie_nome',
                    store: 'staticData.classificacao.Subseries',
                    valueField: 'id',
                    operator: 'eq'
                },
                {
                    xtype: 'combobox',
                    reference: 'dossieCombo',
                    disabled: true,
                    fieldLabel: 'Dossiê',
                    tabIndex: -1,
                    name: 'dossie_id',
                    displayField: 'dossie_nome',
                    store: 'staticData.classificacao.Dossies',
                    valueField: 'id',
                    operator: 'eq'
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
            title: 'Dados gerais',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'checkboxfield',
                    fieldLabel: 'Com imagem',
                    name: 'com_imagem',
                    checked: true,
                    inputValue: '1',
                    operator: '='
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Registro nº (ID)',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'id',
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
                            name: 'lo_id',
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
                    fieldLabel: 'Interessado',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'interessado',
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
                            name: 'lo_interessado',
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
                    fieldLabel: 'Endereço',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'dt_endereco',
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
                            name: 'lo_dt_endereco',
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
                    fieldLabel: 'Autor',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'dt_autor',
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
                            name: 'lo_dt_autor',
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
                    fieldLabel: 'Construtor',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'dt_construtor',
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
                            name: 'lo_dt_construtor',
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
                    fieldLabel: 'Ano (faixa)',
                    defaults: {
                        triggers: {
                            clear: {
                                type: 'clear',
                                clearOnEscape: true
                            }
                        }
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'ano_ini',
                            operator: 'gte',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'label',
                            padding: '2 6 0',
                            text: 'a'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'ano_fim',
                            operator: 'lte',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Data',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'data_doc',
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
                            name: 'lo_data_doc',
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
                    fieldLabel: 'Nº do Processo',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'processo',
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
                            name: 'lo_processo',
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
                    fieldLabel: 'Cod. Imagem',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'cod_imagem',
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
                            name: 'lo_cod_imagem',
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
                    fieldLabel: 'Descrição (Img)',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'desenho_tecnico_descricao',
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
                            name: 'lo_desenho_tecnico_descricao',
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