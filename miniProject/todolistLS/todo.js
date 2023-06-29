var myListContent;

document.write("<ul id='myUL'>");

if (window.localStorage) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let val = localStorage.getItem(key);
        if (val.slice(-1,) == '0') {
            document.write("<li>" + val.slice(0, val.length - 1) + "</li>");
        }
        else {
            document.write("<li class='checked'>" + val.slice(0, val.length - 1) + "</li>");
        }
    }
};
document.write("</ul>");

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < localStorage.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.id = localStorage.key(i);
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i, j;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        deleteLine(this.id);  // 세션 정보 삭제 
        console.log("deleteLine() start ");
        var div = this.parentElement;
        div.style.display = "none";
        console.log("div.style.display = 'none';");
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', f, false);
