<?php

/*
Tipo de dato: Hace referencia al tipo de datos que puede contener 
y cómo almacenan los datos.

* Numericos:
- Integer: entero
- Float: decimal
- Double: decimal con mayor precision, con más decimales que float.

* Cadena de caracteres
- Char: 1 letra o 1 simbolo: "A"
- String "Textosssss"

* Booleanos
 - Bool: V, F

 * Sin valor
 - Null: No hay valor
 - Undefined: Hay una variable pero no tiene un valor

Caracteristicas
* PHP tiene tipado debil.
* PHP no necesita que definamos de forma explicita un tipo de dato,
  ya que por si mismo puede deducir que tipo de dato está usando.
* PHP es capaz de convertir un tipo de dato a otro de forma automaticamente
  segun el contexto donde se use. 
  Ejm: Si suma un string con un numero, tomara ambos como nums (casteara el str a int)
*/

$num_str = "23";
$suma = 23 + $num_str;
//echo $suma;

$num = 10;
$suma_num = 0.5 + $num;
//var_dump($suma_num);

$num_dos = "10 numeros en un string";
$suma_dos = $num_dos + 30;
//var_dump($suma_dos);

$numero_str = "5";
var_dump($numero_str);

$numero_cast = (int) $numero_str;
var_dump($numero_cast);

$numero_float = 5.89;
$float_cast = (int) $numero_float;
var_dump($float_cast);

$bandera = 0;
$bandera = (bool) $bandera;
var_dump($bandera);

/*
RETO 1 
Que tipo de dato son las siguientes variables?
*/

$nombre = "Carlos";  //str
var_dump($nombre);
$apellido = "Gomez";  //str
var_dump($apellido);
$edad = 23;  //int
var_dump($edad);
$aprobado = true;  //bool
var_dump($aprobado);
$promedio = (8 + 9.5 + 9 + 19 + 8) / 5; //float
var_dump($promedio);
$nombre_completo = "$nombre $apellido";  //str
var_dump($nombre_completo);
$presenta_examen = (bool) 1; //true
var_dump($presenta_examen);
$numero_preguntas = 5 + "10"; //Lo castea a int
var_dump($numero_preguntas);
$numero_respuestas = "10" + 0.5; //Lo castea a float
var_dump($numero_respuestas);
$prom_maximo = $numero_respuestas / 1; //float
var_dump($prom_maximo);
$michis = 3 + "5 michis"; //int - Solo lo convierte a int cuando el string comienza con el num
var_dump($michis);


