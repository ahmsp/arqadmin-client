Ext.define('ArqAdmin.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',

    data: {
        moduleTitle: 'Painel / Indicadores',
        acervosTotais: {
            documental: 59111,
            fotografico: 9068,
            sepultamento: 51938
        }
    },

    stores: {
        acervos: {
            fields: [
                {name: 'acervo'},
                {name: 'title'},
                {name: 'qtd'},
                {name: 'thumb'}
            ],
            data: [
                {
                    "acervo": "documental",
                    "title": "TEXTUAL E CARTOGRÁFICO",
                    "qtd": '{acervosTotais.documental}',
                    "thumb": "resources/ico/acervo-documental.png"
                },
                {
                    "acervo": "fotografico",
                    "title": "FOTOGRÁFICO",
                    "qtd": '{acervosTotais.fotografico}',
                    "thumb": "resources/ico/acervo-fotografico.png"
                },
                {
                    "acervo": "sepultamento",
                    "title": "TERMOS DE SEPULTAMENTO",
                    "qtd": '{acervosTotais.sepultamento}',
                    "thumb": "resources/ico/acervo-sepult.png"
                }
            ]
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