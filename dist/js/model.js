(function (window) {

    var model = (function (){

        function model (modelId){
            this.modelId = modelId;
        }
    
        model.prototype.showModel = function  (arguments) {
            // body
            window.alert('msf');
            return this;
        };
    
        model.prototype.hideModel = function (params) {
            //body
            return this;
        };
    
        model.prototype.slideDownOpen = function (params) {
            //body
            return this;
        };
    
        model.prototype.slideDownClose =function (params) {
            //body
            return this;
        };
    
        model.prototype.slideUpOpen = function (params) {
            //body;
            return this;
        }
    
        return model;
    
    })();
    
    window.model = function (modelId){

        return new model(modelId);
    };

})(window);


