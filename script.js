document.getElementById('boton').addEventListener('click', calcular);

function calcular() {
  const vidaMedia = parseFloat(document.getElementById('isotopo').value);
  const edad = parseFloat(document.getElementById('edad').value);

  if (isNaN(edad) || edad < 0) {
    document.getElementById('resultado').innerText = "Por favor ingresa una edad válida.";
    return;
  }

  const cantidadRestante = Math.pow(0.5, edad / vidaMedia);
  const porcentaje = (cantidadRestante * 100).toFixed(2);

  document.getElementById('resultado').innerText =
    `Después de ${edad.toLocaleString()} años, queda aproximadamente el ${porcentaje}% del isótopo original.`;
}
