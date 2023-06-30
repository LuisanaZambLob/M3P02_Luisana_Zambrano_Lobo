// Pedir por teclado el radio de una esfera a través de prompt
var radio = parseFloat(prompt('Ingrese el radio de la esfera:'));

function calcularVolumenEsfera() {
  // Calcular el volumen de la esfera (4/3 * PI * radio^3)
  var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

  var formula = "(4/3 * π * radio^3)";

  // Sacar el mensaje por pantalla del tipo: ‘El volumen de la esfera se calcula con la fórmula ${formula}, por tanto una esfera de radio ${radio} tiene un volumen de ${resultado}’
  var mensaje = `El volumen de la esfera se calcula con la fórmula ${formula}, por tanto una esfera de radio ${radio} tiene un volumen de ${volumen}.`;
  
  alert(mensaje);
}

calcularVolumenEsfera();
