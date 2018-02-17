



//var Orange = window;




// window.Orange.msg = msg;
//var Orange = window.Orange;

//var O = window.Orange;



/**this library will content text, div, button, model , responsive , navbar, check box, radio button, socity icon, alertMessage, box, background, validation, chart , form ,calender, hint , panel
 * 
 * table, auto complete , navbar
 */

 /**
  * var Orange = (function(){

 function Orange  (message){
   // constructor  will be orange (message) this is a call
   

  */

  var Orange =function (el) {

    function Orange (el){
        this.el = el ;
    };

    //model function 
    Orange.prototype.model  = function (el){
        //body
            this.model = window.model(this.el);
        return this;
    };

    Orange.prototype.message = function(el){
        //body
        this.message = window.message(this.el);
        return this;
    };

    Orange.prototype.checkParamType = function (){
        if(typeof this.el === 'undefined'){
            
            console.log('error : cannot use Orange with no element ');

            //throw error invalid param.
        }

        if (typeof this.el === 'string'){       // function for check if param string 
            if(this.el.toString().startsWith('#'))// function for id 
                console.log('id'+ el);
            else if(this.el.toString().startsWith('.')){  // check for class 
               // console.log('class parameter ' + el);
               var allELementsClass = document.getElementsByClassName(el);
            }
            else if (this.el.toString().startsWith('[') && this.el.toString().endsWith(']')){
                
               var tagName =this.el.toString().trim().substring(this.el.indexOf(':')+1, this.el.length-1);
                
               // console.log(tagName);
            }
        } else {
            console.log(this.el);
        }
     
    };

     return new Orange(el);
  };