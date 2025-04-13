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



function dapatNamaHari(tanggal) {
    const hariArray = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const hari = new Date(tanggal).getDay();
    return hariArray [hari];
}
function tampilanKunjunganTerakhir() {
    const kunjunganTerakhir = localStorage.getItem('kunjunganTerakhir');
    const kunjunganElement = document.getElementById('kunjungan');
    
    if (kunjunganTerakhir) {
        const hariTerakhir = dapatNamaHari(kunjunganTerakhir);
        kunjunganElement.textContent = `${hariTerakhir}, ${kunjunganTerakhir}`;
    } else {
        kunjunganElement.textContent = "Alhamdulillah. Ini adalah kunjungan pertama Anda, selamat bertasbih!";
    }
    const tanggalSekarang = new Date().toLocaleDateString();
    localStorage.setItem("kunjunganTerakhir", tanggalSekarang);
}
tampilanKunjunganTerakhir();



const tanggalHijriah = moment().format('iD iMMMM iYYYY');
document.getElementById("tanggal-hijriah").textContent = "Tanggal Hijriah: " + tanggalHijriah + " H";





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



    
    function perbaruiProgress(progressElement, progressTeksElement, hitunganSaatIni, target) {
        const persentasi = (hitunganSaatIni / target) * 100;
        const angle = (persentasi / 100) * 360;
        progressElement.style.setProperty('--progress', `${angle}deg`);
        progressTeksElement.textContent = `${hitunganSaatIni} / ${target}`;
    }

	let hitunganHarian = parseInt(localStorage.getItem('hitung')) || 0;
	let hitunganMingguan = parseInt(localStorage.getItem('hitung')) || 0;
	let hitunganBulanan = parseInt(localStorage.getItem('hitung')) || 0;

    const progressHarian = document.getElementById("progressHarian");
    const progressMingguan = document.getElementById("progressMingguan");
    const progressBulanan = document.getElementById("progressBulanan");
    
    const progressTeksHarian = document.querySelector("progress-teksHarian");
    const progressTeksMingguan = document.querySelector("progress-teksMingguan");
    const progressTeksBulanan = document.querySelector("progress-teksBulanan");

	const targetHarian = 33;
	const targetMingguan = 231;
	const targetBulanan = 990;

	perbaruiProgress(progressHarian, progressTeksHarian, hitunganHarian, targetHarian);
	perbaruiProgress(progressMingguan, progressTeksMingguan, hitunganMingguan, targetMingguan);
	perbaruiProgress(progressBulanan, progressTeksBulanan, hitunganBulanan, targetBulanan);
	
	function tambahProgress() {
		if (hitunganHarian < targetHarian) {
			hitunganHarian++;
			localStorage.setItem('hitunganHarian', hitunganHarian);
			perbaruiProgress(progressHarian, progressTeksHarian, hitunganHarian, targetHarian);
		}
		if (hitunganMingguan < targetMingguan) {
			hitunganMingguan++;
			localStorage.setItem('hitunganMingguan', hitunganMingguan);
			perbaruiProgress(progressMingguan, progressTeksMingguan, hitunganMingguan, targetMingguan);
		}
		if (hitunganBulanan < targetBulanan) {
			hitunganBulanan++;
			localStorage.setItem('hitunganBulanan', hitunganBulanan);
			perbaruiProgress(progressBulanan, progressTeksBulanan, hitunganBulanan, targetBulanan);
		}
	}
	setInterval(tambahProgress, 1000);



function resetHarianAnalytic() {
    const hariIni = new Date().toISOString().split('T')[0];
    const hariSebelumnya = localStorage.getItem("hariSebelumnya");
    
    if (hariSebelumnya !== hariIni) {
        localStorage.setItem("hariSebelumnya", hariSebelumnya);
        localStorage.setItem("hariIni", hariIni);
	console.log(`Tanggal diperbarui: hari sebelumnya ${hariSebelumnya}, hari ini ${hariIni}`);
    }
}
function resetMingguanAnalytic() {
	const mingguIni = new Date().toISOString.split('W')[0];
	const mingguSebelumnya = localStorage.getItem("mingguSebelumnya");
	
	if (mingguSebelumnya !== mingguIni) {
		localStrorage.setItem("mingguSebelumnya", mingguSebelumnya);
		localStrorage.setItem("mingguIni", mingguIni);
		localStrorage.setItem('terhitungMingguan', 0);
	}
	console.log(`Tanggal diperbarui: minggu sebelumnya ${mingguSebelumnya}, minggu ini ${mingguIni}`);
}
function resetBulananAnalytic() {
	const bulanIni = new Date().toISOString.split('-')[1];
	const bulanSebelumnya = localStorage.getItem("bulanSebelumnya");
	
	if (bulanSebelumnya !== bulanIni) {
		localStrorage.setItem("bulanSebelumnya", bulanSebelumnya);
		localStrorage.setItem("bulanIni", bulanIni);
		localStrorage.setItem('terhitungBulanan', 0);
	}
	console.log(`Tanggal diperbarui: bulan sebelumnya ${bulanSebelumnya}, bulan ini ${bulanIni}`);
}
		    

    
    let hitunganHarianReset = JSON.parse(localStorage.getItem('hitung')) || 0;
    let hitunganMingguanReset = JSON.parse(localStorage.getItem('hitung')) || 0;
    let hitunganBulananReset = JSON.parse(localStorage.getItem('hitung')) || 0;
    
    perbaruiProgressHarian(progressHarian, progressTeksHarian, hitunganHarian);
    perbaruiProgressMingguan(progressMingguan, progressTeksMingguan, hitunganMingguan);
    perbaruiProgressBulanan(progressBulanan, progressTeksBulanan, hitunganBulanan);
});
