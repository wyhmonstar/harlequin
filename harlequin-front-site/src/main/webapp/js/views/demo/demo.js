/**
 * The script file used in demo/demo.jsp page. 
 * 
 * In general, this kind of scripts reference should be placed in the end of the pages(like JSP) 
 * to speed up page loading. 
 * 
 * Any event binding action should be written in this script instead of the pages(like JSP), and
 * in ideal conditions, the pages should not contains any inline scripts.
 * 
 * @author unicorn 2014-01-02
 */
(function($) {
	$(function() {
		/** Check if the global namespace is declared */
		if (!$.MHB || !$.MHB.pages) {
			throw "The global vairables[$.MHB or $.MHB.pages] haven't been initialized correctly";
		}
		
		/** The declaration of the namespace */
		if ($.MHB.pages.demo_demo) {
			throw "The namespace[$.MHB.pages.demo_demo] has been declared";
		}
		$.MHB.pages.demo_demo = {};
		
		/**
		 * 
		 * @param param1 ...
		 * @param param2 ...
		 */
		$.MHB.pages.demo_demo.demo_function = function(param1, param2) {
			// TODO: the logic.
		};
		
		// TODO: some initial actions(eg. binding event)
	});
})(jQuery);