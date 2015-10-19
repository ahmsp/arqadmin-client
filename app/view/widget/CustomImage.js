Ext.define("ArqAdmin.view.widget.CustomImage", {
    extend: "Ext.Img",
    xtype: 'app-img',

    onRender: function () {
        var me = this;
        me.callParent(arguments);
        me.imgEl.dom.onerror = me.onImageLoadError;
    },

    onImageLoadError: function () {
        alert("Error loading image")
    },

    onDestroy: function () {
        var me = this;
        me.imgEl.dom.onerror = null;
        me.callParent(arguments);
    }
});