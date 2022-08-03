'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let array= num.toString().split('');
    let suma=0;
    let i=1;
    for(let elemento of array){
        suma+= elemento*Math.pow(2,array.length-i);
        i++;
    }
    return suma;

}

function DecimalABinario(num) {
  // tu codigo aca
  let cociente=num;
  let  residuo;
  let array=[];
  do{
    residuo=cociente % 2;
    array.unshift(residuo);
    cociente=Math.floor(cociente/2);
  } while(cociente !==0);
  return array.join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}