const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
	card.addEventListener('click', () => {
		deactiveCads();
		card.classList.add('active');
	});
});

function deactiveCads() {
	cards.forEach((card) => {
		card.classList.remove('active');
	})
}