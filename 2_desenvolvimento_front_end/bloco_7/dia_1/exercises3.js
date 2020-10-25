const fatorial = (number) => {
  if (number <= 1) return 1;
  return number * fatorial (number - 1);
}

console.log(fatorial(5));