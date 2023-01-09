const DISPLAY = document.querySelector('.counter-preview')
const BUTTONS = document.querySelector('#buttons')

BUTTONS.addEventListener('click', counter)

let value = 0

function counter(event) {
	const button = event.target.id
	if (button === 'increment') {
		value += 1
	} else if (button === 'decrement') {
		value -= 1
	} else {
		value = 0
	}

	DISPLAY.textContent = value
}
