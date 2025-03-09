document.addEventListener("DOMContentLoaded", function() {
//mengambil id
const but = document.querySelector("#but");
const hitung = document.querySelector("#hitung");
const terhitung = document.querySelector("#terhitung");
const resetBtn = document.querySelector("#reset");

//jumlah terhitung
let cost = parseInt(localStorage.getItem('cost')) || 0;
hitung.textContent = cost;
const maxCost = 101;

function raz() {
  if(cost < maxCost) {
  cost++;
  hitung.textContent = cost;
  localStorage.setItem('cost', cost);
  }

if (cost === 0 && !localStorage.getItem("0")) {
  terhitung.textContent = "Subhanallah";
 };
if (cost === 33 && !localStorage.getItem("33")) {
  terhitung.textContent = "Alhamdulillah"
 };
if (cost === 66 && !localStorage.getItem("66")) {
  terhitung.textContent = "Allahu akbar"
 };
if (cost === 100 && !localStorage.getItem("100")) {
  terhitung.textContent = "Selesai"
 };
};

but.onclick = raz;



function reset() {
  cost = 0;
  hitung.innerHTML = cost;
	terhitung.textContent = '';
	localStorage.removeItem('cost', cost);
  	console.log("Reset: " + cost)
}
	resetBtn.onclick = reset;
});
