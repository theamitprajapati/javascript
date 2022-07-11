console.log('app loading...')
let decimal = document.getElementById('decimal');
let binary = document.getElementById('binary');
let binaryNumber = '';
binary.addEventListener('keypress', (e) => {
    document.getElementById('error').innerHTML='';
   if(!(e.key == 0 || e.key == 1)){
     document.getElementById('error').innerHTML='Invalid key press';
     binaryNumber.replace(e.key,'','');
     console.log(binaryNumber)
     binary.value = binaryNumber;
     return false;
   }
   binaryNumber +=  e.key

    decimal.innerHTML = binaryNumber;
})
