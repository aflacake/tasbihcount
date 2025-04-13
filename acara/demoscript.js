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




const kutipanDemo = ["Salat didirikan 5 waktu.", "Perintah Salat diturunkan saat Isra' Mi'raj.", "Waktu zuhur dilihat dari bayangan tombak setinggi tombak.", "Kata ISLAM berasal dari salat 5 waktu.", "Nabi Muhammad adalah nabi dan utusan-Nya.", "Sujud Sahwi dilakukan ketika ada keraguan.", "Tidak ada yang mengetahui waktu hari kiamat, kecuali Allah.", "Nabi Ilyas menunjukkan Allah sebenarnya di Gunung Karmel, Israel"];
let kutipanTampilDemoSebelumnya = "";

function tampilKutipanAcakDemo() {
    const randomKutipanDemo = Math.floor(Math.random() * kutipanDemo.length);
    const kutipanAcakDemo = kutipanDemo[randomKutipanDemo];
    document.getElementById("kutipanAcakDemo").textContent = kutipanAcakDemo;
    const kutipanTransisiDemo = document.getElementById("kutipanAcakDemo");

    if (kutipanAcakDemo !== kutipanTampilDemoSebelumnya) {
    if (kutipanTransisiDemo) {
    kutipanTransisiDemo.classList.add("fade-out");

    setTimeout(() => {
        kutipanTransisiDemo.textContent = kutipanAcakDemo;
        kutipanTransisiDemo.classList.remove("fade-out");
        kutipanTampilDemoSebelumnya = kutipanDemo;
    }, 4000);
  }
 }
}

    function setKutipanDemoRandom() {
        const waktuKutipAcakDemo = Math.floor(Math.random() * (33000 - 17000 + 1)) + 17000;
        setInterval(() => {
            tampilKutipanAcakDemo();
        }, waktuKutipAcakDemo);
    }
    setKutipanDemoRandom();




// keamanan tombol
let setelahWaktuKlik = 0;
const klikThreshold = 2000;

but.addEventListener('click', function(event) {
	const waktuSaatIni = Date.now();
	if (waktuSaatIni - setelahWaktuKlik < klikThreshold) {
		alert('Klik sangat cepat! potensi spam');	
	} else {
		console.log('Klik valid!');
	}
	setelahWaktuKlik = waktuSaatIni;
 });
});
