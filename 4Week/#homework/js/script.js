/*
문제 풀이.
*/

/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// Answer 1.
var a = 29;
var b = a + 2; // 31.
var c = a % 3; // 2.
c = a % 9; // 2.
c = a % 27; // 2.
if(b / c === 1){
    console.log("일치합니다.");
}
// 29 % ? = 2
// 29 - 2 = 27
// 27 
// 3 * 9 = 27
// 9 * 3 = 27
// 27 * 1 = 27;


/*
Quest 2.
1. 'user' 라는 변수를 선언하고 새로운 객체를 생성하여 값으로 할당합니다.
2. 'user' 객체의 각 원소와 값은 아래 보기와 같이 적용합니다.
3. 만약 'user' 객체 "job" key의 값(value)을 확인하여 데이터 타입이 문자라면 "greeting" key의 값을 console에 출력되도록 작성하고, 문자가 아니라면 "name" key의 값을 console에 출력되도록 작성합니다.(조건문의 문법 사용)

----------
첫번째 key: "name" value: "본인이름 입력"
두번째 key: "greeting" value: "안녕하세요"
세번째 key: "job" value: "학생"
네번째 key: "school" value: "계원예술대학교"
다섯번째 key: "major" value: "디지털미디어디자인"
여섯번째 key: "grade" value: 2
일곱번째 key: "class" value: "D"
----------
*/
// Answer 2.
// var user = {};
// user = new Object();
var user = {
    name_first : "김용원",
    // name-last : "김용원", // key 부분에 - 를 쓰게 되면 오류.
    "name-last" : "김용원", // key 를 문자열로 기입할 때는 - 사용 가능.
    "greeting" : "안녕하세요",
    "job" : "학생",
    "school" : "계원예술대학교",
    "major" : "디지털미디어디자인",
    "grade" : 2,
    "class" : "D",
    "key" : "value"
};
// user.job; // 1.
// user["job"]; // 2.
// console.log(typeof user["job"]); // "string"
if(typeof user["job"] === "string") { // true.
    console.log(user["greeting"]);
}else{ // false.
    console.log(user.name);
}