// cuaca dari weatherwidget.io
!function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (!d.getElementById(id)) {
    js = d.createElement(s);
        js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js, fjs);
            }
}
(document, 'script', 'weatherwidget-io-js');



document.addEventListener("DOMContentLoaded", () => {
function jamSaatIni() {
  const sekarang = new Date();
  let jamjam = sekarang.getHours();
  let menit =sekarang.getMinutes();
  let detik = sekarang.getSeconds();

  jamjam = (jamjam < 10) ? '0' + jamjam : jamjam;
  menit = (menit < 10) ? '0' + menit : menit;
  detik = (detik < 10) ? '0' + detik : detik;

  const timeString = jamjam + ":" + menit + ":" + detik;
  document.getElementById('jam').textContent = timeString;
}
setInterval(jamSaatIni, 1000);
jamSaatIni();



    const progressHarian = document.getElementById("progressHarian");
    const progressMingguan = document.getElementById("progressMingguan");
    const progressBulanan = document.getElementById("progressBulanan");
    
    const progressTeksHarian = document.getElementById("progress-teksHarian");
    const progressTeksMingguan = document.getElementById("progress-teksMingguan");
    const progressTeksBulanan = document.getElementById("progress-teksBulanan");
    
    function perbaruiProgress(progressElement, progressTextElement, hitunganSaatIni) {
    const target = 33;
        const persentasi = (hitunganSaatIni / target) * 100;
        const angle = (persentasi / 100) * 360;
        progressElement.style.setProperty('--progress', `${angle}deg`);
        progressTextElement.textContent = `${hitunganSaatIni} / ${target}`;
    };
    
function perbaruiProgressMingguan(progressElementMingguan, progressTextElementMingguan, hitunganSaatMingguan) {
    const targetMingguan = 231;
        const persentasiMingguan = (hitunganSaatMingguan / targetMingguan) * 100;
        const angleMingguan = (persentasiMingguan / 100) * 360;
        progressElementMingguan.style.setProperty('--progressMingguan', `${angleMingguan}deg`);
        progressTextElementMingguan.textContent = `${hitunganSaatMingguan} / ${targetMingguan}`;
    };
    
    function perbaruiProgressBulanan(progressElementBulanan, progressTextElementBulanan, hitunganSaatBulanan) {
    const targetBulanan = 990;
        const persentasiBulanan = (hitunganSaatBulanan / targetBulanan) * 100;
        const angleBulanan = (persentasiBulanan / 100) * 360;
        progressElementBulanan.style.setProperty('--progressBulanan', `${angleBulanan}deg`);
        progressTextElementBulanan.textContent = `${hitunganSaatBulanan} / ${targetBulanan}`;
    }

function resetHarianAnalytic() {
    const hariIni = new Date().toISOString().split('T')[0];
    const hariSebelumnya = localStorage.getItem("hariSebelumnya");
    
    if (hariSebelumnya  !== hariIni) {
        localStorage.setItem("hariSebelumnya");
        localStorage.setItem("hariIni");
    }
}
    
    
    let hitunganHarian = JSON.parse(localStorage.getItem('terhitung')) || 0;
    let hitunganMingguan = JSON.parse(localStorage.getItem('terhitung')) || 0;
    let hitunganBulanan = JSON.parse(localStorage.getItem('terhitung')) || 0;
    
    perbaruiProgress(progressHarian, progressTeksHarian, hitunganHarian);
    perbaruiProgressMingguan(progressMingguan, progressTeksMingguan, hitunganMingguan);
    perbaruiProgressBulanan(progressBulanan, progressTeksBulanan, hitunganBulanan);
});
