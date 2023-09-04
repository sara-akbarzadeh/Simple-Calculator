const resultInput = document.getElementById('result');

function appendValue(value) {
  resultInput.value += value;
}

function calculate() {
  try {
    const result = eval(resultInput.value);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = 'Error';
  }
}

function clearInput() {
  resultInput.value = '';
}
