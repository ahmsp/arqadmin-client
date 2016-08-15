Ext.define('ArqAdmin.view.security.UsersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.users-grid',

    reference: 'usersGrid',
    // bind: '{users}',

    bind: {
        store: '{users}',
        title: 'Relação de {titleType}s'
    },

    enableColumnHide: false,
    
    columns: [
        {
            xtype: 'gridcolumn',
            minWidth: 200,
            dataIndex: 'name',
            flex: 1,
            text: 'Nome',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            width: 100,
            align: 'center',
            dataIndex: 'username',
            text: 'Usuário ID',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            minWidth: 180,
            flex: 1,
            dataIndex: 'email',
            text: 'E-mail',
            filter: {
                type: 'string'
            }
        },
        {
            xtype: 'gridcolumn',
            width: 110,
            align: 'center',
            dataIndex: 'adldap_group',
            text: 'Grupo (Rede)',
            filter: {
                type: 'string'
            },
            hidden: true,
            bind: {
                hidden: '{!editUser}'
            }
        },
        {
            xtype: 'gridcolumn',
            width: 110,
            align: 'center',
            dataIndex: 'adldap_type',
            text: 'Tipo (Rede)',
            filter: {
                type: 'string'
            },
            hidden: true,
            bind: {
                hidden: '{!editUser}'
            }
        },
        {
            xtype: 'gridcolumn',
            minWidth: 300,
            flex: 1,
            dataIndex: 'roles',
            text: 'Permissões',
            filter: {
                type: 'string'
            },
            renderer: function (value, metaData, record) {
                return (!Ext.isEmpty(value)) ? value.toString().replace(/ROLE_/g, ' ') : [];
            },
            hidden: true,
            bind: {
                hidden: '{!editUser}'
            }
        },
        {
            xtype: 'datecolumn',
            width: 150,
            dataIndex: 'created_at',
            format: 'd/m/Y H:i:s',
            text: 'Adicionado em',
            filter: {
                type: 'date'
            }
        }
    ],
    plugins: [
        {
            ptype: 'gridfilters'
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'toolbar-light',
            items: [
                {
                    xtype: 'label',
                    style: {
                        color: '#fff',
                        'font-size': '14px',
                        'line-height': '16px',
                        'font-weight': 'bold'
                    },
                    text: 'Filtrar:'
                },
                {
                    xtype: 'textfield',
                    reference: 'searchAllField',
                    width: 250,
                    selectOnFocus: 'true',
                    name: 'query',
                    emptyText: 'Nome, e-mail ou usuário...',
                    triggers: {
                        clear: {
                            type: 'clear',
                            clearOnEscape: true
                        }
                    },
                    listeners: {
                        change: 'onFieldFilterChange'
                    }
                }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            bind: '{users}'
        }
    ],
    listeners: {
        beforeselect: 'onGridBeforeselect',
        select: 'onGridSelect'
    }
});