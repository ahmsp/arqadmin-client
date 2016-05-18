Ext.define('ArqAdmin.view.documental.image.ImageViewerForm', {
    extend: 'Ext.form.Panel',
    xtype: 'imageviewer-form',

    reference: 'imageViewerForm',
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
        labelWidth: 150,
        queryMode: 'local',
        forceSelection: true,
        typeAhead: true
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'toolbar-light',
            items: [
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('copy'),
                    // text: 'Clonar',
                    tooltip: 'Clonar os dados para um novo registro',
                    bind: {
                        disabled: '{!imageViewerDataview.selection}'
                    },
                    listeners: {
                        click: 'onClone'
                    }
                },
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
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('checklist'),
                    tooltip: 'Histórico de alterações',
                    bind: {
                        disabled: '{!imageViewerDataview.selection}'
                    },
                    handler: 'showHistoryWindow'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'hiddenfield',
            name: 'documento_id',
            value: ''
        },
        {
            xtype: 'fieldset',
            title: 'Tipo de Acervo',
            defaults: {
                queryMode: 'local',
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Acervo',
                    name: 'acervo_tipo',
                    reference: 'acervoTipo',
                    allowBlank: false,
                    afterLabelTextTpl: ArqAdmin.util.Util.required,
                    store: [
                        ['cartografico', 'Cartográfico'],
                        ['textual', 'Textual']
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Dados Gerais',
            bind: {
                disabled: '{!acervoTipo.selection}'
            },
            defaults: {
                queryMode: 'local',
                triggers: {
                    clear: {
                        type: 'clear',
                        clearOnEscape: true
                    }
                }
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Código interno',
                    name: 'id',
                    bind: {
                        hidden: '{!record.id}'
                    }
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Descrição',
                    name: 'descricao',
                    allowBlank: false,
                    minLength: 3,
                    afterLabelTextTpl: ArqAdmin.util.Util.required
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Notação',
                    name: 'notacao'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Data',
                    name: 'desenho_data'
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Original',
                    columns: 2,
                    margin: '0 0 12',
                    items: [
                        {boxLabel: 'Sim', name: 'original', inputValue: '1'},
                        {boxLabel: 'Não', name: 'original', inputValue: '0', checked: true}
                    ]
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Cópia',
                    columns: 2,
                    margin: '0 0 10',
                    items: [
                        {boxLabel: 'Sim', name: 'copia', inputValue: '1'},
                        {boxLabel: 'Não', name: 'copia', inputValue: '0', checked: true}
                    ]
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Notas',
                    name: 'notas'
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
                            fieldLabel: 'Estado de Conservação',
                            name: 'dt_conservacao_id',
                            displayField: 'conservacao',
                            store: 'staticData.desenhoTecnico.DtConservacoes',
                            valueField: 'id',
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
                            tooltip: 'Editar Estados de Conservação',
                            action: 'dtconservacoes-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Dados Específicos (Cartográfico)',
            bind: {
                hidden: '{!isCartografico}'
            },
            defaults: {
                queryMode: 'local',
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
                    fieldLabel: 'Prancha nº',
                    name: 'prancha_num'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Original nº',
                    name: 'original_num'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Desenhista',
                    name: 'desenhista'
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
                            fieldLabel: 'Tipo',
                            name: 'dt_tipo_id',
                            displayField: 'tipo',
                            store: 'staticData.desenhoTecnico.DtTipos',
                            valueField: 'id',
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
                            tooltip: 'Editar Tipos',
                            action: 'tipos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Dimensão',
                    name: 'dimensao'
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
                            fieldLabel: 'Suporte',
                            name: 'dt_suporte_id',
                            displayField: 'suporte',
                            store: 'staticData.desenhoTecnico.DtSuportes',
                            valueField: 'id',
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
                            tooltip: 'Editar Suportes',
                            action: 'suportes-grid',
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
                            fieldLabel: 'Escala',
                            name: 'dt_escala_id',
                            displayField: 'escala',
                            store: 'staticData.desenhoTecnico.DtEscalas',
                            valueField: 'id',
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
                            tooltip: 'Editar Escalas',
                            action: 'escalas-grid',
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
                            fieldLabel: 'Técnica',
                            name: 'dt_tecnica_id',
                            displayField: 'tecnica',
                            store: 'staticData.desenhoTecnico.DtTecnicas',
                            valueField: 'id',
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
                            tooltip: 'Editar Técnicas',
                            action: 'tecnicas-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
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
                        hidden: '{record.arquivo_original}'
                    },
                    listeners: {
                        change: 'onFilefieldChange'
                    }
                }
            ]
        }
    ]
});
