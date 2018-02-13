(function(window){
    var Orange = function (){
      
    }

    Orange.prototype ={
             /** function for on / off Model   */

            createModel:function(){
                var ModelContent = document.createElement('div');
                ModelContent.setAttribute('class', 'content-model');
                var model = document.createElement('div').setAttribute('class', 'model');
                var modelTitle = document.createElement('div').setAttribute('class', 'model-title info');
                var modelOff = document.createElement('span').setAttribute('class', 'model-off-icon');
                modelOff+= '&#9932;';
            },
            viewData:function(){
                console.log('da');
            },
            onModel : function (){

            },
            OffModel :function(){

            }

    }

    window.Orange = Orange ;

})(window);