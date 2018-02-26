//Orange.msg module
(function(window) {

    var msg = (function() {

        //constructor of msg

        function msg(msg) {
            if (typeof msg === 'string') {
                this.msg = msg;

            }

        };

        //function for view message 
        msg.prototype.show = function(id) {

            if (typeof id === 'string') {

                var msgEle = document.getElementById(id);
                const cssClass = 'o-msg-hidden';
                msgEle.innerHTML = this.msg; /**  add msg to controller  */

                if (msgEle.classList.contains(cssClass)) {
                    msgEle.classList.remove("o-msg-hidden");
                    this.alertHerozinal(id);
                } else {
                    //element is already view return alert 
                    this.alertHerozinal(id);

                }
                return this;
            } else {
                throw new('id invalid should path Element Id like string');
            }

            return this;
        };

        msg.prototype.hide = function(id) {
            if (typeof id === 'string') {
                /** define element message and hide it  */
                if (typeof document.getElementById(id) === 'object') {
                    document.getElementById(id).classList.add("o-msg-hidden");
                } else {
                    throw new 'cannot hide null ';
                }
            } else {
                throw new 'error : not pass valid id'; // user should hide a correct message .
            }


        };

        msg.prototype.alertHerozinal = function(id) {

            var elementForAlert = document.getElementById(id);
            const alertCLass = "o-msg-alertH";

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
            const alertClass = "o-msg-alertV";

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