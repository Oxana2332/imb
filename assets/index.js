let height = document.querySelector('.input__height');
let weight = document.querySelector('.input__weight');
let imbResult = document.querySelector('.result');
let button = document.querySelector('.button');

function imb(weight, height) {
	height /= 100;
	result = (weight / height ** 2).toFixed(1);
	if (result <= 16) {
		imbResult.textContent = `${result} — Выраженный дефицит массы тела`;
	} else if (result <= 18.5) {
		imbResult.textContent = `${result} — Недостаточная (дефицит) масса тела`;
	} else if (result <= 25) {
		imbResult.textContent = `${result} — Норма`;
	} else if (result <= 30) {
		imbResult.textContent = `${result} — Избыточная масса тела (предожирение)`;
	} else if (result <= 35) {
		imbResult.textContent = `${result} — Ожирение первой степени`;
	} else if (result <= 40) {
		imbResult.textContent = `${result} — Ожирение второй степени`;
	} else if (result >= 40) {
		imbResult.textContent = `${result} — Ожирение третьей степени (морбидное)`;
	} else {
		imbResult.textContent = `проверьте правильность введённых данных`;
	}
}

button.addEventListener('click', () => imb(weight.value, height.value));
