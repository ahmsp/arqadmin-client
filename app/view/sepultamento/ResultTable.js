Ext.define('ArqAdmin.view.sepultamento.ResultTable', {
    extend: 'ArqAdmin.view.sepultamento.BaseGrid',
    xtype: 'sepultamento-result-table',

    reference: 'resultTable',
    //allowDeselect: true,
    // multiColumnSort: true,

    columns: [
        {
            xtype: 'gridcolumn',
            width: 90,
            align: 'right',
            dataIndex: 'id',
            text: 'Registro (ID)',
            filter: {
                type: 'number'
            }
        },
        {
            xtype: 'gridcolumn',
            text: 'Dados Pessoais',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'sfm_nome',
                    text: 'Nome',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'sfm_pai',
                    text: 'Nome do Pai',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'sfm_mae',
                    text: 'Nome da Mãe',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'sfm_conjuge',
                    text: 'Nome do Cônjuge',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'sfm_estadocivil_estadocivil',
                    text: 'Estado Civil',
                    filter: {
                        type: 'list',
                        idField: 'estadocivil',
                        labelField: 'estadocivil',
                        updateBuffer: 1500,
                        store: 'staticData.sepultamento.SfmEstadocivil'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'sfm_idade',
                    text: 'Idade',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 130,
                    dataIndex: 'sfm_nacionalidade_nacionalidade',
                    text: 'Nacionalidade',
                    filter: {
                        type: 'list',
                        idField: 'nacionalidade',
                        labelField: 'nacionalidade',
                        updateBuffer: 1500,
                        store: 'staticData.sepultamento.SfmNacionalidades'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 130,
                    dataIndex: 'sfm_naturalidade_naturalidade',
                    text: 'Naturalidade',
                    filter: {
                        type: 'list',
                        idField: 'naturalidade',
                        labelField: 'naturalidade',
                        updateBuffer: 1500,
                        store: 'staticData.sepultamento.SfmNaturalidades'
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            text: 'Dados de Sepultamento',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'sfm_cartorio_cartorio',
                    text: 'Cartório',
                    filter: {
                        type: 'list',
                        idField: 'cartorio',
                        labelField: 'cartorio',
                        updateBuffer: 1500,
                        store: 'staticData.sepultamento.SfmCartorios'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'sfm_cemiterio_cemiterio',
                    text: 'Cemitério',
                    filter: {
                        type: 'list',
                        idField: 'cemiterio',
                        labelField: 'cemiterio',
                        updateBuffer: 1500,
                        store: 'staticData.sepultamento.SfmCemiterios'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'sfm_sepult_localizacao',
                    text: 'Local (Sepultamento)',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 250,
                    dataIndex: 'sfm_causamortis_causamortis',
                    text: 'Causa Mortis',
                    filter: {
                        type: 'list',
                        idField: 'causamortis',
                        labelField: 'causamortis',
                        updateBuffer: 1500,
                        store: 'staticData.sepultamento.SfmCausamortis'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'sfm_data_morte',
                    text: 'Data Falecimento',
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
                    width: 110,
                    dataIndex: 'lc_sala_sala',
                    text: 'Sala',
                    filter: {
                        type: 'list',
                        idField: 'sala',
                        labelField: 'sala',
                        updateBuffer: 1500,
                        store: 'staticData.localizacao.LcSalas'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 110,
                    dataIndex: 'lc_movel_movel',
                    text: 'Móvel',
                    filter: {
                        type: 'list',
                        idField: 'movel',
                        labelField: 'movel',
                        updateBuffer: 1500,
                        store: 'staticData.localizacao.LcMoveis'
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
                        store: 'staticData.localizacao.LcCompartimentos'
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
                        store: 'staticData.localizacao.LcAcondicionamentos'
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
    listeners: {
        select: 'onGridResultTableSelect'
    }
});