
import { formatCurrency } from './../JScript/utils/money.js';

if(formatCurrency(2050)==='20.50'){
  console.log('Passed');
}else{
  consolelog('Failed');
}

if(formatCurrency(0)==='0.00'){
  console.log('passed');
}else{
  console.log('Failed');
}

if(formatCurrency(2000.5)==='20.01'){
console.log('Passed');
}else{
  console.log('Failed');
}
