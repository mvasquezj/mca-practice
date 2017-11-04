document.getElementById("btnAddElementList").addEventListener('click', function(){
    var list = document.getElementById('elementList');
    var oneLi = document.createElement('li');
    var twoLi = document.createElement('li');
    oneLi.innerHTML = "Element 1";
    twoLi.innerHTML = "Element 2";
    list.appendChild(oneLi);
    list.insertBefore(twoLi, list.firstChild);
});

document.getElementById("btnRemoveFirstElement").onclick = function(){
    var list = document.getElementById("elementList");
    list.removeChild(list.firstChild);
}