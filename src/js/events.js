/**this module will content a important event like load , OnlOad , init */

var event = (function() {

    var doc = document || window.document;

    function event() {

    }

    event.prototype.load = function() {
        if (doc) {
            if (doc.readyState === 'complete') {
                return true;
            }
        }
        return this;
    };

    event.prototype.init = function() {
        if (doc) {
            if (doc.readyState === 'interactive') {
                return true;
            }
        }
        return this;
    };

    event.prototype.isInit = function() {
        return this.init();
    };

    event.prototype.isReady = function() {
        return this.load();
    };


})();