document.getElementById("aguinaldoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const sueldo = parseFloat(document.getElementById("sueldo").value);
  const meses = parseInt(document.getElementById("meses").value);

  // Calcular años completos y meses sobrantes
  const años = Math.floor(meses / 12);
  const mesesSobrantes = meses % 12;

  // Aguinaldo por años (máx. 10,000)
  let aguinaldoAnual = años * 2000;
  if (aguinaldoAnual > 10000) {
    aguinaldoAnual = 10000;
  }

  // Aguinaldo por meses sobrantes
  const aguinaldoMensual = mesesSobrantes * 100;

  // Aguinaldo total
  const aguinaldo = aguinaldoAnual + aguinaldoMensual;

  // Total a pagar = sueldo base + aguinaldo
  const total = sueldo + aguinaldo;

  // Mostrar resultado
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("d-none");
  resultado.innerHTML = `
    <strong>Empleado:</strong> ${nombre} <br>
    <strong>Aguinaldo:</strong> $${aguinaldo.toLocaleString()} <br>
    <strong>Total a pagar:</strong> $${total.toLocaleString()}
  `;
});
