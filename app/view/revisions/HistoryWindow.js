Ext.define('ArqAdmin.view.revisions.HistoryWindow', {
    extend: 'Ext.window.Window',
    xtype: 'history-window',

    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.filters.Filters'
    ],

    layout: 'fit',
    height: 600,
    width: 1000,
    glyph: ArqAdmin.util.Glyphs.getGlyph('list'),
    title: 'Histórico de Atualizações',
    maximizable: true,
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
            emptyText: '<span class="empty-text">Sem registros para exibir</span>',
            // viewConfig: {
            //     emptyText: 'Sem registros para exibir'
            // },
            plugins: [
                {
                    ptype: 'gridfilters'
                },
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<p><b>De:</b> {old_value}</p>',
                        '<p><b>Para:</b> {new_value}</p>'
                    ]
                }
            ],
            columns: [
                {
                    xtype: 'datecolumn',
                    width: 160,
                    dataIndex: 'action_date',
                    format: 'd/m/Y H:i:s',
                    text: 'Data',
                    filter: {
                        type: 'date'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 90,
                    dataIndex: 'action',
                    text: 'Ação',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'user_name',
                    text: 'Por',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'key',
                    text: 'Campo',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    dataIndex: 'old_value',
                    text: 'De',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
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
