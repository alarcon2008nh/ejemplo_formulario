function mostrarDatos(){
  let nombre = document.getElementById("nombre").value.trim();
  let edad = document.getElementById("edad").value.trim();
  let resultado = document.getElementById("resultado");

  if(nombre === "" || edad === ""){
    resultado.innerHTML = "⚠️ Por favor completa todos los campos.";
    resultado.style.background = "#ffe0d6";
    resultado.style.border = "2px solid #e34f26";
  } else {
    resultado.innerHTML =
      "<strong>✅ Datos capturados correctamente:</strong><br><br>" +
      "Nombre: " + nombre + "<br>" +
      "Edad: " + edad + " años<br><br>" +
      "JavaScript leyó los datos del formulario y los mostró en pantalla.";

    resultado.style.background = "#e8ffe8";
    resultado.style.border = "2px solid #2ecc71";
  }
}

function mostrarCodigo(tipo, boton){
  let paneles = document.querySelectorAll(".code-panel");
  let botones = document.querySelectorAll(".code-tab");

  paneles.forEach(function(panel){
    panel.classList.remove("active");
  });

  botones.forEach(function(btn){
    btn.classList.remove("active");
  });

  let panelActivo = document.getElementById("codigo-" + tipo);

  if(panelActivo){
    panelActivo.classList.add("active");
    boton.classList.add("active");
  }
}

function subirArriba(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

document.getElementById("anio").textContent = "Ciclo escolar 2026";
