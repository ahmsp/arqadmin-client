/**
 * Session Monitor task, alerts the user that their session will expire in 60 seconds and provides
 * the options to continue working or logout.  If the count-down timer expires,  the user is automatically
 * logged out.
 */
Ext.define('ArqAdmin.util.SessionMonitor', {
    singleton: true,

    interval: 1000 * 10, // run every 10 seconds.
    lastActive: null,
    maxInactive: 1000 * 60 * 15, // 15 minutes of inactivity allowed
    remaining: 0,
    ui: Ext.getBody(),

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
                    ArqAdmin.app.getController('OAuth').refreshToken();
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
    }),

    /**
     * Sets up a timer task to monitor for mousemove/keydown events and
     * a count-down timer task to be used by the 60 second count-down dialog.
     */
    constructor: function (config) {
        var me = this;

        // session monitor task
        this.sessionTask = {
            run: me.monitorUI,
            interval: me.interval,
            scope: me
        };

        // session timeout task, displays a 60 second countdown
        // message alerting user that their session is about to expire.
        this.countDownTask = {
            run: me.countDown,
            interval: 1000,
            scope: me
        };
    },

    /**
     * Simple method to register with the mousemove and keydown events.
     */
    captureActivity: function (eventObj, el, eventOptions) {
        this.lastActive = new Date();
    },

    /**
     *  Monitors the UI to determine if you've exceeded the inactivity threshold.
     */
    monitorUI: function () {
        var now = new Date();
        var inactive = (now - this.lastActive);

        if (inactive >= this.maxInactive) {
            this.stop();

            this.window.show();
            this.remaining = 60;  // seconds remaining.
            Ext.TaskManager.start(this.countDownTask);
        }
    },

    /**
     * Starts the session timer task and registers mouse/keyboard activity event monitors.
     */
    start: function () {
        console.log('start session monitor');

        this.lastActive = new Date();

        this.ui = Ext.getBody();

        this.ui.on('mousemove', this.captureActivity, this);
        this.ui.on('keydown', this.captureActivity, this);

        Ext.TaskManager.start(this.sessionTask);
    },

    /**
     * Stops the session timer task and unregisters the mouse/keyboard activity event monitors.
     */
    stop: function () {
        Ext.TaskManager.stop(this.sessionTask);
        this.ui.un('mousemove', this.captureActivity, this);  //  always wipe-up after yourself...
        this.ui.un('keydown', this.captureActivity, this);
    },

    /**
     * Countdown function updates the message label in the user dialog which displays
     * the seconds remaining prior to session expiration.  If the counter expires, you're logged out.
     */
    countDown: function () {
        this.window.down('label').update('Sua sessão ira expirar em ' + this.remaining + ' segundo' + ((this.remaining == 1) ? '.' : 's.'));

        --this.remaining;

        if (this.remaining < 0) {
            ArqAdmin.app.getController('OAuth').logout();
        }
    }
});