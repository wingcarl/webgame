
var nowLevelNo = 1;
var gamesize = 0;
var levelCount = 0;
var lastLevelNo = "";
var compArray = [];
var packComp = [];
var flowjson;
var allLevels;
var packid = 0;
var level2Array = [];
var nowPackNo = -1;
var TScore = 0;
var cj = ["http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6Le1LxOkNbkEiaJ2Qto4PdGJlUwFn3lomrEBiar0Nsw7XZicia536WE0aFXw/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6L8e1Qricym0CAukdMf3RX0V79pQiao2B0AFPXYHtvHwuzfp2YaC9zNOOg/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LHnxXSPibzXpKiaI2SzYPygiaMvw25QFickfx4mlibfGpg7ibK1gHP0J55wwQ/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LWVrmHZdIrQ9nmUmp4j9Wibh7Eu9zKEnk2ibbtsLeKCJOQrwm6Up27nPA/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LibV3Bh7KHsAhkWrhrbAlT9xx95xQNWOfo6DwcibVic6ffb2iazf89Xu88g/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LpicRBEJNxd4sW3EIfUvFfMiagfcOErLr4n5ibGLanlR4PyLyDzapyBNibQ/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LfaHLIZkxf6jiaRtvCIWQ6XdU2pjR1HeZpibn1gTHiclH72JlwrUPYvUdQ/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6L7xQDlzc6g2GvkbK7ZcMx2ow4iav1e81kWJKNQAoAExDSibnqCVeaD27g/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6L6V5icTibqhylaER7laJhLiaibzEdFK6MhO9lDvuYuic6V0YFADclibRtHKUg/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6L30xntwH9po0LOvwnhbvGb49MFJNSZaIpASNW70rvTYtkbSPaXO6Mog/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6L8iaFXjaX8lkrvy5OvZAznMeGgsQmiadwk3GWnksic0M0pvaCU7xoibG5cw/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LgtNYm0ohe8uSS7T8XWM1CUAibuElPUPpz3RuUzYf4N8OfQCRm6VKgeg/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LOrzmKCgFqIGnGMelMKwFCRltIMHUwOEweZ6KJLCYRTLWGdJRqTsI4g/0", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6L3sFSrrntllfAZCFxgoPSIMj0qyHxvHtpCeCSDcGORY7Gp8LloIl2PA/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6La73m5bZCJedEzTQ4UmIrDjojwyoAoDea56iaic3GVYs24gb8khRIQY4g/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LNUEpCbBookjOKw0hkSiaGgLa5SiaYiaTFgsu66Tic7lL9NmxQSStLsmslQ/640",  "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LaV00XLYvobicNZ1CFQibyIXZWibmpAZraImQkMZyCjZiciazeXS9AmaoYxA/640",  "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LxU2y6PcMgwwonZ89HdzgALNYIS4vJ928Vh5R5G0h8d96n8ySk8PwwQ/640"];
var cj1 = ["http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LSj8O8e87QfyiaLMuicWhDqYeDZ4ayiakdCLQrAadX5br3yBQLJbiaicXyEQ/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LIPmVb2IuRdnjy0W6VzwIRr1nhob3wjNvgfjUj2QVbgEff1LGgC5NgA/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LFhhRCljoPlxC90XSSlZSX7b9bITcnA6HUqeV2ia5pyNxVwITIgufhug/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LACUFJG7iax4I2pLOibjMf8dABaYOYJUmpNRpibiblwDXsZ6SqvgHLCuw3w/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6Lia97vGhoOibPxc2U9bsHSE67QPRBgokDLR3aGVNGRPCVBYQbNBbLAjxA/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LQcSCp5d8OkEl3wuwvliaTpg7WqWdLtz40kN21plWR8ge3PojNiatiaeCA/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6Lrb5dGicJKgeUia6fjAXqmCTj61CpWTGZGEicuw6VlIrDz8SkGLJQFa8lg/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicYibjAb5y1cGgqkWfogJW6LJic6nuAnic1QpiaKNn7iaVRu0cBvDL6H4swkxdF8jys9cs70nhpZKQMx8g/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6snMRQTdUicIvulTMcQh9FJlWXc1oicjLW4kbRZnr9VGAtMhibGRc2bAHTsg/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6snuLzSCI6yG4Bc0tgcLqruNxROkFuVSPZC6Kiaojm0LRPfTPFIeYzaeyw/0", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6snFnYEzmpugJx6nVpuwnpsmQrFWyYHNbpiaSe8OibNwXJANtpKJOuh6v1w/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6snl0OZLq41fxmtHeMTvz86VRVWPqyjWIddhiadYnpSlSmWJ0icdKgnfPmQ/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6snQibaicycZRSu5HYFkUMicK0iaib51FbWNuKTzqyucsNMSeGeYIH3vWqXtHg/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6snWDg8GnpwlMXStHNFCTe2aibNmEStXu5Ym7RMia3xlEmYfL4RnpI2Jheg/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6sniaoFqbN1MBXO8PJVZnD8do1QVD777bCJDk5ibCmyLzcbO3icTsqLWw2vQ/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6sn9XKDSMe49l6AHiayJpaJXADaiaXsiaicvrFu43GAd8KC1lfJDdibMwKUV3A/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6sn0YOy2vlZKtrTzoY0wHFo4Lom2iaANN0P1fb9QBj442QtI9RCmBEOyibQ/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6sn9bJ1lW73ficBOruLAgQyF8B9k4nlcZAOO3v2JoQwTM3Fh05jpznfwQw/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6snkGMprWUsr9CFxxeKOXmV68quOU25tlqTVHurmouXDibBffHbgK4kEgQ/640", "http://mmbiz.qpic.cn/mmbiz/kG4NuD28mGicBSIoSZcFpCN6L5VrNb6snEljBeJuzwRRARGbeicaDiaI9sKjV0picgKhzKuFEfSKxyxFKmymmqkMJQ/640"];
var gameElements = new Array();
var isimgloaded = false;
var gameTimer;
var count = 360;//360长度
var totalsec = 30;
var levelScore = totalsec * 10;
var step = count / totalsec;
var arrayLeft = [92, 91.6, 91.2, 90.8, 90.4, 90, 89.6, 89.2, 88.8, 88.2, 87.8];
var arrayTop = [234.0, 234.4, 234.8, 235.2, 235.6, 236, 236.4, 236.6, 237.0, 237.4, 238.8];
//var arrayLeft = [112, 111.6, 111.2, 110.8, 110.4, 110, 109.6, 109.2, 108.8, 108.2, 107.8];
var scorearr = [0, (totalsec - 12) * 190, (totalsec - 7) * 190, (totalsec - 5) * 190];
var shake1;
var shake2;
var shake3;
var shake4;
var iswechat = (window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger');
var level = "";
function playgame(callback) {
    $("#maskloading").show();
    $("#game_screen").show();
    $.getJSON("data/new_levels.json", function (data) {
        if (data && data[0].length > 0 && data[0][1].levels.length > 0) {
            flowjson = data;
            gamesize = flowjson[0][1].size;
            level2Array = [];
            levelCount = 0;
            for (var i = 0; i < flowjson[0][1].levels.length; i++) {
                level2Array.push(flowjson[0][1].levels[i]);
                levelCount = levelCount + 1;
            }
            $.isFunction(callback) && callback();
            if (!isimgloaded) {
                $.loadImages(cj1, function (loadElements) {
                    isimgloaded = true;
                    var loadElementslength = loadElements.length;
                    if (loadElementslength == cj1.length) {
                        for (var i = 0; i < loadElementslength; i += 4) {
                            gameElements.push([loadElements[i], loadElements[i + 1], loadElements[i + 2], loadElements[i + 3]]);
                        }
                    }
                    mkGame(gamesize, level2Arrayf(level2Array[nowLevelNo - 1]), reline);
                    Sforward.play();
                    $("#maskloading").hide();
                });
            } else {
                mkGame(gamesize, level2Arrayf(level2Array[nowLevelNo - 1]), reline);
                Sforward.play();
                $("#maskloading").hide();
            }
        }
        else {
            $("#maskloading").hide();
            alert('加载失败，请重试！');
        }
    });
}

function gametick() {
    count = count - step;
    $("#timebar").css({ "width": count });
    if (count <= 0) {
        gameover();
       
    }
}
//终止计时器
function gameover() {
    window.scrollTo(0, 0);
    if (gameTimer) window.clearInterval(gameTimer);
    $("#loading_div").hide();
    $("#content").show();
    $("#maskloading").fadeTo(800, 0.8, function () {
        $("#Logo2").show();
        $("#Logo2").animate({ "left": 90 }, 100, '', function () {
            shake3 = setInterval(function () {
                $("#Logo2").css({ "left": arrayLeft[parseInt(11 * Math.random())], "top": arrayTop[parseInt(11 * Math.random())] });
            }, 50);
            $("#Logo3").show();
            $("#Logo3").animate({ "left": 95 }, 100, '', function () {
                shake4 = setInterval(function () {
                    $("#Logo3").css({ "left": arrayLeft[parseInt(11 * Math.random())], "top": arrayTop[parseInt(11 * Math.random())] });
                }, 50);
                $('#Logo1').show();
                $('#Logo1').addClass('scale').animate({ 'top': '236px', 'left': '90px' }, 1000, '', function () {
                    setTimeout(function () {
                        if (shake3) window.clearInterval(shake3);
                        if (shake4) window.clearInterval(shake4);
                        $("#maskloading").hide();
                        $("#Logo2").hide();
                        $("#Logo3").hide();
                        $('#Logo1').hide();
                        $('#content').hide();
                        $("#p1_1").hide();
                        $("#p1_2").hide();
                        $('#p1_3').hide();
                        $('#p1_4').show();
                        $("#Logo2").css({ "left": "-295px" });
                        $("#Logo3").css({ "left": "435px" });
                        calculate();
                    }, 500);
                });
            });
        });
    });
    page = 5;
    TScore = 0;
    nowLevelNo = 1;
}
function calculate() {
    var point = document.getElementById("score").innerHTML;
    level = document.getElementById("levelName").innerHTML;
    $("#result_score").html(point);
    do_submitScore(parseInt(point));
}
//根据NO来开始游戏
function mkGameByNo() {
    showScore();
    //setCookie("lastLevelNo", nowLevelNo);
    if (nowLevelNo > levelCount - 1) {
        //setCookie("lastLevelNo", 1);
        alert("恭喜您，完成了全部关卡！");
        if (gameTimer) window.clearInterval(gameTimer);
        //playgame();
        $("#p1_1").hide();
        document.getElementById("main").style.overflow = "hidden";
        $("#p1_2").hide();
        $('#p1_3').hide();
        $('#p1_4').show();
        page = 5;
        calculate();
    }
    else {
        reline = 0;
        nowLevelNo = parseInt(nowLevelNo) + 1;
        $("#levelName").html(nowLevelNo);
        mkGame(gamesize, level2Arrayf(level2Array[nowLevelNo - 1]), reline);
    }
}
function level2Arrayf(levelstring) {
    var levelSplit = levelstring.split(";");
    var levelArray = [];
    for (var i = 0; i < levelSplit.length; i++) {
        levelArray[i] = levelSplit[i].split(",");
    }
    return levelArray;
}

function showScore() {
    if (levelScore >= 0)
        TScore += levelScore;
    $("#score").html(TScore);
}



function make_game1() {
    //pack_1_open = localStorage["pack_1_open"] || getCookie("pack_1_open") || 0;
    allLevels = $("#levels");
    var mainSLeft = $(".mainS")[0].offsetLeft;

    $.getJSON("data/new_levels.json", function (data) {
        flowjson = data;
        data.forEach(function (pack, packid) {
            //packComp.push(0);
            $("#pack_main").append("<a data-packid='" + packid + "' style='color:" + pack[0].color + "'>" +
				pack[0].name +
				"<h5></h5>" +
				"<span>" + pack[0].desc + "</span>" +
				"</a>"
			);
        });
    });
}