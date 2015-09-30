/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.require('ArqAdmin.ux.form.trigger.Clear');
Ext.require('ArqAdmin.overrides.grid.filters.filter.List');

Ext.define('ArqAdmin.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'ArqAdmin.view.login.Login',
        'ArqAdmin.view.main.Main',
        'ArqAdmin.util.Glyphs'
    ],

    name: 'ArqAdmin',

    stores: [
        'staticData.documental.Conservacoes',
        'staticData.documental.DtUsos',
        'staticData.classificacao.Acervos',
        'staticData.classificacao.Fundos',
        'staticData.classificacao.Subfundos',
        'staticData.classificacao.Grupos',
        'staticData.classificacao.Subgrupos',
        'staticData.classificacao.Series',
        'staticData.classificacao.Subseries',
        'staticData.classificacao.Dossies',
        'staticData.classificacao.Especiedocumentais',
        'staticData.desenhoTecnico.DtConservacoes',
        'staticData.desenhoTecnico.DtEscalas',
        'staticData.desenhoTecnico.DtSuportes',
        'staticData.desenhoTecnico.DtTecnicas',
        'staticData.desenhoTecnico.DtTipos',
        'staticData.localizacao.LcAcondicionamentos',
        'staticData.localizacao.LcCompartimentos',
        'staticData.localizacao.LcMoveis',
        'staticData.localizacao.LcSalas',
        'staticData.sepultamento.SfmCartorios',
        'staticData.sepultamento.SfmCausamortis',
        'staticData.sepultamento.SfmCemiterios',
        'staticData.sepultamento.SfmEstadocivis',
        'staticData.sepultamento.SfmNacionalidades',
        'staticData.sepultamento.SfmNaturalidades'
    ],

    glyphFontFamily: 'icomoon',

    init: function () {
        var me = this;

        // Start the mask on the body and get a reference to the mask
        me.splashscreen = Ext.getBody().mask('Inicializando...', 'splashscreen');

        // Add a new class to this mask as we want it to look different from the default.
        me.splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },

    launch: function () {
        var me = this;

        var task = new Ext.util.DelayedTask(function () {

            //Fade out the body mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function (el, startTime, eOpts) {
                        //Ext.widget('login-dialog');
                        Ext.widget('app-main');
                    }
                }
            });

            ////Fade out the icon and message
            //me.splashscreen.next().fadeOut({
            //    duration: 1000,
            //    remove: true,
            //    listeners: {
            //        afteranimate: function (el, startTime, eOpts) {
            //            //Ext.create('widget.login-dialog');
            //            Ext.widget('app-main');
            //        }
            //    }
            //});
        });

        task.delay(3000);

        //Ext.widget('app-main');
    }
});
