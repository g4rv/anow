export const burgerMenu = (burgerBtnSelector, burgerMenuSelector) => {
	const burgerBtn = document.querySelector(burgerBtnSelector);
	const burgerMenu = document.querySelector(burgerMenuSelector);

	burgerBtn.addEventListener('click', () => {
		if (burgerBtn.classList.contains('active')) {
			burgerBtn.classList.remove('active');
			burgerMenu.classList.remove('active');
			document.body.style = 'visible';
		} else {
			burgerBtn.classList.add('active');
			burgerMenu.classList.add('active');
			document.body.style = 'hidden';
		}
	});
};
