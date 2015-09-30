Ext.define('ArqAdmin.util.Util', {

    statics: {

        required: '<span style="color:red;font-weight:bold" data-qtip="Required"> *</span>',

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
        },

        showToast: function (emphasis, text) {
            Ext.toast({
                html: '<strong>' + emphasis + '</strong>&nbsp; ' + text,
                //html: [
                //    '<strong>' + emphasis + '</strong>&nbsp; ' + text,
                //    '<span class="close"></span>'
                //],
                closable: false,
                align: 't',
                slideInDuration: 150,
                autoCloseDelay: 4000, // default: 3000
                minWidth: 600,
                width: 600,
                bodyPadding: '17',
                bodyStyle: {
                    'background-color': '#C4C7B2',
                    'border': '1px solid #204C54',
                    'color': '#204C54',
                    'font-size': '16px',
                    'text-align': 'center',
                    '-webkit-border-radius': '4px',
                    '-moz-border-radius': '4px',
                    'border-radius': '4px'
                },
                //autoClose: false,
                animateShadow: true
            });
        }
    }
});