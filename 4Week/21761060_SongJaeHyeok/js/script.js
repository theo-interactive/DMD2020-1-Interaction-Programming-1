/*
Quest 1.
    1. compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입) 를 지정합니다.
    2. 조건1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 할당되지 않은 경우, 아래와 같이 console 에 출력되도록 작성합니다.

    두번째 매개변수의 값을 찾을 수 없습니다.

    3. 값이 할당된 경우 4(순서)에 이어서 작성합니다.
    4. 조건2 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우, 아래와 같이 console 에 출력되도록 작성합니다.

    첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.

    5. 작은 경우 아래와 같이 console 에 출력되도록 작성합니다.

    첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.

    6. 1(순서) 함수에 각 매개변수를 지정하여 호출합니다.

함수 호출)

compareNumbers(10) 를 호출한 경우 : "두번째 매개변수의 값을 찾을 수 없습니다."

compareNumbers(20, 10) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."

compareNumbers(10, 20) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."
*/


//compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입) 를 지정
function compareNumbers(number1, number2){
    //두번째 매개변수의 전달인자 값이 할당되지 않은 경우 아래의 문구를 콘솔에 출력 
    if(number2 === undefined){
        console.log("두번째 매개변수의 값을 찾을 수 없습니다.")
    }
    //첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우 아래의 문구를 콘솔에 출력 
    if(number1 >= number2){
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.");
    //첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 작은 경우 아래의 문구를 콘솔에 출력 
    }else if(number1 < number2){
        console.log("첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.");
    }
};


//함수선언
compareNumbers(10);
compareNumbers(20, 10);
compareNumbers(10, 20);



/*
Quest 2.
    1. getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정합니다.
    2. 조건 1-1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 덧셈 연산하여 결과값을 반환합니다.
    3. 조건 1-2 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 곱셈 연산하여 결과값을 반환합니다.
    4. 조건 1-3 : 1(순서) 함수가 호출될 때, 모든 조건(1-1, 1-2)이 아닌 경우, 결과값 숫자 0 을 반환합니다.
    5. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
    6. 5(순서) 변수의 값을 console 에 출력합니다.

함수 호출 예시)

getTotal(5, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 15
getTotal(10, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 55

getTotal(5, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 120
getTotal(10, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 3628800

getTotal(100) 를 호출하여 반환하고 변수를 출력한 결과값 : 0
*/

// getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정
function getTotal(number1, string1){

    //반환받기 위하여 변수 add ,multiply, zero 생성
    var add = 0,
        multiply = 1;
        zero = 0;
    
    //두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 덧셈 연산하여 결과값을 반환
    if(string1 === "add"){
        //반복문을 사용하여 문제에서 원하는 add의 값을 구함
        for(var i = 1;i <= number1;i++){
            add = add + i;
        }
        //return을 통하여 반환
        return add;
    }
    //두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 곱셈 연산하여 결과값을 반환
    else if(string1 === "multiply"){
        for(var i = 1;i <= number1;i++){
            multiply = multiply * i;
        }
        //return을 통하여 반환
        return multiply;
    }
    //모든 조건(1-1, 1-2)이 아닌 경우, 결과값 숫자 0 을 반환
    else if(string1 != "add" && string1 !="multiply"){
        //return을 통하여 반환
        return zero;
    }



};

//변수 add를 만들고 getTotal(5, "add") 를 대입하고 출력
var add = getTotal(5, "add");
console.log(add);
add = getTotal(10, "add");
console.log(add);

//변수 multiply를 만들고 getTotal(5, "multiply") 를 대입하고 출력
var multiply = getTotal(5, "multiply");
console.log(multiply);
var multiply = getTotal(10, "multiply");
console.log(multiply);

//변수 zero 만들고 getTotal(100) 를 대입하고 출력
var zero = getTotal(100);
console.log(zero);


/*
Quest 3.
    1. getMaxValue 이라는 함수를 선언하고, 1개의 매개변수(배열 타입)를 지정합니다.
    2. 1(순서) 함수에 전달된 매개변수 배열 원소들의 숫자 값들을 비교하여 숫자가 가장 큰 경우, 1(순서) 배열에서 해당된 순서를 결과값으로 반환합니다.
    3. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
    4. 3(순서) 변수의 값을 console 에 출력합니다.

매개변수 배열에는 숫자 이외의 타입도 할당되어 있습니다.

함수 호출 예시)

getMaxValue([10, -4, 7, 100, "hello", -50]) 를 호출하여 반환하고 변수를 출력한 결과값 : 3

getMaxValue([-400, "world", 60, 0, {}, 1000]) 를 호출하여 반환하고 변수를 출력한 결과값 : 2 -> 5
*/





//getMaxValue 이라는 함수를 선언하고, 1개의 매개변수(배열 타입)를 지정
function getMaxValue(array){

    //aryMax라는 변수를 만들고 array배열의 첫번째 값을 대입
    var aryMax = array[0];
    //aryAnswer이라는 변수를 만들고 0 대입
    var aryAnswer = 0;

    //반복문을 사용(변수 i를 만들고 0 대입, array의 길이까지 실행, 1씩 늘어남)
    for(var i = 0; i < array.length;i++){
        //조건물을 활용하여 배열을 계속 비교하고 가장 큰값의 순번을  aryAnswer에 대입
        if(array[i] > aryMax){
            aryMax = array[i];
            aryAnswer = i
        }
    }
    //aryAnswer값 반환
    return aryAnswer;
    
};

//answerArr1 변수 생성하고 배열[10, -4, 7, 100, "hello", -50] 대입
var answerArr1 = [10, -4, 7, 100, "hello", -50],
//answer1 변수를 만들어 answerArr1배열을 매개변수를 가지는 getMaxValue을 대입하고 출력
    answer1 = getMaxValue(answerArr1);
console.log(answer1);

var answerArr2 = [-400, "world", 60, 0, {}, 1000],
    answer2 = getMaxValue(answerArr2);
    console.log(answer2);


