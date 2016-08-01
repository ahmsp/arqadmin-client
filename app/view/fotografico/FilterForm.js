Ext.define('ArqAdmin.view.fotografico.FilterForm', {
    extend: 'ArqAdmin.view.widget.BaseFilterForm',
    xtype: 'fotografico-filterform',

    items: [
        {
            xtype: 'fieldset',
            border: '1 0 0 0',
            padding: '10 0 0',
            defaults: {
                margin: '5 0'
            },
            referenceHolder: true,
            collapsible: true,
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
                            xtype: 'combo-bool',
                            name: 'lo_ft_fundo_id'
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
                            xtype: 'combo-bool',
                            name: 'lo_ft_grupo_id'
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
                            xtype: 'combo-bool',
                            name: 'lo_ft_serie_id'
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
                            xtype: 'combo-bool',
                            name: 'lo_ft_tipologia_id'
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
                            xtype: 'combo-bool',
                            name: 'lo_imagem_identificacao'
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
                            xtype: 'combo-bool',
                            name: 'lo_data_imagem'
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
                            xtype: 'combo-bool',
                            name: 'lo_autoria'
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
                            xtype: 'combo-bool',
                            name: 'lo_bairro'
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
                            xtype: 'combo-bool',
                            name: 'lo_titulo'
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
                            xtype: 'combo-bool',
                            name: 'lo_ft_cromia_id'
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
                            xtype: 'combo-bool',
                            name: 'lo_ft_categoria_id'
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
                            xtype: 'combo-bool',
                            name: 'lo_ft_campo_id'
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
                            xtype: 'combo-bool',
                            name: 'lo_tipo'
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
                            xtype: 'combo-bool',
                            name: 'lo_ft_ambiente_id'
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
                            xtype: 'combo-bool',
                            name: 'lo_enquadramento'
                        }
                    ]
                }
            ]
        }
    ]
});