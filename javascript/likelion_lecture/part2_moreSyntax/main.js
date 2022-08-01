// Function is a First-class citizen in JavaScript. (일급 객체)
// 1) 변수에 할당 가능, 2) 함수의 인자로 넘어갈 수 있음, 3) 함수의 반환값으로 반환될 수 있음

function exec(fn) {
	fn(1);
}
exec(console.log);

// 이런 형식으로 React에서 많이 쓰임.
const button = document.querySelector('button');

button.addEventListener('click', () => {
	console.log('clicked');
});

// Promise와 비동기 처리 (병렬적으로, 먼저 끝나는대로, 되는 것부터 미리미리) (동기적으로 하는건 순서대로, 직렬적으로)
// Execute it on a browser ! you can see the result in the console.
const result = fetch('http://jsonplaceholder.typicode.com/posts/1');
console.log(result);

// Promise 의 상태를 알고 싶다면 .then() 을 사용하면 됨.
// Sense of Promise
// 1) Pending: 프로미스 처리중 / 2) Fulfilled: 처리 완료 (성공) / 3) Rejected: 처리 완료
fetch('http://jsonplaceholder.typicode.com/posts/1') // fetch로 데이터 받아와
	.then((res) => res.json()) // 그게 다 되면 이거 해
	.then(console.log); // 그게 다 되면 이거 해
console.log('test'); // test가 먼저 콘솔에 찍힘

// Logical Operators (논리 연산자) 심화
const me = {
	name: '염태선',
	age: '23',
	gender: 'male'
};
const someone = {
	name: '고윤채',
	age: '23',
	gender: 'female'
};

function addMilitaryStateIfMale(person) {
	if (person.gender === 'male') {
		person.militaryState = true;
	}
}

addMilitaryStateIfMale(me);
addMilitaryStateIfMale(someone);

function parseBoolean(value) {
	if (value === true) {
		return '참';
	} else if (value === false) {
		return '거짓';
	}
}

if (me.militaryState !== undefined) {
	// 나한테 militaryState가 있으면
	console.log(parseBoolean(me.militaryState));
}
if (someone.militaryState !== undefined) {
	// 윤채한테 militaryState가 있으면
	console.log(parseBoolean(someone.militaryState));
}

// 위의 if문을 논리연산자로 줄여보자
me.militaryState !== undefined &&
	console.log(parseBoolean(me.militaryState)); // && 앞에 true, 뒤도 true이니 실행
someone.militaryState !== undefined &&
	console.log(parseBoolean(someone.militaryState)); // && 앞에 false이니, 거기서 실행 끝남.

const input = prompt();

// if (input === '') {
// 	console.log('There is no input');
// } else {
// 	console.log(input);
// }
// 위의 if문을 논리연산자로 줄여보자

console.log(input || 'There is no input');

// Destructuring (비구조화 할당, 구조분해 할당)
// const name = me.name;
// const age = me.age; 를 destructing 하면 ?
const { name, age } = me;

console.log(name);
console.log(age);
console.log(name);
console.log(age);
console.log(name);

// Destructuring Array
const arr = [1, 2, 3, 4, 5];
// const a = arr[0];
const [a, b, c, d, e] = arr;
const [f, g] = arr;
const [h, i, j] = arr;
console.log(a, b, c, d, e, f, g, h, i, j);

// Spread (내용물을 흩뿌리기)
const me = {
	name: '염태선',
	age: '23'
};
const militaryMe = {
	...me, // me의 모든 값을 복사, 안 그러면 me가 또 하나의 객체로 들어감
	militaryState: true
};

console.log(militaryMe);

const animals = ['dog', 'cat', 'bird'];
const addedAnimals = [...animals, 'fish'];
console.log(addedAnimals);

// Rest (나머지), Usually used with destructuring
const { militaryState, ...another } = me;
console.log(another);
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [zero, ...rest] = numbers;
console.log(rest);
