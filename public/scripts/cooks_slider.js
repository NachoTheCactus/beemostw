var btnLeft = document.getElementById("cooks-move-left");
var btnRight = document.getElementById("cooks-move-right");
var container = document.getElementById("cooks-portret");

btnLeft.onclick = () => {
    container.scrollLeft -= window.innerWidth/3;
}
btnRight.onclick = () => {
    container.scrollLeft += window.innerWidth/3;
}