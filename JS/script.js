document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    // Показываем сообщение
    document.getElementById("successMessage").style.display = "block";

    // Очищаем форму
    this.reset();
});
