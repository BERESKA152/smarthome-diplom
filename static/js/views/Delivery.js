const Dilivery = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `
        <section class="hero">
            <div class="container">
                <p class="hero__links">
                    <a href="/" data-link>Главная</a>→<a href="/Dilivery" data-link>Доставка</a>
                </p>
                <h2 class="hero__title">ДОСТАВКА</h2>
            </div>
        </section>
        <section class="history container">
            <div class="history__item">
                <div>
                    <h2>Курьерская доставка по Пинску🚚</h2>
                    <p class="history__item--desc"><b>Стоимость курьерской доставки 5 рубля.</b></p>
                    <pre></pre>
                    <p class="history__item--desc"Доставка осуществляется во все районы Пинска.</p> 
                    <pre></pre>
                    <p class="history__item--desc">Доставка курьером по Пинску осуществляется во все дни с 15:00 до 22:00.</p>
                    <pre></pre>
                    <p class="history__item--desc">Заказы доставляются в два этапа: с 15.00 до 18.00 и с 18:00 до 22:00.</p>
                    <pre></pre>
                    <p class="history__item--desc">Время доставки оговаривается с оператором по телефону. Курьер позвонит за 20 минут до прибытия.</p>
                    <pre></pre>
                    <p class="history__item--desc">- При оформлении заказа с 10.00 до 15.00 товар будет доставлен сегодня.</p>
                    <pre></pre>
                    <p class="history__item--desc">- При оформлении заказа после 15.00 товар будет доставлен завтра. Заказы принимаются до 21.00.</p>
                </div>
            </div>
            <div class="history__item">
                <div>
                    <h2>Самовывоз🛒</h2>
                    <p class="history__item--desc">Адреса пунктов самовывоза:</p>
                    <pre></pre>
                    <p class="history__item--desc">г. Пинск, Улица Тызенгауза, 4 (ТЦ Galileo 2-ой эт.) — с 10 до 22 Вс - Чт, с 10 до 23 Пт - Сб  (+375 25) 675-69-76) ;</p>
                    <pre></pre>
                    <p class="history__item--desc">г. Пинск, ул. Тимирязева 127 (ТД Ждановичи, здание "Радиомаркет", павильон E30) — c 10 до 17 вт-вс, понедельник выходной (+375 25) 675-69-77 , +375 25) 675-69-78)</p>
                    <br>
                </div>
            </div>
            <div class="history__item">
                <div>
                    <h2>Доставка по Беларуси🗺️</h2>
                    <p class="history__item--desc">Cтоимость доставки почтой 5 рубля.</p>
                    <pre></pre>
                    <p class="history__item--desc">Отправка посылок осуществляется в будние дни. Время доставки занимает 2 дня.</p>
                    <pre></pre>
                    <p class="history__item--desc">- При оформлении заказа с 10.00 до 15.00 товар будет отправлен в этот же день.</p>
                    <pre></pre>
                    <p class="history__item--desc">- При оформлении заказа после 15.00 товар будет отправлен утром следующего дня.</p>
                </div>
            </div>
        </section>
        `
    }
}

export default Dilivery;