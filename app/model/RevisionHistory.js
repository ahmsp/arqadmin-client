Ext.define('ArqAdmin.model.RevisionHistory', {
    extend: 'ArqAdmin.model.Base',

    entityName: 'Revision',

    fields: [
        // {name: 'id'},
        {name: 'action'},
        {name: 'revisionable_type'},
        {name: 'revisionable_id'},
        {name: 'user_name'},
        {name: 'key'},
        {name: 'old_value'},
        {name: 'new_value'},
        {name: 'action_date', type: 'date', dateFormat: 'Y-m-d H:i:s'}
    ]
});