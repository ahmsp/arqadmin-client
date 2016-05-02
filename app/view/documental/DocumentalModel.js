Ext.define('ArqAdmin.view.documental.DocumentalModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.documental',

    data: {
        moduleTitle: 'Acervos Textual e Cartográfico',
        displayPanelTitle: 'Detalhes do registro',
        displayPanelActiveItem: '',

        detailPanelReference: 'detailsPanel',
        editFormReference: 'editForm',
        displayPanelReference: 'displayPanel'
    },

    stores: {
        documentos: {
            model: 'ArqAdmin.model.documental.Documento',
            autoLoad: true,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true
        },
        desenhosTecnicos: {
            model: 'ArqAdmin.model.desenho.DesenhoTecnico',
            autoLoad: false,
            pageSize: 100,
            remoteFilter: true,
            remoteSort: true
        }

        // Static data
        //fundos: {source: 'staticData.classificacao.Fundos'},
        //...
    },

    formulas: {

        //test: function (get) {
        //    console.log(get('record'));
        //},

        displayPanelTitle: function (get) {
            var title = 'Detalhes do registro';

            if (get('displayPanelActiveItem') == 'editForm') {
                title = get('record').phantom ? 'Novo registro' : 'Editar registro';
            }

            return title;
        }

    }


});