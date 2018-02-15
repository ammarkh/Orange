
/**standard  
(function (){

  var Orange = (function(){

    function Orange  (message){
      // constructor  will be orange (message) this is a call
      
       
     
    }
   
    Orange .getItem = function (){
     alert(item);
    };
   
    return Orange;
   
   })();
   
  
})();

*/

var msg = (function(){

  //constructor of msg

    function msg(message){
     alert(message);
    }

    //function for view message 
    msg.show = function(id){
      if(typeof id === 'string'){

        var msgEle =  document.getElementById(id);
        const cssClass='msg-hidden';
        
        if(msgEle.classList.contains(cssClass)){
            msgEle.classList.remove( "msg-hidden");
            this.alert(id);
        }
        else{
          //element is already view return alert 
          this.alert(id);
         
        }
      }else{
        throw new 'id invalid should path Element Id like string';
      }
      // this.alert(id);
    };

    msg.hide =function(id){
      document.getElementById(id).classList.add("msg-hidden");
    };

    msg.alert =function(id){

      var elementForAlert =  document.getElementById(id);
      const alertCLass="alert";

      if(elementForAlert.classList.contains(alertCLass)){
        //elementForAlert.classList.remove(alertCLass);
        var elclone = elementForAlert.cloneNode(true);
        elementForAlert.parentNode.replaceChild(elclone, elementForAlert);
       
      }else{
        elementForAlert.classList.add(alertCLass);
      }

    };

  
    return msg;

})();

msg.create = function(message){
  return new msg(message);
}