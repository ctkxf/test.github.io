;(function(exports, $) {

    var checkers = {

        required: function() {

        },
        range: function(min, max) {

        },
    }
 
    function TextValidator() { 

        this.validate = function() {
            //required();
            //range.
        }
        
    }

    function SelectValidator() {
        required();
    }


    var AllAvaliableValidators = {
        'input:text' : new TextValidator(),
        '': ''
    };

    //Expose to global..
    exports.Validator = exports.Validator || {};
    exports.Validator = {
        'validateForm': function() {

        },
        'validateElement': function(element) {

            var tagName = element.tagName;
            tagName = element.type ? tagName + ":" + element.type: tagName;
            var v = AllAvaliableValidators[tagName];
            v.validate(element);
        }
    };
})(this, jQuery);