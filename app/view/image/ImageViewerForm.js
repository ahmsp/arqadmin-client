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
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        queryMode: 'local',
        triggers: {
            clear: {
                type: 'clear',
                clearOnEscape: true
            }
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
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'Código interno',
            name: 'id'
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Acervo Tipo',
            name: 'acervo_tipo',
            //queryMode: 'local',
            allowBlank: false,
            store: [
                ['cartografico','Cartográfico'],
                ['textual', 'Textual']
            ]
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Descrição',
            name: 'descricao'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Notação',
            name: '{currentImage.notacao}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Prancha nº',
            name: '{currentImage.prancha_num}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Original nº',
            name: '{currentImage.original_num}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Data',
            name: '{currentImage.desenho_data}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Desenhista',
            name: '{currentImage.desenhista}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Original',
            name: '{currentImage.original}',
            renderer: function (value, field) {
                return (value) ? 'Sim' : '';
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Cópia',
            name: '{currentImage.copia}',
            renderer: function (value, field) {
                return (value) ? 'Sim' : '';
            }
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
                    tooltipType: 'title',
                    action: 'tipos-grid',
                    handler: 'onButtonStaticDataClick'
                }
            ]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Dimensão',
            name: '{currentImage.dimensao}'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Suporte',
            name: '{currentImage.dt_suporte.suporte}'
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
                    tooltipType: 'title',
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
                    tooltipType: 'title',
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
                    tooltipType: 'title',
                    action: 'tecnicas-grid',
                    handler: 'onButtonStaticDataClick'
                }
            ]
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Notas',
            name: '{currentImage.notas}'
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
                    tooltipType: 'title',
                    action: 'dtconservacoes-grid',
                    handler: 'onButtonStaticDataClick'
                }
            ]
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Nome do arquivo',
            name: '{currentImage.arquivo_nome}'
        }
    ]
});
