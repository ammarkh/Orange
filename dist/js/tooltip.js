// this Module for Orange Tootip 

(function(window){

    var Orange = (function (){
        window.Orange = Orange.prototype;
    });

    Orange.prototype = {
        createTooltip : function (Msg) {

        },
        Tooltip : function(Msg){
            this.createTooltip(Msg);
        }
    };

    return new Orange();

})(window);