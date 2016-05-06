Ext.define('ArqAdmin.view.fotografico.ResultTable', {
    extend: 'ArqAdmin.view.fotografico.BaseGrid',
    xtype: 'fotografico-result-table',

    reference: 'resultTable',
    //allowDeselect: true,
    multiColumnSort: true,

    columns: [
        {
            xtype: 'gridcolumn',
            width: 80,
            align: 'right',
            dataIndex: 'id',
            text: 'ID',
            filter: {
                type: 'number'
            }
        },
        {
            xtype: 'gridcolumn',
            defaultWidth: 200,
            text: 'Classificação',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'fundo',
                    text: 'Fundo',
                    filter: {
                        type: 'list',
                        idField: 'fundo',
                        labelField: 'fundo',
                        updateBuffer: 1500,
                        store: 'staticData.fotografico.FtFundos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'grupo',
                    text: 'Grupo',
                    filter: {
                        type: 'list',
                        idField: 'grupo',
                        labelField: 'grupo',
                        updateBuffer: 1500,
                        store: 'staticData.fotografico.FtGrupos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'serie',
                    text: 'Série',
                    filter: {
                        type: 'list',
                        idField: 'serie',
                        labelField: 'serie',
                        updateBuffer: 1500,
                        store: 'staticData.fotografico.FtSeries'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'tipologia',
                    text: 'Tipologia',
                    filter: {
                        type: 'list',
                        idField: 'tipologia',
                        labelField: 'tipologia',
                        updateBuffer: 1500,
                        store: 'staticData.fotografico.FtTipologias'
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            text: 'Dados de Endereço',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'imagem_identificacao',
                    text: 'Código da Imagem',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'data_imagem',
                    text: 'Data da imagem',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'autoria',
                    text: 'Autoria',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'bairro',
                    text: 'Bairro',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'assunto_geral',
                    text: 'Assunto Geral',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'titulo',
                    text: 'Título',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'identificacao',
                    text: 'Identificação',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'assunto_1',
                    text: 'Assunto 1',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'assunto_2',
                    text: 'Assunto 2',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'assunto_3',
                    text: 'Assunto 3',
                    filter: {
                        type: 'string'
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            text: 'Dados da Imagem',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'cromia',
                    text: 'Cromia',
                    filter: {
                        type: 'list',
                        idField: 'cromia',
                        labelField: 'cromia',
                        updateBuffer: 1500,
                        store: 'staticData.fotografico.FtCromias'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'formato',
                    text: 'Formato',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'categoria',
                    text: 'Categoria',
                    filter: {
                        type: 'list',
                        idField: 'categoria',
                        labelField: 'categoria',
                        updateBuffer: 1500,
                        store: 'staticData.fotografico.FtCategorias'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'campo',
                    text: 'Campo',
                    filter: {
                        type: 'list',
                        idField: 'campo',
                        labelField: 'campo',
                        updateBuffer: 1500,
                        store: 'staticData.fotografico.FtCampos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'tipo',
                    text: 'Tipo',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ambiente',
                    text: 'Ambiente',
                    filter: {
                        type: 'list',
                        idField: 'ambiente',
                        labelField: 'ambiente',
                        updateBuffer: 1500,
                        store: 'staticData.fotografico.FtAmbientes'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'enquadramento',
                    text: 'Enquadramento',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'inscricao',
                    text: 'Inscrição',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'texto_inscricao',
                    text: 'Texto Inscrição',
                    filter: {
                        type: 'string'
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            text: 'Dados da Imagem',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'localizacao',
                    text: 'Localização',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'conservacao',
                    text: 'Conservação',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'procedencia',
                    text: 'Procedencia',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'origem',
                    text: 'Origem',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'registro',
                    text: 'Registro',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'revisao',
                    text: 'Revisão',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'imagem_original',
                    text: 'Imagem Original',
                    filter: {
                        type: 'string'
                    }
                }
            ]
        }
    ],
    listeners: {
        select: 'onGridResultTableSelect'
    }
});