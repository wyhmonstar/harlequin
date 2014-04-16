/**
 * Some customized jQuery plugins.
 * 
 * @author unicorn 2013-12-16
 */
(function($){
	$(function(){
		/**
		 * Prevent double submission of forms. Usage: $('form').preventDoubleSubmission();
		 */
		$.fn.preventDoubleSubmission = function() {
			$(this).on('submit',function(e){
				var $form = $(this);
				if ($form.data('submitted') === true) {
				  // previously submitted - don't submit again
				  e.preventDefault();
				} else {
				  // mark it so that the next submit can be ignored
				  $form.data('submitted', true);
				}
			});
			// keep chainability
			return this;
		};
	});
})(jQuery);