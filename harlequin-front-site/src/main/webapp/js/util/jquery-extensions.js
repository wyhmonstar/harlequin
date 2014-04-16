/**
 * Some extensions of jQuery.
 * 
 * @author unicorn 2013-12-16
 */
(function($) {
	$(function(){
		
		/*===* jQuery Ajax extensions *===*/
		/**
		 * Enable the jQuery AJAX global functions like ajaxError, ajaxSend and so on.
		 */
		$.ajaxSetup({global: true});
		
		/**
		 * Prevent double submission of AJAX post request.
		 */
		$(document).ajaxSend(function(event, jqxhr, settings) {
			if (settings.type.toUpperCase() === "POST") {
				if ($(this).data("_jq_ajax_wait_response") === true) {
					// just prevent the default action, don't prevent event propagation.
					event.preventDefault();
				} else {
					$(this).data("_jq_ajax_wait_response", true);
				}
	        }
		});
		
		$(document).ajaxSuccess(function(event, jqxhr, settings) {
			if (settings.type.toUpperCase() === "POST") {
				$(this).data("_jq_ajax_wait_response", false);
	        }
		});
		
		$(document).ajaxError(function(event, jqxhr, settings) {
			if (console && console.error) {
				console.error("Ajax error happened from [" + settings.url + "]");
			} else {
				alert("Ajax error happened from [" + settings.url + "]");
			}
		});
		
		/*===* jQuery validation extensions *===*/
		jQuery.validator.addMethod("alnum", function(value, element) {
			return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
		});
		
		jQuery.validator.addMethod("fullWidth", function(value, element) {
			return this.optional(element) || /^[ァ-ヴ!ー]+$/.test(value);
		});
	});
})(jQuery);