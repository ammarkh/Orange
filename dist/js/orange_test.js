/**
 * this Module content a Orange Element for Client.... 
 */


(function(window){
    var Orange = function (){
    
    };

    Orange.prototype ={
             /** function for on / off Model   */

            createModel:function(title, message){
              // debugger;
                var modelOffCtrl = document.createElement('span');
                    modelOffCtrl.setAttribute('class','model-off-icon');
                    modelOffCtrl.innerHTML = "&#9932;";
                    modelOffCtrl.addEventListener('click',this.popupOff, false);
           
                var modelTitle = document.createElement('div');
            
                modelTitle.appendChild(modelOffCtrl);
                
                if(title){
                modelTitle.setAttribute('class','model-title ');
                var modelTitleText = document.createElement('label');
                modelTitleText.innerText = title;       //check type of title 
                modelTitle.appendChild(modelTitleText);
                }

              
                var model = document.createElement('div');
                model.setAttribute('class','model');
                model.appendChild(modelTitle);

                if(message){
                    var MessageElm = document.createElement('label');
                    MessageElm.innerText = message;

                    model.appendChild(MessageElm);
                }

                var modelContent = document.createElement('div');
                modelContent.setAttribute('class','content-model');
                modelContent.setAttribute('style','display:none');
                modelContent.appendChild(model);
             
                document.body.appendChild(modelContent);

                
                return model;

            },
            viewData:function(obj){
               console.log(typeof obj);
            },
            Model:function(title, Msg){
                this.createModel(title,Msg);
            },
            popup : function (){
                var modelContent = document.getElementsByClassName('content-model')[0];
                modelContent.removeAttribute('style');
               
            },
            popupOff :function(){
                var modelContent = document.getElementsByClassName('content-model')[0];
                modelContent.setAttribute('style', 'display:none');
            }

    }

    window.Orange = Orange.prototype ;
    return Orange;  //change this module to orange.model and make module for each style.
})(window);