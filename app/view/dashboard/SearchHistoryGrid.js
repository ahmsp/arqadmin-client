Ext.define('ArqAdmin.view.dashboard.SearchHistoryGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'search-history',

    bind : '{searchHistory}',

    title: 'HISTÓRICO DE PESQUISAS',
    //border: false,
    //columnLines: false,
    //rowLines: false,

    plugins: [{
        ptype: 'gridfilters'
    }],

    viewConfig: {
        stripeRows: false
    },
    columns: [
        {
            dataIndex: 'acervo',
            width: 180,
            text: 'ACERVOS',
            filter: {
                // type: 'list'
            }
        },
        {
            dataIndex: 'parametros',
            text: 'TERMOS PESQUISADOS',
            flex: 1,
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'datecolumn',
            dataIndex: 'data',
            width: 150,
            text: 'DATA',
            format: 'd/m/Y H:i:s',
            filter: {
                type: 'date',
                fields: {
                    lt: {text: 'Antes de'},
                    gt: {text: 'Após'},
                    eq: {text: 'Em'}
                }
            }
        }
    ]
});