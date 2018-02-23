/** this module will content a tooltip Orange feature  */


(function(window) {

    var tooltip = (function() {
        var tooltipCtrl, tooltipContainer;


        function tooltip(message, el) {

            if (message) {
                if (typeof(message) === 'string') { //process if message is empty
                    this.message = message;
                }
            } else {
                throw 'should pass a message for display in tooltip';
            }


            if (arguments[1]) {
                if (document || window.document) {
                    if (typeof(arguments[1]) === 'string')
                        tooltipContainer = document.getElementById(arguments[1]);
                    else if (typeof(arguments[1] === 'object'))
                        tooltipContainer = arguments[1];
                    else
                        throw 'not valid element has passed ';
                }
            } else {
                throw 'not element has passed for tooltip';
            }





        }

        tooltip.prototype.on = function(prop) {
            /*define a element div for tooltip */
            tooltipCtrl = document.createElement('div');
            tooltipCtrl.classList.add('o-tooltip-text');
            if (prop) {
                switch (prop) {
                    case 'left':
                        tooltipCtrl.classList.add('o-tooltip-left'); // add left prop here 
                        break;
                    case 'right':
                        tooltipCtrl.classList.add('o-tooltip-right'); // add right prop here 
                        break;
                    case 'up':
                        tooltipCtrl.classList.add('o-tooltip-up'); //add up prop here 
                        break;
                    case 'down':
                        tooltipCtrl.classList.add('o-tooltip-down'); // add down prop here 
                        break;
                    default:
                        console.log(' %c not valid prop is passed ! ', 'background: #222; color: #bada55');
                        break;
                }
            }


            tooltipCtrl.innerText = this.message;

            if (tooltipContainer && typeof(tooltipContainer) === 'object') {
                tooltipContainer.appendChild(tooltipCtrl);
            }
            return this;
        };

        return tooltip;
    })();

    window.tooltip = function(message, el) {
        return new tooltip(message, el);
    };

})(window);