export const burgerMenu = (burgerBtnSelector, burgerMenuSelector) => {
	const burgerBtn = document.querySelector(burgerBtnSelector);
	const burgerMenu = document.querySelector(burgerMenuSelector);

    const handleBurgerMenuToggle = () => {
        if (burgerBtn.classList.contains('active')) {
			burgerBtn.classList.remove('active');
			burgerMenu.classList.remove('active');
			document.body.style.overflow = 'visible';
		} else {
			burgerBtn.classList.add('active');
			burgerMenu.classList.add('active');
			document.body.style.overflow = 'hidden';
		}
    }

	burgerBtn.addEventListener('click', () => handleBurgerMenuToggle());

    burgerMenu.addEventListener('click', (e) => {
        if(e.target.localName === 'a') {
            handleBurgerMenuToggle()
        }
    })
};
