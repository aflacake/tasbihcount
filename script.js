document.addEventListener("DOMContentLoaded", function() {
//mengambil id
const but = document.querySelector("#but");
const hitung = document.querySelector("#hitung");
const terhitung = document.querySelector("#terhitung");
const resetBtn = document.querySelector("#reset");


//jumlah terhitung
let jumlah = parseInt(localStorage.getItem('jumlah')) || 0;
hitung.textContent = jumlah;
const maxCost = 100000;

function raz() {
  if(jumlah < maxCost) {
  jumlah++;
  hitung.textContent = jumlah;
  localStorage.setItem('jumlah', jumlah);
  }

if (jumlah === 33 && !localStorage.getItem("33")) {
  terhitung.textContent = "Terhitung 33. Maka bersabarlah engkau (Muhammad) terhadap apa yang mereka katakan dan bertasbihlah dengan memuji Tuhanmu sebelum matahari terbit dan sebelum terbenam. (Q.S. Qaf: 39)";
 };
if (jumlah === 66 && !localStorage.getItem("66")) {
  terhitung.textContent = "Terhitung 66. (yaitu) orang-orang yang beriman dan hati mereka menjadi tentram dengan mengingat Allah. Ingatlah, hanya dengan mengingat Allah hati menjadi tentram. (Q.S. Ar-Ra'd)"
 };
if (jumlah === 99 && !localStorage.getItem("99")) {
  terhitung.textContent = "Terhitung 99. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
if (jumlah === 100 && !localStorage.getItem("100")) {
  terhitung.textContent = "Terhitung 100. Langit yang tujuh, bumi dan semua yang ada di dalamnya bertasbih kepada Allah. Dan tidak ada sesuatu pun melainkan bertasbih dengan memuji-Nya, tetapi kamu tidak mengerti tasbih mereka. Sungguh Dia Maha Penyantun, Maha Pengampun (Q.S. Al-Isra': 44)"
 };
 if (jumlah === 1000 && !localStorage.getItem("1000")) {
  terhitung.textContent = "Terhitung 1000. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
 if (cost === 3000 && !localStorage.getItem("3000")) {
  terhitung.textContent = "Terhitung 3000. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
 if (jumlah === 99999 && !localStorage.getItem("99999")) {
  terhitung.textContent = "Terhitung 99999. Berkat rahmat-Nya, Dia jadikan untukmu malam dan siang agar kamu beristirahat pada malam hari, agar kamu mencari sebagian karunia-Nya (pada siang hari), dan agar kamu bersyukur kepada-Nya (Q.S. Al-Qashash: 73)"
 }
}

but.onclick = raz;



function reset() {
  jumlah = 0;
  hitung.innerHTML = jumlah;
  terhitung.textContent = '';
  localStorage.removeItem('jumlah', jumlah);
  console.log("Reset: " + jumlah);
}
	resetBtn.onclick = reset;
});
