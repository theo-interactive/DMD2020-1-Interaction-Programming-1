/*
Quest 1.
1. button#btn-student-number 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 자신의 학번이 span#student-number 의 내부에 입력되고, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
학번이 입력되었습니다.
----------
3. button#btn-student-name 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
4. 3(순서) 이벤트 호출 시 자신의 이름이 span#student-name 의 내부에 입력되고, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
이름이 입력되었습니다.
----------
*/
// Answer 1.

var Btn = document.querySelector("button#btn-student-number");
Btn.addEventListener("click", onClickA);

function onClickA(){
    var Snum = document.querySelector("span#student-number");
    Snum.innerText = '21961108';
    alert('학번이 입력되었습니다.');
}

var Btnsname = document.querySelector("button#btn-student-name");
Btnsname.addEventListener("click", Btnstuname);

function Btnstuname(){
    var StuName = document.querySelector("span#student-name");
    StuName.innerText = '조예슬';
    alert('이름이 입력되었습니다.');
}



/*
Quest 2.
1. button#btn-window-size 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 윈도우 콘텐츠 영역의 너비 값과 높이 값을 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
----------
*/
// Answer 2.

var Winsize = document.querySelector("button#btn-window-size");
Winsize.addEventListener("click", Widhei);
function Widhei(){
    console.log("윈도우 콘텐츠의 영역 width : " + innerWidth +" px, height : " + innerHeight + " px 입니다.")
}




/*
Quest 3.
1. button#btn-check-id 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
input#user_id - value 속성 값의 문자열 개수는 ____ 입니다.
----------
*/
// Answer 3.

var Checkid = document.querySelector("button#btn-check-id");
Checkid.addEventListener("click", Usrid);
function Usrid(){
    // 계속 깜빡거림 콘솔이
    event.preventDefault();
    var usrid = document.getElementById('user_id');
    console.log('input#user_id - value 속성 값의 문자열 개수는 '+usrid.value.length +' 입니다.')
}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var BtnCl = document.querySelector("button#btn-cancel");
BtnCl.addEventListener("click", Re);
function Re(){
    event.preventDefault();
    location.reload();
    console.log('새로고침 완료');
}


/*
Quest 5.
1. button#btn-apply 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
가입을 환영합니다!
----------
4. 사용자가 취소를 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
가입을 취소하였습니다.
----------
*/
// Answer 5.

var Btnapy = document.querySelector("button#btn-apply");
Btnapy.addEventListener("click", con);

function con(){
    event.preventDefault();
    var a = confirm('가입하시겠습니까?');
    if(a){
        alert('가입을 환영합니다!');
    }else if(!a){
        alert('가입을 취소하였습니다.');
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var Btnreset = document.querySelector("button#btn-reset");
Btnreset.addEventListener("click", prom);

function prom(){
    event.preventDefault();
    prompt('초기화하시려면 100을 입력하세요.');
    if(prompt === 100){
        var inputId = document.querySelector("input#user_id");
        var inputPass = document.querySelector("input#user_pass");

        inputId = "";
        inputPass = "";
    }

}


/*
Quest 7.
1. button#btn-odd 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
----------
메시지)
문자열 연산 예시)
2(순서) 다이얼로그창에 입력한 숫자가 10인 경우 : 1, 3, 5, 7, 9.
2(순서) 다이얼로그창에 입력한 숫자가 5인 경우 : 1, 3, 5.
----------
*/
// Answer 7.

// 어려워여....계속 오류남ㅠㅠㅠㅠ

// var Btnodd = document.querySelector("button#btn-odd");
// Btnodd.addEventListener("click", num);

// function num(){
//     event.preventDefault();
//     prompt("숫자를 입력해주세요");
    
//     if(prompt > 0){
//        if(prompt / 2 === 1){
//             for(a = 0; a < prompt && a / 2 === 0; a++){
//                 return a;
//             }
//        }else{
//             for(b = 0; b < prompt && b / 2 === 1; b++){
//                 return b;
//         }
//        }
//     }
// }
// var Snum2 = document.querySelector("div#odd-result");
// Snum2.innerText = num();

// var Btnodd = document.querySelector("button#btn-odd");
// Btnodd.addEventListener("click", X);

// function X(){
//     prompt("숫자를 입력해주세요");
//        var v = prompt("숫자를 입력해주세요");
//     //그 안에 하나의 배열을 만들어준다.
//     var _cars = [];
//     for(var i = 0; i < v; i++){
//         if(i < v - 1){
//         _cars += v + ",";
//         }
//         else{
//             _cars += v + ".";
//         }
//     }
//     return _cars;
// }
// var Snum2 = document.querySelector("div#odd-result");
// Snum2.innerText = X();

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var Btncity = document.querySelector("button#btn-add-city");
Btncity.addEventListener("click", city);

function city(){
    event.preventDefault();
    var c = prompt('도시명을 입력하세요.')
    var city2 = document.querySelector("ul#city-list");
    // city2.innerText = prompt;
    var cityli = document.createElement("li");
    city2.appendChild(cityli);
    cityli.innerText = c;
}



/*
Quest 9.
1. button#btn-color 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 sentence 라는 클래스 이름을 가진 모든 p 요소의 글자 색 스타일을 'red' 로 변경합니다.
3. 단, 1(순서) 이벤트 호출 시 클릭된 횟수를 체크하여 현재 횟수에 위치하는 p 요소만 예외로 글자 색 스타일을 'black' 으로 변경합니다.(아래 예시 참고)
4. 1(순서) 이벤트가 여러 번 호출되어 마지막 p 요소가 예외 처리된 상황(글자 색 스타일 'black')에서 1(순서) 이벤트 호출 시 처음 위치한 p 요소부터 예외 처리 되도록 작성합니다.
----------
* 예시 - p요소의 전체 개수가 4개일 때, button#btn-color 클릭 횟수에 따른 p 요소 스타일 변경

횟수 1 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
횟수 2 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
횟수 3 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'black', p요소(3) - 'red'
횟수 4 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'black'
횟수 5 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
횟수 6 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
...
...
----------
*/
// Answer 9.

var Btncolor = document.querySelector("button#btn-color");
Btncolor.addEventListener("click", col);

function col(){
    var sen = document.getElementsByClassName('sentence');
    // sen.style.color = '#ff0000'; 왜 안되는거지.........
}

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var Btntop = document.querySelector("button#btn-go-top");
Btntop.addEventListener("click", topp);

function topp(){
    scrollTo(0,0);
}

