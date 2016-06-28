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
    cls: 'x-logindialog',
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
    title: 'Identifique-se',
    //plain: true,

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
            title: 'Identifique-se',

            items: [
                {
                    xtype: 'component',
                    html: [
                        '<p style="margin: 0">Para acessar o sistema, utilize o seu<br>"Usuário" e "Senha" da rede da Prefeitura.</p>'
                    ],
                    padding: '0 0 15',
                    style: {
                        // color: 'rgb(105, 105, 105)',
                        color: 'rgb(171, 65, 11)',
                        fontSize: '14px',
                        lineHeight: '135%',
                        textAlign: 'center'
                    }
                },
                // {
                //     xtype: 'textfield',
                //     reference: 'fieldDomain',
                //     fieldLabel: 'Domínio (Padrão: rede)',
                //     name: 'domain',
                //     value: 'rede',
                //     readOnly: true
                // },
                {
                    xtype: 'textfield',
                    reference: 'fieldUsername',
                    fieldLabel: 'Usuário (Ex: d123456)',
                    name: 'username',
                    enforceMaxLength: true,
                    maxLength: 7,
                    regex: /^[dcx]\d{6}$/i,
                    regexText: 'O valor do campo Usuário não é válido.',
                    selectOnFocus: true
                },
                {
                    xtype: 'textfield',
                    reference: 'fieldPassword',
                    fieldLabel: 'Senha',
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
                        'O acesso para pesquisa nos acervos através do ArqAdmin é liberado para usuários da rede da Prefeitura e consulentes presenciais do AHSP.'
                    ],
                    margin: '20 0 0',
                    padding: '14 0 0',
                    style: {
                        'border-top': '1px solid rgb(206, 223, 226)',
                        color: 'rgb(105, 105, 105)',
                        textAlign: 'center'
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