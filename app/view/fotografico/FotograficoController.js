Ext.define('ArqAdmin.view.fotografico.FotograficoController', {
    extend: 'ArqAdmin.view.base.AcervosViewController',
    alias: 'controller.fotografico',

    control: {
        "textfield": {
            specialkey: 'onTextfieldSpecialkey'
        }
    },

    onFilterFormButtonFilterClick: function (button) {
        var me = this,
            form = button.up('form'),
            params = form.getValues(false, true),
            grid = me.lookupReference('resultTable'),
            store = grid.getStore(),
            filters = [];

        Ext.Object.each(params, function (key, value) {
            var loProperty = 'lo_' + key;

            if (key.substring(0, 3) !== 'lo_') {
                filters.push({
                    'property': key,
                    'value': value,
                    'operator': form.getForm().findField(key).operator,
                    'logical_operator': (params.hasOwnProperty(loProperty)) ? params[loProperty] : 'and'
                });
            }
        });

        // grid.filters.clearFilters(true);
        delete store.getProxy().extraParams.search_all;
        delete store.getProxy().extraParams.likes;
        // delete store.getProxy().extraParams['search_all'];
        store.clearFilter(true);
        store.setFilters(filters);
        store.load();
    },

    onFilterFormButtonClearClick: function (button) {
        button.up('form').reset();
    },

    onSearchfieldTriggerClick: function () {
        var me = this,
            field = me.lookupReference('searchAllField'),
            value = field.getValue();

        if (!Ext.isEmpty(value)) {
            me.searchAll(value);
        }
    },

    onSearchfieldSpecialkey: function (field, e, eOpts) {
        var value = field.getValue();

        if (e.getKey() == e.ENTER && !Ext.isEmpty(value)) {
            this.searchAll(value);
        }
    },

    onClearAllFilters: function () {
        var me = this,
            grid = me.lookupReference('resultTable'),
            searchField = me.lookupReference('searchAllField'),
            filterForm = me.lookupReference('filterForm'),
            store = grid.getStore();

        searchField.setValue('');
        filterForm.reset();
        delete store.getProxy().extraParams.search_all;
        delete store.getProxy().extraParams.likes;
        grid.filters.clearFilters();
        store.clearFilter(true);
        store.load();
    },

    searchAll: function (term) {
        var me = this,
            grid = me.lookupReference('resultTable'),
            store = me.getStore('fotografias');

        if (Ext.isEmpty(term)) {
            return;
        }

        grid.filters.clearFilters(true);
        store.clearFilter(true);
        store.getProxy().extraParams['search_all'] = term;
        delete store.getProxy().extraParams.likes;
        store.load();
    },

    onGridRender: function (grid) {
        if (grid.referece = 'resultList') {
            grid.tip = Ext.create('Ext.tip.ToolTip', {
                target: grid.el,
                delegate: grid.view.cellSelector,
                trackMouse: true,
                anchor: 'top',
                dismissDelay: 0,
                bodyStyle: 'background-color:#eee;padding:0;',
                renderTo: Ext.getBody(),
                listeners: {
                    beforeshow: function updateTipBody(tip) {
                        var gridColumns = grid.view.getGridColumns(),
                            column = gridColumns[tip.triggerElement.cellIndex];

                        if (column.dataIndex === 'id') {
                            var record = grid.view.getRecord(tip.triggerElement.parentNode),
                                img = record.get('imagem_original');

                            if (!Ext.isEmpty(img)) {
                                var imgPath = ArqAdmin.config.Runtime.getImagesFotografico() + record.getId() + '/320';
                                var ttip = [
                                    '<div class="tipcls">' +
                                    '<img src="' + imgPath + '" onerror="this.src=\'resources/ico/no-image-75.png\';">' +
                                    '</div>'
                                ];
                                tip.update(ttip);
                            } else {
                                return false;
                            }
                        } else {
                            return false;
                        }
                    },
                    click: {
                        fn: function (tip) {
                            tip.hide();
                        }
                    }
                }
            });
        }
    },

    onGridBeforeselect: function (rowmodel, record, index, eOpts) {
        var me = this,
            editForm = me.lookupReference('editForm');

        if (editForm.isDirty()) {
            Ext.Msg.show({
                title: 'Formulário editado!',
                msg: 'Os dados do formulário foram alterados. <br />Você deseja descartar as alterações?',
                buttons: Ext.Msg.YESNO,
                animateTarget: 'button',
                icon: Ext.Msg.QUESTION,
                fn: function (btn, ev) {
                    if (btn === 'yes') {
                        me.forceResetForm(editForm);
                        rowmodel.select(index)
                    }
                }
            });
            return false;
        }
    },

    onGridSelect: function (rowmodel, record, index, eOpts) {
        var me = this,
            layoutItems = me.lookupReference('resultsPanel').getLayout().getLayoutItems();

        // selects record in both grids
        Ext.Object.each(layoutItems, function (key, componentGrid) {

            if (componentGrid.reference == 'resultGallery') {
                componentGrid = componentGrid.down('dataview');
            }

            var selection = componentGrid.getSelectionModel().getSelection()[0];
            if (record !== selection) {
                me.selectRecord(componentGrid, record);
            }
        });
    },

    onGridResultTableSelect: function (rowmodel, record, index, eOpts) {
        var me = this;

        me.getViewModel().set('record', record);
        // me.editFormLoadRecord(record, false);
        me.detailsPanelLoadRecord(record, true);
    },

    onButtonShowImageClick: function (event, target) {
        //var imgId = target.id.split('-').pop();
        this.showImageViewerWindow();
    },

    onGridCellClick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var me = this;

        if (cellIndex === 0 && !Ext.isEmpty(record.get('imagem_original'))) {
            me.showImageViewerWindow();
        }
    },

    onGridClearFilters: function () {
        this.lookupReference('resultTable').filters.clearFilters(true);
    },

    setResultsPanelActiveItem: function (button) {
        var me = this;

        switch (button.itemId) {
            case 'btnShowTable':
                me.showViewResultsPanel('resultTable');
                break;
            case 'btnShowList':
                me.showViewResultsPanel('resultList');
                break;
            case 'btnShowGallery':
                me.showViewResultsPanel('resultGallery');
                break;
        }
    },

    showViewResultsPanel: function (itemReference) {
        var me = this,
            layout = me.getReferences().resultsPanel.getLayout(),
            item = me.lookupReference(itemReference);

        layout.setActiveItem(item);
    },

    onAdd: function () {
        var me = this,
            editForm = me.lookupReference('editForm'),
            newRecord = Ext.create('ArqAdmin.model.fotografico.Fotografia');

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
            me.deselectAllGrids();
        }
    },

    onEdit: function () {
        var me = this,
            record = me.getViewModel().get('record');

        me.editFormLoadRecord(record, true);
    },

    onSave: function () {
        var me = this,
            form = me.lookupReference('editForm'),
            record = form.getRecord(),
            grid = me.lookupReference('resultTable');

        if (!record.phantom && !form.isDirty()) {
            return;
        }

        if (form.isValid()) {
            var values = form.getValues(),
                store = me.getStore('fotografias'),
                filename = form.getForm().findField('filename').getValue(),
                registroFotografico = form.getForm().findField('imagem_identificacao').getValue();

            if (filename) {
                // values.imagem_original = filename.replace(/^.*(\\|\/|\:)/, '');
                // var originalName = filename.replace(/^.*(\\|\/|\:)/, '');
                var fileExtension = filename.replace(/^.*(\\|\/|\:)/, '').split('.')[1];
                values.imagem_original = 'RF_' + registroFotografico + '.' + fileExtension;
            }

            record.set(values);

            if (record.phantom) {
                record.setId(null);
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
                            url = ArqAdmin.config.Runtime.getUploadFotografico() + result.id,
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
                                        form.reset();
                                        me.selectRecord(grid, newRecord);
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
                                form.reset(true);
                                me.selectRecord(grid, newRecord);
                            }
                        });
                    }
                },
                failure: function (batch, options) {
                    // store.load();
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
            msg: 'Você tem certeza que deseja excluir este registro?',
            buttons: Ext.Msg.YESNO,
            animateTarget: 'button',
            icon: Ext.Msg.QUESTION,
            fn: function (btn, ev) {
                if (btn === 'yes') {
                    var record = me.getViewModel().get('record'),
                        store = me.getStore('fotografias');

                    store.remove(record);
                    store.sync({
                        success: function () {
                            store.load({
                                scope: me,
                                callback: function (records, operation, success) {
                                    var grid = me.lookupReference('resultTable');
                                    me.selectRecord(grid, 0)
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

    onTextfieldSpecialkey: function (field, e, eOpts) {

        if (e.getKey() == e.ENTER) {
            var form = field.up('form');
            if (form) {
                if (form.xtype === 'fotografico-filterform') {
                    this.lookupReference('btnPesquisar').fireHandler();
                } else if (form.xtype === 'fotografico-editform') {
                    this.lookupReference('btnSave').fireHandler();
                }
            }
        }
    },

    onFilefieldChange: function (filefield, value, options) {
        var me = this,
            regFotografico = me.lookupReference('imagemIdentificacao').getValue(),
            fileName = value.replace(/^.*(\\|\/|\:)/, ''),
            fileExtension = value ? value.replace(/^.*(\\|\/|\:)/, '').split('.')[1].toLowerCase() : '',
            newName;

        if (regFotografico.length === 6 && fileExtension.length === 3) {
            newName = 'RF_' + regFotografico + '.' + fileExtension;
        } else {
            newName = fileName || '';
        }

        me.lookupReference('arquivoOriginal').setValue(newName);
    },

    showImageViewerWindow: function () {
        var me = this,
            win = Ext.widget('fotografico-imageviewer-window'),
            image = win.down('imageviewer-img').getImage(),
            record = me.getViewModel().get('record');

        if (record) {
            var imgLink = ArqAdmin.config.Runtime.getImagesFotografico() + record.getId() + '/1024';
            image.setSrc(imgLink);
        }

        win.getViewModel().set('currentImage', record);
        win.show();
    }
});
