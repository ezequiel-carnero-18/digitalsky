document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const asuntoInput = document.getElementById('asunto');
    const mensajeInput = document.getElementById('mensaje');
  
    // Ajustar el valor de los campos antes de enviar el formulario
    formulario.addEventListener('submit', function(event) {
      // Ajustar el nombre
      nombreInput.value = nombreInput.value.trim();
  
      // Ajustar el correo electrónico
      const emailValue = emailInput.value.trim();
      if (!validarCorreoElectronico(emailValue)) {
        event.preventDefault(); // Detener el envío del formulario
        alert('Ingrese una dirección de correo electrónico válida (ejemplo@gmail.com)');
        return;
      }
      emailInput.value = emailValue.toLowerCase();
  
      // Ajustar el asunto
      asuntoInput.value = asuntoInput.value.trim();
  
      // Ajustar el mensaje
      mensajeInput.value = mensajeInput.value.trim();
    });
  
    // Validar el formato del correo electrónico
    function validarCorreoElectronico(email) {
      const emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
      return emailRegex.test(email);
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const mensajeInput = document.getElementById('mensaje');
    const contadorPalabras = document.getElementById('contador-palabras');

    mensajeInput.addEventListener('input', function() {
      const mensaje = mensajeInput.value;
      const palabras = mensaje.trim().split(/\s+/);
      const numPalabras = palabras.length;

      contadorPalabras.textContent = numPalabras + ' palabras';

      if (numPalabras > 120) {
        mensajeInput.setCustomValidity('El mensaje excede el límite de 120 palabras.');
      } else {
        mensajeInput.setCustomValidity('');
      }
    });

    formulario.addEventListener('submit', function(event) {
      if (!mensajeInput.checkValidity()) {
        event.preventDefault();
      }
    });
  });
