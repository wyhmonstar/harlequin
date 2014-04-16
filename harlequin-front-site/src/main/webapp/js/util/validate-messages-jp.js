/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: JA (Japanese; 日本語)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: $.format("{1}必須項目です。"),
		remote: "このフィールドを修正してください。",
		email: "半角英数字、ハイフン、アンダーバー、ピリオド以外は使用出来ません。",
		url: "有効なURLを入力してください。",
		date: "有効な日付を入力してください。",
		dateISO: "有効な日付（ISO）を入力してください。",
		number: "有効な数字を入力してください。",
		digits: "数字以外は使用出来ません。",
		creditcard: "有効なクレジットカード番号を入力してください。",
		equalTo: "同じ値をもう一度入力してください。",
		accept: "有効な拡張子を含む値を入力してください。",
		maxlength: $.format("{0} 以内で入力して下さい。"),
		minlength: $.format("{0} 以上で入力して下さい。"),
		rangelength: $.format("{0}文字以上、{1}文字以内で入力してください。"),
		range: $.format("{0} から {1} までの値を入力してください。"),
		max: $.format("{0} 以下の値を入力してください。"),
		min: $.format("{0} 以上の値を入力してください。"),
		alnum : "半角英数字",
		fullWidth : "全角カナ以外は使用出来ません。",
	});
}(jQuery));

