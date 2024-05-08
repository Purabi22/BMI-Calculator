const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('.custom-input').value)
  const weight = parseInt(document.querySelector('.custom-input1').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    let category = '';

    if(bmi < 18.6) {
      category = 'Underweight';
    } else if(bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal weight';
    } else if(bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    results.innerHTML = `
      <span>Your BMI is ${bmi}</span>
      <br> 
      <span>Category: ${category}</span>
    `;
  }
});


