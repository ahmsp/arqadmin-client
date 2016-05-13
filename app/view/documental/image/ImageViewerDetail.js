Ext.define('ArqAdmin.view.documental.image.ImageViewerDetail', {
    extend: 'Ext.form.Panel',
    xtype: 'imageviewer-detail',

    reference: 'imageViewerDetailsPanel',
    autoScroll: true,
    cls: 'display-panel',
    defaults: {
        bodyPadding: '6 0 0',
        margin: '4 0 0',
        labelWidth: 150
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: '4 8 0',
    
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'Acervo tipo',
            bind: {
                value: '{currentImage.acervo_tipo}'
            },
            renderer: function (value, field) {
                return (value === 'cartografico') ? 'Cartográfico' : 'Textual';
            }
        },

        {
            xtype: 'displayfield',
            fieldLabel: 'Código interno',
            bind: {
                value: '{currentImage.id}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Descrição',
            bind: {
                value: '{currentImage.descricao}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Notação',
            bind: {
                value: '{currentImage.notacao}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Data',
            bind: {
                value: '{currentImage.desenho_data}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Original',
            bind: {
                value: '{currentImage.original}'
            },
            renderer: function (value, field) {
                return (value) ? 'Sim' : 'Não';
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Cópia',
            bind: {
                value: '{currentImage.copia}'
            },
            renderer: function (value, field) {
                return (value) ? 'Sim' : 'Não';
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Notas',
            bind: {
                value: '{currentImage.notas}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Conservação',
            bind: {
                value: '{currentImage.dt_conservacao.conservacao}'
            }
        },

        {
            xtype: 'displayfield',
            fieldLabel: 'Prancha nº',
            bind: {
                value: '{currentImage.prancha_num}',
                hidden: '{!displayCartografico}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Original nº',
            bind: {
                value: '{currentImage.original_num}',
                hidden: '{!displayCartografico}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Desenhista',
            bind: {
                value: '{currentImage.desenhista}',
                hidden: '{!displayCartografico}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Tipo',
            bind: {
                value: '{currentImage.dt_tipo.tipo}',
                hidden: '{!displayCartografico}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Dimensão',
            bind: {
                value: '{currentImage.dimensao}',
                hidden: '{!displayCartografico}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Suporte',
            bind: {
                value: '{currentImage.dt_suporte.suporte}',
                hidden: '{!displayCartografico}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Escala',
            bind: {
                value: '{currentImage.dt_escala.escala}',
                hidden: '{!displayCartografico}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Técnica',
            bind: {
                value: '{currentImage.dt_tecnica.tecnica}',
                hidden: '{displayCartografico}'
            }
        },

        {
            xtype: 'displayfield',
            fieldLabel: 'Nome do arquivo (original)',
            bind: {
                value: '{currentImage.arquivo_original}'
            }
        }
    ]
});
