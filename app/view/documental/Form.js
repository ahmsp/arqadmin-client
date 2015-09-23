Ext.define('ArqAdmin.view.documental.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'documental-form',

    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Display',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Spacer'
    ],

    reference: 'documentalForm',
    scrollable: true,
    cls: 'custom-form-panel',
    defaults: {
        padding: '6 12 5',
        layout: {
            type: 'vbox',
            align: 'stretch'
        }
    },
    bodyPadding: 10,
    header: false,
    title: 'Editar registro',
    trackResetOnLoad: true,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 150,
        queryMode: 'local',
        forceSelection: true,
        typeAhead: true
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
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
                            reference: 'acervoCombo',
                            fieldLabel: 'Classificação (Atalho)',
                            submitValue: false,
                            name: 'acervo_id',
                            emptyText: 'Selecione uma classificação...',
                            displayField: 'acervo_nome',
                            queryMode: 'local',
                            store: 'classificacao.Acervos',
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
                            tooltipType: 'title'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    reference: 'classificFieldset',
                    border: '1 0 0 0',
                    itemId: 'classificFieldset',
                    margin: '10 0 0 ',
                    padding: '10 0 0',
                    defaults: {
                        queryMode: 'local',
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
                            store: 'classificacao.Fundos',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'subfundoCombo',
                            disabled: true,
                            fieldLabel: 'Subfundo',
                            name: 'subfundo_id',
                            displayField: 'subfundo_nome',
                            store: 'classificacao.Subfundos',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'grupoCombo',
                            disabled: true,
                            fieldLabel: 'Grupo',
                            name: 'grupo_id',
                            displayField: 'grupo_nome',
                            store: 'classificacao.Grupos',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'subgrupoCombo',
                            disabled: true,
                            fieldLabel: 'Subgrupo',
                            name: 'subgrupo_id',
                            displayField: 'subgrupo_nome',
                            store: 'classificacao.Subgrupos',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'serieCombo',
                            disabled: true,
                            fieldLabel: 'Série',
                            name: 'serie_id',
                            displayField: 'serie_nome',
                            store: 'classificacao.Series',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'subserieCombo',
                            disabled: true,
                            fieldLabel: 'Subsérie',
                            name: 'subserie_id',
                            displayField: 'subserie_nome',
                            store: 'classificacao.Subseries',
                            valueField: 'id'
                        },
                        {
                            xtype: 'combobox',
                            reference: 'dossieCombo',
                            disabled: true,
                            fieldLabel: 'Dossiê',
                            name: 'dossie_id',
                            displayField: 'dossie_nome',
                            store: 'classificacao.Dossies',
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
                    xtype: 'combobox',
                    reference: 'especiedocumentalCombo',
                    fieldLabel: 'Espécie Documental',
                    name: 'especiedocumental_id',
                    allowBlank: false,
                    allowOnlyWhitespace: false,
                    displayField: 'especiedocumental_nome',
                    store: 'classificacao.Especiedocumentais',
                    typeAhead: true,
                    valueField: 'id',
                    afterLabelTextTpl: ArqAdmin.util.Util.required
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
                            displayField: 'conservacao_estado',
                            store: 'documental.Conservacoes',
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
                            tooltipType: 'title'
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
                            displayField: 'uso',
                            store: 'documental.DtUsos',
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
                            tooltipType: 'title'
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
                            displayField: 'sala',
                            store: 'localizacao.LcSalas',
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
                            tooltipType: 'title'
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
                            displayField: 'movel',
                            store: 'localizacao.LcMoveis',
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
                            tooltipType: 'title'
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
                            displayField: 'compartimento',
                            store: 'localizacao.LcCompartimentos',
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
                            tooltipType: 'title'
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
                            displayField: 'acondicionamento',
                            store: 'localizacao.LcAcondicionamentos',
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
                            tooltipType: 'title'
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
        }
    ],
    listeners: {
        dirtychange: function(form, dirty) {
            console.log('dirty');
        }
    }

});