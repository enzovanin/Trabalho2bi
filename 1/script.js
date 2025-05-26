function verificarTriangulo() {
  const x = parseFloat(document.getElementById("ladoX").value);
  const y = parseFloat(document.getElementById("ladoY").value);
  const z = parseFloat(document.getElementById("ladoZ").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    resultado.textContent = "Por favor, insira todos os lados.";
    return;
  }

  if (x < y + z && y < x + z && z < x + y) {
    if (x === y && y === z) {
      resultado.textContent = "Triangulo Equilatero.";
    } else if (x === y || x === z || y === z) {
      resultado.textContent = "Triangulo Isosceles.";
    } else {
      resultado.textContent = "Triangulo Escaleno.";
    }
  } else {
    resultado.textContent = "Os valores nao formam um triangulo.";
  }
}