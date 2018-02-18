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




//Orange.msg module
(function(window) {

    var msg = (function() {

        //constructor of msg

        function msg(msg) {
            if (typeof msg === 'string') {
                this.msg = msg;

                this.hide();
            }

        };

        //function for view message 
        msg.prototype.show = function(id) {

            if (typeof id === 'string') {

                var msgEle = document.getElementById(id);
                const cssClass = 'msg-hidden';
                msgEle.innerText = this.msg; /**  add msg to controller  */

                if (msgEle.classList.contains(cssClass)) {
                    msgEle.classList.remove("msg-hidden");
                    this.alertHerozinal(id);
                } else {
                    //element is already view return alert 
                    this.alertHerozinal(id);

                }
                return this;
            } else {
                throw new('id invalid should path Element Id like string');
            }
            this.alert(id);
            return this;
        };

        msg.prototype.hide = function(id) {
            //this.alert(id);
            // document.getElementById(id).classList.add("msg-hidden");
        };

        msg.prototype.alertHerozinal = function(id) {

            var elementForAlert = document.getElementById(id);
            const alertCLass = "alertH";

            if (elementForAlert.classList.contains(alertCLass)) {
                //elementForAlert.classList.remove(alertCLass);
                var elclone = elementForAlert.cloneNode(true);
                elementForAlert.parentNode.replaceChild(elclone, elementForAlert);

            } else {
                elementForAlert.classList.add(alertCLass);
            }

        };

        msg.prototype.alertVertical = function(id) {
            var elementForAlert = document.getElementById(id);
            const alertClass = "alertV";

            if (elementForAlert.classList.contains(alertClass)) {
                var elmNew = elementForAlert.cloneNode(true);
                elementForAlert.parentNode.replaceChild(elmNew, elementForAlert);
            } else {
                elementForAlert.classList.add(alertClass);
            }
            return this;
        };


        return msg;

    })();

    window.message = function(el) {
        return new msg(el);
    }


})(window);

/*
msg.create = function(message){
  return new msg(message);
}
*/