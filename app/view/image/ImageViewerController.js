Ext.define('ArqAdmin.view.image.ImageViewerController', {
    extend: 'ArqAdmin.view.base.AcervosViewController',
    alias: 'controller.imageviewer',

    onDataviewSelect: function (viewmodel, record, index) {
        var me = this,
            view = me.getView(),
            imageViewer = view.down('container#imageViewer'),
            image = imageViewer.getImage();

        if (record) {
            me.getViewModel().set('record', record);
            me.detailsPanelLoadRecord(record, true);

            var imgLink = ArqAdmin.config.Runtime.getImagesCartografico() + record.getId() + '/600';
            image.setSrc(imgLink);
        }
    },

    onGridCelldblclick: function (grid, td, cellIndex) {
        if (cellIndex !== 0) {
            this.onEdit();
        }
    },

    onAdd: function () {
        var me = this,
            editForm = me.lookupReference('imageViewerForm'),
            newRecord = Ext.create('ArqAdmin.model.desenho.DesenhoTecnico');

        newRecord.setId(null);

        if (editForm.isDirty()) {
            Ext.Msg.show({
                title: 'Formulário editado!',
                msg: 'Os dados do formulário foram alterados. <br />Você deseja descartar as alterações?',
                buttons: Ext.Msg.YESNO,
                animateTarget: 'button',
                icon: Ext.Msg.QUESTION,
                fn: function (btn, ev) {
                    if (btn == 'yes') {
                        me.editFormLoadRecord(newRecord, true);
                    }
                }
            });
        } else {
            me.editFormLoadRecord(newRecord, true);
        }
    },

    onEdit: function () {
        var me = this,
            record = me.getViewModel().get('record');

        me.editFormLoadRecord(record, true);
    },


    /**
     * Download images
     */

    /**
     * Show download window
     */
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
