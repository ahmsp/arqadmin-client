Ext.define('ArqAdmin.view.documental.EditForm', {
    extend: 'Ext.form.Panel',
    xtype: 'documental-editform',

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
                    glyph: ArqAdmin.util.Glyphs.getGlyph('images2'),
                    // text: 'Imagens',
                    tooltip: 'Editar ou adicionar imagens',
                    bind: {
                        disabled: '{!resultTable.selection}'
                    },
                    handler: 'showImageViewerWindow'
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
            title: 'Classificação Documental',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            reference: 'editAcervoCombo',
                            fieldLabel: 'Classificação (Atalho)',
                            submitValue: false,
                            name: 'acervo_id',
                            emptyText: 'Selecione uma classificação...',
                            displayField: 'acervo_nome',
                            queryMode: 'local',
                            // forceSelection: true,
                            typeAhead: true,
                            store: 'staticData.classificacao.Acervos',
                            valueField: 'id',
                            listeners: {
                                select: 'onAcervoComboSelect'
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
                            tooltip: 'Editar classificação',
                            action: 'acervos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    reference: 'editClassificFieldset',
                    border: '1 0 0 0',
                    itemId: 'editClassificFieldset',
                    margin: '10 0 0 ',
                    padding: '10 0 0',
                    defaults: {
                        queryMode: 'local',
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
                            displayField: 'fundo_nome',
                            store: 'staticData.classificacao.Fundos',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'subfundoCombo',
                            disabled: true,
                            fieldLabel: 'Subfundo',
                            name: 'subfundo_id',
                            displayField: 'subfundo_nome',
                            store: 'staticData.classificacao.Subfundos',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'grupoCombo',
                            disabled: true,
                            fieldLabel: 'Grupo',
                            name: 'grupo_id',
                            displayField: 'grupo_nome',
                            store: 'staticData.classificacao.Grupos',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'subgrupoCombo',
                            disabled: true,
                            fieldLabel: 'Subgrupo',
                            name: 'subgrupo_id',
                            displayField: 'subgrupo_nome',
                            store: 'staticData.classificacao.Subgrupos',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'serieCombo',
                            disabled: true,
                            fieldLabel: 'Série',
                            name: 'serie_id',
                            displayField: 'serie_nome',
                            store: 'staticData.classificacao.Series',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'subserieCombo',
                            disabled: true,
                            fieldLabel: 'Subsérie',
                            name: 'subserie_id',
                            displayField: 'subserie_nome',
                            store: 'staticData.classificacao.Subseries',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'dossieCombo',
                            disabled: true,
                            fieldLabel: 'Dossiê',
                            name: 'dossie_id',
                            displayField: 'dossie_nome',
                            store: 'staticData.classificacao.Dossies',
                            valueField: 'id'
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
                    xtype: 'displayfield',
                    fieldLabel: 'Registro nº',
                    name: 'id'
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
                            reference: 'especiedocumentalCombo',
                            flex: 1,
                            fieldLabel: 'Espécie Documental',
                            name: 'especiedocumental_id',
                            allowBlank: false,
                            allowOnlyWhitespace: false,
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            displayField: 'especiedocumental_nome',
                            store: 'staticData.classificacao.Especiedocumentais',
                            valueField: 'id',
                            afterLabelTextTpl: ArqAdmin.util.Util.required
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
                            tooltip: 'Editar espécie documental',
                            action: 'especiedocumental-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Notação Pré-existente',
                    name: 'notacao_preexistente'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Notação AHSP',
                    name: 'notacao'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Ano',
                    name: 'ano',
                    enforceMaxLength: true,
                    maxLength: 4,
                    regex: /^(18|19)\d{2}|(20)([0-2])\d$/,
                    regexText: 'O ano inserido não é válido'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Data',
                    name: 'data_doc'
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
                            name: 'conservacao_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            displayField: 'conservacao_estado',
                            store: 'staticData.documental.Conservacoes',
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
                            tooltip: 'Editar estados de conservação',
                            action: 'conservacoes-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Processo nº',
                    name: 'processo_num'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Qtde. de  Documentos',
                    name: 'quantidade_doc'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Interessado',
                    name: 'interessado'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Assunto',
                    name: 'assunto',
                    allowBlank: false,
                    allowOnlyWhitespace: false,
                    minLength: 3,
                    afterLabelTextTpl: ArqAdmin.util.Util.required
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
                            fieldLabel: 'Uso (Desenho Técnico)',
                            name: 'dt_uso_id',
                            queryMode: 'local',
                            forceSelection: true,
                            typeAhead: true,
                            displayField: 'uso',
                            store: 'staticData.documental.DtUsos',
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
                            tooltip: 'Editar Usos (Desenho Técnico)',
                            action: 'usos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Notas',
                    name: 'notas'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Dados de Endereço',
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
                    fieldLabel: 'Endereço',
                    name: 'dt_endereco'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Complemento',
                    name: 'dt_end_complemento'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Endereço Atual',
                    name: 'dt_endereco_atual'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Complemento',
                    name: 'dt_endatual_complemento'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Dados de Autoria',
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
                    fieldLabel: 'Autor',
                    name: 'dt_autor'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Construtor',
                    name: 'dt_construtor'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Proprietário',
                    name: 'dt_proprietario'
                },
                {
                    xtype: 'textareafield',
                    fieldLabel: 'Notas',
                    name: 'dt_notas'
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
                            displayField: 'sala',
                            store: 'staticData.localizacao.LcSalas',
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
                            displayField: 'movel',
                            store: 'staticData.localizacao.LcMoveis',
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
                            displayField: 'compartimento',
                            store: 'staticData.localizacao.LcCompartimentos',
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
                            displayField: 'acondicionamento',
                            store: 'staticData.localizacao.LcAcondicionamentos',
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
                            tooltip: 'Editar acondicionamentos',
                            action: 'acondicionamentos-grid',
                            handler: 'onButtonStaticDataClick'
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Acondicionamento nº',
                    name: 'lc_acondicionamento_num'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Página',
                    name: 'lc_pagina'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Imagens Digitalizadas',
            items: [
                {
                    xtype: 'button',
                    margin: '3 0',
                    ui: 'default-toolbar-small',
                    text: 'Editar ou adicionar imagens',
                    //glyph: 58895,
                    tooltip: 'Editar ou adicionar imagens',
                    bind: {
                        disabled: '{!record.id}'
                    },
                    handler: 'showImageViewerWindow'
                },
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'documental-thumbsdataview',
                            reference: 'thumbsEditform'
                        }
                    ]
                }
            ]
        }
    ]
});
