'use strict';

function BinarioADecimal(num) {
   let arraynum = num.split('');
   let exp = 0;
   let numBinario = 0;
   let posicion = arraynum.length - 1;
   

   for(let i = 0; i < arraynum.length; ++i){
      exp = Math.pow(2, i)
      numBinario += exp * arraynum[posicion]
      posicion -= 1
     


   }
   return numBinario
   
}

function DecimalABinario(num) {
   let numero = num
   let numBinario = '' 
   while( numero > 0){
      if (numero % 2 === 0){
         numero = numero / 2;
         numBinario += '0'   
      }
      else {
         numero -= 1
         numero = numero / 2
         numBinario += '1'
      }
   }
   numBinario = numBinario.split('').reverse().join('')
   return numBinario
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
