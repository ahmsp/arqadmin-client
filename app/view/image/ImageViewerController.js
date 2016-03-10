Ext.define('ArqAdmin.view.image.ImageViewerController', {
    extend: 'ArqAdmin.view.base.ViewController',
    alias: 'controller.imageviewer',

    onDataviewViewready: function (view) {
        view.getSelectionModel().select(view.getStore().getAt(0));
    },

    onDataviewSelect: function (viewmodel, record, index) {
        var me = this,
            view = me.getView(),
            imageViewer = view.down('container#imageViewer'),
            image = imageViewer.getImage();

        if (record) {
            me.getViewModel().set('currentImage', record.getData());

            var imgLink = ArqAdmin.config.Runtime.getImagesCartografico() + record.getId() + '/600';
            image.setSrc(imgLink);
        }
    },

    showDownloadImagesWindow: function () {
        var me = this,
            dataview = me.getView().down('dataview'),
            downloadWin = Ext.widget('download-window');

        var selection = dataview.getSelection()[0];
        downloadWin.down('form').loadRecord(selection);
        downloadWin.show();
    },

    downloadImage: function () {
        var me = this,
            form = me.lookupReference('downloadImageForm'),
            values = form.getValues();

        Ext.Ajax.request({
            url: ArqAdmin.config.Runtime.getDownloadCartografico() + values.id + '/' + values.img_size,
            method: 'GET',
            scope: me,
            success: 'onDownloadSuccess',
            failure: 'onDownloadFailure'
        });
    },

    onDownloadSuccess: function (response, opts) {
        var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
        window.open(result.url_download, '_self');
    },

    onDownloadFailure: function (response, opts) {
        var result = ArqAdmin.util.Util.decodeJSON(response.responseText);
        ArqAdmin.util.Util.showErrorMsg(result.error_description);
    }

});
