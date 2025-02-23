document.addEventListener("DOMContentLoaded", function() {
//mengambil id
const but = document.querySelector("#but");
const hitung = document.querySelector("#hitung");
const terhitung = document.querySelector("#terhitung");

//jumlah terhitung
let cost = 0;
hitung.textContent = cost;
const maxCost = 100000;

function raz() {
  if(cost < maxCost) {
  cost = cost + 1;
  hitung.innerHTML = cost;
  }

if (cost === 33) {
  terhitung.innerHTML = "Terhitung 33. Maka bersabarlah engkau (Muhammad) terhadap apa yang mereka katakan dan bertasbihlah dengan memuji Tuhanmu sebelum matahari terbit dan sebelum terbenam. (Q.S. Qaf: 39)";
 };
if (cost === 66) {
  terhitung.innerHTML = "Terhitung 66. (yaitu) orang-orang yang beriman dan hati mereka menjadi tentram dengan mengingat Allah. Ingatlah, hanya dengan mengingat Allah hati menjadi tentram. (Q.S. Ar-Ra'd)"
 };
if (cost === 99) {
  terhitung.innerHTML = "Terhitung 99. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
if (cost === 100) {
  terhitung.innerHTML = "Terhitung 100. Langit yang tujuh, bumi dan semua yang ada di dalamnya bertasbih kepada Allah. Dan tidak ada sesuatu pun melainkan bertasbih dengan memuji-Nya, tetapi kamu tidak mengerti tasbih mereka. Sungguh Dia Maha Penyantun, Maha Pengampun (Q.S. Al-Isra': 44)"
 };
 if (cost === 1000) {
  terhitung.innerHTML = "Terhitung 1000. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
 if (cost === 3000) {
  terhitung.innerHTML = "Terhitung 3000. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
 if (cost === 99999) {
  terhitung.innerHTML = "Terhitung 99999. Berkat rahmat-Nya, Dia jadikan untukmu malam dan siang agar kamu beristirahat pada malam hari, agar kamu mencari sebagian karunia-Nya (pada siang hari), dan agar kamu bersyukur kepada-Nya (Q.S. Al-Qashash: 73)"
 }
}

but.onclick = raz;
});
