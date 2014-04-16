/* ***********************************************
 * some common method
 * author: unicorn 2012-6-5
 * **********************************************/
(function($){
	/** Declare the namespace */
	if ($.commons) {
		throw "The namespace[$.commons] has been declared";
	}
	$.commons = {};

	/**
	 * retrieve the given action complete URL.
	 */
	$.commons.actionUrl = function(actionUrl) {
		return window.location.protocol + "//"
			 + window.location.host + "/"
			 + window.location.pathname.split('/')[1]
			 + actionUrl;
	};

	/**
	 * Retrieve the specified parts(exclude http://) of the given URL.
	 * 
	 * Usage:
	 * 	console.log(s("http://www/demo/kpi/2013-11-13", -1, -1));
	 * 	console.log(s("http://www/demo/kpi/2013-11-13", 0, 2));
	 * 	console.log(s("http://www/demo/kpi/2013-11-13", -2, -1));
	 * 	console.log(s("http://www/demo/kpi/2013-11-13", 0, -2));
	 * 
	 * Output:
	 * 	2013-11-13
	 * 	www/demo
	 * 	www/2013-11-13
	 * 	www/demo/kpi 
	 * 
	 * @param url the given url
	 * @param begin the begin index of the part array
	 * @param length the part count
	 */
	$.commons.urlSlice = function (url, begin, end) {
		var target = url ? url : window.location.pathname;
		if (target.indexOf("http://") != -1) {
			target = target.replace("http://", "");
		}
		var paths = target.split('?')[0].split('/');
		var arrLen = paths.length;
		var b = begin >= 0 ? begin : arrLen + begin;
		var e = end >= 0 ? end : arrLen + end + 1;
		if (b > e) {
			throw "The parameters: begin, end invalid";
		}
		return paths.slice(b, e).join('/');
	};

	/**
	 * Used to change the radio's name when clone them.
	 * 
	 * @param radios the radios that be cloned
	 */
	$.commons.changeRadioName = function(radios) {
		if(radios && radios.length > 0){
			for(var i = 0; i < radios.length; i++){
				var oldName = $(radios[i]).attr("name");

				var groups = $(radios).filter('[name = "' + oldName + '"]');
				var newName = oldName + new Date().getTime();
				// because ie7, ie6 don't support to modify some attribute
				// includes 'name' on form fields during runtime,
				// re-create new element to replace the original
				if(groups && groups.length > 0){
					for(var j = 0; j < groups.length; j++){
						var strHtml = $("<div></div>").append($(groups[j]).clone()).html();
						strHtml = strHtml.replace(/\bname="?[^\s^>"]*"?/g, 'name="'+newName + '"');
						var dest = $(strHtml);
						$.commons.cloneCopyEvent($(groups[j]), dest);
						$(groups[j]).before(dest);
						$(groups[j]).remove();
					}
				}
			}
		}
	};

	/**
	 * Retrieve the HTTP get parameter by name.
	 * 
	 * @param name the name of parameter
	 */
	$.commons.urlParam = function(name, url) {
		var href = url ? url : window.location.href;
		var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(href);

		if(results && results.length > 1)
			return results[1] || 0;
	};

	/**
	 * Compute date month interval.
	 * 
	 * @param d1 the lower value
	 * @param d2 the upper value
	 */
	$.commons.monthDiff = function(d1, d2) {
		number = 0;

		yearToMonth = (d2.getFullYear() - d1.getFullYear()) * 12;

		number += yearToMonth;
		monthToMonth = d2.getMonth() - d1.getMonth();
		number += monthToMonth;

		endDay = d2.getDate();
		startDay = d1.getDate();
		dayStep = endDay - startDay;

		if (dayStep >= 0) {
		    if (dayStep >= 15)
		        number += 1;
		} else {
		    if (dayStep <= -15)
		        number -= 1;
		}
		return number;
	};

	/**
	 * Validate an object if is a valid Date.
	 * 
	 * @param d the validated object
	 */
	$.commons.dateValid = function(d) {
		if(Object.prototype.toString.call(d) !== "[object Date]")
		    return false;
		return !isNaN(d.getTime());
	};

	/**
	 * Validate an object if is a valid Date.
	 * 
	 * @param d the year string
	 */
	$.commons.yDateValid = function(y) {
		if (y && /^\d{4}$/.test(y)) {
			var d = new Date(y + "/01/01");
			if (Object.prototype.toString.call(d) !== "[object Date]") {
				return false;
			} else {
				return !isNaN(d.getTime());
			}
		} else if (y && /^([mtsh])(\d{2})$/.test(y)) {
			return true;
		} else {
			return false;
		}
	};

	/**
	 * Used to solve the the datepicker input's id is repeated problem when datepicker input is cloned.
	 * 
	 * @param datepickers an array of datepicker inputs
	 */
	$.commons.datepickerAdapter = function(datepikers) {
		datepikers.each(function(){
			// if the current input has the hasDatpicker class
			if ($(this).hasClass("hasDatepicker")) {
				// current inputs id
				var this_id = $(this).attr("id"); 
				// a new id
				var new_id = this_id + new Date().getTime(); 
				// change to new id
				$(this).attr("id", new_id); 
				$(this).removeClass('hasDatepicker');
				$(this).datepicker(initializeSettingSta);
			}
		});
	};

	/**
	 * Find the element recursively.
	 * 
	 * @param ele the start element
	 * @param finder function or selector to find the target elements
	 * 		         function signature is function(element)
	 * @param deep the max depth of recursion
	 */
	$.commons.upRecursionFind = function(ele, finder, depth) {
		if(ele && finder){
	        depth = depth || 3;

	        var result, temp = $(ele), count = 0;

	        while(!result && temp && temp.parent() && count < depth){
	            if(typeof finder == "function") {
	                result = finder(temp.parent());
	            } else if(typeof finder == "string") {
	                result = temp.parent().find(finder);
	            }
	            temp = temp.parent();
	            count++;
	        }

	        return result;
	    }
	};

	/**
	 * Check if one character is half-width.
	 * 
	 * @param c the checked character
	 */
	$.commons.isHalfWidthChar = function(c) {
		var flag = false;
		var temp = c.charCodeAt(0);
	    if (temp >= 0 && temp <= 254) {
	        //full-width characters in 0-255
	        if(!(temp == 162
	            || temp == 163
	            || temp == 167
	            || temp == 168
	            || temp == 171
	            || temp == 172
	            || temp == 175
	            || temp == 176
	            || temp == 177
	            || temp == 180
	            || temp == 181
	            || temp == 182
	            || temp == 183
	            || temp == 184
	            || temp == 187
	            || temp == 215
	            || temp == 247)){
	        	flag = true;
	        }
	    // Japanese half-width characters
	    } else if (temp >= 65377 && temp <= 65439 && temp != 65381) {
	        flag = true;
	    }

	    return flag;
	};

	/**
	 * Check if one character is full-width.
	 * 
	 * @param c the checked character
	 */
	$.commons.isFullWidthChar = function(c){
		return !$.commons.isHalfWidthChar(c);
	};

	/**
	 * Check if one string contains half-width character.
	 * 
	 * @param c the checked string
	 */
	$.commons.isContainHalfWidthChar = function(str) {
		var flag = false;
		for (var i = 0; i < str.length; i++) {
	        if($.commons.isHalfWidthChar(str.charAt(i))){
	        	flag = true;
	        	break;
	        }
		}
		return flag;
	};

	/**
	 * Check if one string contains full-width character.
	 * 
	 * @param c the checked string
	 */
	$.commons.isContainFullWidthChar = function(str) {
		var flag = false;

		for (var i = 0; i < str.length; i++) {
	        if($.commons.isFullWidthChar(str.charAt(i))){
	        	flag = true;
	        	break;
	        }
		}
		return flag;
	};

	/**
	 * Retrieve the outherHtml of one DOM element.
	 * 
	 * @param e the DOM element
	 */
	$.commons.outerHtml = function(e) {
	    var outerHTML = "",
	    	tempDiv = $('<div></div>');

		$(e).before(tempDiv);
		tempDiv.prepend(e);

		outerHTML = tempDiv.html();

		tempDiv.after(e);
		tempDiv.remove();

		return outerHTML;
	};

	/**
	 * Clone the element's events.
	 * 
	 * @param src
	 * @param dest
	 */
	$.commons.cloneCopyEvent = function(src, dest) {
	    var events = src.data('events');
	    if (events) {
	        for (var eventType in events ) {
	            for ( var idx in events[eventType] ) {
	               dest[eventType](events[eventType][idx].handler);
	            }
	        }
	    }
	};
	
	/**
	 * Escape the stardard XML character, eg. <, ", >.
	 * 
	 * @param value
	 * @returns
	 */
	$.commons.escapeXml = function(value) {
		if (value) {
			value = value.replace(/</g, "&#60;").replace(/>/g, "&#62;")
					     .replace(/\"/g, "&#34;").replace(/'/g, "&#39;");
		}
		return value;
	};
	
	/**
	 * Unescape the stardard XML character, eg. <, ", >.
	 * 
	 * @param value
	 * @returns
	 */
	$.commons.unescapeXml = function(value) {
		if (value) {
			value = value.replace(/\&#60;/g, "<").replace(/\&#62;/g, ">")
					     .replace(/\&#34;/g, "\"").replace(/\&#39;/g, "'")
					     .replace(/\&lt;/g, "<").replace(/\&gt/g, ">");
		}
		return value;
	};
	
	$.commons.addTimespan = function(url) {
		var timespan = (new Date()).valueOf();
		var hasParameter = url.indexOf('?') != -1;
		var seperator = hasParameter ? '&' : '?';
		return url + seperator + "timespan=" + timespan;
	};
	
	/**
	 * Compute the bytes number of the given string(UTF-8 or UTF-16).
	 * UTF-8(http://zh.wikipedia.org/wiki/UTF-8">http://zh.wikipedia.org/wiki/UTF-8):
	 * 
	 * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             1 byte
	 * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             2 bytes
	 * 000800 - 00D7FF 
	   00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           3 bytes
	 * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  4 bytes
	 * 
	 * remark: Thera isn't any char between D800 and DFFF in Unicode charset.
	 * 
	 * UTF-16(http://zh.wikipedia.org/wiki/UTF-16">http://zh.wikipedia.org/wiki/UTF-16):
	 * 000000 - 00FFFF  2 bytes
	 * 010000 - 10FFFF  4 bytes
	 * 
	 * @param  {String} str 
	 * @param  {String} charset utf-8, utf-16
	 * @return {Number}
	 */
	$.commons.sizeof = function(str, charset){
	    var total = 0,
	        charCode,
	        i,
	        len;
	    charset = charset ? charset.toLowerCase() : '';
	    if(charset === 'utf-16' || charset === 'utf16'){
	        for(i = 0, len = str.length; i < len; i++){
	            charCode = str.charCodeAt(i);
	            if(charCode <= 0xffff){
	                total += 2;
	            }else{
	                total += 4;
	            }
	        }
	    }else{
	        for(i = 0, len = str.length; i < len; i++){
	            charCode = str.charCodeAt(i);
	            if(charCode <= 0x007f) {
	                total += 1;
	            }else if(charCode <= 0x07ff){
	                total += 2;
	            }else if(charCode <= 0xffff){
	                total += 3;
	            }else{
	                total += 4;
	            }
	        }
	    }
	    return total;
	};
})(jQuery);