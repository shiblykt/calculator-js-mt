const display = (num) => {
  document.getElementById('view').value += num;
}; //getting number inputs

const operator = (op) => {
  a = parseFloat(document.getElementById('view').value); //storing 1st input as a float value
  sign = op;
  document.getElementById('view').value = '';
}; //getting mathematical operators

const clr = () => {
  document.getElementById('view').value = '';
}; //clearing entries

const solve = () => {
  b = parseFloat(document.getElementById('view').value); //storing 2nd input as a float value

  if (sign == '+') {
    result = a + b;
  }
  if (sign == '-') {
    result = a - b;
  }
  if (sign == '*') {
    result = a * b;
  }
  if (sign == '/') {
    result = a / b;
  }

  document.getElementById('view').value = result; //displaying result
};
