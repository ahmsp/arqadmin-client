Ext.define('ArqAdmin.view.sepultamento.BaseGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Column',
        //'Ext.grid.filters.filter.List',
        //'Ext.grid.filters.filter.String',
        //'Ext.grid.filters.filter.Number',
        'Ext.toolbar.Paging',
        'Ext.grid.filters.Filters',
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.toolbar.Paging'
    ],

    bind: '{sepultamentos}',

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            width: 360,
            displayInfo: true,
            bind : '{sepultamentos}'
        }
    ],
    plugins: [
        {
            ptype: 'gridfilters',
            menuFilterText: 'Filtros'
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