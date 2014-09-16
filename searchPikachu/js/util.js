Date.prototype.format=function(format){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S":this.getMilliseconds()};if(/(y+)/.test(format)){format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))};for(var k in o){if(new RegExp("("+k+")").test(format)){format=format.replace(RegExp.$1,RegExp.$1.length==1?o[k]:("00"+o[k]).substr((""+o[k]).length))}};return format};
function ErroCode(code){

 switch(code){
	case "109":
		return "账号或密码错误";
	case "110":
		return "其他错误";
	case "111":
		return "该手机号码已被注册。";
	case "112":
		return "该账号不存在";
	case "113":
		return "用户被禁止登录";
	case "114":
		return "包含敏感词";
	case "116":
		return "密码错误";
	case "OK":
		return "OK";
  }
}

function incrCounter(host,type,id, val, func){
	var counterId=type+":"+id; 
	$.post(host+'/api/counter',{counterId:counterId,value:val},func);
}

function jsonDownloadInfo(value){
	var type;
	if (value.artiType==10){
		type="app";
	}else if (value.artiType==11){
		type="subject";
	}else if (value.artiType==15){
		type="video";
	}else{
		type="article"
	}
	
	var appInfo=[{appId:value.appArticleId,appUrl:'http://m.1758.com/game/app/'+value.appArticleId,appName:value.appName,
		appIconUrl:value.appIconUrl,appApkUrl:value.appAndroidUrl,
		appVersion:value.appReleaseVersion,appSize:value.appSize}];
	
	return encodeURIComponent(JSON.stringify({resourceId:value.id,type:type,appInfo:appInfo}));
}

function needLogin(mess){
	alert("需要下载客户端后登录才可以"+mess);
}

function onScroll(ele){
	  var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||0;
	  var windowHeight=document.documentElement.clientHeight||document.body.clientHeight||0;
	  var bottom=$('#'+ele+'_list').offset().top+$('#'+ele+'_list').height();
	  //console.log("scrollTop:"+scrollTop+"offset:"+$("#${prefix}_list").offset().top+"#${prefix}_list:"+$("#${prefix}_list").height()+"bottom:"+bottom);
	  if (scrollTop>=(bottom-windowHeight)){
	     if (!$('#'+ele+'_more').hasClass("loading")){
	    	 console.log("loading........");
	    	 $('#'+ele+'_more').trigger("click");
	     }
	  }
}

function getImageSize(oImage, originUrl){
	
	var image=new Image();
	image.src=oImage.src;
	if (image.width>image.height){
		return;
	}else{
		oImage.src=originUrl+"?imageView2/1/w/100/h/60";
	}
}

function tongjiPage(page,tab){
	_hmt.push(['_trackEvent', 'page', page, tab]);
}

function choujiang(state){
	//要加判断该游戏抽过并且领过奖的不谈刮刮卡
	var url='http://m.1758.com/game/lottery/draw?appId='+state;
	try{
	  android_tw_popup.jumpPopup('感谢下载(请登录QQ或微博刮开此卡)',url,'reload',state);
	}catch (exp){
		location.href=url+'&tp=outer';
	}
}

function more(gamename){
    _hmt.push(['_trackEvent', 'html5', 'forward', '更多游戏_'+gamename]);
	location.href='http://www.1758.com/hlmy/gzh.htm';

	//location.href='http://www.1758.com/hlmy/games.htm?r=yanse';
}


function shareToWxFriendsJS(){
	var data='{"imgUrl":"'+window.shareData.imgUrl+'","timeLineLink":"'+shareData.timeLineLink+'","tTitle":"'+shareData.tTitle+'","tContent":"'+shareData.tContent+'"}';
	android_tw_system.shareToWxFriends(data);
	//android_tw_system.toast("分享成功");
}

function shareToWxTimelineJS(){
	var data='{"imgUrl":"'+window.shareData.imgUrl+'","timeLineLink":"'+window.shareData.timeLineLink+'","tTitle":"'+window.shareData.tTitle+'","tContent":"'+shareData.tContent+'"}';
	android_tw_system.shareToWxTimeline(data);
	//android_tw_system.toast("分享成功");
}

function down(url,label){
			_hmt.push(['_trackEvent', 'games', 'download', label]);
			//location.href='http://ti50.3g.qq.com/open/s?aid=jumpurl&url='+url;
			location.href='http://dd.myapp.com/16891/DFF66431F9288CCCACD497294E8924C4.apk';
}

function connectWebViewJavascriptBridge(callback) {
		if (window.WebViewJavascriptBridge) {
			callback(WebViewJavascriptBridge)
		} else {
			document.addEventListener('WebViewJavascriptBridgeReady', function() {
			callback(WebViewJavascriptBridge)
			}, false)
		}
	}

connectWebViewJavascriptBridge(function(bridge) {
	/* Init your app here */
	bridge.init(function(message, responseCallback) {
	if (responseCallback) {
	responseCallback("")
	}
	});
	window.ios=bridge;
	
	 bridge.registerHandler('shareToWxJS', function(data, responseCallback) {
		if (responseCallback){
			responseCallback(window.shareData);
		}
		
	 });
	
	
	});
	

	//获取URL中的参数
	var QueryString = {
	    /**
	     * 取得查询字符串参数
	     * 例：假设查询字符串是?q=javascript&num=10
	     * var args=getQueryStringArgs();
	     * alert(args["q"]);
	     * alert(args["num"]);
	     */
	    getQueryStringArgs: function () {
	        //取得查询字符串并去掉开头的问号
	        var qs = (location.search.length > 0 ? location.search.substring(1) : "");
	        //保存数据的对象
	        var args = {};
	        //取得每一项
	        var items = qs.split("&");
	        var item = null,
	            name = null,
	            value = null;
	        //逐个将每一项添加到args对象中
	        for (var i = 0; i < items.length; i++) {
	            item = items[i].split("=");
	            name = decodeURIComponent(item[0]);
	            value = decodeURIComponent(item[1]);
	            args[name] = value;
	        }
	        return args;
	    },
	    /**
	     * 对getQueryStringArgs()方法进行进一步封装，简化调用
	     */
	    getParameter: function (keyValue) {
	        var args = this.getQueryStringArgs();
	        if (args[keyValue] != undefined) {
	            return args[keyValue];
	        } else {
	            return "";
	        }
	    }
		};


		
function loadGame(gamejs){
 var hm = document.createElement("script");
		hm.src = gamejs;
		var s = document.getElementsByTagName("script")[0]; 
		s.parentNode.insertBefore(hm, s);
}

function wxAddScore(score,appId,appName){
	if(navigator.userAgent.indexOf("MicroMessenger") >= 0 && document.URL.indexOf("wx.1758.com")>=0){		
		$.post("http://wx.1758.com/game/weixin/game/addscore",
				{
					appId:appId,
					score:score,
					appName:appName
				},
				function(data){}
				);
		
	}
}

function wxLogin(appId,appName,gamejs){
	if(navigator.userAgent.indexOf("MicroMessenger") >= 0 && document.URL.indexOf("wx.1758.com")>=0){
	        
			window.url=document.URL;
			_hmt.push(['_trackEvent', 'danao', 'oauth', '打开_'+appName]);
				
			$.post(
				"http://wx.1758.com/game/weixin/iflogin",
				function(data){
				 
					window.state=QueryString.getParameter('state');
					window.from=QueryString.getParameter('from');
					var secondLogin=QueryString.getParameter('secondLogin');
					if(data.code == 0){
						if(secondLogin != "cancel"){
							$.post("http://wx.1758.com/game/weixin/user/login",{
								gameUrl:url
							},
							function(data2){
								try{
								_hmt.push(['_trackEvent', 'danao', 'oauth', '请求授权_'+appName]);	
								window.location.href=data2.redirectUrl;
								}catch (exp){}
							});
						}
					}else{
						_hmt.push(['_trackEvent', 'danao', 'oauth', '授权完成_'+appName]);
						
						window.userId=data.userId;
						window.shareData.timeLineLink = window.shareData.timeLineLink+"?state="+window.userId;
						
						if(state.length > 0){
							$.post("http://wx.1758.com/game/weixin/postlogin",
									{
									state:state,
									from:from,
									appId:appId
									},
									function(data){
							});
						}
					}
					
					loadGame(gamejs);
				}
			);
			
	}else{
		loadGame(gamejs);
	}
}
