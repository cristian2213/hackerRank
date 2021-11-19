/*
*Proporción: Es una igualdad entre dos razones *********************************************************************

Esto es una razon:
# paquetes = 1 paquete tiene
# galletas = 4 galletas

Razon1  Razon2
 A      c
---- = ----
 b      d

A,D = Extremos
C,B = Medios

* Ejemplo:
Representacion de la "proporción"

Paquetes:   1      2
           ---- = ----
Galletas:   4      8
* Razonamiento: 1 paquete tiene 4 galleas, pero 2 paquetes tienen 8 en total galletas

* Calcular si es una proporción:
Extremos: A x D = 1 x 8 = 8
Medios:   C X B = 2 x 4 = 8

Conclusión: Como son iguales el producto de los extremos y el producto de los medios,
            entonces se puede afirmar que si es una proporción.

* Razon ********************************************************************************************************
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example:
There are  elements, two positive, two negative and one zero. Their ratios are 2/5, 2/5  and 1/5. 
Results are printed as:
0.400000
0.400000
0.200000
*/

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function plusMinus(arr: number[]): void {
  // Write your code here
  let nNumbers: number = 0,
    pNumbers: number = 0,
    cNumbers: number = 0;
  const totalInts: number = arr.length;

  for (let i: number = 0; i < totalInts; i++) {
    const signN: number = Math.sign(arr[i]);
    if (signN === 1) {
      pNumbers += 1;
    } else if (signN === -1) {
      nNumbers += 1;
    } else { // === 0
      cNumbers += 1;
    }
  }
  console.log(`${(pNumbers / totalInts).toFixed(6)}\n${(nNumbers / totalInts).toFixed(6)}\n${(cNumbers / totalInts).toFixed(6)}`);
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));