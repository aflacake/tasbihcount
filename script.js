//mengambil id
const count =
  document.querySelector("#count");

const button1 =
  document.querySelector("#buttuon1");

const couted =
  document.querySelector("#counted");

//jumlah terhitung
  let cost = 0;
  count.innerHTML = cost;

  function jmlh() {
    cost = cost + 1;
    count.innerHTML = cost;

     if (cost === 33) {
      counted.innerHTML = "Terhitug 33"
    };
     if (cost === 66) {
      counted.innerHTML = "Terhitung 66"
    };
     if (cost === 99) {
      counted.innerHTML = "Terhitung 99"
     };
  };

button1.onClick = jmlh;
