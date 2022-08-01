const body 		= document.querySelector('body');

const clickMe 	= document.querySelector('.btn');
const copy 		= document.querySelector('.copy');

const hexValue 	= document.querySelector('.hex-value');
const hex 		= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const input 	= document.querySelector('input');

body.style.backgroundColor = '#000';
hexValue.textContent = '#000000'

clickMe.addEventListener('click', () => {
	let hexKey = '#';
	for (let i = 0; i < 6; i++) {
		const index = Math.floor(Math.random() * hex.length);
		hexKey += hex[index];
	}
	hexValue.textContent = hexKey;
	input.value = hexKey;
	body.style.backgroundColor = hexKey;
	body.style.transition = '.5s';
})

copy.addEventListener('click', () => {
	input.select();
	input.setSelectionRange(0, 9999);
	navigator.clipboard.writeText(input.value);
	alert('Copied: ' + input.value)
})