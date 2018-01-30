function open() {
    document.getElementById("side").removeAttribute("style");
    document.getElementsByName("body").style.marginLeft = "200px"

}

function close() {
    document.getElementById("side").style.display= "none";
    document.getElementsByName("body").style.marginLeft = "0px"
}

document.getElementById("close").onclick = close;
document.getElementById("open").onclick = open;
