
const Order = async () => {
    document.querySelector('#root').innerHTML = renderHtml();
    
    document.querySelector('#cvv').addEventListener('input', function (e) {
        this.value = this.value.replace(/[^0-9]/g, ''); // Удаляем все нецифровые символы
        if (this.value.length > 3) {
            this.value = this.value.slice(0, 3); // Ограничиваем длину до 3 цифр
        }
        if (this.value.length === 3) {
            let that = this;
            setTimeout(function() {
                that.value = '•'.repeat(that.value.length);
            }, 500); // Задержка 0.5 секунды
        }
    });
    
    

    document.querySelector('#owner').addEventListener('input', function (e) {
        this.value = this.value.replace(/[^a-zA-Zа-яА-Я\s]/g, ''); // Удаляем все символы, которые не являются буквами
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '').toUpperCase(); // Удаляем все символы, которые не являются английскими буквами и преобразуем в верхний регистр
    });

    document.getElementById('cardNumber').addEventListener('input', function (e) {
        var target = e.target, position = target.selectionEnd, length = target.value.length;
       
        target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
       
        target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);
       
        if (target.value.replace(/\s/g, '').length > 16) {
            target.value = target.value.slice(0, -1);
        }
    });
    
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        var target = e.target,
            value = target.value;
    
        // Получите элементы изображений
        var visa = document.getElementById('visa');
        var mastercard = document.getElementById('mastercard');
        var amex = document.getElementById('amex');
    
        // Сделайте все изображения цветными по умолчанию
        visa.style.filter = "none";
        mastercard.style.filter = "none";
        amex.style.filter = "none";
    
        // Если введена цифра 4, сделайте mastercard и amex серыми
        if (value.charAt(0) === '4') {
            mastercard.style.filter = "grayscale(100%)";
            amex.style.filter = "grayscale(100%)";
        }
        // Если введена цифра 5, сделайте visa и amex серыми
        else if (value.charAt(0) === '5') {
            visa.style.filter = "grayscale(100%)";
            amex.style.filter = "grayscale(100%)";
        }
        // Если введена цифра 3, сделайте visa и mastercard серыми
        else if (value.charAt(0) === '3') {
            visa.style.filter = "grayscale(100%)";
            mastercard.style.filter = "grayscale(100%)";
        }
        // Если введены цифры 1, 2, 6, 7, 8, 9 или 0, сделайте все изображения серыми
        else if (['1', '2', '6', '7', '8', '9', '0'].includes(value.charAt(0))) {
            visa.style.filter = "grayscale(100%)";
            mastercard.style.filter = "grayscale(100%)";
            amex.style.filter = "grayscale(100%)";
        }
    });
    
    

    function renderHtml() {
        return `
        <div class="container-fluid">
        <div class="creditCardForm">
            <div class="heading">
                <h1>Введите данные</h1>
            </div>
            <div class="payment">
                <form>
                    <div class="form-group owner">
                        <label for="owner">Имя держателя</label>
                        <input type="text" class="form-control" id="owner">
                    </div>
                    <div class="form-group CVV">
                        <label for="cvv">CVV-код</label>
                        <input type="text" class="form-control" id="cvv">
                    </div>
                    <div class="form-group" id="card-number-field">
                        <label for="cardNumber">Номер карты</label>
                        <input type="text" class="form-control" id="cardNumber">
                    </div>
                    <div class="form-group" id="expiration-date">
                        <label>Дата окончания срока</label>
                        <select>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select>
                            <option value="17"> 2024</option>
                            <option value="17"> 2025</option>
                            <option value="18"> 2026</option>
                            <option value="19"> 2027</option>
                            <option value="20"> 2028</option>
                            <option value="22"> 2029</option>
                            <option value="23"> 2030</option>
                        </select>
                    </div>
                    <div class="form-group" id="credit_cards">
                        <img src="/smarthome-diplom/static/img/visa.jpg" id="visa">
                        <img src="/smarthome-diplom/static/img/mastercard.jpg" id="mastercard">
                        <img src="/smarthome-diplom/static/img/amex.jpg" id="amex">
                    </div>
                    <div class="form-group" id="pay-now">
                        <button type="submit" class="btn btn-default" id="confirm-purchase"><a href='/smarthome-diplom/static/js/views/probnik.html'>Подтвердить</a></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
        `
        
    }
}

export default Order;

