Ext.define('ArqAdmin.view.base.BaseGrid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging',
        'Ext.grid.filters.Filters',
        'Ext.grid.column.Template',
        'Ext.XTemplate',
        'Ext.toolbar.Paging'
    ],

    // allowDeselect: true,

    emptyText: [
        '<div class="empty-grid">' +
        '<p>Sem itens para exibir. Comece ou refaça sua pesquisa.</p>' +
        '<p>Para pesquisar em todo o conteúdo do acervo, utilize o campo de busca simples acima.<br>' +
        'Para resultados mais objetivos, utilize a Pesquisa Detalhada no painel esquerdo.</p>' +
        '<p><a href="all">Exibir todos os itens do acervo</a><br>' +
        '<a href="all-images">Exibir somente itens com imagem</a><br>' +
        '<a href="info">Dicas para pesquisa</a></p>' +
        '</div>'
    ],
    viewConfig: {
        deferEmptyText: false
    },

    initComponent: function () {
        var me = this;

        me.plugins = [
            {
                ptype: 'gridfilters'
            }
        ];

        me.listeners = {
            beforeselect: 'onGridBeforeselect',
            select: 'onGridSelect',
            celldblclick: 'onGridCelldblclick',
            render: 'onGridRender',
            activate: 'onGridActivate',
            afterrender: function (grid) {
                var divs = Ext.dom.Query.select('div.x-grid-view');

                Ext.Array.each(divs, function (div, index) {
                    var el = Ext.get(div);

                    el.on({
                        click: {
                            delegate: 'a',
                            preventDefault: true,
                            fn: 'onGridViewLinkClick',
                            element: 'el'
                        }
                    })
                });
            }
        };

        me.callParent(arguments);
    }
});