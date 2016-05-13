Ext.define('ArqAdmin.view.fotografico.image.ImageViewerController', {
    extend: 'ArqAdmin.view.base.AcervosViewController',
    alias: 'controller.fotografico-imageviewer',

    showDownloadImagesWindow: function () {
        var me = this,
            record = me.getViewModel().get('currentImage'),
            downloadWin = Ext.widget('fotografico-download-window');

        downloadWin.down('form').loadRecord(record);
        downloadWin.show();
    },

    downloadImage: function () {
        var me = this,
            form = me.lookupReference('downloadImageForm'),
            values = form.getValues();

        Ext.Ajax.request({
            url: ArqAdmin.config.Runtime.getDownloadFotografico() + values.id + '/' + values.img_size,
            method: 'GET',
            scope: me,
            success: 'onDownloadSuccess',
            failure: 'onDownloadFailure'
        });
    },

    onDownloadSuccess: function (response, opts) {
        var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
        console.log(result);

        window.open(result.url_download, '_self');
    },

    onDownloadFailure: function (response, opts) {
        var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
        ArqAdmin.util.Util.showErrorMsg(result.error_description);
    },

    onDataviewViewready: function (view) {
        this.selectRecordDelay(view);
    }

});
