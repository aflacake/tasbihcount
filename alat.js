// keamanan
const observer = new MutationObserver((mutationsList) => {
	for(const mutation of mutationsList) {
		if (mutation.type === 'attributes') {
			console.log('Atribut elemen berubah: ', mutation.target);
		}
	}
});
const config = { attributes: true, subtree: true };
observer.observe(document.body, config);



// keamanan tombol
const but = document.querySelector("#but");
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