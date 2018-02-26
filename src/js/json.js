(function(window) {

    var json = (function() {
        function json() {

        }

        json.prototype = {};

        return json;
    });


    window.json = function() {
        return new json();
    };

})(window);