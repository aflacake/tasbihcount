document.addEventListener("DOMContentLoaded", function() {
//mengambil id
const but = document.querySelector("#but");
const hitung = document.querySelector("#hitung");
const terhitung = document.querySelector("#terhitung");

//jumlah terhitung
let cost = 0;
hitung.innerHTML = cost;
const maxCost = 100000;

function raz() {
  if(cost < maxCost) {
  cost = cost + 1;
  hitung.innerHTML = cost;
  }

if (cost === 1) {
  terhitung.innerHTML = "Subhanallah";
 };
if (cost === 34) {
  terhitung.innerHTML = "Alhamdulillah"
 };
if (cost === 67) {
  terhitung.innerHTML = "Allahu akbar"
 };
if (cost === 101) {
  terhitung.innerHTML = "Selesai"
 };
 if (cost === 99999) {
  terhitung.innerHTML = "Terhitung 99999. Berkat rahmat-Nya, Dia jadikan untukmu malam dan siang agar kamu beristirahat pada malam hari, agar kamu mencari sebagian karunia-Nya (pada siang hari), dan agar kamu bersyukur kepada-Nya (Q.S. Al-Qashash: 73)"
 };
};

but.onclick = raz;
});
