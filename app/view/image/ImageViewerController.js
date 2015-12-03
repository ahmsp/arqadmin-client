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

        if(record){
            me.getViewModel().set('currentImage', record.getData());

            var imgLink = ArqAdmin.config.Runtime.getImagesCartografico() + record.getId() + '/600';
            image.setSrc(imgLink);
        }
    },

    downloadImages: function (button) {
        var me = this,
            dataview = me.getView().down('dataview'),
            downloadWin = Ext.widget('download-window');

        if(button.action == 'allImages') {
            dataview.getSelectionModel().selectAll();
        }

        var selection = dataview.getSelection();
        //var images;

        downloadWin.show();


    }


});
