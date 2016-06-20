var tabId = 0;
chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    tabId = tabs[0].id
});

$(window).on("load", chrome.tabs.reload())

$("#dailyreport").on("click", function () {
    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth()>8 ? (dt.getMonth()+1) : "0" + (dt.getMonth()+1);
    var day = dt.getDate()>9 ? dt.getDate() : "0" + dt.getDate()  ;
    var title = year + "/" + month + "/" + day +" 日報"
    var body = "<p><h1>◆テーマ</h1><h1>◆担当者名</h1></p><hr><p><h1>◆今日の目標</h1><h1>◆業務内容</h1>（時系列で）<h1>◆今日の成果</h1><h1>◆気づき・疑問点</h1><h1>◆課題</h1></p><hr><p><h1>◆明日の予定・目標</h1></p>"
    chrome.tabs.sendMessage(
        tabId,
        {
            title: title,
            body: body
        },
        function(response) {}
    )
});

$("#weeklyreport").on("click", function () {
    var title = "【週報】"
    var body = "<p><h1>◆今週の予定</h1><h1>◆今週の目標</h1></p><hr><p><h1>◆業務内容・結果</h1><h2>（月）</h2><h2>（火）</h2><h2>（水）</h2><h2>（木）</h2><h2>（金）</h2><h1>◆問題点・反省点</h1><h1>◆課題</h1></p><hr><p><h1>◆来週の予定・目標</h1></p>"
    chrome.tabs.sendMessage(
        tabId,
        {
            title: title,
            body: body
        },
        function(response) {}
    )
});

$("#event").on("click", function () {
    var title = "【イベント】"
    var body = "<p><h1>◆日時</h1><h1>◆場所</h1><h1>◆テーマ</h1><h1>◆講師</h1><h1>◆受講目的</h1></p><hr><p><h1>◆講義内容</h1><h1>◆所感</h1><h1>◆配布資料</h1><h1>◆備考</h1></p>"
    chrome.tabs.sendMessage(
        tabId,
        {
            title: title,
            body: body
        },
        function(response) {}
    )
});
