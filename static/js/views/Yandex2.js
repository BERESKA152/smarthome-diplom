const Yandex2 = async () => {
    document.querySelector('#root').innerHTML = renderHtml();

    function renderHtml() {
        return `

            <section id="single-cosmetic" class="brown-dark">
            <div class="container1">
                <div class="section-heading">
                    <hr>
                    <h2>УМНАЯ КОЛОНКА ЯНДЕКС СТАНЦИЯ 2 YNDX-00051K</h2>
                    <input type="hidden" class="hidden-title" value="Yandex Alisa 2">
                    <hr>
                </div>
                <div class="roww">
                    <div class="col-lg-5 col-md-6 cosmetic-img">
                        <img src="/smarthome-diplom/static/img/yandex.png" alt="yandex">
                    </div>
                    
                    <div class="col-lg-7 col-md-6 cosmetic-info">
                    <span class="cosmetic-price"><span class="price">659</span> BYN</span>
                        <div class="cosmetic-description">
                            <h3>ОСНОВЫЕ ХАРАКТЕРИСТИКИ</h3>
                            <p>
                            Умная колонка Яндекс Станция 2 (YNDX-00051K) — это мощное устройство для воспроизведения звука и управления умным домом. Она обеспечивает чистый объемный звук, благодаря чему вы можете наслаждаться любимой музыкой, фильмами и радиоканалами.
                            </p>
                        </div>
                        <div class="cosmetic-description">
                            <h3>СПОСОБ ПРИМЕНЕНИЯ</h3>
                            <p>
                            Умная колонка Яндекс Станция 2 (YNDX-00051K) предназначена для воспроизведения звука — музыки, фильмов, радиоканалов. Она подключается к другим устройствам (ноутбукам, телевизорам, смартфонам) посредством Bluetooth.
                            </p>
                        </div>
                        <div class="button-click">
                            <button class="buttonclick" onclick="location.href='/placing'" data-link>Купить онлайн</button>

                            <button class="buttonclick shop__card--btn" data-product-add="1007">Добавить в корзину</button>
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
                    <p>YANDEX</p>
                </div>
                <div class="section123">
                    <label>Умная колонка:</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Дисплей:</label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Материал корпуса:</label>
                    <p>Пластик, Текстиль</p>
                </div>
                <div class="section123">
                    <label>Подсветка:</label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Дополнительно:</label>
                    <p>Wi-Fi, Голосовой ассистент Алиса, ZigBee, Функция запоминания голоса</p>
                </div>
            </section>
        
            <section class="charall">
                    <div class="char">
                    <label>Технические характеристики</label>
                        </div>
                        <div class="section123">
                            <label>Общая выходная мощность</label>
                            <p>30 Вт</p>
                        </div>
                        <div class="section123">
                            <label>Нижняя граница частотного диапазона </label>
                            <p>65 Гц</p>
                        </div>
                        <div class="section123">
                            <label>Верхняя граница частотного диапазона </label>
                            <p>65 Гц</p>
                        </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Функциональные особенности</label>
                </div>
                <div class="section123">
                    <label>Голосовой ассистент </label>
                    <p>Алиса</p>
                </div>
                <div class="section123">
                    <label>Проигрывание аудио по USB </label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Слот для карт памяти  </label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Выход на наушники</label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Пульт Д/У</label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Bluetooth</label>
                    <p>5.0</p>
                </div>
                <div class="section123">
                    <label>NFC</label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Airplay</label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Питание от сети </label>
                    <p>Да</p>
                </div>
                <div class="section123">
                    <label>Питание от аккумулятора </label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Функция зарядного устройства</label>
                    <p>Нет</p>
                </div>
                <div class="section123">
                    <label>Пыле- и влагозащита</label>
                    <p>Да</p>
                </div>
            </section>

            <section class="charall">
                <div class="char">
                <label>Размеры и вес</label>
                </div>
                <div class="section123">
                    <label>Высота</label>
                    <p>199  мм</p>
                </div>
                <div class="section123">
                    <label>Ширина</label>
                    <p>123  мм</p>
                </div>
                <div class="section123">
                    <label>Глубина</label>
                    <p>99  мм</p>
                </div>
                <div class="section123">
                    <label>Вес</label>
                    <p>1.3  кг</p>
                </div>
            </section>
        `
    }
}

export default Yandex2;