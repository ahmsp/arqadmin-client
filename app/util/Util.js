Ext.define('ArqAdmin.util.Util', {

    statics: {
        decodeJSON: function (text) {
            var result = Ext.JSON.decode(text, true);

            if (!result) {
                result = {};
                result.success = false;
                result.message = text;
            }

            return result;
        },

        showErrorMsg: function (text) {
            Ext.Msg.show({
                title: 'Erro!',
                msg: text,
                icon: Ext.Msg.ERROR,
                buttons: Ext.Msg.OK
            });
        },

        handleFormFailure: function (action) {
            var me = this,
                result = ArqAdmin.util.Util.decodeJSON(action.response.responseText);

            switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMsg('O formulário não pode ser submetido com valores inválidos');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMsg(action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    me.showErrorMsg(result.message);
            }
        }
    }
});