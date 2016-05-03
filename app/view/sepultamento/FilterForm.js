Ext.define('ArqAdmin.view.sepultamento.FilterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'sepultamento-filterform',

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
        labelWidth: 110,
        margin: '5 0'
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
            fieldLabel: 'Nome',
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    name: 'sfm_nome',
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
                    name: 'lo_sfm_nome',
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
            fieldLabel: 'Nome do Pai',
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    name: 'sfm_pai',
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
                    name: 'lo_sfm_pai',
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
            fieldLabel: 'Nome da Mãe',
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    name: 'sfm_mae',
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
                    name: 'lo_sfm_mae',
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
            fieldLabel: 'Cônjuge',
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    name: 'sfm_conjuge',
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
                    name: 'lo_sfm_conjuge',
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
            fieldLabel: 'Data Falecimento',
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    name: 'sfm_data_morte',
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
                    name: 'lo_sfm_data_morte',
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
            fieldLabel: 'Nacionalidade',
            items: [
                {
                    xtype: 'combobox',
                    flex: 1,
                    name: 'sfm_nacionalidade_id',
                    queryMode: 'local',
                    forceSelection: true,
                    typeAhead: true,
                    store: 'staticData.sepultamento.SfmNacionalidades',
                    displayField: 'nacionalidade',
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
                    name: 'lo_sfm_nacionalidade_id',
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
            fieldLabel: 'Naturalidade',
            items: [
                {
                    xtype: 'combobox',
                    flex: 1,
                    name: 'sfm_naturalidade_id',
                    queryMode: 'local',
                    forceSelection: true,
                    typeAhead: true,
                    store: 'staticData.sepultamento.SfmNaturalidades',
                    displayField: 'naturalidade',
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
                    name: 'lo_sfm_naturalidade_id',
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
            fieldLabel: 'Cartorio',
            items: [
                {
                    xtype: 'combobox',
                    flex: 1,
                    name: 'sfm_cartorio_id',
                    queryMode: 'local',
                    forceSelection: true,
                    typeAhead: true,
                    store: 'staticData.sepultamento.SfmCartorios',
                    displayField: 'cartorio',
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
                    name: 'lo_sfm_cartorio_id',
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
            fieldLabel: 'Cemitério',
            items: [
                {
                    xtype: 'combobox',
                    flex: 1,
                    name: 'sfm_cemiterio_id',
                    queryMode: 'local',
                    forceSelection: true,
                    typeAhead: true,
                    store: 'staticData.sepultamento.SfmCemiterios',
                    displayField: 'cemiterio',
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
                    name: 'lo_sfm_cemiterio_id',
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
            fieldLabel: 'Causa Mortis',
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    name: 'sfm_causamortis_causamortis',
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
                    name: 'lo_sfm_causamortis_causamortis',
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
});