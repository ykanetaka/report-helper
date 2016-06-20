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
    var body = "<p><h3>◆テーマ</h3><h3>◆担当者名</h3></p><hr><p><h3>◆今日の目標</h3><h3>◆業務内容</h3>（時系列で）<h3>◆今日の成果</h3><h3>◆気づき・疑問点</h3><h3>◆課題</h3></p><hr><p><h3>◆明日の予定・目標</h3></p>"
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
    var body = "<p><h3>◆今週の予定</h3><h3>◆今週の目標</h3></p><hr><p><h3>◆業務内容・結果</h3><h4>（月）</h4><h4>（火）</h4><h4>（水）</h4><h4>（木）</h4><h4>（金）</h4><h3>◆問題点・反省点</h3><h3>◆課題</h3></p><hr><p><h3>◆来週の予定・目標</h3></p>"
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
    var body = "<p><h3>◆日時</h3><h3>◆場所</h3><h3>◆テーマ</h3><h3>◆講師</h3><h3>◆受講目的</h3></p><hr><p><h3>◆講義内容</h3><h3>◆所感</h3><h3>◆配布資料</h3><h3>◆備考</h3></p>"
    chrome.tabs.sendMessage(
        tabId,
        {
            title: title,
            body: body
        },
        function(response) {}
    )
});
