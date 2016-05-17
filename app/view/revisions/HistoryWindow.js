Ext.define('ArqAdmin.view.revisions.HistoryWindow', {
    extend: 'Ext.window.Window',
    xtype: 'revisions-window',

    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.filters.Filters'
    ],

    height: 800,
    width: 700,
    layout: 'border',
    glyph: ArqAdmin.util.Glyphs.getGlyph('list'),
    title: 'Histórico de Atualizações',
    draggable: false,
    autoScroll: true,
    modal: true,
    closable: true,
    bodyStyle: {
        background: '#ececec'
    },

    items: [
        {
            xtype: 'gridpanel',
            bind: '{revisions}',
            reference: 'revisionGrid',
            //allowDeselect: true,
            // multiColumnSort: true,
            plugins: [
                {
                    ptype: 'gridfilters',
                    menuFilterText: 'Filtros'
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'action_date',
                    text: 'Data',
                    filter: {
                        type: 'string'
                    }
                },
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
                    dataIndex: 'action',
                    text: 'Ação',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'user_name',
                    text: 'Nome',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'key',
                    text: 'Campo',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'old_value',
                    text: 'De',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'new_value',
                    text: 'Para',
                    filter: {
                        type: 'string'
                    }
                }
            ]
        }
    ]
});



Ext.define('ArqAdmin.view.revisions.HistoryGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'revision-grid',



});