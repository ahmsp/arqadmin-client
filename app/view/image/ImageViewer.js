Ext.define('ArqAdmin.view.image.ImageViewer', {
    extend: 'Ext.container.Container',
    xtype: 'imageviewer',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    config: {
        isMoving: false,
        imageWidth: null,
        imageHeight: null,
        originalImageWidth: null,
        originalImageHeight: null,
        clickX: null,
        clickY: null,
        lastMarginX: null,
        lastMarginY: null,
        rotation: 0
    },

    initComponent: function () {
        var me = this;

        me.items = [
            {
                xtype: 'container',
                itemId: 'imagecontainer',
                flex: 1,
                style: {
                    overflow: 'hidden',
                    backgroundColor: '#f2f1f0',
                    cursor: 'move'
                },
                items: [
                    {
                        xtype: 'toolbar',
                        ui: 'toolbar-dark',
                        defaults: {
                            tooltipType: 'title'
                        },
                        items: [
                            {
                                xtype: 'label',
                                style: {
                                    color: '#fff',
                                    'font-size': '14px',
                                    'font-weight': 'bold'
                                },
                                text: 'Visualização da imagem'
                            },
                            {
                                xtype: 'tbfill'
                            },
                            {
                                xtype: 'button',
                                tooltip: 'Ajustar a largura da tela',
                                icon: 'resources/ico/move_horizontal.png',
                                listeners: {click: me.stretchHorizontally, scope: me}
                            },
                            {
                                xtype: 'button',
                                tooltip: 'Ajustar a altura da tela',
                                icon: 'resources/ico/move_vertical.png',
                                listeners: {click: me.stretchVertically, scope: me}
                            },
                            {
                                xtype: 'button',
                                tooltip: 'Ajustar a tela',
                                icon: 'resources/ico/move_alt.png',
                                listeners: {click: me.stretchOptimally, scope: me}
                            },
                            {
                                xtype: 'button',
                                tooltip: 'Aumentar',
                                icon: 'resources/ico/zoom_in.png',
                                listeners: {click: me.zoomIn, scope: me}
                            },
                            {
                                xtype: 'button',
                                tooltip: 'Diminuir',
                                icon: 'resources/ico/zoom_out.png',
                                listeners: {click: me.zoomOut, scope: me}
                            },
                            {
                                xtype: 'button',
                                tooltip: 'Rotacionar sentido horário',
                                icon: 'resources/ico/redo.png',
                                listeners: {click: me.rotateClockwise, scope: me}
                            },
                            {
                                xtype: 'button',
                                tooltip: 'Rotacionar sentido anti-horário',
                                icon: 'resources/ico/undo.png',
                                listeners: {click: me.rotateAntiClockwise, scope: me}
                            },
                            {
                                xtype: 'tbseparator'
                            },
                            {
                                xtype: 'button',
                                tooltip: 'Fechar vizualização da imagem',
                                glyph: ArqAdmin.util.Glyphs.getGlyph('close'),
                                listeners: {click: me.windowClose, scope: me}
                            }
                        ]
                    },
                    {
                        xtype: 'image',
                        mode: 'element',
                        id: 'img_view',
                        //src: me.src,
                        src: '',
                        style: {
                            boxShadow: '0 0 1px 1px #888'
                        },
                        listeners: {
                            render: function (image) {
                                image.el.dom.onload = function () {
                                    me.setRotation(0);
                                    me.rotateImage();
                                    //todo: refatorar
                                    var img = new Image();
                                    img.src = image.src;
                                    img.onload = function () {
                                        me.setOriginalImageWidth(this.width);
                                        me.setOriginalImageHeight(this.height);
                                        me.setImageWidth(this.width);
                                        me.setImageHeight(this.height);
                                        if ((this.width > me.getImageContainer().getWidth()) ||
                                            (this.height > me.getImageContainer().getHeight())) {
                                            me.stretchOptimally();
                                        } else {
                                            me.centerImage();
                                        }
                                    };
                                };
                            }
                        }
                    }
                ]
            }
        ];

        me.callParent();
    },

    initEvents: function () {
        var me = this;

        me.mon(me.getImageContainer().getEl(), {
            mouseup: me.mouseup,
            mousedown: me.mousedown,
            mousemove: me.mousemove,
            scope: me
        });

        me.callParent();
    },

    getOriginalImageSize: function () {
        var me = this;

        var img = new Image();
        img.onload = function () {
            return {
                width: this.width,
                height: this.height
            };
        };
        img.src = (me.getImage().src) ? me.getImage().src : '';
    },

    stretchHorizontally: function () {
        var me = this,
            imageContainerWidth = me.getImageContainer().getWidth();

        me.setImageSize({
            width: imageContainerWidth - 20,
            height: me.getOriginalImageHeight() * (imageContainerWidth - 20) / me.getOriginalImageWidth()
        });

        me.centerImage();
    },

    stretchVertically: function () {
        var me = this,
            imageContainerHeight = me.getImageContainer().getHeight();

        me.setImageSize({
            width: me.getOriginalImageWidth() * (imageContainerHeight - 20) / me.getOriginalImageHeight(),
            height: imageContainerHeight - 20
        });

        me.centerImage();
    },

    stretchOptimally: function () {
        var me = this,
            imageContainer = me.getImageContainer(),
            adjustedImageSize = me.getAdjustedImageSize();

        if (adjustedImageSize.width * imageContainer.getHeight() / adjustedImageSize.height > imageContainer.getWidth()) {
            me.stretchHorizontally();
        } else {
            me.stretchVertically();
        }
    },

    centerImage: function () {
        var me = this,
            imageContainer = me.getImageContainer(),
            adjustedImageSize = me.getAdjustedImageSize();

        me.setMargins({
            top: (imageContainer.getHeight() - adjustedImageSize.height - 20) / 2,
            left: (imageContainer.getWidth() - adjustedImageSize.width - 20) / 2
        });
    },

    mousedown: function (event) {
        var me = this,
            margins = me.getMargins();

        event.stopEvent();

        me.setClickX(event.getX());
        me.setClickY(event.getY());
        me.setLastMarginY(margins.top);
        me.setLastMarginX(margins.left);

        me.setIsMoving(true);
    },

    mousemove: function (event) {
        var me = this;

        if (me.getIsMoving()) {
            me.setMargins({
                top: me.getLastMarginY() - me.getClickY() + event.getY(),
                left: me.getLastMarginX() - me.getClickX() + event.getX()
            });
        }
    },

    mouseup: function () {
        var me = this;

        if (me.getIsMoving()) {
            me.setClickX(null);
            me.setClickY(null);
            me.setLastMarginX(null);
            me.setLastMarginY(null);
            me.setIsMoving(false);
        }
    },

    zoomOut: function (btn, event, opts) {
        var me = this,
            margins = me.getMargins(),
            adjustedImageSize = me.getAdjustedImageSize();

        me.setMargins({
            top: margins.top + adjustedImageSize.height * 0.05,
            left: margins.left + adjustedImageSize.width * 0.05
        });

        me.setImageSize({
            width: adjustedImageSize.width * 0.9,
            height: me.getOriginalImageHeight() * adjustedImageSize.width * 0.9 / me.getOriginalImageWidth()
        });

        event.stopEvent();
    },

    zoomIn: function (btn, event, opts) {
        var me = this,
            margins = me.getMargins(),
            adjustedImageSize = me.getAdjustedImageSize();

        me.setMargins({
            top: margins.top - adjustedImageSize.height * 0.05,
            left: margins.left - adjustedImageSize.width * 0.05
        });

        me.setImageSize({
            width: adjustedImageSize.width * 1.1,
            height: me.getOriginalImageHeight() * adjustedImageSize.width * 1.1 / me.getOriginalImageWidth()
        });

        event.stopEvent();
    },

    rotateClockwise: function () {
        var me = this,
            rotation = me.getRotation();

        rotation += 90;

        if (rotation > 360) {
            rotation -= 360;
        }

        me.setRotation(rotation);
        me.rotateImage();
    },

    rotateAntiClockwise: function () {
        var me = this,
            rotation = me.getRotation();

        rotation -= 90;

        if (rotation < 0) {
            rotation += 360;
        }

        me.setRotation(rotation);
        me.rotateImage();
    },

    rotateImage: function () {
        var me = this,
            tmpOriginalWidth,
            transformStyle = 'rotate(' + me.getRotation() + 'deg)';

        tmpOriginalWidth = me.getOriginalImageWidth();
        me.setOriginalImageWidth(me.getOriginalImageHeight());
        me.setOriginalImageHeight(tmpOriginalWidth);

        me.getImage().getEl().applyStyles({
            'transform': transformStyle,
            '-o-transform': transformStyle,
            '-ms-transform': transformStyle,
            '-moz-transform': transformStyle,
            '-webkit-transform': transformStyle
        });

        me.setMargins(me.getMargins());
    },

    setMargins: function (margins) {
        var me = this,
            rotation = me.getRotation(),
            adjustedImageSize = me.getAdjustedImageSize(),
            imageContainer = me.getImageContainer(),
            imageContainerWidth = imageContainer.getWidth(),
            imageContainerHeight = imageContainer.getHeight();

        if (adjustedImageSize.width > imageContainerWidth - 20) {
            if (margins.left > 0) {
                margins.left = 0;
            } else if (margins.left < imageContainerWidth - adjustedImageSize.width - 20) {
                margins.left = imageContainerWidth - adjustedImageSize.width - 20;
            }
        } else {
            if (margins.left < 0) {
                margins.left = 0;
            } else if (margins.left > imageContainerWidth - adjustedImageSize.width - 20) {
                margins.left = imageContainerWidth - adjustedImageSize.width - 20;
            }
        }

        if (adjustedImageSize.height > imageContainerHeight - 20) {
            if (margins.top > 0) {
                margins.top = 0;
            } else if (margins.top < imageContainerHeight - adjustedImageSize.height - 20) {
                margins.top = imageContainerHeight - adjustedImageSize.height - 20;
            }
        } else {
            if (margins.top < 0) {
                margins.top = 0;
            } else if (margins.top > imageContainerHeight - adjustedImageSize.height - 20) {
                margins.top = imageContainerHeight - adjustedImageSize.height - 20;
            }
        }

        if (rotation === 90 || rotation === 270) {
            var marginAdjustment = (me.getImageHeight() - me.getImageWidth()) / 2;
            margins.top = margins.top - marginAdjustment;
            margins.left = margins.left + marginAdjustment;
        }

        me.getImage().getEl().setStyle('margin-left', margins.left + 'px');
        me.getImage().getEl().setStyle('margin-top', margins.top + 'px');
    },

    getMargins: function () {
        var me = this,
            rotation = me.getRotation(),
            imageEl = me.getImage().getEl();

        var margins = {
            top: parseInt(imageEl.getStyle('margin-top'), 10),
            left: parseInt(imageEl.getStyle('margin-left'), 10)
        };

        if (rotation === 90 || rotation === 270) {
            var marginAdjustment = (me.getImageHeight() - me.getImageWidth()) / 2;
            margins.top = margins.top + marginAdjustment;
            margins.left = margins.left - marginAdjustment;
        }

        return margins;
    },

    getAdjustedImageSize: function () {
        var me = this,
            rotation = me.getRotation();

        if (rotation === 90 || rotation === 270) {
            return {
                width: me.getImageHeight(),
                height: me.getImageWidth()
            };
        } else {
            return {
                width: me.getImageWidth(),
                height: me.getImageHeight()
            };
        }
    },

    setImageSize: function (size) {
        var me = this,
            rotation = me.getRotation();

        if (rotation === 90 || rotation === 270) {
            me.setImageWidth(size.height);
            me.setImageHeight(size.width);
        } else {
            me.setImageWidth(size.width);
            me.setImageHeight(size.height);
        }
    },

    applyImageWidth: function (width) {
        var me = this;
        me.getImage().setWidth(width);
        return width;
    },

    applyImageHeight: function (height) {
        var me = this;
        me.getImage().setHeight(height);
        return height;
    },

    getImage: function () {
        return this.query('image')[0];
    },

    getImageContainer: function () {
        return this.query('#imagecontainer')[0];
    },

    windowClose: function () {
        this.up('window').close();
    }
});
