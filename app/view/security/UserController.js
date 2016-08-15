Ext.define('ArqAdmin.view.security.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',

    requires: [
        'ArqAdmin.view.security.GuestAccessInfo'
    ],

    control: {
        "user-form textfield": {
            specialkey: 'onFormTextfieldSpecialkey'
        }
    },

    onFormAfterrender: function () {
        this.onAdd();
    },

    onGridSelect: function (rowmodel, record, index, eOpts) {
        if (record) {
            this.formLoadRecord(record);
        }
    },

    formLoadRecord: function (record) {
        var me = this,
            form = me.lookupReference('userForm');

        me.getViewModel().set('record', record);
        form.loadRecord(record);
    },

    onGridBeforeselect: function (rowmodel, record, index, eOpts) {
        var me = this,
            form = me.lookupReference('userForm');

        if (form.isDirty()) {
            Ext.Msg.show({
                title: 'Formulário editado!',
                msg: 'Os dados do formulário foram alterados. <br />Você deseja descartar as alterações?',
                buttons: Ext.Msg.YESNO,
                animateTarget: 'button',
                icon: Ext.Msg.QUESTION,
                fn: function (btn, ev) {
                    if (btn === 'yes') {
                        form.reset(true);
                        rowmodel.select(index)
                    }
                }
            });
            return false;
        }
    },

    onAdd: function () {
        var me = this,
            form = me.lookupReference('userForm'),
            newRecord = Ext.create('ArqAdmin.model.security.User');

        newRecord.setId(null);

        if (form.isDirty()) {
            Ext.Msg.show({
                title: 'Formulário editado!',
                msg: 'Os dados do formulário foram alterados. <br />Você deseja descartar as alterações?',
                buttons: Ext.Msg.YESNO,
                animateTarget: 'button',
                icon: Ext.Msg.QUESTION,
                fn: function (btn, ev) {
                    if (btn == 'yes') {
                        me.formLoadRecord(newRecord);
                    }
                }
            });
        } else {
            me.formLoadRecord(newRecord);
        }
    },

    onSave: function () {
        var me = this,
            form = me.lookupReference('userForm'),
            isNew = false;

        if (!form.isDirty()) {
            return;
        }

        if (form.isValid()) {
            var values = form.getValues(),
                store = me.getStore('users'),
                record = form.getRecord();

            record.set(values);

            if (record.phantom) {
                isNew = true;
                record.setId(null);
                record.set('username', "c" + values.rg.slice(0, 6));
                store.add(record);
            } else {
                var roles = form.down('checkboxgroup').getValue().roles;
                if (Ext.isEmpty(roles)) {
                    record.set('roles', []);
                }
            }

            store.sync({
                scope: me,
                success: function (batch, options) {
                    var operations = batch.getOperations(),
                        result = Ext.decode(operations[0].getResponse().responseText);

                    if (isNew) {
                        me.showAccessCodeInfo(result.name, result.username, result.access_code);
                    }

                    store.load({
                        scope: me,
                        callback: function (records, operation, success) {
                            var record = store.findRecord('id', result.id),
                                grid = me.lookupReference('usersGrid');

                            form.reset();
                            me.selectRecord(grid, record);

                            if (!isNew) {
                                ArqAdmin.util.Util.showToast('success', 'Sucesso!', 'O registro foi salvo com êxito!');
                            }
                        }
                    });
                }
            });
        } else {
            Ext.Msg.alert('Erro!', 'O formulário contém dados inválidos!');
        }
    },

    onCancelEdit: function (button, e, eOpts) {
        var me = this,
            form = me.lookupReference('userForm'),
            record = form.getRecord();

        form.reset(true);
        me.formLoadRecord(record);
    },

    requestNewAccessCode: function () {
        var me = this,
            viewModel = me.getViewModel(),
            userId = viewModel.get('record').getId();

        Ext.Ajax.request({
            url: ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/guest/' + userId + '/refresh-access-code',
            success: function (response) {
                var result = ArqAdmin.util.Util.decodeJSON(response.responseText);

                if (result.access_code) {
                    me.showAccessCodeInfo(result.name, result.username, result.access_code);
                }
            }
        });
    },

    showAccessCodeInfo: function (name, username, access_code) {
        var win = Ext.widget('security-guest-access-info'),
            winForm = win.down('form');

        winForm.down('displayfield[name=name]').setValue(name);
        winForm.down('displayfield[name=username]').setValue(username);
        winForm.down('displayfield[name=access_code]').setValue(access_code);

        win.show();
    },

    forceResetForm: function (form) {
        form.getForm().getFields().each(function (field) {
            field.originalValue = field.getInitialConfig('value');
        });
        form.reset(true);
    },

    selectRecord: function (view, record) {
        var selectionModel = view.getSelectionModel();

        if (selectionModel.isSelected(record)) {
            selectionModel.deselect(record);
        }

        selectionModel.select(record);
    },

    onFormTextfieldSpecialkey: function (field, e, eOpts) {

        if (e.getKey() == e.ENTER) {
            var form = field.up('form');
            if (form) {
                this.lookupReference('btnSave').fireHandler();
            }
        }
    },

    showHistoryWindow: function () {
        var me = this,
            view = me.getView(),
            form = me.lookupReference('userForm'),
            id = form.getRecord().getId(),
            store = me.getStore('revisions');

        store.getProxy().url = ArqAdmin.config.Runtime.getApiBaseUrl() + '/api/user/' + id + '/revision';
        store.load();

        me.dialog = view.add({
            xtype: 'history-window'
        });

        me.dialog.show();
    },

    onFieldFilterChange: function (field, newValue, oldValue, eOpts) {
        var me = this,
            grid = me.lookupReference('usersGrid'),
            term = field.getValue(),
            store = grid.getStore();

        if (term.length === 0) {
            store.clearFilter();
            return;
        }

        var rterm = term;
        var accent = ['aáàâåäã', 'eéèêë', 'iíìîï', 'oóòôöõ', 'uúùûü', 'cç', 'nñ'];

        Ext.Array.each(accent, function (value) {
            var v = '[' + value + ']';
            var p = new RegExp("[" + value + "]", 'gi');

            rterm = rterm.replace(p, v);
        });

        var matcher = new RegExp(rterm, 'gi');

        var filters = [
            Ext.create('Ext.util.Filter', {
                filterFn: function (record) {
                    return matcher.test(record.get('name')) ||
                        matcher.test(record.get('username')) ||
                        matcher.test(record.get('email'));
                }
            })
        ];

        store.clearFilter();
        store.filter(filters);
    }
});