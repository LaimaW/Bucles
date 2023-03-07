let cuposNivel1 = 20;
      let cuposNivel2 = 40;
      let cuposNivel3 = 30;

      function mostrar() {
        let nivel = document.getElementById("nivel").value;
        let cantidadBoletos = null;

        while (cantidadBoletos === null) {
          cantidadBoletos = prompt("Ingrese la cantidad de boletos:");

          if (cantidadBoletos === null || isNaN(cantidadBoletos) || cantidadBoletos.trim() === "") {
            document.getElementById("mensaje").innerHTML = "Debe ingresar un número válido para la cantidad de boletos.";
            cantidadBoletos = null;
          }
        }

        cantidadBoletos = parseInt(cantidadBoletos);

        if (nivel === "1" && cantidadBoletos > cuposNivel1) {
          document.getElementById("mensaje").innerHTML = `Lo siento, solo hay ${cuposNivel1} cupos disponibles para el nivel 1.`;
        } else if (nivel === "2" && cantidadBoletos > cuposNivel2) {
          document.getElementById("mensaje").innerHTML = `Lo siento, solo hay ${cuposNivel2} cupos disponibles para el nivel 2.`;
        } else if (nivel === "3" && cantidadBoletos > cuposNivel3) {
          document.getElementById("mensaje").innerHTML = `Lo siento, solo hay ${cuposNivel3} cupos disponibles para el nivel 3.`;
        } else {
          if (nivel === "1") {
            cuposNivel1 -= cantidadBoletos;
            document.getElementById("mensaje").innerHTML = `Ha comprado ${cantidadBoletos} boletos para el nivel 1. Quedan ${cuposNivel1} cupos disponibles.`;
          } else if (nivel === "2") {
            cuposNivel2 -= cantidadBoletos;
            document.getElementById("mensaje").innerHTML = `Ha comprado ${cantidadBoletos} boletos para el nivel 2. Quedan ${cuposNivel2} cupos disponibles.`;
          } else if (nivel === "3") {
            cuposNivel3 -= cantidadBoletos;
            document.getElementById("mensaje").innerHTML = `Ha comprado ${cantidadBoletos} boletos para el nivel 3. Quedan ${cuposNivel3} cupos disponibles.`;
          }
        }
      }