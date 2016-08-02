Ext.define('ArqAdmin.view.fotografico.DetailsPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'fotografico-detailspanel',

    reference: 'detailsPanel',
    autoScroll: true,
    cls: 'display-panel',
    defaults: {
        bodyPadding: '6 0 0',
        margin: '4 0 0'
    },
    layout: 'anchor',
    bodyPadding: '4 8 0',

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'toolbar-light',
            hidden: true,
            bind: {
                hidden: '{!hasRole}'
            },
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
                    glyph: ArqAdmin.util.Glyphs.getGlyph('edit'),
                    text: 'Editar',
                    bind: {
                        disabled: '{!resultTable.selection}'
                    },
                    handler: 'onEdit'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('images2'),
                    text: 'Imagem',
                    tooltip: 'Visualizar imagem',
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
            xtype: 'panel',
            ui: 'light',
            defaults: {
                labelWidth: 150
            },
            collapsible: true,
            title: 'Classificação',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Fundo',
                    name: 'fundo',
                    bind: {
                        hidden: '{!record.fundo}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Grupo',
                    name: 'grupo',
                    bind: {
                        hidden: '{!record.grupo}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Série',
                    name: 'serie',
                    bind: {
                        hidden: '{!record.serie}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Tipologia',
                    name: 'tipologia',
                    bind: {
                        hidden: '{!record.tipologia}'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            ui: 'light',
            defaults: {
                labelWidth: 150
            },
            collapsible: true,
            title: 'Dados Gerais',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Registro Fotográfico',
                    name: 'imagem_identificacao',
                    bind: {
                        hidden: '{!record.imagem_identificacao}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Data da imagem',
                    name: 'data_imagem',
                    bind: {
                        hidden: '{!record.data_imagem}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Autoria',
                    name: 'autoria',
                    bind: {
                        hidden: '{!record.autoria}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Bairro',
                    name: 'bairro',
                    bind: {
                        hidden: '{!record.bairro}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Assunto Geral',
                    name: 'assunto_geral',
                    bind: {
                        hidden: '{!record.assunto_geral}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Título',
                    name: 'titulo',
                    bind: {
                        hidden: '{!record.titulo}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Identificação',
                    name: 'identificacao',
                    bind: {
                        hidden: '{!record.identificacao}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Assunto 1',
                    name: 'assunto_1',
                    bind: {
                        hidden: '{!record.assunto_1}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Assunto 2',
                    name: 'assunto_2',
                    bind: {
                        hidden: '{!record.assunto_2}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Assunto 3',
                    name: 'assunto_3',
                    bind: {
                        hidden: '{!record.assunto_3}'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            ui: 'light',
            defaults: {
                labelWidth: 150
            },
            collapsible: true,
            title: 'Dados da Imagem',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Cromia',
                    name: 'cromia',
                    bind: {
                        hidden: '{!record.cromia}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Formato',
                    name: 'formato',
                    bind: {
                        hidden: '{!record.formato}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Categoria',
                    name: 'categoria',
                    bind: {
                        hidden: '{!record.categoria}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Campo',
                    name: 'campo',
                    bind: {
                        hidden: '{!record.campo}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Tipo',
                    name: 'tipo',
                    bind: {
                        hidden: '{!record.tipo}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Ambiente',
                    name: 'ambiente',
                    bind: {
                        hidden: '{!record.ambiente}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Enquadramento',
                    name: 'enquadramento',
                    bind: {
                        hidden: '{!record.enquadramento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Inscrição',
                    name: 'inscricao',
                    bind: {
                        hidden: '{!record.inscricao}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Inscrição Texto',
                    name: 'texto_inscricao',
                    bind: {
                        hidden: '{!record.texto_inscricao}'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            ui: 'light',
            defaults: {
                labelWidth: 150
            },
            collapsible: true,
            title: 'Dados Internos',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Localização',
                    name: 'localizacao',
                    bind: {
                        hidden: '{!record.localizacao}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Conservação',
                    name: 'conservacao',
                    bind: {
                        hidden: '{!record.conservacao}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Procedência',
                    name: 'procedencia',
                    bind: {
                        hidden: '{!record.procedencia}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Origem',
                    name: 'origem',
                    bind: {
                        hidden: '{!record.origem}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Registro',
                    name: 'registro',
                    bind: {
                        hidden: '{!record.registro}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Revisão',
                    name: 'revisao',
                    bind: {
                        hidden: '{!record.revisao}'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            ui: 'light',
            collapsible: true,
            title: 'Imagem digitalizada',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Imagem original',
                    name: 'imagem_original',
                    labelWidth: 150,
                    bind: {
                        hidden: '{!record.imagem_original}'
                    }
                },
                {
                    xtype: 'app-img',
                    autoEl: 'div',
                    cls: 'single-thumb-wrap-medium',
                    bind: {
                        src: '{imageUrl}'
                    }
                }
            ]
        }
    ]

});
