const Ventilatordeerma = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `

            <section id="single-cosmetic" class="brown-dark">
            <div class="container1">
                <div class="section-heading">
                    <hr>
                    <h2>УМНЫЙ ВЕНТИЛЯТОР DEERMA DEM FD15W</h2>
                    <input type="hidden" class="hidden-title" value="Deerma Dem">
                    <hr>
                </div>
                <div class="roww">
                    <div class="col-lg-5 col-md-6 cosmetic-img">
                        <img src="/smarthome-diplom/static/img/venti1.png" alt="yandex">
                    </div>
                    
                    <div class="col-lg-7 col-md-6 cosmetic-info">
                    <span class="cosmetic-price"><span class="price">149</span> BYN</span>
                        <div class="cosmetic-description">
                            <h3>ОСНОВЫЕ ХАРАКТЕРИСТИКИ</h3>
                            <p>
                            DEERMA DEM-FD15W — это мощное устройство для циркуляции воздуха. Модель можно использовать как на полу, так и на столе, а её простой переключатель позволяет легко менять режимы работы.
                            </p>
                        </div>
                        <div class="cosmetic-description">
                            <h3>СПОСОБ ПРИМЕНЕНИЯ</h3>
                            <p>
                            Умный вентилятор Deerma DEM-FD15W представляет собой функциональное устройство, обеспечивающее активную циркуляцию воздуха1. Он поддерживает три скорости вращения, а также автоматический поворот вправо и влево на 90° и возможность наклона вверх-вниз до 30°.
                            </p>
                        </div>
                        <div class="button-click">
                            <a class="buttonclick" href='/placing'" data-link>Купить онлайн</a>

                            <button class="buttonclick shop__card--btn" data-product-add="1025">Добавить в корзину</button>
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
                    <p>Evolution</p>
                </div>
                <div class="section123">
                    <label>Мощность</label>
                    <p>	55  Вт</p>
                </div>
                <div class="section123">
                    <label>Цвет </label>
                    <p>Белый</p>
                </div>
                <div class="section123">
                    <label>Комплектация </label>
                    <p>Вентилятор, пульт ДУ, документация</p>
                </div>
                <div class="section123">
                    <label>Дополнительно </label>
                    <p>Управление через приложение Smart Life</p>
                </div>
            </section>
        
            <section class="charall">
                    <div class="char">
                    <label>Конструкция</label>
                        </div>
                        <div class="section123">
                            <label>Тип вентилятора</label>
                            <p>Напольный/настольный</p>
                        </div>
                        <div class="section123">
                            <label>Рабочий механизм </label>
                            <p>Осевой</p>
                        </div>
                        <div class="section123">
                            <label>Питание </label>
                            <p>	Сеть</p>
                        </div>
                        <div class="section123">
                            <label>Колонный тип </label>
                            <p>Нет</p>
                        </div>
                        <div class="section123">
                            <label>Дисплей </label>
                            <p>Да</p>
                        </div>
                        <div class="section123">
                            <label>Защита от влаги </label>
                            <p>Нет</p>
                        </div>
                        <div class="section123">
                            <label>Материал корпуса  
 </label>
                            <p>	Пластик
</p>
                        </div>
                        <div class="section123">
                            <label>Материал лопастей  
 </label>
                            <p>	Металл, Пластик
</p>
                        </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Управление и функции</label>
                </div>
                <div class="section123">
                    <label>Управление </label>
                    <p>Сенсорное</p>
                </div>
                <div class="section123">
                    <label>Регулировка скорости вращения лопастей 
</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Количество скоростей вращения лопастей  
</label>
                    <p>9</p>
                </div>
                <div class="section123">
                    <label>Пульт ДУ </label>
                    <p>	Да</p>
                </div>
                <div class="section123">
                    <label>Таймер </label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Термометр </label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Задержка отключения </label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Датчик движения </label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Датчик влажности </label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Пароувлажнение  </label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Функция наклона </label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Функция поворота </label>
                    <p>Да</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Размеры и вес</label>
                </div>
                <div class="section123">
                    <label>Диаметр лопастей  
</label>
                    <p>40 см</p>
                </div>
                <div class="section123">
                    <label>Высота</label>
                    <p>60 см</p>
                </div>
                <div class="section123">
                    <label>Вес</label>
                    <p>5.4 кг</p>
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

export default Ventilatordeerma;