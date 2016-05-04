Ext.define('ArqAdmin.view.documental.image.ImageViewerController', {
    extend: 'ArqAdmin.view.base.AcervosViewController',
    alias: 'controller.imageviewer',

    onDataviewSelect: function (viewmodel, record, index) {
        var me = this,
            image = me.lookupReference('imageViewerImg').getImage();

        if (record) {
            me.getViewModel().set('record', record);
            me.editFormLoadRecord(record, false);
            me.detailsPanelLoadRecord(record, true);

            var imgLink = ArqAdmin.config.Runtime.getImagesDocumental() + record.getId() + '/1024';
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

    onFilefieldChange: function (filefield, value, options) {
        this.lookupReference('arquivoOriginal').setValue(value.replace(/^.*(\\|\/|\:)/, ''));
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

    onClone: function () {
        var me = this,
            form = me.lookupReference('imageViewerForm'),
            values = form.getValues(),
            newRecord = Ext.create('ArqAdmin.model.desenho.DesenhoTecnico');

        newRecord.set(values);
        newRecord.set({
            id: null,
            arquivo_original: null
        });

        me.editFormLoadRecord(newRecord, true);
        me.lookupReference('imageViewerDataview').getSelectionModel().deselectAll();
    },

    onEdit: function () {
        var me = this,
            record = me.getViewModel().get('record');

        me.editFormLoadRecord(record, true);
    },

    onSave: function () {
        var me = this,
            form = me.lookupReference('imageViewerForm'),
            record = form.getRecord();

        if (!record.phantom && !form.isDirty()) {
            return;
        }

        if (form.isValid()) {
            var values = form.getValues(),
                dataView = me.lookupReference('imageViewerDataview'),
                store = dataView.getStore(),
                filename = form.getForm().findField('filename').getValue();

            if (filename) {
                values.arquivo_original = filename.replace(/^.*(\\|\/|\:)/, '');
            }

            record.set(values);

            if (record.phantom) {
                record.set({
                    id: null,
                    documento_id: me.getViewModel().get('documentoId')
                });
                store.add(record);
            }

            store.sync({
                scope: me,
                success: function (batch, options) {
                    var operations = batch.getOperations(),
                        result = Ext.decode(operations[0].getResponse().responseText);

                    var domFileItem = document.getElementById(form.down('filefield').fileInputEl.id);
                    if (domFileItem.files.length == 1) {
                        var uploadFile = domFileItem.files[0],
                            formData = new FormData(),
                            url = ArqAdmin.config.Runtime.getUploadDocumental() + result.id,
                            token = localStorage.getItem('access-token');

                        formData.append('file', uploadFile, uploadFile.name);

                        //send formData with an Ajax-request
                        var xhr = new XMLHttpRequest();
                        xhr.open('POST', url);
                        xhr.setRequestHeader("Authorization", 'Bearer ' + token);
                        xhr.onload = function () {
                            if (xhr.status === 200) {
                                // var resData = ArqAdmin.util.Util.decodeJSON(xhr.responseText);
                                store.load({
                                    scope: me,
                                    callback: function (records, operation, success) {
                                        var newRecord = store.findRecord('id', result.id);
                                        this.selectRecord(dataView, newRecord);
                                    }
                                });
                                ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com sucesso!');
                            } else {
                                // console.log(ArqAdmin.util.Util.decodeJSON(xhr.responseText));
                                store.load({
                                    scope: me,
                                    callback: function (records, operation, success) {
                                        var newRecord = store.findRecord('id', result.id);
                                        form.reset(true);
                                        form.loadRecord(newRecord);
                                        Ext.Msg.alert('Erro!', 'Os dados foram salvos, mas não foi possível enviar a imagem.');
                                    }
                                });
                            }
                        };
                        xhr.send(formData);
                    } else {
                        store.load({
                            scope: me,
                            callback: function (records, operation, success) {
                                var newRecord = store.findRecord('id', result.id);
                                this.selectRecord(dataView, newRecord);
                            }
                        });
                    }
                },
                failure: function (batch, options) {
                    store.load();
                }
            });
        } else {
            Ext.Msg.alert('Erro!', 'O formulário contém dados inválidos!');
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
                            var form = me.lookupReference('imageViewerForm');
                            store.load({
                                scope: me,
                                callback: function (records, operation, success) {
                                    this.forceResetForm(form);
                                    this.selectRecord(dataView, 0);
                                }
                            });
                            ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'Registro removido com sucesso!');
                        },
                        failure: function () {
                            Ext.Msg.alert('Erro!', 'Não foi possivel remover o registro!');
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
            url: ArqAdmin.config.Runtime.getDownloadDocumental() + values.id + '/' + values.img_size,
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
    },

    onDataviewViewready: function (view) {
        this.selectRecordDelay(view);
    }

});
