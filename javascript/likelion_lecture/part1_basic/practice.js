// Several DOM methods
document.getElementsByTagName('li')[0].style.color = 'red';
document.getElementsByClassName('land')[1].style.color = 'blue';
document.getElementById('bear').style.color = 'green';
document.querySelectorAll('.fly')[0].style.color = 'purple';
// animals 변수의 innerHTML에 우변 추가
const animals = document.getElementById('animals');
animals.innerHTML += `<li class = 'water'>dolpine</li>`;
document.querySelector('.water').style.color = 'orange';
// box class 가진 첫 번째 놈에게 purple이라는 클래스 추가
document.querySelectorAll('.box')[0].classList.add('purple');
// 삭제
document.querySelectorAll('.box')[0].classList.remove('purple');
// classList.toggle은 그 클래스가 있으면 삭제, 없으면 추가 해줌
document.querySelectorAll('.box')[0].classList.toggle('yellow');
document.querySelectorAll('.box')[0].classList.toggle('yellow');

// Several Event type
// EventTarget.addEventListener('eventType', function, useCapture);
document.getElementById('btn').addEventListener('click', function () {
	console.log('click!!');
});
let num = 0;
document
	.getElementById('plus')
	.addEventListener('click', function () {
		num++;
		document.getElementById('num').innerHTML = num;
	});
document
	.getElementById('minus')
	.addEventListener('click', function () {
		num--;
		document.getElementById('num').innerHTML = num;
	});
document.querySelector('.bar').addEventListener('click', function () {
	document.querySelector('.newBar').classList.toggle('show');
	document.querySelector('.bar').innerHTML = 'Click again!';
});
