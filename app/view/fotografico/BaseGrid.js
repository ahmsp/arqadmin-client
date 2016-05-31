Ext.define('ArqAdmin.view.fotografico.BaseGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging',
        'Ext.grid.filters.Filters',
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.toolbar.Paging'
    ],

    bind: '{fotografias}',

    // allowDeselect: true,

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            width: 360,
            displayInfo: true,
            bind : '{fotografias}'
        }
    ],
    plugins: [
        {
            ptype: 'gridfilters'
        }
    ],
    listeners: {
        beforeselect: 'onGridBeforeselect',
        select: 'onGridSelect',
        celldblclick: 'onGridCelldblclick',
        render: 'onGridRender',
        activate: 'onGridActivate'
    }
});