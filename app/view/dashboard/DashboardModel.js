Ext.define('ArqAdmin.view.dashboard.DashboardModel', {
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
                url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/estatisticas',
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
                    "acervo": "documental",
                    "title": "TEXTUAL E CARTOGRÁFICO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "59.111",
                    "thumb": "resources/ico/acervo-documental.png",
                    "url": "resources/reports/Q42013Report.pdf"
                },
                {
                    "acervo": "fotografico",
                    "title": "FOTOGRÁFICO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "9.068",
                    "thumb": "resources/ico/acervo-fotografico.png",
                    "url": "resources/reports/Q42013Report.pdf"
                },
                {
                    "acervo": "sepultamento",
                    "title": "TERMOS DE SEPULTAMENTO",
                    "desc": "Nono n ononononon ono ononononononononon",
                    "qtd": "51.938",
                    "thumb": "resources/ico/acervo-sepult.png",
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
        },
        researchResources: {
            fields: [
                {name: 'title'},
                {name: 'text'},
                {name: 'url'}
            ],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'resources/data/research-resources.json',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }

    }

});