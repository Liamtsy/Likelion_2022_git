console.log('Hello New World !');

// 변수를 암시적 선언 implicit declaration. var let const 사용 안하고 선언. 권장 X.
num = 3;
console.log(num);

// 변수를 명시적 선언 explicit declaration (권장)
var num = 3;
console.log(num);

let str = 'a';
console.log(str);

const constant = 10;
console.log(constant);

// var는 변수 중복 선언 가능, 이미 똑같은 이름의 변수 공간이 선언 되어있어도, 공간에 대한 재정의가 가능. 재할당 가능.
// 똑같은 변수에 데이터를 저장해도 문제가 되지 않기 때문에 위험함. 권장 X
var num = 10;
console.log(num);

var num = 20;
console.log(num);

// let은 변수 중복 선언이 불가함. (재선언, 재할당 불가)
// 대신 초기 선언한 값을 변경할 수는 있음.
let num = 10;
console.log(num);

num = 20;
console.log(num);

// const는 중복 선언도 불가하고, 상수 선언만 가능함. 초기 선언값을 변경할 수 없음.
const number = 10;
console.log(number);

number = 20;
console.log(number);

// 1. 변수 이름은 카멜케이스 방법으로 작성
let userName = 'LiamYoum'; // (o)
let user_name = 'LiamYoum'; // (x)

// 2. 변수 이름은 _, $, 문자로만 시작
let 12day = 'Monday'; // (x)
let @day12 = 'Monday'; // (x)
let day12 = 'Monday'; // (o)
let _day12 = 'Monday'; // (o)
let $day12 = 'Monday'; // (o)

// 3. 상수나 축약어는 대문자와 스네이크케이스 방식으로 작성
const HTML = 'Hyper Text Markup Language';
const MAX_LEVEL = '99';

// 4. 예약어는 사용할 수 없다. ex) var, let, const, typeof etc.
const var = 10; // (x) var는 변수 선언 키워드이기에 변수 이름으로 사용이 불가하다.

// Primitive Data Type (원시 타입, 기본 자료형 또는 기본형)
let number = 1; //숫자형 (number)
let str = 'abc'; //문자열형 (string)
let bool = true; //또는 false, 논리형(boolean)
let unde = undefined; //undefined
let nul = null; //null(object) typeof 써보면 object라 뜸
let symbol = Symbol(); //symbol 사용되는 경우 아직 드뭄

console.log(typeof bool); // 자료형을 알아보는 함수 typeof

// reference data type (참조 타입, 참조 자료형 또는 참조형)
let array = []; //배열(object) typeof 써보면 object라 뜸
let obj = {}; //객체(object) typeof 써보면 object라 뜸
let func = function () {}; //함수(function)

console.log(typeof function () {});

// Number Data type
// Javascript는 Java와는 달리 모든 숫자 형태를 수용함.
let integer = 10; // 10진수
let hex = 0xa; // 16진수
let binary = 0b1010; // 2진수
let octal = 0o12; // 8진수

console.log(integer, hex, binary, octal);

// 전부 10진수 형태로 변환되어서 출력됨.
let negative = -10; // 음의 정수
let indices = 1.0e1; //지수
let double = 10.12; // 소수

console.log(negative, indices, double);

let IsInfinity = 10 / 0; //무한히 나눠짐
let IsNaN = 10 / '칠'; //숫자가 아님. Not A Number

console.log(IsInfinity, IsNaN);

// 컴퓨터는 숫자로 저장할 때 2진수로 저장하는데, 소수점은 근사치로 저장하기에 정확한 값이 안 떨어져 나올 수 있음.
let sum = 0.1 + 0.2;
console.log(sum);

// String Data type
let str = 'abc'; // 큰따옴표
let str2 = 'def'; // 작은따옴표

console.log(str, str2);

// 작은따옴표가 포함되어 있으면 큰따옴표로 문자열 작성
let str = "I'm Fine Thank You!";
console.log(str);
// 큰따옴표가 포함되어 있으면 작은따옴표로 문자열 작성
let str2 = 'I asked myself like "What is that?"';
console.log(str2);

// 큰따옴표 작은따옴표 같이 있으면? -> 이스케이프 코드
// 문제 되는 따옴표 앞에 \ 입력하면 순수한 따옴표로 인식 됨.
let str = 'I\'m Fine Thank You! "and you?"';
console.log(str);

// Undefined & Null Data type
// 변수 선언 시 자바스크립트 엔진은 메모리에 변수 공간 생성
// 어떠한 데이터가 할당 되기 전까지 undefined라는 값 할당
let num;
console.log(num);

// Null은 explicit 하게 비어있는 공간을 생성할 때 사용 Intentionally, Deliberately
let num = null;
console.log(num);

// Boolean Data Type
let bool1 = true;
console.log(bool1);

let bool2 = 7 > 10; //false 할당 됨
console.log(bool2);

// Array Data Type
let arr = [];
console.log(arr);

let arr1 = [10];
console.log(arr1);

let arr2 = [10, 20];
console.log(arr2);
console.log(arr2[1]);
// 배열에 새 항목 추가 (맨 끝에)
arr2.push(30);
console.log(arr2);

// 배열의 크기 알아내기 (데이터 개수)
console.log(arr2.length);
// 더 궁금하면 JS Array method 찾아보기

let arr3 = [10, "abc", true, null, undefined, function(){}, {}];
console.log(arr3);
console.log(arr3[4]);

// Object Data Type
let obj = {"key":"value"}; // key & value = Property
console.log(obj);

// 국어, 영어, 수학, 과학 점수. key를 문자열로 적어주면 띄어쓰기 가능. 그냥 적으면 불가능
let student1 = {
  'korean Score':90,
  englishScore:70,
  "mathScore":80,
  scienceScore:60
};

// 접근법 1. 대괄호 연산자
console.log(student1["korean Score"])
// 접근법 2. 점(닷, 마침표) 연산자. 공백 있는 key에는 접근 못함.
console.log(student1.englishScore) 

// Function Data Type
function gugudan3(){ // 함수 선언식 방법
  console.log("3 * 1 = 3")
  console.log("3 * 2 = 6")
  console.log("3 * 3 = 9")
  console.log("3 * 4 = 12")
  console.log("3 * 5 = 15")
  console.log("3 * 6 = 18")
  console.log("3 * 7 = 21")
  console.log("3 * 8 = 24")
  console.log("3 * 9 = 27")
};
gugudan3();

// 함수같은 경우 한 번 선언 후 내용이 변경되지 않도록 생성하는 경우가 많으므로 보통 const 사용함.
const gugudan4 = function(){ // 함수 표현식 방법. function에 이름이 없다면 anonymous function. 변수 이름이 중요
  console.log("4 * 1 = 4")
  console.log("4 * 2 = 8")
  console.log("4 * 3 = 12")
  console.log("4 * 4 = 16")
  console.log("4 * 5 = 20")
  console.log("4 * 6 = 24")
  console.log("4 * 7 = 28")
  console.log("4 * 8 = 32")
  console.log("4 * 9 = 36")
};
gugudan4();

const gugudan1 = function whatever(){
  console.log("1 * 1 = 1")
  console.log("1 * 2 = 2")
  console.log("1 * 3 = 3")
  console.log("1 * 4 = 4")
  console.log("1 * 5 = 5")
  console.log("1 * 6 = 6")
  console.log("1 * 7 = 7")
  console.log("1 * 8 = 8")
  console.log("1 * 9 = 9")
};
gugudan1();

// Giving Data To A Function
function printFruit(fruitName, price){
  console.log(fruitName +" costs " + price);
};
printFruit("pineapple", 3000);

function printPeopleArr(arr){ // arr는 parameter(매개변수)
  console.log(arr[0] + " is " + arr[1]);
};
printPeopleArr(["Liam", "a software engineer"]); // argument(전달인자, 인수)

const printPeopleObj = function printPeopleObj(obj){
  console.log(obj.name + " is " + obj.personality);
};
printPeopleObj({name: "Yoonchae", personality: "cute"});

// Return
function sum(number1, number2){
  return number1 + number2; // 함수를 호출한 쪽으로 데이터 반환
};

const sumResult1 = sum(10, 20); // return 30
const sumResult2 = sum(20, 30); // return 50

const sumResult = sumResult1 + sumResult2 ; // 30 + 50

console.log("total sum is " + sumResult); // 함수는 그저 연산 로직만 담당하게끔

const printReturn = function printReturn(){
  console.log("Before running return");
  return; // return 만나는 순간 함수의 실행 종료 
  console.log("After running return");
};
printReturn();

// 용어 정리 Terminology
let num = 10 + 20;
// let -> 예약어, 키워드 / num -> 식별자 / =, + -> 연산자 / 10 + 20 -> 표현식(값으로 평가될 수 O) / 30 -> 값 (표현식의 최종 산출물)

// Arrow Function in ES6
const sum = (num1, num2) => {
  return num1 + num2;
};

const result = sum(20, 70);
console.log(result);

// return이면 중괄호 제거 가능
const sum = (num1, num2) => num1 - num2; 

const result = sum(80, 50);
console.log(result);

// parameter가 1개라면 소괄호 생략 가능
const square = x => x * x;

const result = square(12);
console.log(result);

// parameter가 하나도 없다면
const printPie = () => 3.14;

const result = printPie();
console.log(result);

// Return Object, 화살표 함수로 객체 반환시 중괄호를 소괄호를 감싸야함
const getObject = () => ({
  name: "Liam",
  age: 23
});

const obj = getObject();
console.log(obj.name, obj.age);

// Inner Function 화살표 함수
// function outer(x){
//   return function inner(){
//     return x * x;
//   };
// }; 이것을 화살표 함수로 간단하게 아래처럼 표현
const outer = (x) => () => x * x;

const innerFuc = outer(100);
const result = innerFuc();
console.log(result);

// Arithmetic Operator 산술 연산자
let addition = 20 + 10;
console.log(addition);

let subtraction = 20 - 10;
console.log(subtraction);

let multiplication = 10 * 10;
console.log(multiplication);

let division = 10 / 5;
console.log(division);

let remainder = 10 % 3;
console.log(remainder);

// 문자를 더할 경우
let hello = 'Hello ' + "I'm Liam.";
console.log(hello);

// 순자와 문자, +만 문자열 연결 연산자로 작동하고 나머지는 숫자로 인식함.
let changeType1 = 20 + '10';
console.log(changeType1)
let changeType2 = 20 - '10';
console.log(changeType2)
let changeType3 = 20 * '10';
console.log(changeType3)
let changeType4 = 20 / '10';
console.log(changeType4)
let changeType5 = 20 % '10';
console.log(changeType5)

// Assignment Operator 대입 연산자
let num1 = 10;
let num2 = 3;

num1 += num2; // num1 = num1 + num2
console.log(num1)
num1 *= num2; // num1 = num1 * num2
console.log(num1)
num1 /= num2; // num1 = num1 / num2
console.log(num1)
num1 %= num2; // num1 = num1 % num2
console.log(num1)
num1 = num2; // 왼쪽에 오른쪽 것을 대입
console.log(num1)

// Increment and Decrement Operator 증감 연산자
let num1 = 10;
console.log(num1++); // 현재 값 출력 후 연산(plus 1)
console.log(++num1); // 연산(plus 1) 후 출력
console.log(num1--); // 현재 값 출력 후 연산(minus 1)
console.log(--num1); // 연산(minus 1) 후 출력

// ES6 Template Literal
let str1 = `I'm Fine Thank You!`;
console.log(str1);

let str2 = `"시작이 반이다"`;
console.log(str2);

let str3 = `"Hey guys have you heard of the phrase 'Well begun is half done.'?"`

let name1 = '태선이';
let name2 = '윤채';

let string = `${name1}는 ${name2}를 사랑합니다.`; //그냥 따옴표로 하면 인식 못함
console.log(string);

let string2 = (girl, boy) => {
  console.log(`${girl}는 ${boy}를 사랑합니다.`);
}
string2('윤채', '태선이')

// Comparison Operator 비교 연산자
let comparison1 = 10 == 10; // 동등(==)
console.log(comparison1);
let comparison1_1 = 10 == "10";
console.log(comparison1_1);

let comparison2 = 10 === 10; // 일치(===) 
console.log(comparison2);
let comparison2_1 = 10 === "10"; // 일치는 자료형까지 비교
console.log(comparison2_1);

let comparison3 = 10 != 10; // 부등(!=)
console.log(comparison3);
let comparison3_1 = 10 != "10";
console.log(comparison3_1);

let comparison4 = 10 !== 10; // 불일치(!==)
console.log(comparison4);
let comparison4_1 = 10 !== "10"; // 불일치는 자료형까지 비교
console.log(comparison4_1);

let comparison5 = 20 > 20; // ~보다 큰(>)
console.log(comparison5);

let comparison6 = 20 >= 20; // ~보다 크거나 같다(>=)
console.log(comparison6);

let comparison7 = 20 < 20; // ~보다 작다(<)
console.log(comparison7);

let comparison8 = 20 <= 20; // ~보다 작거나 같다(>=)
console.log(comparison8);

// Logical Operator 논리 연산자
let logic1 = 4 < 10 && 3 > 1; // and 연산자. 둘 다 true여야 true
let logic1_1 = 4 < 10 && 3 < 1;
console.log(logic1)
console.log(logic1_1)

let logic2 = 5 == 5 || 4 == 3; // or 연산자. 하나 이상 true면 true
let logic2_1 = 4 == 5 || 2 == 3;
console.log(logic2)
console.log(logic2_1)

let logic3 = !(4 == 1); // not 연산자. 값을 반대로
let logic3_1 = !(4 == 4);
console.log(logic3)
console.log(logic3_1)

// Operator Precedence 연산자 우선순위
// 1. () 2. 단항 연산자(--, ++, !) 3. 산술 연산자 4. 비교 연산자 5. 논리 연산자 6. 대입 연산자
let a = 10;
let b = 20;
let c = 30;
let d = 40;

let result;

result = a > b || b >= c || c > d; // 문제 1 false
console.log(result);

result = a <= b && b < c && d >= c; // 문제 2 true
console.log(result);

result = !(a > b); // 문제 3 true
console.log(result);

// If Conditional Statement 조건문
// 보통 여러 변수에 조건 복잡할 때 사용
if(30 < 10){
  console.log('30 is smaller than 10')
}else if(30 < 20){
  console.log('30 is smaller than 20')
}else if(30 < 30){
  console.log('30 is smaller than 30')
}else{
  console.log("All of the above conditional statements are false")
}

// Switch Conditional Statement 조건문, 주의할 점: break를 만날때까지 실행하므로 break를 잘 써줘야함.
// if-else 보다 빠름. 원리는 구글링하고, 변수 하나에 여러 조건이면 보통 switch 사용
switch (key) {
  case value1: // key가 value1 일 때 실행문
    break;
  case value2: // key가 value2 일 때 실행문
    break;
  case value3: // key가 value3 일 때 실행문
    break;
  default:
    break;
}

let animal = 'Cat';

switch (animal) {
  case 'Cat':
    console.log('Meow');
    break;
  case 'Dog':
    console.log('Woof');
    break;
  case 'Cow':
    console.log('Moo');
    break;
  default:
    console.log('No matching animal sounds found')
}

// while, do-while loop (Iteration) 반복문
// while loop
let i=1;
while(i<10){
  console.log(i);
  i = i + 1; // i ++
};
// do-while loop, do 안에꺼 먼저 한 번 실행하고, 반복할지 안할지 결정
let flag = false; 
do{
  console.log('do-while');
}while(flag === true);

// for loop 반복문
// for ([초기문]; [조건문]; [증감문]) {
// 실행할 코드
// }

for (let step = 1; step <= 5; step ++) {
  console.log(`I'm at ` + step + ` gate.`)
}

let count;
for (let count = 10; count >=0; count --) {
  console.log(count)
}

// Break and Continue
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log(i)
}

for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  console.log(i)
}

// Document Object Model (DOM)에서 Element node get 하기
// 웹문서의 아이디에 의한 헬로인 엘리먼트를 가져와. 그리고 그 안의 HTML을 바꿔.
document.getElementById('ID vaule').### = '@@@'; // ###와 @@@는 항상 구글링하기. 색상, 사이즈, 마진, 패딩 다 변경 가능
// We call it a Selector(선택자))
// EX) document.getElementById('hello').style.color = 'red'

// 해당되는거 모두 가져와서 저장하기 때문에 뽑아쓰려면 인덱스 값으로? 잘 모르겠다 이건
document.getElementsByTagName('li')[0].style.backgroundColor =
	'black';
document.getElementsByClassName('land')[1].style.backgroundColor =
	'yellow';
document.querySelectorAll('.land')[2].style.backgroundColor = 'pink';