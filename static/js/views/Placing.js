

const Placing = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `
        <div class="container-fluid">
        <div class="creditCardForm">
            <div class="heading">
                <h1>Введите данные получателя заказа</h1>
            </div>
            <div class="payment">
                <form>
                    <div class="form-group" id="card-number-field">
                        <label for="cardNumber">Имя</label>
                        <input type="text" class="form-control" id="cardNumber">
                    </div>
                    <div class="form-group" id="card-number-field1">
                        <label for="cardNumber">Фамилия</label>
                        <input type="text" class="form-control" id="cardNumber1">
                    </div>
                    <div class="form-group" id="card-number-field"2>
                        <label for="cardNumber">Номер телефона</label>
                        <input type="text" class="form-control" id="cardNumber2">
                    </div>
                    <div class="form-group" id="card-number-field3">
                        <label for="cardNumber">Электронная почта</label>
                        <input type="text" class="form-control" id="cardNumber3">
                    </div>

                    <div class="form-group" id="pay-now">
                        <a href="/order" data-link class="btn btn-default" id="confirm-purchase">Далее</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    


    
    
        `
    }
}

export default Placing;