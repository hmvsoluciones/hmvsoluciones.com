var languages = Array.from(document.getElementsByClassName('language'));
var xhttp = new XMLHttpRequest();
var langDocument = {};

switchLanguage("es");

languages.forEach(function(value, index){
    languages[index].addEventListener('click', function(){
        switchLanguage(this.dataset.lang);
    });
});
xhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
        langDocument = JSON.parse(this.responseText);
        processLangDocument();
    }
};
function switchLanguage(language){
    xhttp.open("GET", "hmv-assets/i18n/" + language + ".json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function processLangDocument(){
    console.log("processLangDocument");

    var tags = document.querySelectorAll('span,img,a,label,li,option,h1,h2,h3,h4,h5,h6,p,div');
    Array.from(tags).forEach(function(value, index){
        var key = value.dataset.langkey;        
            
        if(langDocument[key]){
            value.innerHTML = langDocument[key];
            /*console.log("key: "+key);
            console.log("lang-key: "+value.dataset.langkey);
            console.log("value: "+langDocument[key]);*/

        } 
    });
    console.log("processLangDocument End");
}