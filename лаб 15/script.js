document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const message = document.getElementById("message");
    const form = event.target;
  
    const lastName = form.lastName.value.trim();
    const firstName = form.firstName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const city = form.city.value;
    const study = form.study.checked;
    const course = form.course.value;
    const about = form.about.value.trim();
  
    let errors = [];
  
    if (lastName === "") errors.push("Фамилия не может быть пустой.");
    if (firstName === "") errors.push("Имя не может быть пустым.");
    if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Введите корректный E-mail.");
    if (!/^\+375(25|29|33|44)\d{7}$/.test(phone)) errors.push("Введите корректный номер телефона (формат: +375291234567).");
    if (city === "") errors.push("Выберите город.");
    if (course === "") errors.push("Выберите курс.");
    if (about.length < 10) errors.push("Расскажите о себе минимум в 10 символах.");
  
    if (errors.length > 0) {
      message.textContent = errors.join(" ");
      message.style.color = "red";
    } else {
        alert("Вы уверены что хотели отправить форму?");
        const isConfirmed = confirm("Вы уверены?");
        if (isConfirmed) {
            alert("Форма отправлена.");
            message.textContent = "Форма успешно отправлена!";
            message.style.color = "green";
            form.reset();
        } else {
            alert("Отмена.");
        }
    }
    }
  );
