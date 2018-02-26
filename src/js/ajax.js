/**module for ajax function and all function related it  */

(function(window) {

    ajax = (function() {

        function ajax() {

        };

        ajax.prototype = {

        };

        return ajax;
    });

    window.ajax = function(el) {
        return new ajax(el);
    }


})(window);