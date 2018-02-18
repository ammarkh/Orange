/**this module for model */

(function(window) {

    var model = (function() {

        function model(el) {

            //console.log(el);
            this.el = el;
        };

        model.prototype.viewData = function() {
            alert(typeof this.el);

            return this;
        };
        return model;
    })();

    window.model = function(el) {
        return new model(el);
    };

})(window);