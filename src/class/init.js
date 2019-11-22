/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
	/* makeBlinkyDancer is the dancer maker functions available in global scope.
	 * A new object of the given type will be created and added
	 * to the stage.
	 */

	// make a dancer with a random position
	let dancer = new BlinkyDancerClass(
		document.body.clientHeight * Math.random(),
		document.body.clientWidth * Math.random(),
		Math.random() * 1000
	);

	document.body.appendChild(dancer.$node);
}

function handleClickDancerButtonTwinkle() {
	/* makeBlinkyDancer is the dancer maker functions available in global scope.
	 * A new object of the given type will be created and added
	 * to the stage.
	 */

	// make a dancer with a random position
	let dancer = new TwinkleDancerClass (
		document.body.clientHeight * Math.random(),
		document.body.clientWidth * Math.random(),
		Math.random() * 500
	);

	document.body.appendChild(dancer.$node);
}

window.addEventListener('DOMContentLoaded', () => {
	const elAddDancerButton = document.querySelector('.addDancerButton');
	elAddDancerButton.addEventListener('click', handleClickDancerButton);
});

window.addEventListener('DOMContentLoaded', () => {
	const elAddDancerButton = document.querySelector('.addDancerButtonTwinkle');
	elAddDancerButton.addEventListener('click', handleClickDancerButtonTwinkle);
});