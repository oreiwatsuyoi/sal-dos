function _class(name){
    return document.getElementsByClassName(name);
}

let tabPanes = _class("list")[0].getElementsByTagName("label");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
        _class("list")[0].getElementsByClassName("active")[0].classList.remove("active");
            tabPanes[i].classList.add("active");


            _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
            _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    });
}
$("img.lazy").lazyload();