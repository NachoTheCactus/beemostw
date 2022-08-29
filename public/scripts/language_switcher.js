

loadLanguageContent("en");

function loadLanguageContent(lang_code){
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

