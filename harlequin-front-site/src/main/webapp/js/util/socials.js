/**
 * The social web sites interfaces, eg. facebook, twitter, mixi.
 * 
 * @author DongYing
 */
(function($){
	$(function(){
		$.social = {};
		
		/**
		 * Facebook reference: https://developers.facebook.com/docs/facebook-login/login-flow-for-web/
		 */
		$.social.fb = {
		    opts: { 
		    	// TODO: 
		    },
			init: function(opts) {
				// TODO:
				
			},
			login: function(appId, callbackUrl) {
				// TODO:
				
				
//				FB.init({
//					appId: '217791971762022',
//				    status :  true ,
//				    cookie :  true ,
//				    xfbml :  true ,
//				    oauth :  true
//				});
//				
//				FB.login ( function(response){
//			        // the logic after login 
//			        if (response.authResponse) {
//			            FB.api('/me', function(response) {
//			            	var sex = 1;
//			            	if(response.gender == "male") {
//			            		sex = 0;
//			            	}
//			            	window.location.href = $.MHB.context + "/facebook/loginOrRegister?accId=" + response.id + "&accType=facebook&firstName=" + 
//			            		response.first_name + "&lastName=" + response.last_name + "&email=" + response.email + "&sex=" + sex;
//			            });
//				   } else {
//				     console.log('User cancelled login or did not fully authorize.');
//				   }
//			    },{scope:"email"});
				
			},
			
			sendMessage: function(message) {
				
				FB.init({
					appId: '217791971762022',
				    status :  true ,
				    cookie :  true ,
				    xfbml :  true ,
				    oauth :  true
				});
				
				FB.login(function(){
					 FB.api('/me/feed', 'post', {message: message});
				}, {scope: 'publish_actions'});
				return "success";
			},
			
			logout: function() {
				// TODO:
			}
		};
		
		/**
		 * Twitter reference: https://dev.twitter.com/docs/auth/implementing-sign-twitter
		 */
		$.social.tw = {
			opts: {
				
			},
			init: function(opts) {

			},
			login: function() {
				// use the default callback_url in twitter 
				$.ajax({
					type:"POST",
					url:$.MHB.context + "/twitter/getRequestToken",
					dataType:"json",
					success:function(data){
						location.href = "https://api.twitter.com/oauth/authenticate?oauth_token=" + data.requestToken;
					}
			   });
			},
			logout: function() {
				// TODO:
			}
		};
		
		/**
		 * Mixi Reference: http://developer.mixi.co.jp/en/connect/mixi_graph_api/api_auth/
		 */
		$.social.mx = {
			opts: {
			},
			init: function(opts) {
				// TODO:
			},
			login: function() {
				// TODO:
				$.ajax({
					type:"POST",
					url:$.MHB.context + "/mixi/mixiConfig",
					dataType:"json",
					success:function(data){
						var scope = data.scope.replace(/ /g,"%20");  // scope maybe includes spaces, so encode it
						var url = data.user_sign_url + "?client_id=" + data.consumer_key + "&response_type=code&display=touch&scope=" + scope;
						location.href = url;
						//showDialog(url);
					}
			   });
			},
			logout: function() {
				// TODO:
			}
		};
		
		$.social.fb.init(null);
		$.social.tw.init(null);
		$.social.mx.init(null);
		
		//check the account is or not exists
		function loginOrRegister(accId,accType){
			$.ajax({
				type:"POST",
				url:$.MHB.context + "/facebook/loginOrRegister",
				dataType:"json",
				data:{accId: accId, accType: accType},
				success:function(data){
					if(data.msg == "exist"){ // the account is exists
	            		window.location.href = $.MHB.context + "/top";
	            	}else if(data.msg == "not exist"){ //the account is not exist
	            		window.location.href = $.MHB.context + "/account/create/" + accType + "/" + accId;
	            	}else{  //maybe has a error
	            		alert("failed");
	            	};
				}
		   });
		};
		
		
		function showDialog(url) {
			 var w = 500;     //height
			 var h = 310;   //width
			 var t = (screen.height-h)/2; 
			 var l = (screen.width-w)/2; 
			 return window.open(url,"dialog","width=500,height=310,top="+t+",left="+l);
		}
		
		
	});
})(jQuery);