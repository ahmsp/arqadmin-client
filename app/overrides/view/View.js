Ext.define('ArqAdmin.overrides.view.View', {
    override: 'Ext.view.View',

    /**
     * Focuses a node in the view.
     * @param {Ext.data.Model} rec The record associated to the node that is to be focused.
     */
    focusNode: function(rec){
        var me          = this,
            node        = me.getNode(rec),
            el          = me.el,
            adjustmentY = 0,
            adjustmentX = 0,
            elRegion    = el.getRegion(),
            nodeRegion;

        // Viewable region must not include scrollbars, so use
        // DOM client dimensions
        elRegion.bottom = elRegion.top + el.dom.clientHeight;
        elRegion.right = elRegion.left + el.dom.clientWidth;
        if (node) {
            nodeRegion = Ext.fly(node).getRegion();
            // node is above
            if (nodeRegion.top < elRegion.top) {
                adjustmentY = nodeRegion.top - elRegion.top;
                // node is below
            } else if (nodeRegion.bottom > elRegion.bottom) {
                adjustmentY = nodeRegion.bottom - elRegion.bottom;
            }

            // node is left
            if (nodeRegion.left < elRegion.left) {
                adjustmentX = nodeRegion.left - elRegion.left;
                // node is right
            } else if (nodeRegion.right > elRegion.right) {
                adjustmentX = nodeRegion.right - elRegion.right;
            }

            if (adjustmentX || adjustmentY) {
                //me.scrollBy(adjustmentX, adjustmentY, false);
                me.scrollBy(adjustmentX, adjustmentY, true); //override
            }

            // Poke on a tabIndex to make the node focusable.
            Ext.fly(node).set({
                tabIndex: -1
            });

            node.focus();
        }
    }

});