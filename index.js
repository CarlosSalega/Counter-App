const ROOT = document.documentElement
const TOGGLE = document.getElementById('checkbox')
const BUTTONS = document.querySelector('#buttons')
const DISPLAY = document.querySelector('.counter-preview')

let value = 0
let isDarkMode = false

toggleDarkMode = () => {
	if (!isDarkMode) {
		ROOT.style.setProperty('--color-1', '#161B22')
		ROOT.style.setProperty('--color-5', '#F5EDF0')
		isDarkMode = true
	} else {
		ROOT.style.setProperty('--color-1', '#F5EDF0')
		ROOT.style.setProperty('--color-5', '#161B22')
		isDarkMode = false
	}
}

counter = (event) => {
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

TOGGLE.addEventListener('click', toggleDarkMode)
BUTTONS.addEventListener('click', counter)
