/*
Dia 3 - Parte 1:
Función isLeapYear, que determina si un año es bisiesto o no. 
Un año es bisiesto si cumple con las siguientes condiciones:
-- Es divisible por 4, pero no por 100.
-- Si es divisible por 100 debe serlo por 400 también.
La función isLeapYear recibe un único parámetro: el año a evaluar. 
Debe devolver true si el año es bisiesto o false en caso contrario.
*/

function isLeapYear(year) {
  if (
    year > 0 &&
    ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0))
  ) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1984.25));
console.log(isLeapYear(-2024));
