Ext.define('ArqAdmin.view.security.GuestAccessInfo', {
    extend: 'Ext.window.Window',
    xtype: 'security-guest-access-info',

    layout: 'fit',
    height: 330,
    width: 400,
    glyph: ArqAdmin.util.Glyphs.getGlyph('user'),
    title: 'Dados de acesso',
    autoScroll: true,
    modal: true,
    closable: true,
    border: false,
    style: {
        border: 'none'
    },
    items: [
        {
            xtype: 'form',
            bodyPadding: '10 20',
            cls: 'custom-form-panel',
            items: [
                {
                    xtype: 'component',
                    html: [
                        '<h2>Consulente cadastrado!</h2>',
                        '<p>Informe os dados de acesso abaixo para o consulente.</p>'
                    ],
                    margin: '0 0 15'
                    // style: {
                    //     // backgroundColor: '#EFE7C0',
                    //     marginBottom: '15px'
                    // }
                },
                {
                    xtype: 'displayfield',
                    // fieldLabel: 'Nome',
                    name: 'name',
                    anchor: '100%',
                    fieldStyle: 'font-size: 18px',
                    margin: '0 0 10'
                },
                {
                    xtype: 'fieldset',
                    title: 'Dados de acesso',
                    padding: '10',
                    fieldDefaults: {
                        fieldStyle: 'font-size: 24px',
                        labelStyle: 'font-size: 18px; font-weight: bold'
                    },
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Usuário',
                            name: 'username',
                            anchor: '100%',
                            margin: '0 0 10'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Senha',
                            name: 'access_code',
                            anchor: '100%'
                        }
                    ]
                }

            ]
        }
    ]
});
