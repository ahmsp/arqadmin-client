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

        //handleFormFailure: function (action) {
        //    var me = this,
        //        result = ArqAdmin.util.Util.decodeJSON(action.response.responseText);
        //
        //    switch (action.failureType) {
        //        case Ext.form.action.Action.CLIENT_INVALID:
        //            me.showErrorMsg('O formulário não pode ser submetido com valores inválidos');
        //            break;
        //        case Ext.form.action.Action.CONNECT_FAILURE:
        //            me.showErrorMsg(action.response.responseText);
        //            break;
        //        case Ext.form.action.Action.SERVER_INVALID:
        //            me.showErrorMsg(result.message);
        //    }
        //},

        showToast: function (type, emphasis, text) {

            var color = '#204C54';
            var bgColor = '#C4C7B2';
            var borderColor = '#204C54';

            switch (type) {
                case 'success':
                    color = '#204C54';
                    bgColor = '#C4C7B2';
                    borderColor = '#204C54';
                    break;
                case 'info':
                    color = '#31708f';
                    bgColor = '#d9edf7';
                    borderColor = '#bce8f1';
                    break;
                case 'warning':
                    color = '#8a6d3b';
                    bgColor = '#fcf8e3';
                    borderColor = '#faebcc';
                    break;
                case 'danger':
                    color = '#a94442';
                    bgColor = '#f2dede';
                    borderColor = '#ebccd1';
            }

            Ext.toast({
                html: '<strong>' + emphasis + '</strong>&nbsp; ' + text,
                closable: false,
                align: 'tr',
                useXAxis: true,
                slideInAnimation: 'easeInOut',
                slideInDuration: 300,
                autoCloseDelay: 3000, // default: 3000
                closeOnMouseDown: true,
                //autoClose: false,
                animateShadow: true,
                width: 600,
                bodyPadding: '17',
                paddingX: 15,
                paddingY: 15,
                bodyStyle: {
                    'background-color': bgColor,
                    'border': '1px solid ' + borderColor,
                    'color': color,
                    'font-size': '16px',
                    //'text-align': 'center',
                    '-webkit-border-radius': '4px',
                    '-moz-border-radius': '4px',
                    'border-radius': '4px'
                }
            });
        }
    }
});