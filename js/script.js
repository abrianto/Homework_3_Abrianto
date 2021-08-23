function changeBG() {
  const color = document.getElementById('color').value;
  document.body.style.backgroundColor = color;
}

function resetForm() {
  document.getElementById('rumus').value = null;
  document.getElementById('hasil').innerHTML = 0;
}

function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === "paste") {
    key = event.clipboardData.getData("text/plain");
  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function conCelcius(to, angka) {
  if (to == "cel") {
    return angka;
  }
  if (to == "rea") {
    return (4 / 5) * angka;
  }
  if (to == "far") {
    return (9 / 5) * angka + 32;
  }
}

function conFarenheit(to, angka) {
  if (to == "far") {
    return angka;
  }
  if (to == "cel") {
    return (5 / 9) * (angka - 32);
  }
  if (to == "rea") {
    return (4 / 9) * (angka - 32);
  }
}

function conReamur(to, angka) {
  if (to == "rea") {
    return angka;
  }
  if (to == "cel") {
    return (5 / 4) * angka;
  }
  if (to == "far") {
    return (9 / 4) * angka + 32;
  }
}


function convert() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const angka = document.getElementById("rumus").value;
  let res = 0;
  if (from === 'cel') {
    res = conCelcius(to, angka);
  } else if (from === 'far') {
    res = conFarenheit(to, angka);
  } else if (from === 'rea') {
    res = conReamur(to, angka);
  } else {
    res = 0;
  }

  document.getElementById("hasil").innerHTML = res;
}