console.log("외부 JavaScript 로드");
/*
문제 풀이.
*/

/*
Quest 1.
1. compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입) 를 지정합니다.
2. 조건1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 할당되지 않은 경우, 아래와 같이 console 에 출력되도록 작성합니다.
----------
두번째 매개변수의 값을 찾을 수 없습니다.
----------
3. 값이 할당된 경우 4(순서)에 이어서 작성합니다.
4. 조건2 : 첫번째 매개변수의 전달인자 값과 두번째 매개변수의 전달인자 값을 비교하여 크거나 같은 경우, 아래와 같이 console 에 출력되도록 작성합니다.
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
----------
5. 작은 경우 아래와 같이 console 에 출력되도록 작성합니다.
----------
첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.
----------
6.  1(순서) 함수에 각 매개변수를 지정하여 호출합니다.
 
----------
함수 호출)
compareNumbers(10) 를 호출한 경우 : "두번째 매개변수의 값을 찾을 수 없습니다."
compareNumbers(20, 10) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다."
compareNumbers(10, 20) 를 호출한 경우 : "첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다."
----------
*/
// Answer 1.
//1. compareNumbers 라는 함수를 선언하고, 2개의 매개변수(숫자 타입) 를 지정합니다. 
  // 동등연산자를 사용할 경우 console에 출력되는 것이 없다.
  // 일치연산자를 사용하여 엄격하게 데이터 타입까지 구분해서 비교하였다.
  // 처음에 if문을 선언할 때 a 만 넣고 코딩을 해보니 계속 오류가 떴다.
  // typeof (데이터의 타입 찾는 방법)을 사용하여 숫자 타입을 지정해줘야 한다는 것을 뒤늦게 깨닫고 수정하니 제대로 작동!

  function compareNumbers(a, b){
    if(typeof b === 'undefined'){
        console.log('두번째 매개변수의 값을 찾을 수 없습니다.');
    }else{
        if( a >= b){
            console.log('첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.');
        }else if(a < b){
            console.log('첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.');
        }
    }
}

compareNumbers(10); // 두번째 매개변수의 값을 찾을 수 없습니다.
compareNumbers(20, 10); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 크거나 같습니다.
compareNumbers(10, 20); // 첫번째 매개변수에 할당된 전달인자의 값이 두번째 매개변수에 할당된 전달인자의 값보다 작습니다.
  





/*
Quest 2.
1. getTotal 이라는 함수를 선언하고, 2개의 매개변수(첫번째는 숫자 타입, 두번째는 문자 타입)를 지정합니다.
2. 조건 1-1 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "add" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 덧셈 연산하여 결과값을 반환합니다.
3. 조건 1-2 : 1(순서) 함수가 호출될 때, 두번째 매개변수의 전달인자 값이 "multiply" 인 경우, 숫자 1 부터 첫번째 매개변수의 전달인자 값까지 모두 곱셈 연산하여 결과값을 반환합니다.
4. 조건 1-3 : 1(순서) 함수가 호출될 때, 모든 조건(1-1, 1-2)이 아닌 경우, 결과값 숫자 0 을 반환합니다.
5. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
6. 5(순서) 변수의 값을 console 에 출력합니다.
----------
함수 호출 예시)
getTotal(5, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 15
getTotal(10, "add") 를 호출하여 반환하고 변수를 출력한 결과값 : 55
getTotal(5, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 120
getTotal(10, "multiply") 를 호출하여 반환하고 변수를 출력한 결과값 : 3628800
getTotal(100) 를 호출하여 반환하고 변수를 출력한 결과값 : 0
----------
*/

// Answer 2.
//1-1를 푸는데에 많은 시간을 할애했다. 하지만 풀고나니 다음 식을 만드는 것은 간단한 일이었다.
//함수를 호출하려했지만 console에 5, "add" 두가지가 다 떴다. 멘붕이 왔다.
//후에 함수를 호출해줄 변수를 지정하지 않았다는 것을 알았다.
//함수호출문을 지정한 후, console을 확인하였다. 위에 두개는 제대로 된 결과값이 나왔는데 "multiply"이 포함된 함수와 마지막 토탈에서 0, 0, 0 이 나와서 당황했다..
//알고보니 *= 대입연산 당시 +=에 적용했던 sum값 0이 적용되어 곱해지지 않았던 것이었다...!!!!!!!!!!!!!!!!!!!!!!
function getTotal(num, str){
    var sum = 0;
    if(str === 'add'){
      for(var s = 1; s <= num; s++)
      sum += s;
    }else if(str ==='multiply'){
        var sum = 1;
        for(var s = 1; s <= num; s++)
        sum *= s;
    }else{
        sum = 0;
    }
    return sum;
}
var lsy = getTotal(5, "add");
console.log(lsy);
lsy = getTotal(10, "add");
console.log(lsy);
lsy = getTotal(5, "multiply");
console.log(lsy);
lsy = getTotal(10, "multiply");
console.log(lsy);
lsy = getTotal(100);
console.log(lsy);

/*
Quest 3.
1. getMaxValue 이라는 함수를 선언하고, 1개의 매개변수(배열 타입)를 지정합니다.
2. 1(순서) 함수에 전달된 매개변수 배열 원소들의 숫자 값들을 비교하여 숫자가 가장 큰 경우, 1(순서) 배열에서 해당된 순서를 결과값으로 반환합니다.
3. 새로운 변수를 생성, 1(순서) 함수에 매개변수를 지정하여 호출하고 값을 반환받습니다.
4. 3(순서) 변수의 값을 console 에 출력합니다.
* 매개변수 배열에는 숫자 이외의 타입도 할당되어 있습니다.
----------
함수 호출 예시)
getMaxValue([10, -4, 7, 100, "hello", -50]) 를 호출하여 반환하고 변수를 출력한 결과값 : 3
getMaxValue([-400, "world", 60, 0, {}, 1000]) 를 호출하여 반환하고 변수를 출력한 결과값 : 2
----------
*/

function getMaxValue(lsy) {// getMaxValue 함수를 선언. 매개변수(배열타입) 지정.
  //max 라는 변수를 생성한 뒤 값을 배열의 첫번째 값인 [0]으로 설정.
    var max = lsy[0]; 
  //새로운 변수 생성 후 값을 0 설정.
    var maximum = 0; 
  //for문을 사용. 새로운 변수 l 을 생성한 후, 값 0 지정. 증감 연산으로 인해 값이 되는 것을 볼 수 있을 것.
    for (var l = 0; l < lsy.length; l++) { 
      if (lsy[l] > max) {
        max = lsy[l]; // 최대값 저장
        maximum = l; 
      }
    }
    return maximum; // for문의 반복이 끝났을 때 배열 안의 최대값을 알 수 있다.
  }
//계속 모든 배열이 나와서 식을 수정하였다.
//수정 후, 최고값 순서가 아닌 매개변수의 갯수값이 나왔다...
var lsy1 = [10, -4, 7, 100, "hello", -50];
var lsy2 = [-400, "world", 60, 0, {}, 1000]; 

var plz = getMaxValue(lsy1);
console.log(plz); //3
plz = getMaxValue(lsy2);
console.log(plz); //5