Ext.define('ArqAdmin.view.image.ImageViewerController', {
    extend: 'ArqAdmin.view.base.AcervosViewController',
    alias: 'controller.imageviewer',

    onDataviewSelect: function (viewmodel, record, index) {
        var me = this,
            image = me.lookupReference('imageViewerImg').getImage();

        if (record) {
            me.getViewModel().set('record', record);
            me.detailsPanelLoadRecord(record, true);

            var imgLink = ArqAdmin.config.Runtime.getImagesCartografico() + record.getId() + '/1024';
            image.setSrc(imgLink);
        }
    },

    onImageviewerDataviewDeselect: function (dataview, record, options) {
        this.lookupReference('imageViewerImg').getImage().setSrc('');
    },

    onGridCelldblclick: function (grid, td, cellIndex) {
        if (cellIndex !== 0) {
            this.onEdit();
        }
    },

    onFileFieldChange: function (filefield, value, options) {
        // if (value) {}
    },

    onAdd: function () {
        var me = this,
            editForm = me.lookupReference('imageViewerForm'),
            newRecord = Ext.create('ArqAdmin.model.desenho.DesenhoTecnico');

        newRecord.set({
            id: null,
            documento_id: me.getViewModel().get('documentoId')
        });

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
        me.lookupReference('imageViewerDataview').getSelectionModel().deselectAll();
    },

    onEdit: function () {
        var me = this,
            record = me.getViewModel().get('record');

        me.editFormLoadRecord(record, true);
    },

    onSave: function (button, e, options) {
        var me = this,
            form = me.lookupReference('imageViewerForm'),
            token = localStorage.getItem('access-token'),
            url = ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/desenhotecnico';

        // verify if the web browser supports FormData (HTML5)
        if (typeof FormData === 'undefined') {
            Ext.Msg.alert('Warning', 'Seu navegador não suporta o envio de arquivos através deste sistema');
            return;
        }

        if (!form.isDirty()) {
            return;
        }

        if (form.isValid()) {
            var domFileItem = document.getElementById(form.down('filefield').fileInputEl.id);
            if (domFileItem.files.length == 1) {
                var uploadFile = domFileItem.files[0];
                var formData = new FormData();
                formData.append('file', uploadFile, uploadFile.name);

                var values = form.getValues(false, true);
                values.documento_id = values.documento_id || me.getViewModel().get('documentoId');
                for (var key in values) {
                    formData.append(key, values[key]);
                }

                //send formData with an Ajax-request
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader("Authorization", 'Bearer ' + token);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        var newData = ArqAdmin.util.Util.decodeJSON(xhr.responseText),
                            dataView = me.lookupReference('imageViewerDataview'),
                            store = dataView.getStore();

                        store.add(newData);
                        var newRec = store.findRecord('id', newData.id);
                        dataView.getSelectionModel().select(newRec);
                        dataView.focusNode(newRec);

                        ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
                    } else {
                        console.log('Upload Failure', ArqAdmin.util.Util.decodeJSON(xhr.responseText));
                        Ext.Msg.alert('Erro!', 'Não foi possível salvar os dados e enviar o arquivo.');
                    }
                };
                xhr.send(formData);
            }
        }
    },

    onRemove: function (button, e, eOpts) {
        var me = this;

        Ext.Msg.show({
            title: 'Confirmação de exclusão!',
            msg: 'Você tem certeza que deseja excluir este registro?<br>A imagem e os meta-dados serão excluídos.',
            buttons: Ext.Msg.YESNO,
            animateTarget: 'button',
            icon: Ext.Msg.QUESTION,
            fn: function (btn, ev) {
                if (btn === 'yes') {
                    var dataView = me.lookupReference('imageViewerDataview'),
                        record = dataView.getSelectionModel().getSelection()[0],
                        store = dataView.getStore();

                    store.remove(record);
                    store.sync({
                        success: function () {
                            dataView.getSelectionModel().select(0);

                            // remove image

                            ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'Registro removido com sucesso!');
                        },
                        failure: function () {
                            ArqAdmin.util.Util.showToast('danger', 'Erro!', 'Não foi possivel remover o registro!');
                        },
                        scope: me
                    });
                }
            }
        });
    },

    /**
     * Download images
     */

    /**
     * Show download window
     */
    showDownloadImagesWindow: function () {
        var me = this,
            dataview = me.lookupReference('imageViewerDataview'),
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
