let bill = document.querySelector(".input-seccion_1-bill");
let billNumber = parseInt(bill.value);

let people = document.querySelector(".input-seccion_1-people");
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector(".tip_amount");
let totalResult = document.querySelector(".total");

let buttons = document.querySelectorAll(".btn_tip-button");

let alert = document.querySelector("#alert");

let tipValue = 5;

buttons.forEach((element) => {
	element.addEventListener("click", (event) => {
		//cambiar estilos
		removeActive();

		element.classList.add("btn_tip--selected");

		tipValue = parseInt(event.target.innerText.slice(0, -1));

		calculateTip();
	});
});

// Actualizando el bill
bill.addEventListener("input", () => {
	billNumber = parseFloat(bill.value);
	calculateTip();
});

// Actualizando el custom
let custom = document.querySelector(".custom-button");
custom.addEventListener("click", () => {
	removeActive();
});

custom.addEventListener("input", () => {
	tipValue = parseFloat(custom.value);
	if (!isNaN(tipValue)) {
		calculateTip();
	}
});

// Actualizando person
people.addEventListener("input", () => {
	peopleNumber = parseFloat(people.value);

	if (peopleNumber == 0 || isNaN(peopleNumber)) {
		people.style.border = "2px solid red";
		people.style.outline = "none";
		alert.classList.add("error");
	} else {
		alert.classList.remove("error");
		people.style.border = "none";
		calculateTip();
	}
});

// boton reset
let resetBtn = document.querySelector(".btnReset");
resetBtn.addEventListener("click", () => {
	bill.value = 0;
	billNumber = 0;
	people.value = 5;
	peopleNumber = 5;
	custom.value = "Csutom";
	calculateTip();
});

function calculateTip() {
	//calculo de Tip amount
	tipResult.innerText = ((billNumber * tipValue) / 100 / peopleNumber).toFixed(
		0
	);

	//calculo del total
	totalResult.innerText = (
		((billNumber * tipValue) / 100 + billNumber) /
		peopleNumber
	).toFixed(0);
}

function removeActive() {
	buttons.forEach((element) => {
		element.classList.remove("btn_tip--selected");
	});
}
