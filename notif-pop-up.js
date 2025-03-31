//notifikasi halaman utama
﻿function checkNotificationPermission() {
    const permissionStatus = localStorage.getItem("notificationPermission");

    if (permissionStatus === "granded") {
         console.log("sudah diizinkan sebelumnya");
        return true;
    }
    if (permissionStatus != "granded") {
        requestNotificationPermission();
    }
    return false;
}

function requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === "granded") {
            console.log("Notifikasi granded!");
            localStorage.setItem("notificationPermission", "granded");
        } else {
		alert('Izinkan notifikasi untuk mengakses pengingat tasbih setiap 5 waktu!');
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
    const jamRemind = sekarangRemind.getHours();
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
    setInterval(checkAndSendReminder, 60000);
}
if (checkNotificationPermission()) {
    mulaiMengingat();
    } else {
        requestNotificationPermission();
}



if (!localStorage.getItem("panduanPopUp")) {
    alert('Panduan cara pengguna baru:\n   - Tombol "Hitung" berfungsi untuk menghitung\n   - Tombol "Reset" berfungsi untuk memulai hitungan dari awal\n   - Teks "terhitung" menunjukkan progres hitungan Anda\n   - Tombol demo, dasbor, perpustakaan adalah alat lainnya dari tasbih count\nTerima kasih telah memilih Tasbih Count sebagai alat penghitung, semua pembaruan histori terwaktu di commit sumber terbuka lewat GitHub.');
    
    // satu kali
    localStorage.setItem("panduanPopUp", "true");
}
