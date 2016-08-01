Ext.define('ArqAdmin.view.sepultamento.FilterForm', {
    extend: 'ArqAdmin.view.widget.BaseFilterForm',
    xtype: 'sepultamento-filterform',

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
                    xtype: 'combo-bool',
                    name: 'lo_id'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_nome'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_pai'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_mae'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_conjuge'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_data_morte'
                }
            ]
        },
        {
            xtype: 'fieldcontainer',
            layout: 'hbox',
            margin: '5 30 5 0',
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_nacionalidade_id'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_naturalidade_id'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_cartorio_id'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_cemiterio_id'
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
                    xtype: 'combo-bool',
                    name: 'lo_sfm_causamortis_causamortis'
                }
            ]
        }
    ]
});