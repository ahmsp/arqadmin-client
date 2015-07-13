/**
 * Created by cyro on 03/07/15.
 */
Ext.define('ArqAdmin.view.login.Login', {
    extend: 'Ext.window.Window',

    xtype: 'login-dialog',

    requires: [
        'ArqAdmin.view.login.LoginController',
        'ArqAdmin.view.login.LoginModel'
    ],
    viewModel: {
        type: 'login'
    },
    controller: 'login',

    autoShow: true,
    width: 350,
    height: 500,
    shadow: false,
    border: false,
    draggable: false,
    resizable: false,
    style: {
        border: 0
    },
    closable: false,
    closeAction: 'hide',
    header: false,
    title: 'Login',
    plain: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
        show: 'onWindowShow'
    },
    items: [
        {
            xtype: 'component',
            cls: 'x-logindialog-header',
            height: 80
        },
        {
            xtype: 'form',
            flex: 1,
            reference: 'loginform',
            defaults: {
                labelAlign: 'top',
                allowBlank: false,
                anchor: '100%',
                blankText: 'Este campo é obrigatório',
                validateBlank: true,
                msgTarget: 'side',
                fieldStyle: 'font-size: 21px'
            },
            bodyPadding: 15,
            bodyStyle: {
                background: '#bccccf'
            },
            glyph: 58891,
            title: 'Autenticação*',

            items: [
                {
                    xtype: 'textfield',
                    reference: 'fieldDomain',
                    fieldLabel: 'Domínio (Padrão: rede)',
                    name: 'domain',
                    value: 'rede',
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    reference: 'fieldUsername',
                    fieldLabel: 'Usuário (Ex: d123456)**',
                    name: 'username',
                    enforceMaxLength: true,
                    maxLength: 7,
                    regex: /^[dx]\d{6}$/i,
                    regexText: 'O valor do campo Usuário não é válido.',
                    selectOnFocus: true
                },
                {
                    xtype: 'textfield',
                    reference: 'fieldPassword',
                    fieldLabel: 'Senha**',
                    name: 'password',
                    inputId: 'fieldPassword',
                    inputType: 'password',
                    enableKeyEvents: true,
                    minLength: 6,
                    selectOnFocus: true,
                    listeners: {
                        keypress: 'onFieldPasswordKeypress'
                    }
                },
                {
                    xtype: 'component',
                    html: [
                        '* Acesso restrito a funcionários cadastrados.<br />',
                        'Utilize o "Usuário" e "Senha" da rede da Prefeitura.'
                    ],
                    margin: '20 0 0',
                    padding: '15 0 0',
                    style: {
                        'border-top': '1px solid rgb(206, 223, 226)',
                        color: 'rgb(105, 105, 105)'
                    }
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    style: {
                        background: '#bccccf'
                    },
                    ui: 'footer',
                    layout: {
                        type: 'hbox',
                        padding: 8
                    },
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            formBind: true,
                            reference: 'btnSubmit',
                            scale: 'medium',
                            text: 'Acessar',
                            listeners: {
                                click: 'onButtonSubmitClick'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'component',
            cls: 'x-logindialog-footer',
            html: 'Contato: <a href="mailto:arquivohistorico@prefeitura.sp.gov.br?Subject=Contato%20do%20ArqAdmin">arquivohistorico@prefeitura.sp.gov.br</a>'
        }
    ]
});