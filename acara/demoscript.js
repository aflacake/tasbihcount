document.addEventListener("DOMContentLoaded", function() {
//mengambil id
const but = document.querySelector("#but");
const hitung = document.querySelector("#hitung");
const terhitung = document.querySelector("#terhitung");
const resetBtn = document.querySelector("#reset");

//jumlah terhitung
let jumlahdemo = parseInt(localStorage.getItem('jumlahdemo')) || 0;
hitung.textContent = jumlahdemo;
const maxCost = 101;

function raz() {
  if(jumlahdemo < maxCost) {
  jumlahdemo++;
  hitung.textContent = jumlahdemo;
  localStorage.setItem('jumlahdemo', jumlahdemo);
  }

if (jumlahdemo === 1 && !localStorage.getItem("1")) {
  terhitung.textContent = "Subhanallah";
 };
if (jumlahdemo === 33 && !localStorage.getItem("33")) {
  terhitung.textContent = "Alhamdulillah"
 };
if (jumlahdemo === 66 && !localStorage.getItem("66")) {
  terhitung.textContent = "Allahu akbar"
 };
if (jumlahdemo === 100 && !localStorage.getItem("100")) {
  terhitung.textContent = "Selesai"
 };
};

but.onclick = raz;



function reset() {
  jumlahdemo = 0;
  hitung.innerHTML = jumlahdemo;
	terhitung.textContent = '';
	localStorage.removeItem('jumlahdemo', jumlahdemo);
  	console.log("Reset: " + jumlahdemo)
}
	resetBtn.onclick = reset;
});
