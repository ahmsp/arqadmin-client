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
            dataIndex: 'especiedocumental_id',
            text: 'Espécie Documental',
            renderer: function(value, metaData, record) {
                return (record.get('especie_documental')) ? record.get('especie_documental').especiedocumental_nome: '';
            },
            filter: {
                type: 'list',
                idField: 'id',
                labelField: 'especiedocumental_nome',
                updateBuffer: 2000,
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
            text: 'Estado de Conservação'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'processo_num',
            text: 'Processo nº'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'quantidade_doc',
            text: 'Qtde. de  Documentos'
        },
        {
            xtype: 'gridcolumn',
            width: 250,
            dataIndex: 'interessado',
            text: 'Interessado'
        },
        {
            xtype: 'gridcolumn',
            width: 300,
            dataIndex: 'assunto',
            text: 'Assunto'
        },
        {
            xtype: 'gridcolumn',
            width: 150,
            dataIndex: 'notas',
            text: 'Notas'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'dt_uso_uso',
            text: 'Uso'
        },
        {
            xtype: 'gridcolumn',
            text: 'Dados de Endereço',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'dt_endereco',
                    text: 'Endereço'
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'dt_end_complemento',
                    text: 'Complemento'
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'dt_endereco_atual',
                    text: 'Endereço Atual'
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'dt_endatual_complemento',
                    text: 'Complemento'
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
                    text: 'Autor'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dt_construtor',
                    text: 'Construtor'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dt_proprietario',
                    text: 'Proprietário'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dt_notas',
                    text: 'Notas'
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
                    text: 'Sala'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'lc_movel_movel',
                    text: 'Móvel'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lc_movel_num',
                    text: 'Movel nº'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'lc_compartimento_compartimento',
                    text: 'Compartimento'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lc_compartimento_num',
                    text: 'Compart. nº'
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'lc_acondicionamento_acondicionamento',
                    text: 'Acondicionamento'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lc_acondicionamento_num',
                    text: 'Acond. nº'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lc_pagina',
                    text: 'Página'
                }
            ]
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
                        updateBuffer: 2000,
                        store: 'classificacao.Fundos'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subfundo_nome',
                    text: 'Subfundo'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'grupo_nome',
                    text: 'Grupo'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subgrupo_nome',
                    text: 'Subgrupo'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'serie_nome',
                    text: 'Série'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'subserie_nome',
                    text: 'Subsérie'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'dossie_nome',
                    text: 'Dossiê'
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