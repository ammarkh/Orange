(function(window){
    var Orange = function (){
      document.createElement('button');
    };

    Orange.prototype ={
             /** function for on / off Model   */

            createModel:function(title, message){
              // debugger;
                var modelOffCtrl = document.createElement('span');
                    modelOffCtrl.setAttribute('class','model-off-icon');
                    modelOffCtrl.innerHTML = "&#9932;";
            
           
                var modelTitle = document.createElement('div');
            
                modelTitle.appendChild(modelOffCtrl);
                
                if(title){
                modelTitle.setAttribute('class','model-title');
                var modelTitleText = document.createElement('label');
                modelTitleText.innerText = title;       //check type of title 
                modelTitle.appendChild(modelTitleText);
                }

                var model = document.createElement('div');
                model.setAttribute('class','model');
                model.appendChild(modelTitle);

                var modelContent = document.createElement('div');
                modelContent.setAttribute('class','content-model');
                modelContent.appendChild(model);
             
                document.body.appendChild(modelContent);

                
                return model;

            },
            viewData:function(obj){
               console.log(typeof obj);
            },
            onModel : function (){

            },
            OffModel :function(){

            }

    }

    window.Orange = Orange.prototype ;
    return Orange;
})(window);