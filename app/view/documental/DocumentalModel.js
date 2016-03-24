Ext.define('ArqAdmin.view.documental.DocumentalModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.documental',

    data: {
        moduleTitle: 'Acervo Documental / Cartográfico',
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
        //conservacoes: {source: 'staticData.documental.Conservacoes'},
        //dtUsos: {source: 'staticData.documental.DtUsos'},
        //acervos: {source: 'staticData.classificacao.Acervos'},
        //subfundos: {source: 'staticData.classificacao.Subfundos'},
        //grupos: {source: 'staticData.classificacao.Grupos'},
        //subgrupos: {source: 'staticData.classificacao.Subgrupos'},
        //series: {source: 'staticData.classificacao.Series'},
        //subseries: {source: 'staticData.classificacao.Subseries'},
        //dossies: {source: 'staticData.classificacao.Dossies'},
        //especiedocumentais: {source: 'staticData.classificacao.Especiedocumentais'},
        //dtConservacoes: {source: 'staticData.desenhoTecnico.DtConservacoes'},
        //dtEscalas: {source: 'staticData.desenhoTecnico.DtEscalas'},
        //dtSuportes: {source: 'staticData.desenhoTecnico.DtSuportes'},
        //dtTecnicas: {source: 'staticData.desenhoTecnico.DtTecnicas'},
        //dtTipos: {source: 'staticData.desenhoTecnico.DtTipos'},
        //lcAcondicionamentos: {source: 'staticData.localizacao.LcAcondicionamentos'},
        //lcCompartimentos: {source: 'staticData.localizacao.LcCompartimentos'},
        //lcMoveis: {source: 'staticData.localizacao.LcMoveis'},
        //lcSalas: {source: 'staticData.localizacao.LcSalas'}

    },

    formulas: {

        displayPanelTitle: function (get) {
            var title = 'Detalhes do registro';

            if (get('displayPanelActiveItem') == 'editForm') {
                title = (get('record').getId()) ? 'Editar registro' : 'Novo registro';
            }

            return title;
        }

    }


});