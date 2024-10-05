const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const agreementCheckbox = document.getElementById('agreement');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const submitButton = document.getElementById('submit-button');
const successMessage = document.getElementById('success-message');

submitButton.addEventListener('click', () => {
 let isValid = true;

 // Очищаем текст сообщения об ошибке
 successMessage.textContent = '';

 // Валидация имени
 if (nameInput.value.trim() === '') {
  nameError.textContent = 'Пожалуйста, введите имя.';
  nameError.style.color = 'red';
  isValid = false;
 } else {
  nameError.textContent = '';
 }

 // Валидация телефона
 const phoneRegex = /^\+7\d{10}$/;
 if (!phoneRegex.test(phoneInput.value)) {
  phoneError.textContent = 'Некорректный формат номера телефона.';
  phoneError.style.color = 'red';
  isValid = false;
 } else {
  phoneError.textContent = '';
 }

 // Проверка согласия с политикой
 if (!agreementCheckbox.checked) {
  isValid = false;
  if (!confirm('Необходимо согласие с политикой конфиденциальности. Продолжить?')) {
   return; // Прерываем выполнение функции, если пользователь не согласился
  }
 }

 if (isValid) {
  // Отправка формы (замена на реальную отправку)
  if (confirm('Форма отправлена!')) {
   // Здесь можно добавить код для обновления формы, очищения полей и т.д.
  }
 } else {
  successMessage.style.color = 'red';
 }
});
