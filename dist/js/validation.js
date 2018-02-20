 /** standard call for element in Orange validation
  * 
  * O('id').validation('message').function();
  * 
  */

 (function(window) {

     var Validation = (function() {

         /** collection of pettren will be using email pettren, password pettren, username pettren  */
         const emailPettren = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
         const phonePettren = /^[0-9]{10}/;
         const passwordPettren = '';
         const usernamePettren = '';


         function Validation(message, id) {

             if (typeof id !== 'undefined') {
                 var el = document.getElementById(id);
                 console.log(id);
                 if (el instanceof Object) {
                     this.el = el;
                 } else {
                     throw 'Element not defined can\'t validate of null ';
                 }
             } else {
                 console.log('undefined id');
                 return this;
             }
         }


         Validation.prototype = {

             required: function() {
                 if (this.el.value)
                     return true;
                 return false;

             },
             email: function() {
                 return emailPettren.test(this.el.value);

             },
             isPattren: function(Patt) {
                 return (Patt) instanceof RegExp || Patt.constructor == RegExp;
             },
             pattren: function(patt) {
                 if (typeof patt !== 'undefined')
                     if (this.isPattren(patt))
                         return (patt).test(String(this.el));
                     else
                         throw 'Error exception Not valid regex pettren ';
                 else
                     return this;
             },
             range: function(min, max) {
                 if (typeof min === 'undefined' && typeof max === 'undefined') {
                     throw 'user not pass exspression ';
                 } else if (typeof min === 'number' && typeof max === 'number') {
                     return ((Number)(this.el.value) >= min && (Number)(this.el.value) <= max)
                 } else if (typeof min === 'number' && typeof max === 'undefined') {
                     return ((Number)(this.el.value) >= min);
                 } else if (typeof max === 'number' && typeof min === 'undefined') {
                     return ((Number)(this.el.value) <= max);
                 } else {
                     throw 'user not pass a valid type for compression';
                 }

             },
             type: function(typ) { /**return if control  type  */
                 return (typeof this.el.value === typ);
             },
             isUserNamePettren: function() {

             },
             isPasswordPettren: function() {

             },
             isPhonePettren: function() {

             }


         };

         return Validation;

     })();

     window.Validation = function(message, el) {

         return new Validation(message, el);
     };


 })(window);