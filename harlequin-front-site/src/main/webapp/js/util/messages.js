/**
 * 
 */
(function(){
	if (!$.MHB) {
		throw "The namespace[$.MHB] hasn't been declared";
	}
	if ($.MHB.msg) {
		throw "The namespace[$.MHB] has been declared";
	}
	$.MHB.msg = {
		ROOM_NOT_EXIST : "部屋が存在しません。",
		NOT_SELECT_USER : "ユーザを選んでください。",
		NOT_SELECT_CHILD : "お子さまを選んでください。",
		ROOM_NOT_SELECT_CHILD : "子ども部屋に子どもを登録する必要があります",
		ROOM_APPLY_AGREE_CONFIRM : "チェックしたメンバーを承認してもよろしいですか？",
		ROOM_APPLY_REJECT_CONFIRM : "チェックしたメンバーを拒否してもよろしいですか？",
		ROOM_APPLY_CANCEL_CONFIRM : "部屋の申請を中止してよろしいですか？",
		ROOM_APPLY_LIST_CANCEL_CONFIRM : "チェックした部屋の申請を中止してよろしいですか？",
		ROOM_MANAGE_EDIT_CONFIRM : "登録情報を更新してよろしいですか？",
		ROOM_MANAGE_DELETE_MEMBER_CONFIRM : "メンバーを削除してよろしいですか？",
		ROOM_MANAGE_DELETE_ROOM_CONFIRM : "子供部屋を削除してよろしいですか？",
		ROOM_MANAGE_UPDATE_ROOM_CONFIRM : "子供部屋色を変更してよろしいですか？",
		ROOM_MANAGE_DELETE_ROOM_ALERT : "子供部屋「いちろう」を削除しました。",
		ROOM_MANAGE_EXIT_ROOM_CONFIRM : "子供部屋を抜けてもよろしいですか？",
		ROOM_CREATE_CONFIRM : "子供部屋の作成を行いますか？",
		ROOM_CREATE_OVER_TOP : "子供部屋の作成が完了しました。",
		CHILD_REGISTER_CONFIRM : "お子さま登録を行いますか？",
		CHILD_REGISTER_OVER_BACK : "お子さまの登録が完了しました。",
		CHILD_POST_CONFIRM : "投稿してよろしいですか？",
		CHILD_POST_ALERT : "投稿しました。",
		CHILD_PROFILE_EDIT_CONFIRM : "入力した情報で編集してもよろしいですか？",
		USER_LOGIN_PASSWORD_INCORRECT: "ユーザーIDまたは、パスワードが存在していません。",
		USER_REGISTER_CONFIRM : "会員登録を行いますか？",
		USER_FORGET_PASSWORD_MAIL_SUCESS : "パスワード変更用のURLを送信いたしました。",
		USER_FORGET_PASSWORD_MAIL_NOT_EXITS : "該当メールアドレスが存在しません。",
		USER_EDIT_PASSWORD_MAIL : "パスワードを変更してよろしいですか？",
		USER_PROFILE_EDIT_CONFIRM : "ユーザ情報を更新してよろしいですか？",
		USER_PASSWORD_EDIT_CONFIRM : "パスワードを変更してよろしいですか？",
		USER_LOGOUT_CONFIRM : "ログアウトしてもよろしいですか？",
		USER_EXIT_CONFIRM : "本当に退会してもよろしいですか？一度退会したデータは元に戻せません。",
		USER_EXIT_ALERT : "管理中の子供部屋を削除しないと退会出来ません。",
		SEARCH_RESULT_ZERO_ALERT : "検索結果が0件です。",
		OLD_PASS_ERROR_ALERT : "古いパスワードが正しくありません。",
		UPDATE_PASS_SUCCESS : "パスワードを変更しました。",
		AJAX_SUCCESS : "success",
		BIRTHDAY_BEFORE : "出産前は未来の日付を入力してください。",
		BIRTHDAY_AFTER : "出産後は過去の日付を入力してください。",
		
		/******************jquery.valitate.msg********************/
		STAMP_NOT_EXIT_ALERT : "スタンプを選択してください。",
		VACC_NOT_EXIT_ALERT : "予防接種種類必須項目です。",
		DATE_NOT_EXIT_ALERT : "接種日必須項目です。",
		CHILD_DELETE_SUCCESS : "削除しました。",
		CHILD_DELETE_FAIL : "削除できません。",
		CHILD_DELETE_CONFIRM : "削除してもよろしいですか？",
		CHILD_APPLYED_ALERT : "該当ROOMもう申請しました！",
		OPERATION_FAIL : "操作失敗しました！",
		VACCINTION_DELETE_CHECK : "入力済みの最後の回しか削除出来ません。",
		VACCINTION_UPDATE_MESSAGE1 : "直前の回の推奨期間より短くなります、直後の回の推奨期間より短くなりますがよろしいですか？",
		VACCINTION_UPDATE_MESSAGE2 : "直前の回の推奨期間より短くなりますがよろしいですか？",
		VACCINTION_UPDATE_MESSAGE3 : "直後の回の推奨期間より短くなりますがよろしいですか？",
	};
})();