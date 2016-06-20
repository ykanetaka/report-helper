chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        $("#content-title").val(request.title)
        $('#wysiwygTextarea_ifr').contents().find('#tinymce').html(request.body)
    }
)