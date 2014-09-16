/*! 1 2014-07-30 */
var _config = {
    color: {
        allTime: 60,
        addTime: 0,
        lvMap: [2, 3, 3, 3, 5, 5, 5, 6, 6, 6]
    },
    pic: {
        isOpen: !1,
        allTime: 5,
        addTime: 0,
        lvMap: [2, 3, 5, 8, 8, 8, 8, 8, 8, 8]
    }
},
shareData = {
    imgUrl: "http://images.1758.com/images/wxicon.png",
    timeLineLink: "http://www.dwjia.cn/hlmy/yanse2.htm",
    tTitle: "看你有多色？",
    tContent: "找出所有色块中颜色不同的一块。分享朋友圈，找到身边的色魔"
}; !
function() {
    var a = $("#box"),
    b = {
        lv: $("#room .lv em"),
        time: $("#room .time"),
        start: $("#dialog .btn-restart img"),
        back: $("#dialog .btn-back"),
        share: $("#dialog .btn-share"),
        pause: $("#room .btn-pause img"),
        resume: $("#dialog .btn-resume"),
        dialog: $("#dialog"),
        d_content: $("#dialog .content"),
        d_pause: $("#dialog .pause"),
        d_gameover: $("#dialog .gameover")
    },
    c = {
        init: function(a, b, c) {
            this.type = a,
            this.api = API[a],
            this.config = _config[a],
            this.reset(),
            this.parent = c,
            this.el = b,
            this.renderUI(),
            this.inited || this.initEvent(),
            this.inited = !0,
            this.start()
        },
        renderUI: function() {
            var b = 90 == window.orientation || -90 == window.orientation,
            c = window.innerHeight < window.innerWidth ? window.innerHeight: window.innerWidth;
			// c = b ? window.innerHeight: window.innerWidth;
			//alert(c);
            c -= 20,
            c = Math.min(c, 480),
			//c = parseInt(parseInt(c/24)*24);
            a.width(c).height(c),
            this.el.show()
        },
        initEvent: function() {
            var d = "ontouchstart" in document.documentElement ? "touchend": "click",
            e = this;
            $(window).resize(function() {
                c.renderUI();
            }),
            a.on(d, "span",
            function() {
                var a = $(this).data("type");
                "a" == a && e.nextLv.call(e)
            }),
            b.pause.on(d, _.bind(this.pause, this)),
            b.resume.on(d, _.bind(this.resume, this)),
            b.start.on(d, _.bind(this.start, this)),
            b.back.on(d, _.bind(this.back, this)),
            b.share.on(d, _.bind(this.share, this))
        },
        start: function() {
            this.time > 5 && b.time.removeClass("danger"),
            b.dialog.hide(),
            this._pause = !1,
            this.lv = "undefined" != typeof this.lv ? this.lv + 1 : 0,
            this.lvMap = this.config.lvMap[this.lv] || _.last(this.config.lvMap),
            this.renderMap(),
            this.renderInfo(),
            this.timer || (this.timer = setInterval(_.bind(this.tick, this), 1e3))
        },
        share: function() {},
        resume: function() {
            b.dialog.hide(),
            this._pause = !1
        },
        pause: function() {
            this._pause = !0,
            b.d_content.hide(),
            b.d_pause.show(),
            b.dialog.show()
        },
        tick: function() {
            return this._pause ? void 0 : (this.time-=0.9, this.time < 6 && b.time.addClass("danger"), this.time < 0 ? void this.gameOver() : void b.time.text(parseInt(this.time)))
        },
        renderMap: function() {
            if (!this._pause) {
                var b = this.lvMap * this.lvMap,
                c = "",
                d = "lv" + this.lvMap;
                _(b).times(function() {
                    c += "<span></span>"
                }),
                a.attr("class", d).html(c),
                this.api.render(this.lvMap, this.lv)
            }
        },
        renderInfo: function() {
            //b.lv.text(this.lv + 1)
			b.lv.text(this.lv)
        },
        gameOver: function() {
//            try {
//                WeixinJSBridge.call("showOptionMenu")
//            } catch(c) {}
            var nownum = $(".lv").find("em").text();
            var maxnum = $("#maxnum").text();
            descContent = '我总共找出了'+nownum+'块五仁月饼！快来试试看你能揪出多少只五仁君！';
            $("#nownum").text(nownum);
            if(parseInt(maxnum)<parseInt(nownum))
            	$("#maxnum").text(nownum);
            var d = this.api.getGameOverText(this.lv);
            this.lastLv = this.lv,
            this.lastGameTxt = d.txt,
            this.lastGamePercent = d.percent,
            b.d_content.hide(),
            b.d_gameover.show().find("h3").text(this.lastGameTxt),
            a.find("span").fadeOut(1e3,
            function() {
                b.dialog.fadeIn()
            }),
            this._pause = !0,
            this.reset()
        },
        reset: function() {
            this.time = this.config.allTime,
            this.lv = -1
        },
        nextLv: function() {
        	if(this.time>0&&this.time<this.config.allTime){
        		this.time += this.config.addTime,
        		b.time.text(parseInt(this.time));
        	}
            this._pause || this.start()
        },
        back: function() {
            this._pause = !0,
            this.el.hide(),
            b.dialog.hide(),
            this.parent.render()
        }
    };
    window.Game = c
} (),
function(a) {
    
    var b = {
        index: $("#index"),
        room: $("#room"),
        loading: $("#loading"),
        dialog: $("#dialog"),
        play: $(".play-btn")
    },
    c = {
        init: function() {
            this.initEvent(),
            this.loading()
        },
        loading: function() {
            function a() {
                f++,
                f == e && c.render()
            }
            function b() {}
            if (_config.pic.isOpen) for (var d = ["assets/img/1.png", "assets/img/2.png", "assets/img/3.png", "assets/img/4.png", "assets/img/5.png", "assets/img/6.png", "assets/img/7.png", "assets/img/8.png", "assets/img/9.png", "assets/img/10.png", "assets/img/11.png", "assets/img/12.png", "assets/img/13.png", "assets/img/14.png", "assets/img/15.png", "assets/img/16.png", "assets/img/17.png", "assets/img/18.png"], e = d.length, f = 0, g = 0; e > g; g++) {
                var h = new Image;
                h.onload = a,
                h.src = d[g]
            } else c.render();
            document.addEventListener("WeixinJSBridgeReady",
            function() {
                WeixinJSBridge && (WeixinJSBridge.on("menu:share:appmessage",
                function() {
                    var a = Game.lastLv > 0 ? "我闯过" + (Game.lastLv + 1) + "关，击败" + Game.lastGamePercent + "%的人！我是【" + Game.lastGameTxt + "】！不服来战！": shareData.tTitle;
                    WeixinJSBridge.invoke("sendAppMessage", {
                        img_url: shareData.imgUrl,
                        link: shareData.timeLineLink,
                        desc: shareData.tContent,
                        title: a
                    },
                    b)
                }), WeixinJSBridge.on("menu:share:timeline",
                function() {
                    var a = Game.lastLv > 0 ? "我闯过" + (Game.lastLv + 1) + "关，击败" + Game.lastGamePercent + "%的人！我是【" + Game.lastGameTxt + "】！不服来战！": shareData.tTitle;
                    WeixinJSBridge.invoke("shareTimeline", {
                        img_url: shareData.imgUrl,
                        img_width: "640",
                        img_height: "640",
                        link: shareData.timeLineLink,
                        desc: shareData.tContent,
                        title: a
                    },
                    b)
                }))
            },
            !1)
        },
        render: function() {
            b.loading.hide(),
            b.index.show()
        },
        initEvent: function() {
            var a = "ontouchstart" in document.documentElement ? "touchstart": "click",
            c = this;
            b.play.on(a,
            function() {
                var a = $(this).data("type") || "color";
                b.index.hide(),
                Game.init(a, b.room, c)
            })
        }
    };
    c.init(),
    a.API = {}
} (window),
function() {
    var a = $("#box"),
    b = "span",
    c = $("#help p"),
    d = $("#help_color"),
    e = {
        lvT: ["瞎子", "色盲", "色郎", "色狼", "色鬼", "色魔", "超级色魔", "变态色魔", "孤独求色"],
        render: function(e, f) {
            this.lv = f,
            c.hide(),
            d.show();
            var g = _config.color.lvMap[f] || _.last(_config.color.lvMap);
            this.d = 15 * Math.max(9 - g, 1),
            this.d = f > 20 ? 10 : this.d,
            this.d = f > 40 ? 8 : this.d,
            this.d = f > 50 ? 5 : this.d;
            var picwr = pick_image;
            var h = Math.floor(Math.random() * e * e),
            i = this.getColor(255 - this.d),
            j = this.getLvColor(i[0]);
            var spannum = 0;
			var spanposx = 0;
			var spanposy = 0;
            a.find(b).each(function() {
				spannum ++;
				if(g){
					spanposx = parseInt(spannum % g);
					spanposy = parseInt((spannum-1) / g);
				}
                if(f < 2){
					var chose = arr[0];
				}else{
                    if(f > 7){
						var chose = arr2[Math.floor(Math.random()*arr2.length)];
					}else{
						var chose = arr1[Math.floor(Math.random()*arr1.length)];
					}
				}
                $(this).css("background-color", i[1]).data("type", "b").css({
                    "border-right": "1px solid #bfac73",
					"border-bottom": "1px solid #bfac73",
					"background": "url("+chose+") " + j[1],
                    "background-size": "cover",
					"filter":" alpha(opacity=0)"
                });
				//第一列
				if(spanposx == 1){
					$(this).css({
						"border-left": "1px solid #725e19"
					});
				}
				//第一排
				if(!spanposy){
					$(this).css({
						"border-top": "1px solid #725e19"
					});
				}
				//最后一列
				if(spanposx == 0){
					$(this).css({
						"border-right": "1px solid #725e19"
					});
				}
				//最后一行
				if(parseInt(spanposy+1) == g){
					$(this).css({
						"border-bottom": "1px solid #725e19"
					});
				}
            });
            a.find(b).eq(h).css("background-color", "rgba(0,0,0,0)").data("type", "a").css({
                "background": "url("+picwr+") " + j[1],
                "background-size": "cover",
				"filter":" alpha(opacity=0)"
            });
        },
        getColor: function(a) {
            var b = [Math.round(Math.random() * a), Math.round(Math.random() * a), Math.round(Math.random() * a)],
            c = "rgba(0,0,0,0)";
            return [b, c]
        },
        getLvColor: function(a) {
            var b = this.d,
            c = _.map(a,
            function(a) {
                return a + b + 10
            }),
            d = "rgba(0,0,0,0)";
            return [c, d]
        },
        getGameOverText: function(a) {
            var b = 15 > a ? 0 : Math.ceil((a - 15) / 5),
            c = this.lvT[b] || _.last(this.lvT),
            d = c + "lv" + (a + 1),
            e = 2 * a;
            return e = e > 90 ? 90 + .15 * a: e,
            e = Math.min(e, 100),
            {
                txt: d,
                percent: e
            }
        }
    };
    API.color = e
} ();