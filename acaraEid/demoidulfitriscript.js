document.addEventListener("DOMContentLoaded", function() {
//mengambil id
const butEid = document.querySelector("#but");
const hitungEid = document.querySelector("#hitung");
const terhitungEid = document.querySelector("#terhitung");
const resetBtnEid = document.querySelector("#reset");

//jumlah terhitung
let jumlahDemoEid = parseInt(localStorage.getItem('jumlahDemoEid')) || 0;
hitungEid.textContent = jumlahDemoEid;
const maxCost = 34;

function raz() {
  if(jumlahDemoEid < maxCost) {
  jumlahDemoEid++;
  hitungEid.textContent = jumlahDemoEid;
  localStorage.setItem('jumlahDemoEid', jumlahDemoEid);
  }

  if (jumlahDemoEid === 1 && !localStorage.getItem("1")) {
  terhitungEid.textContent = "Allahuakbar";
 };
  if (jumlahDemoEid === 3 && !localStorage.getItem("3")) {
  terhitungeEid.textContent = "Alhamdulillah"
 };
  if (jumlahDemoEid === 4 && !localStorage.getItem("4")) {
  terhitungEid.textContent = "Allahuakbar"
 };
  if (jumlahDemoEid === 6 && !localStorage.getItem("6")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
  if (jumlahDemoEid === 7 && !localStorage.getItem("7")) {
  terhitungEid.textContent = "Allahuakbar"
 };
  if (jumlahDemoEid === 9 && !localStorage.getItem("9")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
  if (jumlahDemoEid === 10 && !localStorage.getItem("10")) {
  terhitungEid.textContent = "Allahuakbar"
 };
  if (jumlahDemoEid === 12 && !localStorage.getItem("12")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
  if (jumlahDemoEid === 13 && !localStorage.getItem("13")) {
  terhitungEid.textContent = "Allahuakbar"
 };
  if (jumlahDemoEid === 15 && !localStorage.getItem("15")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
 if (jumlahDemoEid === 16 && !localStorage.getItem("16")) {
  terhitungEid.textContent = "Allahuakbar"
 };
 if (jumlahDemoEid === 18 && !localStorage.getItem("18")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
 if (jumlahDemoEid === 19 && !localStorage.getItem("19")) {
  terhitungEid.textContent = "Allahuakbar"
 };
 if (jumlahDemoEid === 21 && !localStorage.getItem("21")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
 if (jumlahDemoEid === 22 && !localStorage.getItem("22")) {
  terhitungEid.textContent = "Allahuakbar"
 };
 if (jumlahDemoEid === 24 && !localStorage.getItem("24")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
 if (jumlahDemoEid === 25 && !localStorage.getItem("25")) {
  terhitungEid.textContent = "Allahuakbar"
 };
 if (jumlahDemoEid === 27 && !localStorage.getItem("27")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
 if (jumlahDemoEid === 28 && !localStorage.getItem("28")) {
  terhitungEid.textContent = "Allahuakbar"
 };
 if (jumlahDemoEid === 30 && !localStorage.getItem("30")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
 if (jumlahDemoEid === 31 && !localStorage.getItem("31")) {
  terhitungEid.textContent = "Allahuakbar"
 };
 if (jumlahDemoEid === 33 && !localStorage.getItem("33")) {
  terhitungEid.textContent = "Alhamdulillah"
 };
};

butEid.onclick = raz;



function reset() {
  jumlahDemoEid = 0;
  hitungEid.innerHTML = jumlahDemoEid;
    terhitung.textContent = '';
    localStorage.removeItem('jumlahDemoEid', jumlahDemoEid);
      console.log("Reset: " + jumlahDemoEid)
}
    resetBtnEid.onclick = reset;



const kutipanDemoEid = ["Perbuatan halal namun dibenci oleh Allah adalah talak -(HR. Abu Daud).", "dan bergaullah dengan mereka secara patut -(QS. An-Nisa: 49).", "Sayangilah kedua orang tuamu, maka keturunanmu juga menyayangimu", "Berbakti kepada orang tua", "ISLAM tidak mengenal pacaran"];
let kutipanTampilDemoEidSebelumnya = "";

function tampilKutipanAcakDemoEid() {
    const randomKutipanDemoEid = Math.floor(Math.random() * kutipanDemoEid.length);
    const kutipanAcakDemoEid = kutipanDemoEid[randomKutipanDemoEid];
    document.getElementById("kutipanAcakDemoEid").textContent = kutipanAcakDemoEid;
    const kutipanTransisiDemoEid = document.getElementById("kutipanAcakDemoEid");

    if (kutipanAcakDemoEid !== kutipanTampilDemoEidSebelumnya) {
    if (kutipanTransisiDemoEid) {
    kutipanTransisiDemoEid.classList.add("fade-out");

    setTimeout(() => {
        kutipanTransisiDemoEid.textContent = kutipanAcakDemoEid;
        kutipanTransisiDemoEid.classList.remove("fade-out");
        kutipanTampilDemoEidSebelumnya = kutipanAcakDemoEid;
    }, 4000);
  }
 }
}

    function setKutipanDemoIdulFitriRandom() {
        const waktuKutipAcakDemoEid = Math.floor(Math.random() * (33000 - 17000 + 1)) + 17000;
        setInterval(() => {
            tampilKutipanAcakDemoEid();
        }, waktuKutipAcakDemoEid);
    }
    setKutipanDemoIdulFitriRandom();




// keamanan tombol
let setelahWaktuKlikEid = 0;
const klikThresholdEid = 2000;

butEid.addEventListener('click', function(event) {
	const waktuSaatIniEid = Date.now();
	if (waktuSaatIniEid - setelahWaktuKlikEid < klikThresholdEid) {
		alert('Klik sangat cepat! potensi spam');	
	} else {
		console.log('Klik valid!');
	}
	setelahWaktuKlikEid = waktuSaatIniEid;
 });
});
