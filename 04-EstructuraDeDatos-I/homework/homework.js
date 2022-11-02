'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n == 1 ) return 1;
   if (n <= 0) return 0;
   return n * nFactorial(n - 1);
                                 
      
}
console.log(nFactorial(3))

// EJERCICIO 2
// 0 1 1 2 3 5 8 13 21 34
  
function nFibonacci(n) {
   if(n < 2) return n
 return nFibonacci(n - 2) + nFibonacci(n - 1)
}
console.log(nFibonacci(99))
//
// EJERCICIO 3
function Queue() {
   this.cola = []; 
}
Queue.prototype.enqueue = function(valor){
   return this.cola.push(valor);
   
}
Queue.prototype.dequeue = function(){
   return this.cola.shift();

   
}
Queue.prototype.size = function(){
   return this.cola.length;
   
}

let constructor = new Queue();




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
