Ext.define('ArqAdmin.view.fotografico.EditForm', {
    extend: 'Ext.form.Panel',
    xtype: 'fotografico-editform',

    reference: 'editForm',
    scrollable: true,
    cls: 'custom-form-panel',
    bodyPadding: 10,
    header: false,
    title: 'Editar registro',
    trackResetOnLoad: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        padding: '6 12 5',
        layout: {
            type: 'vbox',
            align: 'stretch'
        }
    },
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 150
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
                    itemId: 'saveButton',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('save'),
                    text: 'Salvar',
                    reference: 'btnSave',
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('remove'),
                    text: 'Remover',
                    listeners: {
                        click: 'onRemove'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'cancelButton',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('cancel'),
                    text: 'Cancelar',
                    listeners: {
                        click: 'onCancelEdit'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'fieldset',
            // title: 'Dados Gerais',
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Registro nº',
                    name: 'id'
                }
            ]
        },
        {
            xtype: 'fieldset',
            defaults: {
                queryMode: 'local',
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            title: 'Classificação',
            items: [
                {
                    xtype: 'container',
                    margin: '0 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Fundo',
                            name: 'ft_fundo_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtFundos',
                            valueField: 'id',
                            displayField: 'fundo',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 3
                        },
                        {
                            xtype: 'button',
                            margin: '3 0',
                            ui: 'default-toolbar-small',
                            glyph: 58895,
                            tooltip: 'Editar fundos',
                            action: 'ftfundos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: '0 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Grupo',
                            name: 'ft_grupo_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtGrupos',
                            valueField: 'id',
                            displayField: 'grupo',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 3
                        },
                        {
                            xtype: 'button',
                            margin: '3 0',
                            ui: 'default-toolbar-small',
                            glyph: 58895,
                            tooltip: 'Editar grupos',
                            action: 'ftgrupos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: '0 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Série',
                            name: 'ft_serie_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtSeries',
                            valueField: 'id',
                            displayField: 'serie',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 3
                        },
                        {
                            xtype: 'button',
                            margin: '3 0',
                            ui: 'default-toolbar-small',
                            glyph: 58895,
                            tooltip: 'Editar series',
                            action: 'ftseries-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: '0 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Tipologia',
                            name: 'ft_tipologia_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtTipologias',
                            valueField: 'id',
                            displayField: 'tipologia',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 3
                        },
                        {
                            xtype: 'button',
                            margin: '3 0',
                            ui: 'default-toolbar-small',
                            glyph: 58895,
                            tooltip: 'Editar tipologias',
                            action: 'fttipologias-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            defaults: {
                queryMode: 'local',
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            title: 'Dados Gerais',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Registro Fotográfico',
                    name: 'imagem_identificacao'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Data da Imagem',
                    name: 'data_imagem'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Autoria',
                    name: 'autoria'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Bairro',
                    name: 'bairro'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Assunto Geral',
                    name: 'assunto_geral'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Título',
                    name: 'titulo'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Identificação',
                    name: 'identificacao',
                    allowBlank: false,
                    allowOnlyWhitespace: false,
                    minLength: 3
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Assunto 1',
                    name: 'assunto_1'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Assunto 2',
                    name: 'assunto_2'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Assunto 3',
                    name: 'assunto_3'
                }
            ]
        },
        {
            xtype: 'fieldset',
            defaults: {
                queryMode: 'local',
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            title: 'Dados da Imagem',
            items: [
                {
                    xtype: 'container',
                    margin: '0 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Cromia',
                            name: 'ft_cromia_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtCromias',
                            valueField: 'id',
                            displayField: 'cromia',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 3
                        },
                        {
                            xtype: 'button',
                            margin: '3 0',
                            ui: 'default-toolbar-small',
                            glyph: 58895,
                            tooltip: 'Editar cromias',
                            action: 'ftcromias-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Formato',
                    name: 'formato'
                },
                {
                    xtype: 'container',
                    margin: '0 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Categoria',
                            name: 'ft_categoria_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtCategorias',
                            valueField: 'id',
                            displayField: 'categoria',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 3
                        },
                        {
                            xtype: 'button',
                            margin: '3 0',
                            ui: 'default-toolbar-small',
                            glyph: 58895,
                            tooltip: 'Editar categorias',
                            action: 'ftcategorias-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    margin: '0 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Campo',
                            name: 'ft_campo_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtCampos',
                            valueField: 'id',
                            displayField: 'campo',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 3
                        },
                        {
                            xtype: 'button',
                            margin: '3 0',
                            ui: 'default-toolbar-small',
                            glyph: 58895,
                            tooltip: 'Editar campos',
                            action: 'ftcampos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Tipo',
                    name: 'tipo'
                },
                {
                    xtype: 'container',
                    margin: '0 0 5',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Ambiente',
                            name: 'ft_ambiente_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.fotografico.FtAmbientes',
                            valueField: 'id',
                            displayField: 'ambiente',
                            triggers: {
                                clear: {
                                    type: 'clear',
                                    clearOnEscape: true
                                }
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 3
                        },
                        {
                            xtype: 'button',
                            margin: '3 0',
                            ui: 'default-toolbar-small',
                            glyph: 58895,
                            tooltip: 'Editar ambientes',
                            action: 'ftambientes-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Enquadramento',
                    name: 'enquadramento'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Inscrição',
                    name: 'inscricao'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Inscrição Texto',
                    name: 'inscricao'
                }
            ]
        },
        {
            xtype: 'fieldset',
            defaults: {
                queryMode: 'local',
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            title: 'Dados Administrativos',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Localização',
                    name: 'localizacao'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Conservação',
                    name: 'conservacao'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Procedencia',
                    name: 'procedencia'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Origem',
                    name: 'origem'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Registro',
                    name: 'registro'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Revisão',
                    name: 'revisao'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Imagem Original',
                    name: 'imagem_original'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Imagem (Arquivo)',
            bind: {
                disabled: '{!acervoTipo.selection}'
            },
            items: [
                {
                    xtype: 'displayfield',
                    reference: 'arquivoOriginal',
                    fieldLabel: 'Nome do arquivo (original)',
                    name: 'arquivo_original'
                },
                {
                    xtype: 'filefield',
                    // buttonOnly: true,
                    fieldLabel: 'Imagem (Original)',
                    name: 'filename',
                    emptyText: 'Carregar imagem...',
                    buttonText: 'Selecione...',
                    bind: {
                        hidden: '{record.imagem_original}'
                    },
                    listeners: {
                        change: 'onFilefieldChange'
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Imagem do Registro',
            items: [
                {
                    xtype: 'image',
                    // reference: 'userPicture',
                    autoEl: 'div',
                    // cls: 'single-thumb-wrap-medium',
                    // height: 300,
                    // width: 300,
                    bind: {
                        // src: '{currentItem.picture}'
                        src: 'resources/ico/no-image-75.png'
                    }
                }
            ]
        }
    ]
});
