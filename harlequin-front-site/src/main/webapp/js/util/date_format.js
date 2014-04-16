	Date.prototype.format = function(format) {
	var weeks = ["日", "月", "火", "水", "木", "金", "土"];
	var o = {
				"M+" : this.getMonth() + 1, //month
				"d+" : this.getDate(), //day
				"h+" : this.getHours(), //hour
				"m+" : this.getMinutes(), //minute
				"s+" : this.getSeconds(), //second
				"q+" : Math.floor((this.getMonth() + 3) / 3), //quarter
				"S" : this.getMilliseconds(), //millisecond
				"E" : weeks[this.getDay()]
			};
		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1,(this.getFullYear()+"").substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("("+ k +")").test(format)) {
				format = format.replace(RegExp.$1 , RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		
		return format;
	};

	Date.formatDate = function(dateStr) {
		var date = new Date(dateStr);
		return date.format("yyyy年MM月dd日");
	};
	
	Date.formatDate1 = function(dateStr) {
		var date = new Date(dateStr);
		return date.format("yyyy/MM/dd hh:mm");
	};
	
	
	Date.formatDate2 = function(dateStr) {
		var date = new Date(dateStr);
		return date.format("yyyy-MM-dd");
	};


	Date.formatTime = function(dateStr) {
		var date = new Date(dateStr);
		return date.format("hh:mm");
	};
	
	Date.format = function(dateStr,formatStr) {
		var date = new Date(dateStr);
		return date.format(formatStr);
	};