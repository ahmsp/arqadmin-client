Ext.define('ArqAdmin.view.sepultamento.SepultamentoController', {
    extend: 'ArqAdmin.view.base.AcervosViewController',
    alias: 'controller.sepultamento',

    control: {
        "textfield": {
            specialkey: 'onTextfieldSpecialkey'
        }
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
                                img = record.get('imagem');
                            
                            if (!Ext.isEmpty(img)) {
                                var imgPath = ArqAdmin.config.Runtime.getImagesSepultamento() + record.getId() + '/320';
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

        if (editForm && editForm.isDirty()) {
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

        if (cellIndex === 0 && !Ext.isEmpty(record.get('imagem'))) {
            me.showImageViewerWindow();
        }
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

    showImageViewerWindow: function () {
        var me = this,
            win = Ext.widget('imageviewer-window');

        win.getViewModel().set('sepultamentoId', me.getViewModel().get('record').getId());
        win.on('close', function () {
            me.getStore('sepultamentos').reload();
        });
        win.show();
    },

    onAdd: function () {
        var me = this,
            editForm = me.lookupReference('editForm'),
            newRecord = Ext.create('ArqAdmin.model.sepultamento.RegistroSepultamento');

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
            formBasic = form.getForm(),
            record = form.getRecord(),
            values = form.getValues(),
            store = me.getStore('sepultamentos');

        if (!form.isDirty()) {
            return;
        }

        if (formBasic.isValid()) {

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

                    store.load({
                        scope: me,
                        callback: function (records, operation, success) {
                            var record = store.findRecord('id', result.id),
                                grid = me.lookupReference('resultTable');

                            form.reset();
                            me.selectRecord(grid, record);
                        }
                    });
                    ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
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
                        store = me.getStore('sepultamentos');

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
                if (form.xtype === 'sepultamento-filterform') {
                    this.lookupReference('btnPesquisar').fireHandler();
                } else if (form.xtype === 'sepultamento-editform') {
                    this.lookupReference('btnSave').fireHandler();
                }
            }
        }
    }
});
