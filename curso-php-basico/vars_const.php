<?php

/*
Variable: Un espacio en memoria donde se almacena un dato y que puede variar con el tiempo
- Estructura de una variable:
    variable    asignacion
*/
    $nombre  =  "Kim";
echo $nombre;

echo "\n";

/*
Constante: Un espacaio en memoria donde se almacena un dato y nunca puede cambiar.
- Estrcutura de una constante
    const NOMBRE = asignacion
*/
    const NUM_PI = 3.14;
echo NUM_PI;

const NUM_PI = 4.15;
//Se genera advertencia de PHP, indicando que la constante ya ha sido definida.
echo NUM_PI;
