Ext.define('ArqAdmin.view.sepultamento.EditForm', {
    extend: 'Ext.form.Panel',
    xtype: 'sepultamento-editform',

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
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('checklist'),
                    tooltip: 'Histórico de alterações',
                    bind: {
                        disabled: '{!resultTable.selection}'
                    },
                    handler: 'showHistoryWindow'
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
            title: 'Dados Pessoais',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nome',
                    name: 'sfm_nome',
                    allowBlank: false,
                    allowOnlyWhitespace: false,
                    minLength: 3
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Idade',
                    name: 'sfm_idade'
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
                            fieldLabel: 'Nacionalidade',
                            name: 'sfm_nacionalidade_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.sepultamento.SfmNacionalidades',
                            displayField: 'nacionalidade',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar nacionalidades',
                            action: 'nacionalidades-grid',
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
                            fieldLabel: 'Naturalidade',
                            name: 'sfm_naturalidade_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.sepultamento.SfmNaturalidades',
                            displayField: 'naturalidade',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar naturalidades',
                            action: 'naturalidades-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Filiação Pai',
                    name: 'sfm_pai'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Filiação Mãe',
                    name: 'sfm_mae'
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
                            fieldLabel: 'Estado Civil',
                            name: 'sfm_estadocivil_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.sepultamento.SfmEstadocivis',
                            displayField: 'estadocivil',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar Estados Civis',
                            action: 'estadoscivis-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Cônjuge',
                    name: 'sfm_conjuge'
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
            title: 'Dados de Sepultamento',
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
                            fieldLabel: 'Cartorio',
                            name: 'sfm_cartorio_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.sepultamento.SfmCartorios',
                            displayField: 'cartorio',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar Cartórios',
                            action: 'cartorios-grid',
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
                            fieldLabel: 'Cemitério',
                            name: 'sfm_cemiterio_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.sepultamento.SfmCemiterios',
                            displayField: 'cemiterio',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar Cemitérios',
                            action: 'cemiterios-grid',
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
                            fieldLabel: 'Causa Mortis',
                            name: 'sfm_causamortis_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.sepultamento.SfmCausamortis',
                            displayField: 'causamortis',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar Causa Mortis',
                            action: 'causamortis-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Ano (Falecimento)',
                    name: 'ano',
                    enforceMaxLength: true,
                    maxLength: 4,
                    regex: /^(18|19)\d{2}|(20)([0-2])\d$/,
                    regexText: 'O ano inserido não é válido'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Data Falecimento',
                    name: 'sfm_data_morte'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Local (Sepultamento)',
                    name: 'sfm_sepult_localizacao'
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
            title: 'Localização Física',
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
                            fieldLabel: 'Sala',
                            name: 'lc_sala_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.localizacao.LcSalas',
                            displayField: 'sala',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar salas',
                            action: 'salas-grid',
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
                            fieldLabel: 'Móvel',
                            name: 'lc_movel_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.localizacao.LcMoveis',
                            displayField: 'movel',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar móveis',
                            action: 'moveis-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Movel nº',
                    name: 'lc_movel_num'
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
                            fieldLabel: 'Compartimento',
                            name: 'lc_compartimento_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.localizacao.LcCompartimentos',
                            displayField: 'compartimento',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar compartimentos',
                            action: 'compartimentos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Compartimento nº',
                    name: 'lc_compartimento_num'
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
                            fieldLabel: 'Acondicionamento',
                            name: 'lc_acondicionamento_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            store: 'staticData.localizacao.LcAcondicionamentos',
                            displayField: 'acondicionamento',
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
                            tabIndex: -1,
                            glyph: 58895,
                            tooltip: 'Editar acondicionamentos',
                            action: 'acondicionamentos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Acondicionamento nº',
                    name: 'lc_acondicionamento_num',
                    allowBlank: false,
                    allowOnlyWhitespace: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Página',
                    name: 'lc_pagina',
                    allowBlank: false,
                    allowOnlyWhitespace: false
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Notas',
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
                    xtype: 'textareafield',
                    // fieldLabel: 'Notas',
                    name: 'notas'
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
