const Robotpol = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `

            <section id="single-cosmetic" class="brown-dark">
            <div class="container1">
                <div class="section-heading">
                    <hr>
                    <h2>РОБОТ-ПЫЛЕСОС DREAME F9 PRO</h2>
                    <input type="hidden" class="hidden-title" value="DREAME F9">
                    <hr>
                </div>
                <div class="roww">
                    <div class="col-lg-5 col-md-6 cosmetic-img">
                        <img src="/smarthome-diplom/static/img/vacum1.png" alt="yandex">
                    </div>
                    
                    <div class="col-lg-7 col-md-6 cosmetic-info">
                    <span class="cosmetic-price"><span class="price">459</span> BYN</span>
                        <div class="cosmetic-description">
                            <h3>ОСНОВЫЕ ХАРАКТЕРИСТИКИ</h3>
                            <p>
                            Робот-пылесос DREAME F9 PRO — это высокоэффективное устройство для уборки дома. Он оснащен мощным всасыванием на 4000 Па, что позволяет ему легко справляться с ежедневными задачами по уборке.
                            </p>
                        </div>
                        <div class="cosmetic-description">
                            <h3>СПОСОБ ПРИМЕНЕНИЯ</h3>
                            <p>
                            Робот-пылесос прост в использовании. Прежде всего, убедитесь, что устройство заряжено и подключено к Wi-Fi. Затем, используя приложение DreameVacum на вашем смартфоне, вы можете настроить режимы уборки и расписание. Робот-пылесос автоматически перемещается по комнате, убирая пыль и грязь. После завершения уборки или при разрядке батареи робот автоматически вернется на базу для зарядки.
                            </p>
                        </div>
                        <div class="button-click">
                            <button class="buttonclick" onclick="location.href='/placing'" data-link>Купить онлайн</button>

                            <button class="buttonclick shop__card--btn" data-product-add="1029">Добавить в корзину</button>
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
                    <label>Тип уборки </label>
                    <p>Влажная, Сухая</p>
                </div>
                <div class="section123">
                    <label>Тип пылесборника  </label>
                    <p>Контейнер</p>
                </div>
                <div class="section123">
                    <label>Цвет  </label>
                    <p>Белый</p>
                </div>

            </section>
        
            <section class="charall">
                    <div class="char">
                    <label>Конструкция</label>
                        </div>
                        <div class="section123">
                            <label>Объем пылесборника</label>
                            <p>	0.3  л</p>
                        </div>
                        <div class="section123">
                            <label>Материал корпуса </label>
                            <p>	Пластик</p>
                        </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Питание и производительность</label>
                </div>
                <div class="section123">
                    <label>Тип питания </label>
                    <p>Аккумулятор</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Ориентация в пространстве и управление</label>
                </div>
                <div class="section123">
                    <label>Ориентация в пространстве</label>
                    <p>	Виртуальная стена, Контактный бампер, Лазерная система навигации</p>
                </div>
                <div class="section123">
                    <label>Тип управления </label>
                    <p>Дистанционное управление</p>
                </div>
                <div class="section123">
                    <label>Управление на корпусе </label>
                    <p>Кнопочное</p>
                </div>
                <div class="section123">
                    <label>Пульт дистанционного управления</label>
                    <p>Нет</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Питание</label>
                </div>
                <div class="section123">
                    <label>Тип аккумулятора </label>
                    <p>Li-Ion</p>
                </div>
                <div class="section123">
                    <label>Емкость аккумулятора </label>
                    <p>3200  mAh</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Размеры и вес</label>
                </div>
                <div class="section123">
                    <label>Высота</label>
                    <p>9.7 см</p>
                </div>
            </section>

             <section class="charall">
                <div class="char">
                <label>Гарантийное обслуживание</label>
                </div>
                <div class="section123">
                    <label>Гарантия </label>
                    <p>1 год</p>
                </div>
                <div class="section123">
                    <label>Страна происхождения (производства) </label>
                    <p>Китай</p>
                </div>
            </section>
        `
    }
}

export default Robotpol;