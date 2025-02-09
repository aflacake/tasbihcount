//mengambil id
const but =
  document.querySelector(
    "#but");
  
const hitung =
  document.querySelector(
    "#hitung");

const terhitung =
  document.querySelector(
    "#terhitung");

//jumlah terhitung
let cost = 0;
hitung.innerHTML = cost;

function raz() {
  cost = cost + 1;
  hitung.innerHTML = cost;
if (cost === 33) {
  terhitung.innerHTML = "Terhitug 33";
 };
if (cost === 66) {
  terhitung.innerHTML = "Terhitung 66"
 };
if (cost === 99) {
  terhitung.innerHTML = "Terhitung 99"
 };
if (cost === 100) {
  terhitung.innerHTML = "Terhitung 100"
 };
};

but.onclick = raz;
