function createPhoneNumber(numbers){
  if(!numbers.lenght === 10) return;
  numbers = numbers.join('');
  return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6,10)}`
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"