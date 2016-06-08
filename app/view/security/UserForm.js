Ext.define('ArqAdmin.view.security.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'user-form',

    reference: 'userForm',

    split: true,
    width: 420,
    bodyBorder: true,
    collapsible: true,
    scrollable: true,
    cls: 'custom-form-panel',
    bodyPadding: 10,
    header: true,
    trackResetOnLoad: true,
    bind: {
        title: '{displayPanelTitle}'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        padding: '6 12 5',
        layout: {
            type: 'vbox',
            align: 'stretch'
        }
    },
    fieldDefaults: {
        msgTarget: 'side'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'toolbar-light',
            items: [
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('add'),
                    text: 'Novo',
                    listeners: {
                        click: 'onAdd'
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'saveButton',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('save'),
                    text: 'Salvar',
                    reference: 'btnSave',
                    listeners: {
                        click: 'onSave'
                    }
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    itemId: 'cancelButton',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('cancel'),
                    text: 'Cancelar',
                    listeners: {
                        click: 'onCancelEdit'
                    }
                },
                {
                    xtype: 'tbseparator',
                    hidden: true,
                    bind: {
                        hidden: '{!isAdmin}'
                    },
                    handler: 'showHistoryWindow'
                },
                {
                    xtype: 'button',
                    glyph: ArqAdmin.util.Glyphs.getGlyph('checklist'),
                    tooltip: 'Histórico de alterações',
                    hidden: true,
                    bind: {
                        hidden: '{!isAdmin}',
                        disabled: '{!usersGrid.selection}'
                    },
                    handler: 'showHistoryWindow'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'component',
            html: [
                '<h2>Atenção!</h2>',
                '<p>Somente consulentes, que não sejam funcionários ou estagiários, podem ser cadastrados manualmente no sistema.</p>',
                '<p>Funcionários ou estagiários já tem permissão e devem acessar o sistema normalmente, utilizando seu "usuário" e "senha" da rede da Prefeitura.</p>'
            ],
            style: {
                backgroundColor: '#EFE7C0',
                marginBottom: '15px'
            },
            bind: {
                hidden: '{!isPhantom}'
            }
        },
        {
            xtype: 'button',
            text: 'Gerar novo código de acesso',
            margin: '0 0 20',
            hidden: true,
            bind: {
                hidden: '{isPhantomOrSelectedUser}'
            },
            handler: 'requestNewAccessCode'
        },
        {
            xtype: 'fieldset',
            title: 'Dados do usuário',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nome',
                    name: 'name',
                    allowBlank: false,
                    validateBlank: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'E-mail',
                    name: 'email',
                    vtype: 'email',
                    allowBlank: false,
                    validateBlank: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'RG',
                    name: 'rg',
                    plugins: 'textmask',
                    mask: '99.999.999-9',
                    regex: /\d{9}/,
                    regexText: 'O valor do campo RG não é válido.',
                    allowBlank: false,
                    validateBlank: true,
                    persist: false,
                    bind: {
                        disabled: '{!isPhantom}',
                        hidden: '{!isPhantom}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Usuário ID',
                    name: 'username',
                    hidden: true,
                    bind: {
                        hidden: '{isPhantom}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Grupo (Rede)',
                    name: 'adldap_group',
                    hidden: true,
                    bind: {
                        hidden: '{isGuestEditorOrRecordPhantom}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Tipo (Rede)',
                    name: 'adldap_type',
                    hidden: true,
                    bind: {
                        hidden: '{isGuestEditorOrRecordPhantom}'
                    }
                },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Adicionado em',
                    name: 'created_at',
                    hidden: true,
                    bind: {
                        hidden: '{isPhantom}'
                    },
                    renderer: function (value, displayField) {
                        return Ext.Date.format(value, 'd/m/Y H:i:s');
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Permissões do usuário',
            hidden: true,
            bind: {
                hidden: '{isGuestEditorOrRecordPhantom}'
            },
            items: [
                {
                    xtype: 'checkboxgroup',
                    reference: 'rolesCheck',
                    padding: '0 0 10',
                    defaults: {
                        margin: '2 0'
                    },
                    columns: 1,
                    items: [
                        {
                            boxLabel: 'Administrador<br>(Acesso irrestrito a todas os recursos) ',
                            reference: 'checkboxAdmin',
                            name: 'roles',
                            inputValue: 'ROLE_ADMIN'
                        },
                        {
                            boxLabel: 'Acervos Textual e Cartográfico <br>(Pode gerenciar os acervos Textual de Cartográfico)',
                            name: 'roles',
                            inputValue: 'ROLE_DOCUMENTAL'
                        },
                        {
                            boxLabel: 'Acervo Fotográfico <br>(Pode gerenciar o acervo Fotográfico)',
                            name: 'roles',
                            inputValue: 'ROLE_FOTOGRAFICO'
                        },
                        {
                            boxLabel: 'Acervo Termos de Sepultamento <br>(Pode gerenciar o acervo de Termos de Sepultamento)',
                            name: 'roles',
                            inputValue: 'ROLE_SEPULTAMENTO'
                        },
                        {
                            boxLabel: 'Atendimento <br>(Pode cadastrar consulentes para pesquisa)',
                            name: 'roles',
                            inputValue: 'ROLE_ATENDIMENTO'
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        afterrender: 'onFormAfterrender'
    }
});
