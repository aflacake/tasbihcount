//mengambil id
const button1 =
  document.querySelector("#buttuon1");
  
const count =
  document.querySelector("#count");

const counted =
  document.querySelector("#counted");

//jumlah terhitung
let cost = 0;
count.innerHTML = cost;

function func1() {
  cost = cost + 1;
  count.innerHTML = cost;

if (cost === 33) {
  counted.innerHTML = "Terhitug 33";
 };
if (cost === 66) {
  counted.innerHTML = "Terhitung 66";
 };
if (cost === 99) {
  counted.innerHTML = "Terhitung 99";
 };
if (cost === 100) {
  counted.innerHTML = "Terhitung 100"
 };
};

button1.onclick = func1;
