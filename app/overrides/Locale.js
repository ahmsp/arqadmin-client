Ext.define("Ext.locale.pt_BR.grid.locking.Lockable", {
    override: "Ext.grid.locking.Lockable",
    lockText: "Travar",
    unlockText: "Destravar"
});

Ext.define("Ext.locale.pt_BR.grid.filters.Filters", {
    override: "Ext.grid.filters.Filters",
    menuFilterText: "Filtros"
});

Ext.define("Ext.locale.pt_BR.grid.filters.filter.Boolean", {
    override: "Ext.grid.filters.filter.Boolean",
    yesText: "Sim",
    noText: "Não"
});

Ext.define("Ext.locale.pt_BR.grid.filters.filter.Date", {
    override: "Ext.grid.filters.filter.Date",
    // getFields: function() {
    //     return {
    //         lt: {text: 'Antes'},
    //         gt: {text: 'Depois'},
    //         eq: {text: 'Em'}
    //     };
    // }
    config: {
        fields: {
            lt: {
                text: 'Antes de'
            },
            gt: {
                text: 'Depois de'
            },
            eq: {
                text: 'Em'
            }
        },
        // Defaults to Ext.Date.defaultFormat
        dateFormat: null
    }
});

Ext.define("Ext.locale.pt_BR.grid.filters.filter.List", {
    override: "Ext.grid.filters.filter.List",
    loadingText: "Carregando..."
});

Ext.define("Ext.locale.pt_BR.grid.filters.filter.Number", {
    override: "Ext.grid.filters.filter.Number",
    emptyText: "Digite um número..."
});

Ext.define("Ext.locale.pt_BR.grid.filters.filter.String", {
    override: "Ext.grid.filters.filter.String",
    emptyText: "Insira o termo para filtrar..."
});

Ext.define("Ext.locale.pt_BR.LoadMask", {
    override: "Ext.LoadMask",
    msg: "Carregando..."
});

Ext.define("Ext.locale.pt_BR.grid.RowEditor", {
    override: "Ext.grid.RowEditor",
    saveBtnText: 'Ok',
    cancelBtnText: 'Cancelar',
    errorsText: 'Erro',
    dirtyText: 'Sem itens para exibir'
});

// This is needed until we can refactor all of the locales into individual files
Ext.define("Ext.locale.pt_BR.Component", {
    override: "Ext.Component"
});