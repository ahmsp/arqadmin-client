Ext.define('ArqAdmin.util.SessionMonitor', {
    singleton: true,

    startTime: null,
    doRefreshTokenInterval: 1000 * 60 * 55, // 55 minutes to do refresh token
    lastActivity: null,
    maxInactive: 1000 * 60 * 60 * 8, // 8 hours of inactivity allowed
    ui: Ext.getBody(),

    constructor: function () {
        var me = this;

        this.sessionTask = {
            run: me.monitorUI,
            interval: 1000,
            scope: me
        };

        this.countDownTask = {
            run: me.countDown,
            interval: 1000,
            scope: me
        };
    },

    monitorUI: function () {
        console.log('monitorUI');

        var now = new Date();
        var tempoDecorrido = (now - this.startTime);
        var inactive = (now - this.lastActive);

        if (inactive >= this.maxInactive) {
            this.stop();

            this.window.show();
            this.remaining = 60;  // seconds remaining.
            Ext.TaskManager.start(this.countDownTask);
        }

        if (tempoDecorrido >= this.doRefreshTokenInterval) {
            this.stop();
            ArqAdmin.app.getController('OAuth').doRefreshToken();
        }
    },

    start: function () {
        console.log('start session monitor');

        this.ui = Ext.getBody();
        this.ui.on('mousemove', this.captureActivity, this);
        this.ui.on('keydown', this.captureActivity, this);

        this.startTime = new Date();
        Ext.TaskManager.start(this.sessionTask);
    },

    stop: function () {
        Ext.TaskManager.stop(this.sessionTask);
    },

    captureActivity: function () {
        this.lastActivity = new Date();
    },

    countDown: function () {
        this.window.down('label').update('Sua sessão ira expirar em ' + this.remaining + ' segundo' + ((this.remaining == 1) ? '.' : 's.'));

        --this.remaining;

        if (this.remaining < 0) {
            ArqAdmin.app.getController('OAuth').logout();
        }
    },

    /**
     * Dialog to display expiration message and count-down timer.
     */
    window: Ext.create('Ext.window.Window', {
        bodyPadding: 5,
        closable: false,
        closeAction: 'hide',
        modal: true,
        resizable: false,
        title: 'Aviso de tempo limite de sessão',
        width: 325,
        items: [
            {
                xtype: 'container',
                frame: true,
                html: [
                    'Sua sessão irá expirar automaticamente após 15 minutos de inatividade. ',
                    'Se a sessão expirar, os dados não salvos serão perdidos e a aplicação será automticamente encerrada.</ br></ br>',
                    'Se você quiser continuar trabalhando, clique no botão "Continuar a trabalhar".'
                ]
            },
            {
                xtype: 'label',
                text: ''
            }
        ],
        buttons: [
            {
                text: 'Continuar trabalhando',
                handler: function () {
                    Ext.TaskManager.stop(ArqAdmin.util.SessionMonitor.countDownTask);
                    ArqAdmin.util.SessionMonitor.window.hide();
                    ArqAdmin.util.SessionMonitor.start();
                    ArqAdmin.app.getController('OAuth').doRefreshToken();
                    console.log('session alive');
                }
            },
            {
                text: 'Sair',
                action: 'logout',
                handler: function () {
                    Ext.TaskManager.stop(ArqAdmin.util.SessionMonitor.countDownTask);
                    ArqAdmin.util.SessionMonitor.window.hide();
                    ArqAdmin.app.getController('OAuth').logout();
                }
            }
        ]
    })

});