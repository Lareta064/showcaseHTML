$(document).ready(function () {

	// ПОКАЗАТЬ ФИКС МЕНЮ НА Десктопах
	window.addEventListener('scroll', function () {
		const fixMenu = document.querySelector('.header-fix');
		if (this.pageYOffset > 100) {
			fixMenu.classList.add('active')
		} else {
			fixMenu.classList.remove('active')
		}
	})
	// показать скрыть модальные окна поиска и моб меню
	const openSearch = document.querySelector('#show-search');
	const searchModal = document.querySelector('#search-modal');
	const searchFormInput = searchModal.querySelector('form input');
	const searchFormButton = searchModal.querySelector('form button');
	const openMobMenu = document.querySelector('#mob-btn');
	const mobMenu = document.querySelector('#mob-menu');

	openSearch.addEventListener('click', function (e) {
		e.preventDefault();
		searchModal.classList.add('active');
	});
	searchModal.addEventListener('click', function (e) {
		if (e.target != searchFormInput && e.target != searchFormButton) {
			searchModal.classList.remove('active');
		}

	});
	openMobMenu.addEventListener('click', function (e) {
		e.preventDefault();
		mobMenu.classList.add('active');
	});
	mobMenu.addEventListener('click', function (e) {
		this.classList.remove('active');
	});
	AOS.init({
		disable: "mobile"
	});
	// ПАРАЛЛАКС ДВИЖЕНИЯ ЗА МЫШКОЙ
	let headerSection = document.querySelector('.header')
	let bg = document.querySelectorAll('.parallax-item');
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		for (let item of bg) {
			item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		}

	});

	//АНИМАЦИЯ ЗАПОЛНЕНИЯ ПРОГРЕСС-БАРА
	// Получаем нужный элемент
	let elements = document.querySelectorAll('.progress-item');
	let Visible = function (target) {
		// Все позиции элемента
		let targetPosition = {
				top: window.pageYOffset + target.getBoundingClientRect().top,
				left: window.pageXOffset + target.getBoundingClientRect().left,
				right: window.pageXOffset + target.getBoundingClientRect().right,
				bottom: window.pageYOffset + target.getBoundingClientRect().bottom
			},
			// Получаем позиции окна
			windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			};

		if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
			targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
			targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
			targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
			// Если элемент полностью видно, то запускаем следующий код
			let progressValue = target.querySelector('.val').textContent;
			let progressLine = target.querySelector('span');
			progressLine.style.width = progressValue;
		}
	};

	// Запускаем функцию при прокрутке страницы
	window.addEventListener('scroll', function () {
		for (let item of elements) {
			Visible(item);
		}
	});

	// А также запустим функцию сразу. А то вдруг, элемент изначально видно

	for (let item of elements) {
		Visible(item);
	}

	//аккордеон развернуть стрелку
	$('.collapsable').on('show.bs.collapse', function () {
		let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
		tabIcon.addClass("rotate");
	});
	$('.collapsable').on('hide.bs.collapse', function () {
		let tabIcon = $("#" + $(this).attr("aria-labelledby")).find(".arrow");
		tabIcon.removeClass("rotate");
	});

	//video modal
	let youtube_src1 = $("#video1 video").attr("src");
	let youtube_src2 = $("#video2 video").attr("src");

	$('#video1').on('show.bs.modal', function () {

		$("#video1 video").attr("src", youtube_src1 + "?autoplay=1");
	});
	$("#video1").on('hidden.bs.modal', function (e) {
		$("#video1 video").attr("src", youtube_src1 + "?autoplay=0");

	});
	$('#video2').on('show.bs.modal', function () {

		$("#video2 video").attr("src", youtube_src2 + "?autoplay=1");
	});
	$("#video2").on('hidden.bs.modal', function (e) {
		$("#video2 video").attr("src", youtube_src2 + "?autoplay=0");

	});

	/* КАСТОМНЫЙ ВЫБОР ФАЙЛА*/
	;
	(function (document, window, index) {
		var inputs = document.querySelectorAll('.inputfile');
		Array.prototype.forEach.call(inputs, function (input) {
			var label = input.nextElementSibling,
				labelVal = label.innerHTML;

			input.addEventListener('change', function (e) {
				var fileName = '';
				if (this.files && this.files.length > 1)
					fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
				else
					fileName = e.target.value.split('\\').pop();

				if (fileName) {

					if (label.firstChild.nodeType === Node.ELEMENT_NODE) {
						label.querySelector('span').innerHTML = fileName;
					} else {
						label.nextElementSibling.innerHTML = fileName;
					}


				} else
					label.innerHTML = labelVal;
			});

			// Firefox bug fix
			input.addEventListener('focus', function () {
				input.classList.add('has-focus');
			});
			input.addEventListener('blur', function () {
				input.classList.remove('has-focus');
			});
		});
	}(document, window, 0));


	//
	const btnOpenBasketModal = document.querySelectorAll('.btn[ data-role="showBasketModal"]');
	if (btnOpenBasketModal) {
		for (let item of btnOpenBasketModal) {
			item.addEventListener('click', function () {
				basketModal.classList.add('active');

			});
		}

	}
	//закрыть модально окно Вы добавили товар в корзину
	const basketModal = document.querySelector('#basketModal');
	if (basketModal) {
		const btnCloseBasketModal = basketModal.querySelectorAll('.basketModal-close');
		for (let item of btnCloseBasketModal) {
			item.addEventListener('click', function () {
				basketModal.classList.remove('active');


			})
		}

	}
	// ПАРАЛЛАКС ДВИЖЕНИЯ ЗА МЫШКОЙ в модальном окне корзины
	let modalSection = document.querySelector('.basketModal-content')
	let prxItems = document.querySelectorAll('.decoreItem');
	window.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		for (let item of prxItems) {
			item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		}

	});

	//закрытие/открытие окна Презент
	const presentModal = document.querySelector('#presentModal');
	const btnClosePresentModal = document.querySelector('.presentModal-close');
	const btnOpenPresentModal = document.querySelectorAll('[data-role="openPresentModal"]');
	if (presentModal) {

		for (let item of btnOpenPresentModal) {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				presentModal.classList.add('active');
			})
		}

		btnClosePresentModal.addEventListener('click', function (e) {
			e.preventDefault();
			presentModal.classList.remove('active');
		});
	}
})