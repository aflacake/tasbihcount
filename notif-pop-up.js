//notifikasi halaman utama
﻿function checkNotificationPermission() {
    const permissionStatus = localStorage.getItem("notificationPermission");

    if (permissionStatus === "granted") {
         console.log("sudah diizinkan sebelumnya");
        return true;
    }
    if (permissionStatus != "granted") {
        requestNotificationPermission();
    }
    return false;
}

function requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            console.log("Notifikasi granted!");
            localStorage.setItem("notificationPermission", "granted");
        } else {
		alert('Izinkan notifikasi untuk mengakses pengingat tasbih setiap 5 waktu!');
  }
    });
}

function sendNotification(pesan) {
    if (Notification.permission === "granted") {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification('Pengingat Tasbih' => {
                    body = pesan,
                    icon: 'https://raw.githubusercontent.com/aflacake/tasbihcount/main/img/logo-tasbih-count.ico',
                });
            });
        }
    }
}

function checkAndSendReminderTasbih() {
    const sekarangRemind = new Date();
    const jamRemind = sekarangRemind.getHours();
    const menitRemind = sekarangRemind.getMinutes();

    const waktuDzikir = {
        5: "Subuh",
        12: "Zuhur",
        15: "Asar",
        18: "Maghrib",
        19: "Isya'"
    };

    if (waktuDzikir[jamRemind] && menitRemind === 0) {
        sendNotification(`Waktunya dzikir ${waktuDzikir[jamRemind]}! Ambil Tasbih Count untuk melacak proses Anda.`)
    }
}

function mulaiMengingat() {
    console.log("Pengingat dimulai...");
    setInterval(checkAndSendReminderTasbih, 60000);
}
if (checkNotificationPermission()) {
    mulaiMengingat();
    } else {
        requestNotificationPermission();
	alert('Izinkan untuk mengingat jadwal 5 waktu');
}



if (!localStorage.getItem("panduanPopUp")) {
    alert('Panduan cara pengguna baru:\n   - Tombol "Hitung" berfungsi untuk menghitung\n   - Tombol "Reset" berfungsi untuk memulai hitungan dari awal\n   - Teks "terhitung" menunjukkan progres hitungan Anda\n   - Tombol demo, dasbor, perpustakaan adalah alat lainnya dari tasbih count\nTerima kasih telah memilih Tasbih Count sebagai alat penghitung, semua pembaruan histori terwaktu di commit sumber terbuka lewat GitHub.');
    
    // satu kali
    localStorage.setItem("panduanPopUp", "true");
}




//status koneksi
document.addEventListener("DOMContentLoaded", function() {
function checkConnection() {
    const tidakAdaKoneksiDiv = document.getElementById("tidakAdaKoneksi");
    if (navigator.onLine) {
        tidakAdaKoneksiDiv.style.display="none";
    } else {
        tidakAdaKoneksiDiv.style.display="block";
    }
}
checkConnection();
window.addEventListener('online', checkConnection);
window.addEventListener('offline', checkConnection);
});
