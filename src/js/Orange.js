//var Orange = window;




// window.Orange.msg = msg;
//var Orange = window.Orange;

//var O = window.Orange;



/**this library will content text, div, button, model , responsive , navbar, check box, radio button, socity icon, alertMessage, box, background, validation, chart , form ,calender, hint , panel
 * 
 * table, auto complete , load , css, event , occordion , ajax ,json, event, tohtml, to text
 */

/**
 * var Orange = (function(){

function Orange  (message){
  // constructor  will be orange (message) this is a call
  

 */

O = Orange = function(el = '') {

    function Orange(el) {
        this.el = el;
    }

    Orange.constructor = Orange;
    Orange.__proto__ = Orange.prototype;

    //model function 
    Orange.prototype.model = function(el) {
        //body
        var element = this.checkParamType();
        this.model = window.model(this.el);
        return this.model;
    };

    Orange.prototype.message = function(msg) {
        //body
        this.message = window.message(msg);
        return this.message;
    };

    Orange.prototype.tooltip = function(message, el) {
        var element = this.checkParamType(el);
        this.tooltip = window.tooltip(message, element);
        return this.tooltip;
    };


    Orange.prototype.checkParamType = function() {

        if (typeof this.el === 'undefined') {

            console.log('error : cannot use Orange with no element ');

            //throw error invalid param.
        } else if (typeof this.el === 'string') {
            if (this.el.startsWith('#')) {
                /**return element id  */
                return document.getElementById(this.el);
            } else {
                // throw new exception not valid 
            }
        } else if (typeof this.el === 'object') {
            return this.el;
        }

        return Orange;
    };

    return new Orange(el);
};