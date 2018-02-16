function open() {
    document.getElementById("side").removeAttribute("style");
    document.getElementById("main").style.marginLeft = "210px"
    document.getElementById("open").style.display = "none"
}

function close() {
    document.getElementById("side").style.display= "none";
    document.getElementById("main").style.marginLeft = "0px"
    document.getElementById("open").style.display = "block"
}

document.getElementById("close").onclick = close;
document.getElementById("open").onclick = open;
