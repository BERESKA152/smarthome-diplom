const Routerax = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `

            <section id="single-cosmetic" class="brown-dark">
            <div class="container1">
                <div class="section-heading">
                    <hr>
                    <h2>"РОУТЕР XIAOMI MI ROUTER AX3200"</h2>
                    <input type="hidden" class="hidden-title" value="Router MI">
                    <hr>
                </div>
                <div class="roww">
                    <div class="col-lg-5 col-md-6 cosmetic-img">
                        <img src="/smarthome-diplom/static/img/wifi.png" alt="wifi">
                    </div>
                    
                    <div class="col-lg-7 col-md-6 cosmetic-info">
                    <span class="cosmetic-price"><span class="price">249</span> BYN</span>
                        <div class="cosmetic-description">
                            <h3>ОСНОВЫЕ ХАРАКТЕРИСТИКИ</h3>
                            <p>
                            Роутер Xiaomi Mi Router AX3200 — это высокопроизводительное устройство, предназначенное для обеспечения быстрого и стабильного интернет-соединения. Он поддерживает стандарт Wi-Fi 6 (802.11ax), который обеспечивает более высокую скорость передачи данных.
                            </p>
                        </div>
                        <div class="cosmetic-description">
                            <h3>СПОСОБ ПРИМЕНЕНИЯ</h3>
                            <p>
                            Роутер Xiaomi Mi Router AX3200 прост в использовании. После подключения к сети питания и интернету, вы можете настроить его с помощью приложения Mi Wi-Fi на вашем смартфоне. В приложении вы можете установить имя сети (SSID) и пароль, а также настроить другие параметры, такие как родительский контроль и гостевой доступ. Роутер автоматически обновляет свое программное обеспечение, чтобы обеспечить наилучшую производительность и безопасность. Благодаря поддержке Wi-Fi 6, он обеспечивает высокую скорость и стабильность соединения, что делает его идеальным для стриминга видео высокой четкости, игр онлайн и других требовательных к интернету задач.
                            </p>
                        </div>
                        <div class="button-click">
                            <button class="buttonclick" onclick="location.href='/placing'" data-link>Купить онлайн</button>

                            <button class="buttonclick shop__card--btn" data-product-add="1003">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
                <p class="disclaimer">Товары вы можете приобрести непосредственно в нашем магазине</p>
            </div>
            </section>
            
            <section class="charall">
                    <div class="charsag">
                        <p>Характеристики</p>
                    </div>
            <div class="char">
            <label>Основные</label>
                </div>
                <div class="section123">
                    <label>Бренд</label>
                    <p>Xiaomi</p>
                </div>
                <div class="section123">
                    <label>Стандарты беспроводной связи</label>
                    <p>802.11ax</p>
                </div>
                <div class="section123">
                    <label>Максимальная скорость связи </label>
                    <p>1774  Мбит/с</p>
                </div>
                <div class="section123">
                    <label>Протоколы безопасности беспроводной сети </label>
                    <p>WEP, WPA, WPA2-PSK, WPA3-PSK</p>
                </div>
                <div class="section123">
                    <label>Поддержка сотовой связи </label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Цвет </label>
                    <p>Черный</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Интерфейсы и порты</label>
                </div>
                <div class="section123">
                    <label>Всего LAN-портов </label>
                    <p>4</p>
                </div>
                <div class="section123">
                    <label>WAN-порты </label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Порты USB </label>
                    <p>Нет</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Беспроводная сеть</label>
                </div>
                <div class="section123">
                    <label>Количество антенн</label>
                    <p>4</p>
                </div>
                <div class="section123">
                    <label>Диапазон частот </label>
                    <p>2.4, 5  ГГц</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Гарантийное обслуживание</label>
                </div>
                <div class="section123">
                    <label>Гарантия</label>
                    <p>1 год</p>
                </div>
                <div class="section123">
                    <label>Страна происхождения (производства)</label>
                    <p>Китай</p>
                </div>
            </section>
        `
    }
}

export default Routerax;