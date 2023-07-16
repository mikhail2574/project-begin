const form = document.getElementById('rent-form'); // Замініть 'myForm' на id вашої форми
const input1 = document.getElementById('user_name'); // Замініть 'input1' на id першого поля форми
const input2 = document.getElementById('user_email');
const input3 = document.getElementById('user_phone'); // Замініть 'input2' на id другого поля форми
// Замініть 'input2' на id другого поля форми
const submitBtn = document.getElementById('submitBtn'); // Замініть 'submitBtn' на id вашої кнопки
let title1 = input1.title;
// Додаємо обробник події "input" для полів форми
input1.addEventListener('input', validateForm);
input2.addEventListener('input', validateForm);
input3.addEventListener('input', validateForm);

submitBtn.addEventListener('click', validateForm);

// Функція для перевірки заповненості полів та вимкнення кнопки
function validateForm(event) {
  event.preventDefault();
  const patern = /^[a-zA-Z]+\s[a-zA-Z]+$/;
  if (patern.test(input1.value)) {
    // input2.value.trim() !== '' &&
    // input3.value.trim() !== ''
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
    input1.title = ' pppppp'; // Активуємо кнопку, якщо обидва поля заповнені // Вимикаємо кнопку, якщо хоча б одне поле не заповнене
  }
}
