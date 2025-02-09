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
  terhitung.innerHTML = "Terhitung 33. Maka bersabarlah engkau (Muhammad) terhadap apa yang mereka katakan dan bertasbihlah dengan memuji Tuhanmu sebelum matahari terbit dan sebelum terbenam. (Q.S. Qaf: 39)";
 };
if (cost === 66) {
  terhitung.innerHTML = "Terhitung 66. (yaitu) orang-orang yang beriman dan hati mereka menjadi tentram dengan mengingat Allah. Ingatlah, hanya dengan mengingat Allah hati menjadi tentram. (Q.S. Ar-Ra'd)"
 };
if (cost === 99) {
  terhitung.innerHTML = "Terhitung 99. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
if (cost === 100) {
  terhitung.innerHTML = "Terhitung 100"
 };
 if (cost === 1000) {
  terhitung.innerHTML = "Terhitung 1000. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
 if (cost === 3000) {
  terhitung.innerHTML = "Terhitung 3000. Wahai orang-orang beriman, ingatlah Allah dengan zikir sebanyak-banyaknya. (Q.S. Al-Ahzab: 41)"
 };
};

but.onclick = raz;
