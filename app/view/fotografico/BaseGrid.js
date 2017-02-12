Ext.define('ArqAdmin.view.fotografico.BaseGrid', {
    extend: 'ArqAdmin.view.base.BaseGrid',

    bind: '{fotografias}',

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            bind: '{fotografias}'
        }
    ]
});