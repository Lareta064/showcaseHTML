// ЭТОТ КУСОК КОДА ДОБАВИТЬ В ФАЙЛ СO СКРИПТАМИ MAIN.JS

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