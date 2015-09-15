Ext.define('ArqAdmin.view.dashboard.DashboardViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',

    data: {
        moduleTitle: 'Painel / Indicadores'
    },

    stores: {
        documentosAno: {
            fields: [
                {name: 'ano'},
                {name: 'qtd'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/api/estatisticas',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        },
        acervos: {
            fields: [
                {name: 'acervo'},
                {name: 'title'},
                {name: 'desc'},
                {name: 'qtd'},
                {name: 'thumb'},
                {name: 'url'}
            ],
            data: [
                {
                    "acervo": "doc",
                    "title": "DOCUMENTAL E CARTOGRÁFICO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "59.111",
                    "thumb": "resources/img/acervo_docs_2.png",
                    "url": "resources/reports/Q42013Report.pdf"
                },
                {
                    "acervo": "foto",
                    "title": "FOTOGRÁFICO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "7.766",
                    "thumb": "resources/img/acervo_foto_1.png",
                    "url": "resources/reports/Q42013Report.pdf"
                },
                {
                    "acervo": "sepult",
                    "title": "REGISTROS DE SEPULTAMENTO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "51.938",
                    "thumb": "resources/img/acervo_cemit_1.jpg",
                    "url": "resources/reports/Q42013Report.pdf"
                }
            ]
        },
        topSearches: {
            fields: [
                {name: 'acervo'}, // Cartográfico, ducumental
                {name: 'id'},
                {name: 'tipo'}, // documento, planta
                {name: 'desc'}, // assundo
                {name: 'qtd'},
                {name: 'thumb'}
            ],
            data: [
                {
                    "acervo": "Documental",
                    "title": "DOCUMENTAL E CARTOGRÁFICO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "59.162",
                    "thumb": "resources/img/acervo_docs_2.png",
                    "url": "resources/reports/Q42013Report.pdf"
                },
                {
                    "acervo": "foto",
                    "title": "FOTOGRÁFICO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "9.068",
                    "thumb": "resources/img/acervo_foto_1.png",
                    "url": "resources/reports/Q42013Report.pdf"
                },
                {
                    "acervo": "sepult",
                    "title": "REGISTROS DE SEPULTAMENTO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "51.938",
                    "thumb": "resources/img/acervo_cemit_1.jpg",
                    "url": "resources/reports/Q42013Report.pdf"
                }
            ]
        },
        searchHistory: {
            fields: [
                {name: 'acervo'},
                {name: 'parametros'},
                {name: 'data'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/data/historico-pesquisa-atendimento.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            },
            sorters: {
                property: 'data',
                direction: 'DESC'
            }
        }
    }

});