Ext.define('ArqAdmin.model.security.User', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Users',

    fields: [
        {
            name: 'name',
            type: 'string',
            sortType: 'asUCString'
        },
        {
            name: 'username',
            type: 'string',
            sortType: 'asUCString'
        },
        {
            name: 'rg',
            type: 'string',
            persist: false
        },
        {
            name: 'email',
            type: 'string',
            sortType: 'asUCString'
        },
        {
            name: 'adldap_group',
            type: 'string',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'adldap_type',
            type: 'string',
            sortType: 'asUCString',
            persist: false
        },
        {
            name: 'roles'
            // defaultValue: []
        },
        {
            name: 'created_at',
            type: 'date',
            dateFormat: 'Y-m-d H:i:s',
            persist: false
        }
    ]
});