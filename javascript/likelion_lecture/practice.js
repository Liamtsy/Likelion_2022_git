document.getElementById('lion').style.color = 'red';
document.getElementById('tiger').style.color = 'blue';
document.getElementById('bear').style.color = 'green';
document.getElementById('eagle').style.color = 'purple';

document.getElementsByTagName('li')[0].style.backgroundColor =
	'black';
document.getElementsByClassName('land')[1].style.backgroundColor =
	'yellow';
document.querySelectorAll('.land')[2].style.backgroundColor = 'pink';

// innerHTML
document.querySelectorAll('.fly')[0].innerHTML = 'hawk'; // fly 클래스 가진 index 0번 놈을 hawk 문자열로 교체
const animals = document.getElementById('animals');

animals.innerHTML += "<li class = 'fly'>eagle</li>"; // animals 아이디 가진 엘리먼트 안에 문자열 추가해주기

// classList
document.querySelectorAll('.box')[0].classList.add('purple'); // box 클래스 가진 index 0번 놈에게 purple이란 클래스 추가
document.querySelectorAll('.box')[0].classList.remove('purple'); // box 클래스 가진 index 0번 놈에게 purple이란 클래스 삭제
document.querySelectorAll('.box')[0].classList.toggle('yellow'); // box 클래스 가진 index 0번 놈에게 yellow라는 클래스 없으면 추가, 있으면 삭제 해줌
document.querySelectorAll('.box')[0].classList.toggle('yellow'); // box 클래스 가진 index 0번 놈에게 yellow라는 클래스 없으면 추가, 있으면 삭제 해줌

// Event 사건 발생 시키는거 (동작에 반응)
// EventTarget.addEventListener('eventType', function, useCapture);
document.getElementById('btn').addEventListener('click', function () {
	console.log('wow you made it!!');
	alert('good!');
});
let num = 0;
document
	.getElementById('plus')
	.addEventListener('click', function () {
		num++;
		document.getElementById('number').innerHTML = num;
	});
document
	.getElementById('minus')
	.addEventListener('click', function () {
		num--;
		document.getElementById('number').innerHTML = num;
	});
document.querySelector('.bar').addEventListener('click', function () {
	document.querySelector('.bar').innerHTML = 'You clicked!';
	document.querySelector('.new').classList.toggle('show');
});

// Event Object 이벤트 객체
document
	.querySelectorAll('.list')[0]
	.addEventListener('click', function (e) {
		tabBtn(e.target.dataset.id);
	});

function tabBtn(a) {
	document
		.querySelectorAll('.tab-button')
		[a].addEventListener('click', function () {
			for (
				let i = 0;
				i < document.querySelectorAll('.tab-button').length;
				i++
			) {
				document
					.querySelectorAll('.tab-button')
					[i].classList.remove('here');
				document
					.querySelectorAll('.tab-content')
					[i].classList.remove('show');
			}

			document
				.querySelectorAll('.tab-button')
				[a].classList.add('here');
			document
				.querySelectorAll('.tab-content')
				[a].classList.add('show');
		});
}
