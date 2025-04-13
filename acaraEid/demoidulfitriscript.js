document.addEventListener("DOMContentLoaded", function() {
  // Suara dering
  function deringTasbihCountDemoEid() {
    const audioDeringDemoEid = new Audio('https://raw.githubusercontent.com/aflacake/tasbihcount/second/mp3/ringtone-1-46486.mp3');
    audioDeringDemoEid.play();
  }

  // Mengambil id
  const butEid = document.querySelector("#but");
  const hitungEid = document.querySelector("#hitung");
  const terhitungEid = document.querySelector("#terhitung");
  const resetBtnEid = document.querySelector("#reset");

  // Jumlah terhitung
  let jumlahDemoEid = parseInt(localStorage.getItem('jumlahDemoEid')) || 0;
  hitungEid.textContent = jumlahDemoEid;
  const maxCost = 34;

  function raz() {
    if (jumlahDemoEid < maxCost) {
      jumlahDemoEid++;
      hitungEid.textContent = jumlahDemoEid;
      localStorage.setItem('jumlahDemoEid', jumlahDemoEid);
    }

    if (jumlahDemoEid === 1 && !localStorage.getItem("1")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
      localStorage.setItem("1", true);
    }
    if (jumlahDemoEid === 3 && !localStorage.getItem("3")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
      localStorage.setItem("3", true);
    }
    if (jumlahDemoEid === 4 && !localStorage.getItem("4")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
      localStorage.setItem("4", true);
    }
    if (jumlahDemoEid === 6 && !localStorage.getItem("6")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("6", true);
    }
    if (jumlahDemoEid === 7 && !localStorage.getItem("7")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("7", true);
    }
    if (jumlahDemoEid === 9 && !localStorage.getItem("9")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("9", true);
    }
    if (jumlahDemoEid === 10 && !localStorage.getItem("10")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("10", true);
    }
    if (jumlahDemoEid === 12 && !localStorage.getItem("12")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("12", true);
    }
    if (jumlahDemoEid === 13 && !localStorage.getItem("13")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("13", true);
    }
    if (jumlahDemoEid === 15 && !localStorage.getItem("15")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("15", true);
    }
    if (jumlahDemoEid === 16 && !localStorage.getItem("16")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("16", true);
    }
    if (jumlahDemoEid === 18 && !localStorage.getItem("18")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("18", true);
    }
    if (jumlahDemoEid === 19 && !localStorage.getItem("19")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("19", true);
    }
    if (jumlahDemoEid === 21 && !localStorage.getItem("21")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("21", true);
    }
    if (jumlahDemoEid === 22 && !localStorage.getItem("22")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("22", true);
    }
    if (jumlahDemoEid === 24 && !localStorage.getItem("24")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("24", true);
    }
    if (jumlahDemoEid === 25 && !localStorage.getItem("25")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("25", true);
    }
    if (jumlahDemoEid === 27 && !localStorage.getItem("27")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("27", true);
    }
    if (jumlahDemoEid === 28 && !localStorage.getItem("28")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("28", true);
    }
    if (jumlahDemoEid === 30 && !localStorage.getItem("30")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("30", true);
    }
    if (jumlahDemoEid === 31 && !localStorage.getItem("31")) {
      terhitungEid.textContent = "Allahuakbar";
      deringTasbihCountDemoEid();
	localStorage.setItem("31", true);
    }
    if (jumlahDemoEid === 33 && !localStorage.getItem("33")) {
      terhitungEid.textContent = "Alhamdulillah";
      deringTasbihCountDemoEid();
	localStorage.setItem("33", true);
    }
  }

  butEid.onclick = raz;

function reset() {
  jumlahDemoEid = 0;
  hitungEid.innerHTML = jumlahDemoEid;
  terhitungEid.textContent = '';
  localStorage.removeItem('jumlahDemoEid');

  const kumpulanStorageEid = [1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24, 25, 27, 28, 30, 31, 33];
  kumpulanStorageEid.forEach(m => localStorage.removeItem(String(m)));

  console.log("Reset: " + jumlahDemoEid);
}
resetBtnEid.onclick = reset;

const kutipanDemoEid = [
  "Perbuatan halal namun dibenci oleh Allah adalah talak -(HR. Abu Daud).",
  "dan bergaullah dengan mereka secara patut -(QS. An-Nisa: 49).",
  "Sayangilah kedua orang tuamu, maka keturunanmu juga menyayangimu",
  "Berbakti kepada orang tua",
  "ISLAM tidak mengenal pacaran"
];

let kutipanTampilDemoEidSebelumnya = "";

function tampilKutipanAcakDemoEid() {
  const randomKutipanDemoEid = Math.floor(Math.random() * kutipanDemoEid.length);
  const kutipanAcakDemoEid = kutipanDemoEid[randomKutipanDemoEid];
  const kutipanTransisiDemoEid = document.getElementById("kutipanAcakDemoEid");

  if (kutipanAcakDemoEid !== kutipanTampilDemoEidSebelumnya && kutipanTransisiDemoEid) {
    kutipanTransisiDemoEid.classList.add("fade-out");

    setTimeout(() => {
      kutipanTransisiDemoEid.textContent = kutipanAcakDemoEid;
      kutipanTransisiDemoEid.classList.remove("fade-out");
      kutipanTampilDemoEidSebelumnya = kutipanAcakDemoEid;
    }, 4000);
  }
}

function setKutipanDemoIdulFitriRandom() {
  const waktuKutipAcakDemoEid = Math.floor(Math.random() * (33000 - 17000 + 1)) + 17000;
  setInterval(() => {
    tampilKutipanAcakDemoEid();
  }, waktuKutipAcakDemoEid);
}
setKutipanDemoIdulFitriRandom();
});

