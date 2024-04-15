function calculateTax() {
  const income = parseFloat(document.getElementById('income').value) || 0;
  const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
  const deductions = parseFloat(document.getElementById('deductions').value) || 0;
  const age = document.getElementById('age').value;
  const errorDiv = document.getElementById('errorDiv');

  // Validate inputs
  errorDiv.innerHTML = '';
  if (income === 0 || extraIncome === 0 || deductions === 0 || age === '') {
    errorDiv.textContent = 'Please fill in all the fields.';
    return;
  }

  if (isNaN(income) || isNaN(extraIncome) || isNaN(deductions)) {
    errorDiv.textContent = 'Please enter valid numbers for income, extra income, and deductions.';
    return;
  }

  if (deductions < 0) {
    errorDiv.textContent = 'Deductions cannot be negative.';
    return;
  }

  let tax = 0;
  const taxableIncome = income + extraIncome - deductions;
  if (taxableIncome < 0) {
    errorDiv.textContent = 'Total income after deductions cannot be negative.';
    return;
  }

  if (taxableIncome > 800000) {
    if (age === '<40') {
      tax = 0.3 * (taxableIncome - 800000);
    } else if (age === '≥ 40 & < 60') {
      tax = 0.4 * (taxableIncome - 800000);
    } else if (age === '≥ 60') {
      tax = 0.1 * (taxableIncome - 800000);
    }
  }

  const result = document.getElementById('result');
  result.textContent = `Tax: ${tax.toFixed(2)} Lakhs`;

  const modal = document.getElementById('resultModal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('resultModal');
  modal.style.display = 'none';
}

