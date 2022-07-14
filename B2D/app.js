console.log('app loading...')
let decimal = document.getElementById('decimal');
let binary = document.getElementById('binary');
let error = document.getElementById('error');
let binaryNumber = '';
let maxInputLength = 10;
binary.addEventListener('keypress', (e) => {
  error.innerHTML = '';
  if (binaryNumber.length == maxInputLength) {
    error.innerHTML = `You can enter only ${maxInputLength} the length of the binary`;
    return e.preventDefault();
  }
  if (!(e.key == 0 || e.key == 1)) {
    error.innerHTML = 'Invalid key press';
    binaryNumber.replace(e.key, '', '');
    binary.value = binaryNumber;
    e.preventDefault();
    return false;
  }
  binaryNumber += e.key
  decimal.innerHTML = binaryNumber;
})
let count = 0;
let decimalNumber = 0;
window.addEventListener('click', (e) => {
  if (!binaryNumber.length) {
    return e.preventDefault();
  }
  for (let j = binaryNumber.length; j > 0; j--) {
    decimalNumber += Number(getDecimalNumber(j,Number(binaryNumber[count])))
    count++;
  }
  decimal.innerHTML = decimalNumber;
  decimalNumber = 0
})


function getDecimalNumber(count,binary) {
  let n = 0;
  switch (count) {
    case 1: n = binary ? 1 : 0; break;
    case 2: n = binary ? 2 : 0; break;
    case 3: n = binary ? 4 : 0; break;
    case 4: n = binary ? 8 : 0; break;
    case 5: n = binary ? 16 : 0; break;
    case 6: n = binary ? 32 : 0; break;
    case 7: n = binary ? 64 : 0; break;
    case 8: n = binary ? 128 : 0; break;
    case 9: n = binary ? 256 : 0; break;
    case 10: n = binary ? 512 : 0; break;
  }
  console.log(count,binary,n,binaryNumber[count-1])
  return n;
}