Ext.define('ArqAdmin.view.documental.BaseGrid', {
    extend: 'ArqAdmin.view.base.BaseGrid',

    bind: '{documentos}',

    // override emptyText on BaseGrid
    emptyText: [
        '<div class="empty-grid">' +
        '<p>Sem itens para exibir. Comece ou refaça sua pesquisa.</p>' +
        '<p>Para pesquisar em todo o conteúdo do acervo, utilize o campo Buscar acima.<br>' +
        'Para resultados mais específicos, utilize a Pesquisa Detalhada no painel esquerdo.</p>' +
        '<p class="quick-links">Acesso rápido<br>' +
        '<a href="all">Exibir todos os itens do acervo</a><br>' +
        '<a href="obras-particulares">Filtrar por Obras Particulares</a><br>' +
        '<a href="severo-villares">Filtrar por Severo & Villares</a><br>' +
        '<a href="iv-centenario">Filtrar por Comissão do IV Centenário</a></p>' +
        '<p class="quick-links"><a href="info">Recursos de pesquisa</a></p>' +
        '</div>'
    ],

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            bind: '{documentos}'
        }
    ]
});