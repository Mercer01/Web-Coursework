function open() {
    document.getElementById("side").removeAttribute("style");
}

function close() {
    document.getElementById("side").style.display= "none";
}

document.getElementById("close").onclick = close;
document.getElementById("open").onclick = open;
