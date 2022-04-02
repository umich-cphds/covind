window.addEventListener('message', function (e) {
    var frame = document.getElementById('snapshot');
    frame.setAttribute('height', e.data + 20 + 'px')
});

window.addEventListener('resize', function (e) {
    if (document.getElementById('national'))
    {
        iFrame = document.getElementById('snapshot');
        iFrame.contentWindow.postMessage("resize", "*");
    }
});

