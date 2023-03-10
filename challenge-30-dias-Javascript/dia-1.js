/*
Dia 1:
La función calculateTip recibirá dos parámetros, billAmount que representa 
el costo total de lo que se haya consumido y tipPercentage que representa 
el porcentaje de propina a dejar. Ambos valores serán de tipo Number y 
siempre serán positivos, incluyendo el 0. La función deberá devolver el valor 
de la propina como un número.
*/

function calculateTip(billAmount, tipPercentage) {
  return billAmount * (tipPercentage / 100);
}

console.log(calculateTip(100, 10));
console.log(calculateTip(1524.33, 25));
