// cuaca dari weatherwidget.io
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

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
jamSaatIni()
