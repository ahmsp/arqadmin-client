Ext.define('ArqAdmin.view.documental.DetailsPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'documental-detailspanel',

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
                    text: 'Imagens',
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
                    name: 'fundo_nome',
                    bind: {
                        hidden: '{!record.fundo_nome}'
                        //value: '{record.fundo_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Subfundo',
                    name: 'subfundo_nome',
                    bind: {
                        hidden: '{!record.subfundo_nome}'
                        //value: '{record.subfundo_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Grupo',
                    name: 'grupo_nome',
                    bind: {
                        hidden: '{!record.grupo_nome}'
                        //value: '{record.grupo_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Subgrupo',
                    name: 'subgrupo_nome',
                    bind: {
                        hidden: '{!record.subgrupo_nome}'
                        //value: '{record.subgrupo_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Série',
                    name: 'serie_nome',
                    bind: {
                        hidden: '{!record.serie_nome}'
                        //value: '{record.serie_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Subsérie',
                    name: 'subserie_nome',
                    bind: {
                        hidden: '{!record.subserie_nome}'
                        //value: '{record.subserie_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Dossiê',
                    name: 'dossie_nome',
                    bind: {
                        hidden: '{!record.dossie_nome}'
                        //value: '{record.dossie_nome}'
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
            title: 'Dados de Cadastro',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Registro nº',
                    name: 'id',
                    bind: {
                        //value: '{record.id}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Espécie Documental',
                    name: 'especiedocumental_nome',
                    bind: {
                        hidden: '{!record.especiedocumental_nome}'
                        //value: '{record.especiedocumental_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notação Pré-existente',
                    name: 'notacao_preexistente',
                    bind: {
                        hidden: '{!record.notacao_preexistente}'
                        //value: '{record.notacao_preexistente}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notação AHSP',
                    name: 'notacao',
                    bind: {
                        hidden: '{!record.notacao}'
                        //value: '{record.notacao}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Ano',
                    name: 'ano',
                    bind: {
                        hidden: '{!record.ano}'
                        //value: '{record.ano}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Data',
                    name: 'data_doc',
                    bind: {
                        hidden: '{!record.data_doc}'
                        //value: '{record.data_doc}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Estado de Conservação',
                    name: 'conservacao_estado',
                    bind: {
                        hidden: '{!record.conservacao_estado}'
                        //value: '{record.conservacao_estado}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Processo nº',
                    name: 'processo_num',
                    bind: {
                        hidden: '{!record.processo_num}'
                        //value: '{record.processo_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Qtde. de  Documentos',
                    name: 'quantidade_doc',
                    bind: {
                        hidden: '{!record.quantidade_doc}'
                        //value: '{record.quantidade_doc}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Interessado',
                    name: 'interessado',
                    bind: {
                        hidden: '{!record.interessado}'
                        //value: '{record.interessado}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Assunto',
                    name: 'assunto',
                    bind: {
                        hidden: '{!record.assunto}'
                        //value: '{record.assunto}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Uso',
                    name: 'dt_uso_uso',
                    bind: {
                        hidden: '{!record.dt_uso_uso}'
                        //value: '{record.dt_uso_uso}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notas',
                    name: 'notas',
                    bind: {
                        hidden: '{!record.notas}'
                        //value: '{record.notas}'
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
            title: 'Dados de Endereço',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Endereço',
                    name: 'dt_endereco',
                    bind: {
                        hidden: '{!record.dt_endereco}'
                        //value: '{record.dt_endereco}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Complemento',
                    name: 'dt_end_complemento',
                    bind: {
                        hidden: '{!record.dt_end_complemento}'
                        //value: '{record.dt_end_complemento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Endereço Atual',
                    name: 'dt_endereco_atual',
                    bind: {
                        hidden: '{!record.dt_endereco_atual}'
                        //value: '{record.dt_endereco_atual}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Complemento',
                    name: 'dt_endatual_complemento',
                    bind: {
                        hidden: '{!record.dt_endatual_complemento}'
                        //value: '{record.dt_endatual_complemento}'
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
            title: 'Dados de Autoria',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Autor',
                    name: 'dt_autor',
                    bind: {
                        hidden: '{!record.dt_autor}'
                        //value: '{record.dt_autor}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Construtor',
                    name: 'dt_construtor',
                    bind: {
                        hidden: '{!record.dt_construtor}'
                        //value: '{record.dt_construtor}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Proprietário',
                    name: 'dt_proprietario',
                    bind: {
                        hidden: '{!record.dt_proprietario}'
                        //value: '{record.dt_proprietario}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notas',
                    name: 'dt_notas',
                    bind: {
                        hidden: '{!record.dt_notas}'
                        //value: '{record.dt_notas}'
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
            title: 'Localização Física',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Sala',
                    name: 'lc_sala_sala',
                    bind: {
                        hidden: '{!record.lc_sala_sala}'
                        //value: '{record.lc_sala_sala}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Móvel',
                    name: 'lc_movel_movel',
                    bind: {
                        hidden: '{!record.lc_movel_movel}'
                        //value: '{record.lc_movel_movel}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Movel nº',
                    name: 'lc_movel_num',
                    bind: {
                        hidden: '{!record.lc_movel_num}'
                        //value: '{record.lc_movel_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Compartimento',
                    name: 'lc_compartimento_compartimento',
                    bind: {
                        hidden: '{!record.lc_compartimento_compartimento}'
                        //value: '{record.lc_compartimento_compartimento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Compartimento nº',
                    name: 'lc_compartimento_num',
                    bind: {
                        hidden: '{!record.lc_compartimento_num}'
                        //value: '{record.lc_compartimento_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Acondicionamento',
                    name: 'lc_acondicionamento_acondicionamento',
                    bind: {
                        hidden: '{!record.lc_acondicionamento_acondicionamento}'
                        //value: '{record.lc_acondicionamento_acondicionamento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Acondicionamento nº',
                    name: 'lc_acondicionamento_num',
                    bind: {
                        hidden: '{!record.lc_acondicionamento_num}'
                        //value: '{record.lc_acondicionamento_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Página',
                    name: 'lc_pagina',
                    bind: {
                        hidden: '{!record.lc_pagina}'
                        //value: '{record.lc_pagina}'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            ui: 'light',
            collapsible: true,
            title: 'Imagens digitalizadas',
            items: [
                {
                    xtype: 'documental-thumbsdataview'
                }
            ]
        }
    ]

});
