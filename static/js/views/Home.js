const Home = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    // Добавьте обработчик событий для кнопки
    document.querySelector('.join button').addEventListener('click', function(event) {
        event.preventDefault(); // Предотвратите отправку формы

        const emailInput = document.querySelector('.join input[type="email"]');
        const emailValue = emailInput.value;

        // Проверьте, содержит ли значение поля ввода один из указанных доменов
        if (emailValue.includes('@gmail.com') || emailValue.includes('@mail.ru') || emailValue.includes('@yandex.ru')) {
            this.style.backgroundColor = 'green'; // Измените цвет кнопки на зелёный
            this.textContent = 'ОТПРАВЛЕНО!'; // Измените текст кнопки
        } else {
            alert('Пожалуйста, введите адрес электронной почты с доменом @gmail.com, @mail.ru или @yandex.ru');
        }
    });
    function renderHtml() {
        return `
        <section class="intro">
        <div class="container">
            <h1 class="intro__title">SMART HOME</h1>
            <p class="intro__desc">"У нас техника настолько умная, что она даже знает, когда вам нужен кофе"</p>
            <a href="/smarthome-diplom/static/history" class="home-page-link">Подробнее</a>
        </div>
    </section>

    <section class="goods">
        <div class="recommended-products">
            <span class="red-bar"></span>
                <h2>Рекомендуемые товары</h2>
        </div>
        <div class="container goods__wrapper">
                <a href="/smarthome-diplom/static/catalog/yandex2" class="goods__item--01">
                <div class="goods__item">
                    <div class="goods__item--desc">
                        <p class="goods__item--tag">Станции</p>
                        <h3 class="goods__item--title">Умная колонка Яндекс Alisa 2</h3>
                        <p class="shop__card--price1">BYN 659</p>
                    </div>
                    <img class="goods__item--pic img-responsive" src="../static/img/yandexstn.png" alt="">
                </div>
                </a>

                <a href="/smarthome-diplom/static/catalog/chainiksimple" class="goods__item--02">
            <div class="goods__item">
                <div class="goods__item--desc">
                    <p class="goods__item--tag">Чайники</p>
                    <h3 class="goods__item--title">Чайник Xiaomi Simple</h3>
                    <p class="shop__card--price2">BYN 99</p>
                </div>
                <img class="goods__item--pic img-responsive" src="../static/img/chainik.png" alt="">
            </div>
            </a>
            <a href="/smarthome-diplom/static/catalog/ventilatordeerma" class="goods__item--03">
            <div class="goods__item">
                <div class="goods__item--desc">
                    <p class="goods__item--tag">Вентиляторы</p>
                    <h3 class="goods__item--title">Вентилятор Deerma DEM FD15W</h3>
                    <p class="shop__card--price3">BYN 149</p>
                </div>
                <img class="goods__item--pic img-responsive" src="../static/img/ventilator1.png" alt="">
            </div>
            </a>
            <a href="/smarthome-diplom/static/catalog/robotpol" class="goods__item--04">
            <div class="goods__item">
                <div class="goods__item--desc">
                    <p class="goods__item--tag">Роботы-пылесосы</p>
                    <h3 class="goods__item--title">Робот-пылесос Dreame F9 Pro</h3>
                    <p class="shop__card--price4">BYN 459</p>
                </div>
                <img class="goods__item--pic img-responsive" src="../static/img/polesos1.png" alt="">
            </div>
            </a>
            <a href="/smarthome-diplom/static/catalog/routerax" class="goods__item--05">
            <div class="goods__item">
                <div class="goods__item--desc">
                    <p class="goods__item--tag">Wi-Fi</p>
                    <h3 class="goods__item--title">Роутер Xiaomi Mi Router AX3200</h3>
                    <p class="shop__card--price4">BYN 249</p>
                </div>
                <img class="goods__item--pic img-responsive" src="../static/img/router.png" alt="">
            </div>
            </a>
        </div>
    </section>

    <section class="map">
        <div class="maps">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa38e41d2ef74c8935101af53e6fce982a0916785d8bcf997e471ee559726a153&source=constructor" width="1530" height="400"  frameborder="0"></iframe>
        </div>
    </section>
    <section class="join">
    <div class="container">
        <h2>Подписаться на новости и акции</h2>
        <form>
            <input type="email" id="email" placeholder="Введите вашу электронную почту">
            <button type="submit">Подписаться</button>
        </form>
    </div>
</section>

        `
    }
}

export default Home;
