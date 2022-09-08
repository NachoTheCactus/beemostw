const res = document.getElementById("res-div");
const resBg = document.getElementById("res-bg");
const resBtn = document.getElementById("res-btn");
const resBtnClose = document.getElementById("res-btn-cls");
const header = document.getElementById("header");
var elements = document.querySelector("#res-div>div");

var resOpened = false;

//To smoothen the opacity animation
resBg.addEventListener("webkitTransitionEnd", () => {
    if(resBg.style.opacity == 0){
        resBg.style.display = "none";
    }
});
//On hamburger button click
resBtn.onclick = () => {
    openRes();
}
resBg.onclick = () => {
    closeRes();
}
resBtnClose.onclick = () => {
    closeRes();
}

function openRes(){
    resOpened = true;
    
    header.style.opacity = "0";
    setTimeout(() => {

    if(window.innerWidth < 1024){
        res.style.height = "100%";
    }else if(1024 <= window.innerWidth && window.innerWidth < 1280){
        res.style.height = "230px";
    }else if(1280 <= window.innerWidth && window.innerWidth < 1536){
        res.style.height = "210px";
    }else if(1536 <= window.innerWidth){
        res.style.height = "190px";
    }
    
    resBg.style.display = "block";
    setTimeout(() => {
        resBg.style.opacity = "30%";
    }, 20);
        elements.style.opacity = "1";
    }, 300);
    
}
function closeRes(){
    resOpened = false;
    
    res.style.height = "0";
    resBg.style.opacity = "0";
    elements.style.opacity = "0";
    //Close sidebar
    setTimeout(() => {
        header.style.opacity = "1";
    }, 350);
}