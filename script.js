//notifikasi halaman utama
﻿function checkNotificationPermission() {
    const premissionStatus = localStorage.getItem("notificationPremission");

    if (permissionStatus === "granded") {
         console.log("sudah diizinkan sebelumnya");
        return true;
    }
    if (permissionStatus != "granded") {
        requestNotificationPermission();
    }
    return false;
}

function.requestNotificationPermission () {
    Notification.requestPermission().then(permission => {
        if (permission === "granded") {
            console.log("Notifikasi granded!");
            localStorage.setItem("notificationPermission", "granded");
        }
    });
}

function sendNotification(message) {
    if (Notification.permission === "granded") {
        new Notification(message);
    }
}

function checkAndSendReminderTasbih() {
    const sekarangRemind = new Date();
    const  jamRemind = sekarangRemind.getHours();
    const menitRemind = sekarangRemind.getMinutes();

    if (jamRemind === 5 && menitRemind === 0) {
        sendNotification("Waktunya dzikir Subuh! mulai ambil Tasbih Count untuk melacak proses Anda.");
    } else if (jamRemind === 12 && menitRemind === 0) {
        sendNotification("Waktunya dzikir Zuhur! mulai ambil Tasbih Count untuk melacak proses Anda.");
    } else if (jamRemind === 15 && menitRemind === 0) {
        sendNotification("Waktunya dzikir Asar! mulai ambil Tasbih Count untuk melacak proses Anda.");
    } else if (jamRemind === 18 && menitRemind === 0) {
        sendNotification("Waktunya dzikir Maghrib! mulai ambil Tasbih Count untuk melacak proses Anda.");
    } else if (jamRemind === 19 && menitRemind === 0) {
        sendNotification("Waktunya dzikir Isya'! mulai ambil Tasbih Count untuk melacak proses Anda.");
    }
}

function mulaiMengingat() {
    setInterval((checkAndSendReminder, 6000);
}
if (checkNotificationPermission()) {
    mulaiMengingat();
    } else {
        requestNotificationPermission();
}



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
 if (jumlah === 3000 && !localStorage.getItem("3000")) {
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



const kutipan = [
    "Selamat sejahtera bagi Ilyas -(QS. As-Saffat: 130).",
    "Islam itu indah dan mudah.",
    "Hai orang-orang beriman diwajibkan atas kamu shaum sebagaimana diwajibkan atas orang-orang sebelum kamu agar kamu bertakwa.",
    "Kecuali shaum, shaum itu untuk-Ku dan Aku-lah yang memperhitungkannya -(HR. Muslim).", 
    'Dan telah Kami angkat ke atas mereka bukit Thursina untuk perjanjian mereka. Dan kami perintahkan mereka, "Masuklah pintu gerbang itu sambil bersujud," dan Kami perintahkan kepada mereka, "Janganlah kamu melanggar peraturan hari Sabtu," dan Kami telah mengambil dari mereka perjanjian yang kokoh.',
    "Rukun islam ada 5, rukun iman ada 6.", 
    "Nabi yang wajib imani ada 25.",
    "Raja Fir'aun berakhir di laut mati.",
    "Orang mukmin yang paling sempurna imannya yaitu yang paling baik alhlaknya -(HR. Abu Daud dan Ibnu Majah).",
    "Dan kehidupan didunia ini hanya senda gurau dan permainan. Dan sesungguhnya negeri akhirat itulah kehidupan yang sebenarnya, sekiranya mereka mengetahui -(QS. Al-Ankabut: 64).",
    "Sesungguhnya Allah apabila hendak membinasakan seseorang. Dia mencabut rasa malu dari orang tersebut.",
    "Hai orang-orang yang beriman, peliharalah dirimu dan keluargamu dari api neraka -(QS. At-Tahrim: 6)."
];
let kutipanTampilSebelumnya = "";

function tampilKutipanAcak() {
    const randomKutipan = Math.floor(Math.random() * kutipan.length);
    const kutipanAcak = kutipan[randomKutipan];
    document.getElementById("kutipanAcak").textContent = kutipanAcak;
    const kutipanTransisi = document.getElementById("kutipanAcak");

    if (kutipanAcak !== kutipanTampilSebelumnya) {
    if (kutipanTransisi) {
    kutipanTransisi.classList.add("fade-out");

    setTimeout(() => {
        kutipanTransisi.textContent = kutipanAcak;
        kutipanTransisi.classList.remove("fade-out");
    }, 4000);
  }
 }
}

    function setKutipanRandom() {
        const waktuKutipAcak = Math.floor(Math.random() * (33000 - 17000 + 1)) + 17000;
        setInterval(() => {
            tampilKutipanAcak();
        }, waktuKutipAcak);
    }
    setKutipanRandom();
