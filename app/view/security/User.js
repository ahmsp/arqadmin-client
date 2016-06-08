Ext.define('ArqAdmin.view.security.User', {
    extend: 'Ext.window.Window',
    xtype: 'security-user',

    requires: [
        'ArqAdmin.view.security.UserController',
        'ArqAdmin.view.security.UserModel',
        'ArqAdmin.view.security.UsersGrid',
        'ArqAdmin.view.security.UserForm'
    ],

    controller: 'user',
    viewModel: {
        type: 'user'
    },
    
    layout: 'border',
    height: 600,
    width: 600,
    glyph: ArqAdmin.util.Glyphs.getGlyph('users'),
    bind: {
        title: 'Gerenciamento de {titleType}s'
    },
    modal: true,
    closable: true,
    border: false,
    bodyPadding: 10,
    maximized: true,
    // maximizable: true,
    style: {
        border: 'none'
    },
    items: [
        {
            xtype: 'users-grid',
            region: 'center'
        },
        {
            xtype: 'user-form',
            region: 'east'
        }
    ]
});
