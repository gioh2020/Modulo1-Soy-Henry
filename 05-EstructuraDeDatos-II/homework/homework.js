'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.len = 0   
  this.head = null 
}
function Node(value) {
  this.value = value;
  this.next = null
}
LinkedList.prototype.add = function(value){
  var node = new Node(value),                
  current = this.head  ;  
  console.log(current)                    
  if(!current){
  this.head = node   ;                       
  this.len++;
  return node;}
  

  while(current.next){
    current = current.next                
  }
 current.next = node
 this.len++
 return node

}

LinkedList.prototype.search = function(valor){
let current = this.head

while(current){
  if(typeof valor === 'function'){
    if (valor(current.value)){
      return current.value
    }
  }
  if(current.value === valor) {
    return current.value
  }
  current = current.next
}

return null;

}

LinkedList.prototype.remove = function(){
 var  current = this.head;
 
 console.log(current)
 if(this.head){
  if(this.head.next === null){
    let n = current.value 
    this.head = null
    return n
  }
  while(current.next.next){
    current = current.next
   
  }
  let valorEliminado = current.next.value
  current.next = null
  return valorEliminado

}


 

}




/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35
  this.arreglo = []
}

HashTable.prototype.hash = function(valor){
  let codeHash = 0
  for(let i = 0; i < valor.length; i++){
    codeHash += valor.charCodeAt(i)
    console.log(codeHash)

  }
  console.log(codeHash%this.numBuckets)
  return codeHash % this.numBuckets

};
HashTable.prototype.set = function(key, valor ){
  let index = this.hash(key)
  if (typeof key !== "string") throw TypeError("Keys must be strings");
  if (this.arreglo[index] === undefined) {
    this.arreglo[index] = {}};
  this.arreglo[index][key] = valor
 
  
};
HashTable.prototype.get = function(key){
  let index = this.hash(key)
  return this.arreglo[index][key]
}
HashTable.prototype.hasKey = function(key){
  let index = this.hash(key)
  
  return !!this.arreglo[index][key]
}

let hasm = new HashTable()
hasm.set('key1', 'val1')
hasm.hasKey('key1')
console.log(hasm.arreglo)
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
