Ext.define('ArqAdmin.view.documental.Details', {
    extend: 'Ext.panel.Panel',
    xtype: 'documental-details',

    requires: [
        'Ext.panel.Panel',
        'Ext.form.field.Display'
    ],

    reference: 'documentalDetails',
    autoScroll: true,
    cls: 'display-panel',
    defaults: {
        bodyPadding: '6 0 0',
        margin: '4 0 0'
    },
    layout: 'anchor',
    bodyPadding: '4 8 0',

    items: [
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
                    bind: {
                        value: '{record.id}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Espécie Documental',
                    bind: {
                        hidden: '{!record.especiedocumental_nome}',
                        value: '{record.especiedocumental_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notação Pré-existente',
                    bind: {
                        hidden: '{!record.notacao_preexistente}',
                        value: '{record.notacao_preexistente}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notação AHSP',
                    bind: {
                        hidden: '{!record.notacao}',
                        value: '{record.notacao}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Ano',
                    bind: {
                        hidden: '{!record.ano}',
                        value: '{record.ano}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Data',
                    bind: {
                        hidden: '{!record.data_doc}',
                        value: '{record.data_doc}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Estado de Conservação',
                    bind: {
                        hidden: '{!record.conservacao_estado}',
                        value: '{record.conservacao_estado}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Processo nº',
                    bind: {
                        hidden: '{!record.processo_num}',
                        value: '{record.processo_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Qtde. de  Documentos',
                    bind: {
                        hidden: '{!record.quantidade_doc}',
                        value: '{record.quantidade_doc}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Interessado',
                    bind: {
                        hidden: '{!record.interessado}',
                        value: '{record.interessado}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Assunto',
                    bind: {
                        hidden: '{!record.assunto}',
                        value: '{record.assunto}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Uso',
                    bind: {
                        hidden: '{!record.dt_uso_uso}',
                        value: '{record.dt_uso_uso}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notas',
                    bind: {
                        hidden: '{!record.notas}',
                        value: '{record.notas}'
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
                    bind: {
                        hidden: '{!record.dt_endereco}',
                        value: '{record.dt_endereco}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Complemento',
                    bind: {
                        hidden: '{!record.dt_end_complemento}',
                        value: '{record.dt_end_complemento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Endereço Atual',
                    bind: {
                        hidden: '{!record.dt_endereco_atual}',
                        value: '{record.dt_endereco_atual}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Complemento',
                    bind: {
                        hidden: '{!record.dt_endatual_complemento}',
                        value: '{record.dt_endatual_complemento}'
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
                    bind: {
                        hidden: '{!record.dt_autor}',
                        value: '{record.dt_autor}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Construtor',
                    bind: {
                        hidden: '{!record.dt_construtor}',
                        value: '{record.dt_construtor}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Proprietário',
                    bind: {
                        hidden: '{!record.dt_proprietario}',
                        value: '{record.dt_proprietario}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notas',
                    bind: {
                        hidden: '{!record.dt_notas}',
                        value: '{record.dt_notas}'
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
                    bind: {
                        hidden: '{!record.lc_sala_sala}',
                        value: '{record.lc_sala_sala}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Móvel',
                    bind: {
                        hidden: '{!record.lc_movel_movel}',
                        value: '{record.lc_movel_movel}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Movel nº',
                    bind: {
                        hidden: '{!record.lc_movel_num}',
                        value: '{record.lc_movel_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Compartimento',
                    bind: {
                        hidden: '{!record.lc_compartimento_compartimento}',
                        value: '{record.lc_compartimento_compartimento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Compartimento nº',
                    bind: {
                        hidden: '{!record.lc_compartimento_num}',
                        value: '{record.lc_compartimento_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Acondicionamento',
                    bind: {
                        hidden: '{!record.lc_acondicionamento_acondicionamento}',
                        value: '{record.lc_acondicionamento_acondicionamento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Acondicionamento nº',
                    bind: {
                        hidden: '{!record.lc_acondicionamento_num}',
                        value: '{record.lc_acondicionamento_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Página',
                    bind: {
                        hidden: '{!record.lc_pagina}',
                        value: '{record.lc_pagina}'
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
            title: 'Classificação',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Fundo',
                    bind: {
                        hidden: '{!record.fundo_nome}',
                        value: '{record.fundo_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Subfundo',
                    bind: {
                        hidden: '{!record.subfundo_nome}',
                        value: '{record.subfundo_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Grupo',
                    bind: {
                        hidden: '{!record.grupo_nome}',
                        value: '{record.grupo_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Subgrupo',
                    bind: {
                        hidden: '{!record.subgrupo_nome}',
                        value: '{record.subgrupo_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Série',
                    bind: {
                        hidden: '{!record.serie_nome}',
                        value: '{record.serie_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Subsérie',
                    bind: {
                        hidden: '{!record.subserie_nome}',
                        value: '{record.subserie_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Dossiê',
                    bind: {
                        hidden: '{!record.dossie_nome}',
                        value: '{record.dossie_nome}'
                    }
                }
            ]
        }
    ]

});
