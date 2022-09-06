'use strict'
// No cambies los nombres de las funciones.

  function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1){
    return array;
  }
  
  var pivot = array[0];
  
  var left = [];
  var equal = [];
  var right = [];

  for(let i = 0; i < array.length; i++){
    if(array[i]<pivot){
      left.push(array[i]);

    }
    else if(array[i]===pivot){
      equal.push(array[i]);
    }
    else{
        right.push(array[i]);
    }
  }
  return quickSort(left).concat(equal).concat(quickSort(right));


}

  function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length===1){
    return array;
  }

  var mitad=Math.floor(array.length/2);
  var left=array.slice(0,mitad);
  var right=array.slice(mitad);

  return merge(mergeSort(left),mergeSort(right));
}


function merge(left,right){
  var leftIndex=0;
  var rightIndex=0;
  var array=[];

  while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex]<right[rightIndex]){
      array.push(left[leftIndex])
      leftIndex++;
    }
    else{
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
