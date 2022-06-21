document
	.querySelectorAll('.list')[0]
	.addEventListener('click', function (e) {
		tabBtn(e.target.dataset.id);
	});

function tabBtn(a) {
	document
		.querySelectorAll('.tab-btn')
		[a].addEventListener('click', function () {
			for (
				let i = 0;
				i < document.querySelectorAll('.tab-btn').length;
				i++
			) {
				document
					.querySelectorAll('.tab-btn')
					[i].classList.remove('here');
				document
					.querySelectorAll('.tab-content')
					[i].classList.remove('show');
			}
			document.querySelectorAll('.tab-btn')[a].classList.add('here');
			document
				.querySelectorAll('.tab-content')
				[a].classList.add('show');
		});
}
