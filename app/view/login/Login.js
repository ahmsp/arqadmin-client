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
                    fieldLabel: 'Usuário da rede (Ex: d123456) *',
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
                        '<p>* Utilize o "Usuário" e "Senha" da rede da Prefeitura.</p>',
                        '<p>O ArqAdmin é o sistema de gestão dos acervos do Arquivo Histórico de São Paulo.<br>',
                        'Visitantes podem acessar o sistema dentro da rede da Prefeitura, mas devem se identificar.<br>',
                        'Caso não queira se identificar pode usar o ArqWeb que é a versão pública de pesquisa nos Acervos.</p>'
                    ],
                    margin: '20 0 0',
                    padding: '7 0 0',
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