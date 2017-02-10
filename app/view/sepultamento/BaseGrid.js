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

    emptyText: [
        '<div class="empty-text">' +
        '<p>Sem registros para exibir.</p>' +
        '<p>Faça sua pesquisa utilizando o campo de busca acima, ' +
        'para procurar em todo conteúdo do acervo ' +
        'ou utilize os campos específicos da Pesquisa Detalhada no painel ao lado, ' +
        'para obter resultados mais objetivos.</p>' +
        '</div>'
    ],
    viewConfig: {
        deferEmptyText: false
    },

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