Ext.define('ArqAdmin.view.documental.ImageViewerDetail', {
    extend: 'Ext.panel.Panel',
    //extend: 'Ext.form.Panel',
    xtype: 'imageviewer-detail',

    requires: [
        'Ext.form.field.Display'
    ],

    //ui: 'light',
    autoScroll: true,
    //cls: 'display-panel',
    title: 'Detalhes da imagem',
    defaults: {
        bodyPadding: '6 0 0',
        margin: '4 0 0'
    },
    layout: 'anchor',
    bodyPadding: '4 8 0',

    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'Código da Imagem',
            name: 'id',
            bind: {
                hidden: '{!dt.id}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Notação',
            name: 'notacao',
            bind: {
                hidden: '{!dt.notacao}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Prancha nº',
            name: 'prancha_num',
            bind: {
                hidden: '{!dt.prancha_num}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Original nº',
            name: 'original_num',
            bind: {
                hidden: '{!dt.original_num}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Data',
            name: 'desenho_data',
            bind: {
                hidden: '{!dt.desenho_data}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Descrição',
            name: 'descricao',
            bind: {
                hidden: '{!dt.descricao}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Desenhista',
            name: 'desenhista',
            bind: {
                hidden: '{!dt.desenhista}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Original',
            name: 'original',
            bind: {
                hidden: '{!dt.original}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Cópia',
            name: 'copia',
            bind: {
                hidden: '{!dt.copia}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Tipo',
            name: 'dt_tipo_id',
            bind: {
                hidden: '{!dt.dt_tipo_id}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Dimansão',
            name: 'dimensao',
            bind: {
                hidden: '{!dt.dimensao}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Suporte',
            name: 'dt_suporte_id',
            bind: {
                hidden: '{!dt.dt_suporte_id}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Escala',
            name: 'dt_escala_id',
            bind: {
                hidden: '{!dt.dt_escala_id}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Técnica',
            name: 'dt_tecnica_id',
            bind: {
                hidden: '{!dt.dt_tecnica_id}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Notas',
            name: 'notas',
            bind: {
                hidden: '{!dt.notas}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Conservação',
            name: 'dt_conservacao_id',
            bind: {
                hidden: '{!dt.dt_conservacao_id}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Nome do arquivo',
            name: 'arquivo_nome',
            bind: {
                hidden: '{!dt.arquivo_nome}'
            }
        }
    ]

});
