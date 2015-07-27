/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.require('ArqAdmin.view.login.Login');
Ext.require('ArqAdmin.view.main.Main');

Ext.require('ArqAdmin.ux.form.trigger.Clear');

Ext.define('ArqAdmin.Application', {
    extend: 'Ext.app.Application',

    name: 'ArqAdmin',

    stores: [
        'Acervos',
        'documental.Conservacoes',
        'classificacao.Dossies',
        'desenho.DtConservacoes',
        'desenho.DtEscalas',
        'desenho.DtSuportes',
        'desenho.DtTecnicas',
        'desenho.DtTipos',
        'documental.DtUsos',
        'classificacao.Especiedocumentais',
        'classificacao.Grupos',
        'localizacao.LcAcondicionamentos',
        'localizacao.LcCompartimentos',
        'localizacao.LcMoveis',
        'localizacao.LcSalas',
        'classificacao.Series',
        'sfm.SfmCartorios',
        'sfm.SfmCausamortis',
        'sfm.SfmCemiterios',
        'sfm.SfmEstadocivis',
        'sfm.SfmNacionalidades',
        'sfm.SfmNaturalidades',
        'classificacao.Subfundos',
        'classificacao.Subgrupos',
        'classificacao.Subseries',
        'documental.Documentos',
        'classificacao.Fundos'
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
