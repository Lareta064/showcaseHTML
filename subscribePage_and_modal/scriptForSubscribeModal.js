// ЭТОТ КУСОК КОДА ДОБАВИТЬ В ФАЙЛ СO СКРИПТАМИ MAIN.JS
//  modal subcribe
const btnOpenSubscribeModal = document.querySelectorAll('[data-role="openSubscribeModal"]');
const btnSubscribeModalClose = document.querySelectorAll('.subscribeModal-close');
if (btnOpenSubscribeModal) {
	for (let item of btnOpenSubscribeModal) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			subscribeModal.classList.add('active');
		});
	}
	for (let item of btnSubscribeModalClose) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			subscribeModal.classList.remove('active');
		});
	}

}