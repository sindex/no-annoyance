const Main = imports.ui.main;

function DontAnnoy() {
    this._init();
}

DontAnnoy.prototype = {
    _init : function() {
        global.display.disconnect(Main.windowAttentionHandler._windowDemandsAttentionId);
        global.display.disconnect(Main.windowAttentionHandler._windowMarkedUrgentId);
        this._windowDemandsAttentionId = global.display.connect('window-demands-attention',
                                         this._onWindowDemandsAttention.bind(this));
        this._windowMarkedUrgentId = global.display.connect('window-marked-urgent',
                                         this._onWindowDemandsAttention.bind(this));
    },

    _onWindowDemandsAttention: function(display, window) {
        if (!window || window.has_focus() || window.is_skip_taskbar())
            return;

        Main.activateWindow(window);
    },

    destroy: function() {
        global.display.disconnect(this._windowDemandsAttentionId);
        global.display.disconnect(this._windowMarkedUrgentId);
        Main.windowAttentionHandler._windowDemandsAttentionId = global.display.connect('window-demands-attention',
                         Main.windowAttentionHandler._onWindowDemandsAttention.bind(Main.windowAttentionHandler));
        Main.windowAttentionHandler._windowMarkedUrgentId = global.display.connect('window-marked-urgent',
                         Main.windowAttentionHandler._onWindowDemandsAttention.bind(Main.windowAttentionHandler));
    }
}

let dontannoy;

function init() {
}

function enable() {
    dontannoy = new DontAnnoy();
}

function disable() {
    dontannoy.destroy();
}
