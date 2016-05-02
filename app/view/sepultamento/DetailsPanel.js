Ext.define('ArqAdmin.view.sepultamento.DetailsPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'sepultamento-detailspanel',

    reference: 'detailsPanel',
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
            title: 'Dados Pessoais',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Nome',
                    name: 'sfm_nome',
                    bind: {
                        hidden: '{!record.sfm_nome}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Idade',
                    name: 'sfm_idade',
                    bind: {
                        hidden: '{!record.sfm_idade}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Nacionalidade',
                    name: 'sfm_nacionalidade_nacionalidade',
                    bind: {
                        hidden: '{!record.sfm_nacionalidade_nacionalidade}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Naturalidade',
                    name: 'sfm_naturalidade_naturalidade',
                    bind: {
                        hidden: '{!record.sfm_naturalidade_naturalidade}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Filiação Pai',
                    name: 'sfm_pai',
                    bind: {
                        hidden: '{!record.sfm_pai}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Filiação Mãe',
                    name: 'sfm_mae',
                    bind: {
                        hidden: '{!record.sfm_mae}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Estado civil',
                    name: 'sfm_estadocivil_estadocivil',
                    bind: {
                        hidden: '{!record.sfm_estadocivil_estadocivil}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Cônjuge',
                    name: 'sfm_conjuge',
                    bind: {
                        hidden: '{!record.sfm_conjuge}'
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
            title: 'Dados de Sepultamento',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Data Falecimento',
                    name: 'sfm_data_morte',
                    bind: {
                        hidden: '{!record.sfm_data_morte}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Cemitério',
                    name: 'sfm_cemiterio_cemiterio',
                    bind: {
                        hidden: '{!record.sfm_cemiterio_cemiterio}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Local (Sepultamento)',
                    name: 'sfm_sepult_localizacao',
                    bind: {
                        hidden: '{!record.sfm_sepult_localizacao}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Cartório',
                    name: 'sfm_cartorio_cartorio',
                    bind: {
                        hidden: '{!record.sfm_cartorio_cartorio}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Causa Mortis',
                    name: 'sfm_causamortis_causamortis',
                    bind: {
                        hidden: '{!record.sfm_causamortis_causamortis}'
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
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Móvel',
                    name: 'lc_movel_movel',
                    bind: {
                        hidden: '{!record.lc_movel_movel}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Movel nº',
                    name: 'lc_movel_num',
                    bind: {
                        hidden: '{!record.lc_movel_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Compartimento',
                    name: 'lc_compartimento_compartimento',
                    bind: {
                        hidden: '{!record.lc_compartimento_compartimento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Compartimento nº',
                    name: 'lc_compartimento_num',
                    bind: {
                        hidden: '{!record.lc_compartimento_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Acondicionamento',
                    name: 'lc_acondicionamento_acondicionamento',
                    bind: {
                        hidden: '{!record.lc_acondicionamento_acondicionamento}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Acondicionamento nº',
                    name: 'lc_acondicionamento_num',
                    bind: {
                        hidden: '{!record.lc_acondicionamento_num}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Página',
                    name: 'lc_pagina',
                    bind: {
                        hidden: '{!record.lc_pagina}'
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
            title: 'Notas gerais',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Notas',
                    name: 'notas',
                    bind: {
                        hidden: '{!record.notas}'
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            ui: 'light',
            collapsible: true,
            title: 'Imagem digitalizada',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'image',
                    reference: 'userPicture',
                    autoEl: 'div',
                    cls: 'single-thumb-wrap-medium',
                    // height: 300,
                    // width: 300,
                    bind: {
                        // src: '{currentItem.picture}'
                        src: 'resources/ico/no-image.png'
                    }
                }
            ]
        }
    ]
});
