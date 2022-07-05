const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');

const endPoint = 10;

const select = [0, 0, 0, 0];

function addAnswer(answerText, qIndex, index) {
	var a = document.getElementsByClassName('aBox')[0];
	// createElement 설명
	var answer = document.createElement('button');

	// 답변마다 클래스 추가
	answer.classList.add('answerList');
	answer.classList.add('my-5');
	answer.classList.add('py-3');
	answer.classList.add('mx-auto');
	// 버튼에 애니메이션 추가
	answer.classList.add('fadeIn');
	// answer가 a에 소속될 수 있도록 만듦
	a.appendChild(answer);
	answer.innerHTML = answerText;
	// 이러면 버튼을 잘 불러온다!
	// onClick 속성을 addEventListener로 준다.
	answer.addEventListener(
		'click',
		function () {
			var children = document.querySelectorAll('.answerList'); // 버튼 3개 선택
			for (let i = 0; i < children.length; i++) {
				children[i].disabled = true; // 버튼 비활성화
				// 버튼 사라지는 애니메이션
				children[i].WebkitAnimation = 'fadeOut 0.5s';
				children[i].animation = 'fadeOut 0.5s';
			}
			// 누르는 순간 바로 none이 되면 안되니까 setTimeout으로 지연시킨다.
			setTimeout(() => {
				var target = qnaList[qIndex].a[index].type;
				for (let i = 0; i < target.length; i++) {
					select[target[i]] += 1;
				}
				for (let i = 0; i < children.length; i++) {
					children[i].style.display = 'none'; // 버튼들 안보이게
				}
				goNext(++qIndex);
			}, 450);
		},
		false
	);
}

function calResult() {
	var result = select.indexOf(Math.max(...select));
	return result;
}

function setResult() {
	let point = calResult();

	const resultNameIntro = document.querySelector('.resultIntro');
	resultNameIntro.innerHTML = infoList[point].nameIntro;

	const resultName = document.querySelector('.resultName');
	resultName.innerHTML = infoList[point].name;

	var resultImg = document.createElement('img');
	const imgDiv = document.querySelector('#resultImg');
	var imgURL = 'img/image-' + point + '.png';
	resultImg.src = imgURL;
	resultImg.alt = point;
	resultImg.classList.add('img-fluid');
	imgDiv.appendChild(resultImg);

	const resultDesc1 = document.querySelector('.resultDesc1');
	const resultDescTitle1 = document.querySelector(
		'.resultDescTitle1'
	);
	resultDescTitle1.innerHTML = infoList[point].descTitle1;
	resultDesc1.innerHTML = infoList[point].desc1;

	const resultDesc2 = document.querySelector('.resultDesc2');
	const resultDescTitle2 = document.querySelector(
		'.resultDescTitle2'
	);
	resultDescTitle2.innerHTML = infoList[point].descTitle2;
	resultDesc2.innerHTML = infoList[point].desc2;
}

function goResult() {
	qna.style.WebkitAnimation = 'fadeOut 2s';
	qna.style.animation = 'fadeOut 2s';
	setTimeout(() => {
		result.style.WebkitAnimation = 'fadeIn 2s';
		result.style.animation = 'fadeIn 2s';
		setTimeout(() => {
			qna.style.display = 'none';
			result.style.display = 'block';
		}, 1000);
	}, 1000);
}

function goNext(qIndex) {
	if (qIndex == endPoint) {
		goResult();
		return;
	}
	var q = document.getElementsByClassName('qBox')[0];
	// q.innerHTML = qnaList[0].q // 출력되는거 확인 가능
	q.innerHTML = qnaList[qIndex].q; // 출력되는거 확인 가능
	// 변수 도입
	// goNext가 끝나고 또 호출 해야함
	// 답은 버튼으로 만들어야함
	// 여러개 해야하니까 반복문 사용해야함
	// 배열이니까 총 3 번 반복
	for (let i in qnaList[qIndex].a) {
		// 질문 더하는 함수
		addAnswer(qnaList[qIndex].a[i].answer, qIndex, i);
	}
	var countStatusNum = document.querySelector('.countStatus');
	countStatusNum.innerHTML = qIndex + 1 + '/' + endPoint;
	// 상태바 만들기
	var status = document.querySelector('.statusBar');
	status.style.width = (100 / endPoint) * (qIndex + 1) + '%';
}

function start() {
	main.style.WebkitAnimation = 'fadeOut 2s';
	main.style.animation = 'fadeOut 2s';
	setTimeout(() => {
		qna.style.WebkitAnimation = 'fadeIn 2s';
		qna.style.animation = 'fadeIn 2s';
		setTimeout(() => {
			main.style.display = 'none';
			qna.style.display = 'block';
		}, 1000);
		let qIndex = 0;
		goNext(qIndex);
	}, 1000);
}
// document
// 	.querySelector('.startBtn')
// 	.addEventListener('click', function () {
// 		start();
// 	}); html에 onclick 안 쓰고 이거 써도 됨.
