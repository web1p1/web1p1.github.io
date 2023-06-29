function newElement() {
    if (!window.localStorage) {
        alert("세션 스토리지를 지원하지 않습니다.");
        return;
    }
    number = (new Date()).getTime();
    myListContent = document.getElementById("myInput");

    localStorage.setItem(number.toString(), myListContent.value + '0');  // 초기입력 0

    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";  // 입력창 지움

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.id = number;
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            console.log("deleteLine() start in newElement ");
            deleteLine(this.id);  // 세션 정보 삭제 
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function f(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        // console.log(ev.target);  //myUL
        // console.log("==break==")
        number = parseInt(ev.target.firstElementChild.id);
        console.log(number);
        checkeLine(number); // 체크된 것은 홀수로 저장 
    }
}

function checkeLine(number) {  // 정수입력 
    let tnum;
    if (!window.localStorage) {
        alert("세션 스토리지를 지원하지 않습니다.");
        return;
    }

    let val = localStorage.getItem(number);
    let value = val.substr(0, val.length - 1);
    let checkedNumber = parseInt(val.substr(-1,));  // 맨마지막 문자 (0또는 1)
    // 홀수로 만들어 줌 (완료된 리스트)
    if (checkedNumber == 0) { // 체크안된것
        localStorage.setItem(number.toString(), value + "1");
    }
    else { // 체크된 것
        localStorage.setItem(number.toString(), value + "0");
    }
}

function deleteLine(number) {
    if (!window.localStorage) {
        alert("세션 스토리지를 지원하지 않습니다.");
        return;
    }
    localStorage.removeItem(number.toString());  // 삭제
}
