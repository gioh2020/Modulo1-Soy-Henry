'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
let array = [1]
let resultado = num 

for(let i = 2; i <= resultado; i++){
  if(resultado % i === 0){ 
    array.push(i) ;
    resultado = resultado / i;
    i--;
  }
}
return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let arr = array
  let save = 0
  for(let i = 0; i < arr.length-1; i++){
    for(let n = 0; n < arr.length - 1; n++){
      if(arr[n]> arr[n +1]){
        save = array[n];
        array[n] = array[n +1];
        array[n + 1]= save;
        ;
      }     
    } 
  }
  return array
   

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1;i <array.length;i++ ){
    var insertar =array[i]
    var j = j -1
  
  for (j; j >= 0; j--){
    if (array[j] > insertar) array[j +1] = array[j];
    else break;
  }
  array[j+1] = insertar;

console.log(array)

 }
console.log(insertionSort([3,9,5,6,1])) 
return array


//   let array = arr
//   let save = null//2
//   let nu = 0 //1


//     for(let n = 0; n < array.length; n++){
//       if(array[n]>array[n+1]){
//         save = array[n+1]
//         array[n+1] = array[n] //
//         nu = n 
//         for(let j = nu; j > 0 ; j){
//           if(save < array[j-1]){
//             array[j] = array[j-1]
//             array[j-1] = save
            
//           }
          
//           else break;
  
//           }
          
//         }  
//         nu  
//         save 
//       console.log(array)
//     }
    

// return array
}
// console.log(insertionSort([3,5,2,4,]))


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length- 1; i++){
    let min = i;

    for(let j = i+1;j < array.length; j++){
      if(array[j]< array[min] )min = j;
    }

    if(min !== i) swap(array,i, min);
  }
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
