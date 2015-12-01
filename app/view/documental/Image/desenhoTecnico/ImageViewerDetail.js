Ext.define('ArqAdmin.view.documental.image.desenhoTecnico.ImageDetail', {
    extend: 'ArqAdmin.view.image.BaseImageViewerDetail',
    xtype: 'dt-imagedetail',

    items: [
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
            fieldLabel: 'Prancha nº',
            bind: {
                value: '{currentImage.prancha_num}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Original nº',
            bind: {
                value: '{currentImage.original_num}'
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
            fieldLabel: 'Desenhista',
            bind: {
                value: '{currentImage.desenhista}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Original',
            bind: {
                value: '{currentImage.original}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Cópia',
            bind: {
                value: '{currentImage.copia}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Tipo',
            bind: {
                value: '{currentImage.dt_tipo.tipo}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Dimensão',
            bind: {
                value: '{currentImage.dimensao}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Suporte',
            bind: {
                value: '{currentImage.dt_suporte.suporte}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Escala',
            bind: {
                value: '{currentImage.dt_escala.escala}'
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Técnica',
            bind: {
                value: '{currentImage.dt_tecnica.tecnica}'
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
            fieldLabel: 'Nome do arquivo',
            bind: {
                value: '{currentImage.arquivo_nome}'
            }
        }
    ]
});
