Ext.define('ArqAdmin.view.documental.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'documental-grid',

    requires: [
        'Ext.grid.column.Column',
        //'Ext.grid.filters.filter.List',
        //'Ext.grid.filters.filter.String',
        //'Ext.grid.filters.filter.Number',
        'Ext.toolbar.Paging',
        'Ext.grid.filters.Filters'
    ],

    reference: 'documentalTable',
    allowDeselect: true,
    multiColumnSort: true,
    store: 'documental.Documentos',

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
            defaultWidth: 250,
            text: 'Classificação',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'fundo_id',
                    text: 'Fundo',
                    renderer: function(value, metaData, record) {
                        return (record.get('fundo')) ? record.get('fundo').fundo_nome : '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
                        labelField: 'fundo_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Fundos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subfundo_id',
                    text: 'Subfundo',
                    renderer: function(value, metaData, record) {
                        return (record.get('subfundo')) ? record.get('subfundo').subfundo_nome : '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
                        labelField: 'subfundo_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Subfundos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'grupo_id',
                    text: 'Grupo',
                    renderer: function(value, metaData, record) {
                        return (record.get('grupo')) ? record.get('grupo').grupo_nome : '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
                        labelField: 'grupo_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Grupos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subgrupo_id',
                    text: 'Subgrupo',
                    renderer: function(value, metaData, record) {
                        return (record.get('subgrupo')) ? record.get('subgrupo').subgrupo_nome : '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
                        labelField: 'subgrupo_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Subgrupos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'serie_id',
                    text: 'Série',
                    renderer: function(value, metaData, record) {
                        return (record.get('serie')) ? record.get('serie').serie_nome : '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
                        labelField: 'serie_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Series'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subserie_id',
                    text: 'Subsérie',
                    renderer: function(value, metaData, record) {
                        return (record.get('subserie')) ? record.get('subserie').subserie_nome : '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
                        labelField: 'subserie_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Subseries'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dossie_id',
                    text: 'Dossiê',
                    renderer: function(value, metaData, record) {
                        return (record.get('dossie')) ? record.get('dossie').dossie_nome : '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
                        labelField: 'dossie_nome',
                        updateBuffer: 1500,
                        store: 'classificacao.Dossies'
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'especiedocumental_id',
            text: 'Espécie Documental',
            renderer: function(value, metaData, record) {
                return (record.get('especie_documental')) ? record.get('especie_documental').especiedocumental_nome: '';
            },
            filter: {
                type: 'list',
                idField: 'id',
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
            dataIndex: 'conservacao_id',
            text: 'Estado de Conservação',
            renderer: function(value, metaData, record) {
                return (record.get('conservacao')) ? record.get('conservacao').conservacao_estado: '';
            },
            filter: {
                type: 'list',
                idField: 'id',
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
            dataIndex: 'dt_uso_id',
            text: 'Uso',
            renderer: function(value, metaData, record) {
                return (record.get('dt_uso')) ? record.get('dt_uso').uso: '';
            },
            filter: {
                type: 'list',
                idField: 'id',
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
                    dataIndex: 'lc_sala_id',
                    text: 'Sala',
                    renderer: function(value, metaData, record) {
                        return (record.get('lc_sala')) ? record.get('lc_sala').sala: '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
                        labelField: 'sala',
                        updateBuffer: 1500,
                        store: 'localizacao.LcSalas'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'lc_movel_id',
                    text: 'Móvel',
                    renderer: function(value, metaData, record) {
                        return (record.get('lc_movel')) ? record.get('lc_movel').movel: '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
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
                    dataIndex: 'lc_compartimento_id',
                    text: 'Compartimento',
                    renderer: function(value, metaData, record) {
                        return (record.get('lc_compartimento')) ? record.get('lc_compartimento').compartimento: '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
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
                    dataIndex: 'lc_acondicionamento_id',
                    text: 'Acondicionamento',
                    renderer: function(value, metaData, record) {
                        return (record.get('lc_acondicionamento')) ? record.get('lc_acondicionamento').acondicionamento: '';
                    },
                    filter: {
                        type: 'list',
                        idField: 'id',
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
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            width: 360,
            displayInfo: true,
            store: 'documental.Documentos'
        }
    ],
    plugins: [
        {
            ptype: 'gridfilters',
            menuFilterText: 'Filtros'
        }
    ]
});