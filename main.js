/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/
boton.addEventListener("click", () => {
  // Convertimos el valor a minúsculas para evitar fallas por mayúsculas
  const estadoSube = registrada.value.toLowerCase();
  const km = parseFloat(distancia.value);
 
  let costoBoleto = 0;


  // Detectar si el usuario seleccionó la opción de tarjeta registrada
  // Verifica si el valor es "registrada", "si", "sí", o si contiene "reg"
  const esRegistrada = estadoSube === "registrada" || estadoSube === "si" || estadoSube === "sí" || estadoSube.includes("reg");

  if (esRegistrada) {
      // Tarifas exclusivas para SUBE registrada
      if (km <= 3) {
          costoBoleto = 715.24;
      } else if (km <= 6) {
          costoBoleto = 794.74;
      } else if (km <= 12) {
          costoBoleto = 855.97;
      } else {
          costoBoleto = 917.24;
      }
  } else {
      // Tarifas exclusivas para SUBE SIN registrar
      if (km <= 3) {
          costoBoleto = 1137.23;
      } else if (km <= 6) {
          costoBoleto = 1263.64;
      } else if (km <= 12) {
          costoBoleto = 1360.99;
      } else {
          costoBoleto = 1458.41;
      }
  }

  tarifa.innerText = `El valor del boleto es: $${costoBoleto}`;
});



boton.addEventListener("click", () => {
  // COMPLETAR
});
