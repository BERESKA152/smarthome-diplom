const Chainiksimple = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `

            <section id="single-cosmetic" class="brown-dark">
            <div class="container1">
                <div class="section-heading">
                    <hr>
                    <h2>"УМНЫЙ ЭЛЕКТРОЧАЙНИК XIAOMI SIMPLE "</h2>
                    <input type="hidden" class="hidden-title" value="Xiaomi simlpe">
                    <hr>
                </div>
                <div class="roww">
                    <div class="col-lg-5 col-md-6 cosmetic-img">
                        <img src="/smarthome-diplom/static/img/tee3.png" alt="chainik">
                    </div>
                    
                    <div class="col-lg-7 col-md-6 cosmetic-info">
                    <span class="cosmetic-price"><span class="price">99</span> BYN</span>
                        <div class="cosmetic-description">
                            <h3>ОСНОВЫЕ ХАРАКТЕРИСТИКИ</h3>
                            <p>
                            Xiaomi simple  – это устройство, которое обладает интеллектуальным контролем температуры, нержавеющей сталью AISI 304, элегантным дизайном и быстрым закипанием.
                            </p>
                        </div>
                        <div class="cosmetic-description">
                            <h3>СПОСОБ ПРИМЕНЕНИЯ</h3>
                            <p>
                            Xiaomi simple - поможет вам приготовить идеально горячую воду для чая, кофе или других напитков.
                            </p>
                        </div>
                        <div class="button-click">
                            <button class="buttonclick" onclick="location.href='/placing'">Купить онлайн</button>

                            <button class="buttonclick shop__card--btn" data-product-add="1054">Добавить в корзину</button>
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
                    <label>Бренд:</label>
                    <p>Xiaomi</p>
                </div>
                <div class="section123">
                    <label>Мощность:</label>
                    <p>1200 Вт</p>
                </div>
                <div class="section123">
                    <label>Нагревательный элемент:</label>
                    <p>Заркытый</p>
                </div>
                <div class="section123">
                    <label>Объем воды:</label>
                    <p>1.7 л</p>
                </div>
                <div class="section123">
                    <label>Подключение к сети:</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Фильтр:</label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Материал корпуса:</label>
                    <p>Нержавеющая сталь, стекло</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Функциональные особенности</label>
                </div>
                <div class="section123">
                    <label>Дисплей</label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Таймер</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Индикация уровня воды</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Индикатор работы</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Подстветка</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Защита от перегрева</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Функция поддержания температуры</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Длительное кипячение</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Терморегулятор</label>
                    <p>50, 60, 55, 85, 45, 65, 75, 95, 70, 80, 90, 100</p>
                </div>
                <div class="section123">
                    <label>Тип терморегулятора</label>
                    <p>Ступенчатая регулировка</p>
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

export default Chainiksimple;