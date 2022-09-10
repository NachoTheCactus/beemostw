loadContentLanguage("en");
var current_lang = "en";

const lgSel = document.getElementById("language-selector");
const lgIcons = document.getElementById("language-icons");
const lgIconsBg = document.getElementById("language-icons-bg");
const lgArrow = document.getElementById("language-arrow");
const innerArrowLeft = '<svg id="arrow-left" class="w-3 mt-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>';
const innerArrowRight = '<svg id="arrow-right" class="w-3 mt-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>';
const btnEN = document.getElementById("en-flag");
const btnES = document.getElementById("es-flag");
const btnRO = document.getElementById("ro-flag");
var isOpened = false;

lgArrow.onclick = () => {
    if(isOpened){
        isOpened = false;
        closeLg();
    } else{
        isOpened = true;
        openLg();
    }
}

btnEN.onclick = () => {
    loadContentLanguage('en');
}
btnES.onclick = () => {
    loadContentLanguage('es');
}
btnRO.onclick = () => {
    loadContentLanguage('ro');
}

function openLg(){
    lgSel.style.width = "8rem";
    lgIcons.style.display = "flex";
    setTimeout(() => {
        lgIcons.style.opacity = 1;
    }, 100);
    lgIconsBg.style.width = "8rem";
    lgArrow.style.marginLeft = "8rem";
    lgArrow.innerHTML = innerArrowLeft;
}
function closeLg(){
    lgSel.style.width = 0;
    lgIcons.style.transition = "all 200ms";
    lgIcons.style.opacity = 0;
    setTimeout(() => {
        lgIcons.style.display = "none";
    }, 200);
    lgIconsBg.style.width = 0;
    lgArrow.style.marginLeft = 0;
    lgArrow.innerHTML = innerArrowRight;
}

function loadContentLanguage(lang_code){
    if(lang_code != current_lang){
        current_lang = lang_code;
        fetch('languages/' + lang_code + '.json')
        .then(res => res.json())
        .then((res) => {
            var keys = Object.keys(res);
            var values = Object.values(res);

            var content =  Object.assign.apply({}, keys.map( (v, i) => ( {[v]: values[i]} ) ) );
            for(id in content){
                let selectedElements = document.getElementsByClassName(id);
                for(let i = 0; i < selectedElements.length; i++){
                    selectedElements[i].innerHTML = content[id];
                }
            }
        });
    }
}
