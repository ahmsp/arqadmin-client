Ext.define('ArqAdmin.view.documental.BaseGrid', {
    extend: 'ArqAdmin.view.base.BaseGrid',

    bind: '{documentos}',

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            bind: '{documentos}'
        }
    ]
});