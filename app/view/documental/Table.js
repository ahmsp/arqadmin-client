Ext.define('ArqAdmin.view.documental.Table', {
    extend: 'ArqAdmin.view.documental.BaseGrid',
    xtype: 'documental-table',

    reference: 'documentalTable',
    //allowDeselect: true,
    multiColumnSort: true,

    columns: [
        {
            xtype: 'gridcolumn',
            width: 80,
            align: 'right',
            dataIndex: 'id',
            text: 'Código',
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
                    dataIndex: 'fundo_nome',
                    text: 'Fundo',
                    filter: {
                        type: 'list',
                        idField: 'fundo_nome',
                        labelField: 'fundo_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Fundos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subfundo_nome',
                    text: 'Subfundo',
                    filter: {
                        type: 'list',
                        idField: 'subfundo_nome',
                        labelField: 'subfundo_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Subfundos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'grupo_nome',
                    text: 'Grupo',
                    filter: {
                        type: 'list',
                        idField: 'grupo_nome',
                        labelField: 'grupo_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Grupos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subgrupo_nome',
                    text: 'Subgrupo',
                    filter: {
                        type: 'list',
                        idField: 'subgrupo_nome',
                        labelField: 'subgrupo_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Subgrupos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'serie_nome',
                    text: 'Série',
                    filter: {
                        type: 'list',
                        idField: 'serie_nome',
                        labelField: 'serie_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Series'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subserie_nome',
                    text: 'Subsérie',
                    filter: {
                        type: 'list',
                        idField: 'subserie_nome',
                        labelField: 'subserie_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Subseries'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dossie_nome',
                    text: 'Dossiê',
                    filter: {
                        type: 'list',
                        idField: 'dossie_nome',
                        labelField: 'dossie_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Dossies'
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'especiedocumental_nome',
            text: 'Espécie Documental',
            filter: {
                type: 'list',
                idField: 'especiedocumental_nome',
                labelField: 'especiedocumental_nome',
                updateBuffer: 1500,
                store: 'classificacao.Especiedocumentais'
            }
        },
        {
            xtype: 'gridcolumn',
            width: 110,
            dataIndex: 'notacao_preexistente',
            text: 'Notação <nobr>Pré-existente</nobr>',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'notacao',
            text: 'Notação AHSP',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            align: 'center',
            dataIndex: 'ano',
            text: 'Ano',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            align: 'center',
            dataIndex: 'data_doc',
            text: 'Data',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            width: 110,
            dataIndex: 'conservacao_estado',
            text: 'Estado de Conservação',
            filter: {
                type: 'list',
                idField: 'conservacao_estado',
                labelField: 'conservacao_estado',
                updateBuffer: 1500,
                store: 'documental.Conservacoes'
            }
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'processo_num',
            text: 'Processo nº',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'quantidade_doc',
            text: 'Qtde. de  Documentos',
            filter: {
                type: 'number'
            }
        },
        {
            xtype: 'gridcolumn',
            width: 250,
            dataIndex: 'interessado',
            text: 'Interessado',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            width: 300,
            dataIndex: 'assunto',
            text: 'Assunto',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            width: 150,
            dataIndex: 'notas',
            text: 'Notas',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'dt_uso_uso',
            text: 'Uso',
            filter: {
                type: 'list',
                idField: 'uso',
                labelField: 'uso',
                updateBuffer: 1500,
                store: 'documental.DtUsos'
            }
        },
        {
            xtype: 'gridcolumn',
            text: 'Dados de Endereço',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'dt_endereco',
                    text: 'Endereço',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'dt_end_complemento',
                    text: 'Complemento',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'dt_endereco_atual',
                    text: 'Endereço Atual',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'dt_endatual_complemento',
                    text: 'Complemento',
                    filter: {
                        type: 'string'
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            defaultWidth: 350,
            text: 'Autoria do Projeto',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dt_autor',
                    text: 'Autor',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dt_construtor',
                    text: 'Construtor',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dt_proprietario',
                    text: 'Proprietário',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dt_notas',
                    text: 'Notas',
                    filter: {
                        type: 'string'
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            text: 'Localização Física',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'lc_sala_sala',
                    text: 'Sala',
                    filter: {
                        type: 'list',
                        idField: 'sala',
                        labelField: 'sala',
                        updateBuffer: 1500,
                        store: 'localizacao.LcSalas'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'lc_movel_movel',
                    text: 'Móvel',
                    filter: {
                        type: 'list',
                        idField: 'movel',
                        labelField: 'movel',
                        updateBuffer: 1500,
                        store: 'localizacao.LcMoveis'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lc_movel_num',
                    text: 'Movel nº',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'lc_compartimento_compartimento',
                    text: 'Compartimento',
                    filter: {
                        type: 'list',
                        idField: 'compartimento',
                        labelField: 'compartimento',
                        updateBuffer: 1500,
                        store: 'localizacao.LcCompartimentos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lc_compartimento_num',
                    text: 'Compart. nº',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'lc_acondicionamento_acondicionamento',
                    text: 'Acondicionamento',
                    filter: {
                        type: 'list',
                        idField: 'acondicionamento',
                        labelField: 'acondicionamento',
                        updateBuffer: 1500,
                        store: 'localizacao.LcAcondicionamentos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lc_acondicionamento_num',
                    text: 'Acond. nº',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lc_pagina',
                    text: 'Página',
                    filter: {
                        type: 'string'
                    }
                }
            ]
        }
    ]
});