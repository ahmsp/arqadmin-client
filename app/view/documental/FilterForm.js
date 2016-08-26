Ext.define('ArqAdmin.view.documental.FilterForm', {
    extend: 'ArqAdmin.view.widget.BaseFilterForm',
    xtype: 'documental-filterform',

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
                            xtype: 'combo-bool',
                            name: 'lo_assunto'
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
                            xtype: 'combo-bool',
                            name: 'lo_interessado'
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
                            xtype: 'combo-bool',
                            name: 'lo_dt_endereco'
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
                            xtype: 'combo-bool',
                            name: 'lo_dt_autor'
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
                            xtype: 'combo-bool',
                            name: 'lo_dt_construtor'
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
                            xtype: 'combo-bool',
                            name: 'lo_data_doc'
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
                            xtype: 'combo-bool',
                            name: 'lo_processo'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Nome Imagem',
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            name: 'desenho_tecnico_arquivo_original',
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
                            name: 'lo_desenho_tecnico_arquivo_original'
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
                            xtype: 'combo-bool',
                            name: 'lo_desenho_tecnico_descricao'
                        }
                    ]
                }
            ]
        }
    ]
});