function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const   
   operacion = document.getElementById('operacion').value;
  
    const resultado = realizarOperacion(num1,   
   num2, operacion);
  
    document.getElementById('resultado').textContent = resultado;
  }
  
  function realizarOperacion(num1, num2, operacion) {
    // ... (la misma función que definimos antes)
  }