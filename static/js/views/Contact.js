const Contact = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `
        <section class="hero">
            <div class="container">
                <p class="hero__links">
                    <a href="/">Главная</a>→<a href="/Contact">Контакты</a>
                </p>
                <h2 class="hero__title">КОНТАКТЫ</h2>
            </div>
        </section>
            <section class="history container">
            <div class="history__item">
            <div class="text-content">
                <h3>Контакты для покупателей</h3>
                <br>
                <p class="history__item--desc">📞ㅤ+375 (17) 675 69 76</p> 
                <p class="history__item--desc">📞ㅤ+375 (29) 6-756-976 МТС</p> 
                <p class="history__item--desc">📞ㅤ+375 (44) 6-756-976 А1</p> 
                <p class="history__item--desc">📞ㅤ+375 (25) 6-756-976 life;)</p> 
                <br>
                <p class="history__item--desc">📩ㅤsmarthome@gmail.com</p> 
                <br>
                <p class="history__item--desc">📍ㅤБеларусь, Брестская область, г.Пинск, Улица Тызенгауза, 4</p> 
                <br>
                <p class="history__item--desc">По вопросам приобретения товаров по безналичному расчету обращайтесь, пожалуйста, в отдел продаж.</p> 
                <p class="history__item--desc">Цель приобретения — собственное потребление:</p> 
                <br>
                <p class="history__item--desc">📞ㅤ+375 (33) 488-59-72 МТС</p> 
                <p class="history__item--desc">📞ㅤ+375 (29) 488-59-72 А1</p> 
                <p class="history__item--desc">📞ㅤ+375 (25) 488-59-72 life;)</p> 
                <br>
                <p class="history__item--desc">Цель приобретения — оптовые продажи:</p> 
                <br>
                <p class="history__item--desc">📩ㅤsmarthomeopt@gmail.com</p> 
            </div>
                <div class="maps">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa38e41d2ef74c8935101af53e6fce982a0916785d8bcf997e471ee559726a153&source=constructor" width="600" height="396" frameborder="0"></iframe>
                </div>
            </div>        
        </section>

        `
    }
}

export default Contact;