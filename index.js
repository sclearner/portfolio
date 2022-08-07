function disableStylesheet(node) {
    node.media = 'none';
}

function enableStylesheet(node) {
    node.media = '';
}

function switchMode(a,b) {
    if (a/b <= 4/3) {
        enableStylesheet(document.getElementById('portrait'));
        disableStylesheet(document.getElementById('landscape'));
    }

    else {
        enableStylesheet(document.getElementById('landscape'));
        disableStylesheet(document.getElementById('portrait'));
    }
}

function updateScreen() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    const node = document.documentElement.style;
    node.setProperty('--dx', w/100.0 + "px");
    node.setProperty('--dy', h/100.0 + "px");
    switchMode(w,h);
}

setInterval(updateScreen, 1000)