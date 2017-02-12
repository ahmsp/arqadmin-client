Ext.define('ArqAdmin.view.sepultamento.BaseGrid', {
    extend: 'ArqAdmin.view.base.BaseGrid',

    bind: '{sepultamentos}',

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            bind : '{sepultamentos}'
        }
    ]
});