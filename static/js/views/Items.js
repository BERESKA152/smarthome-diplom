const Items = async () => {
    const getProducts = async () => {
        fetch('smarthome-diplom/static/items.json')
        const request = await fetch('smarthome-diplom/static/items.json');
        const response = await request.json()
        return response
    }

    document.querySelector('#root').innerHTML = renderHtml();
    renderAllProducts();

    function renderHtml() {
        return `
        <section class="hero">
        <div class="container">
            <p class="hero__links">
                <a href="/smarthome-diplom/static/">Главная</a>→<a href="/items">Каталог товаров</a>
            </p>
            <h2 class="hero__title">КАТАЛОГ ТОВАРОВ</h2>
        </div>
    </section>
    <div class="wrapper container">
        <section class="filters">
            <div class="filters__search">
                <label for="search-item"></label>
                <input type="text" placeholder="Поиск" id="search-item" data-search-box>
                <button class="filters__search--btn"></button>
            </div>
            <div class="filters__category">
                <p>Фильтры</p>
                <div class="filters__category--wrapper">
                    <button class="filters__category--btn" data-category="роботы-пылесосы">Роботы-пылесосы</button>
                    <button class="filters__category--btn" data-category="увлажнители">Увлажнители</button>
                    <button class="filters__category--btn" data-category="очистители воздуха">Очистители воздуха</button>
                    <button class="filters__category--btn" data-category="wi-fi">Wi-Fi</button>
                    <button class="filters__category--btn" data-category="датчики умного дома">Датчики умного дома</button>
                    <button class="filters__category--btn" data-category="розетки и выключатели">Розетки и выключатели</button>
                    <button class="filters__category--btn" data-category="видеонаблюдение">Видеонаблюдение</button>
                    <button class="filters__category--btn" data-category="станции">Станции</button>
                    <button class="filters__category--btn" data-category="светильники и лампы">Светильники и лампы</button>
                    <button class="filters__category--btn" data-category="чайники">Чайники</button>
                    <button class="filters__category--btn" data-category="кондиционеры">Кондиционеры</button>
                    <button class="filters__category--btn" data-category="вентиляторы">Вентиляторы</button>
                    <button class="filters__category--btn" data-category="отпариватели и утюги">Отпариватели и утюги</button>
                    <button class="filters__category--btn" data-category="стиральные машины">Стиральные машины</button>
                    <button class="filters__category--btn" data-category="лампочки">Лампочки</button>
                </div>
            </div>
            <div class="filters__price">
                <p>Цена</p>
                <label for="price"></label>
                <input type="range" id="price" data-price-range min="0" max="3000" value="1500"/>
                <p class="filters__price--label">BYN<span data-price-label>1500</span></p>
            </div>
        </section>
        <section class="shop">
            <div class="shop__wrapper" data-items-container>
            </div>
            <button class="shop__btn" data-btn-all>Все товары</button>
        </section>
        `
    }

    async function renderAllProducts() {
        createCard(await getProducts());
    }

    function createCard(products) {
        const container = document.querySelector('[data-items-container]');
        container.innerHTML = '';
        products.map(product => {
            const cardWrapper = document.createElement('div');
            cardWrapper.classList.add('shop__card');
            cardWrapper.id = product.id
            container.appendChild(cardWrapper)
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('shop__card--img');
            cardWrapper.appendChild(imgWrapper)
            const imgProduct = document.createElement('img');
            imgProduct.classList.add('img-responsive')
            imgProduct.src = `smarthome-diplom/static/img/${product.photo}`;
            imgWrapper.appendChild(imgProduct);
            const btn = document.createElement('button');
            btn.classList.add('shop__card--btn');
            btn.setAttribute('data-product-add', product.id)
            btn.innerHTML = '';
            imgWrapper.appendChild(btn);
            const productDesc = document.createElement('div');
            productDesc.classList.add('shop__card--desc');
            cardWrapper.appendChild(productDesc);
            const title = document.createElement('h3');
            title.classList.add('shop__card--title');
            title.innerHTML = product.name;
            productDesc.appendChild(title);
            const price = document.createElement('p');
            price.classList.add('shop__card--price');
            price.innerHTML = `BYN ${product.price}`;
            productDesc.appendChild(price);
            const rate = document.createElement('img');
            productDesc.appendChild(rate);
            const category = document.createElement('p');
            category.classList.add('shop__card--category');
            category.innerHTML = product.category;
            productDesc.appendChild(category);
        })
    }

    const rangeInput = document.querySelector('[data-price-range]');
    const label = document.querySelector('[data-price-label]');

    rangeInput.addEventListener('input', () => {
        let value = rangeInput.value;
        label.textContent = value;
        let percents = (value / rangeInput.max) * 100;
        rangeInput.style.background = `linear-gradient(to right, #ff0000 ${percents}%, transparent ${percents}%`;
    })

    rangeInput.addEventListener('change', () => {
        let value = rangeInput.value;
        filterProductByPrice(value);
    })

    document.querySelector('[data-search-box]').addEventListener('input', e => {
        getSearchValue(e.target.value);
    })

    const getSearchValue = debounce(value => {
        searchProductsByName(value.toLowerCase());
    })

    async function searchProductsByName(value) {
        const products = await getProducts();
        const foundProducts = products.filter(product => product.name.toLowerCase().includes(value))
        return createCard(foundProducts);
    }

    function debounce(cb, delay = 1000) {
        let timeout
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cb(...args)
            }, delay);
        }
    }

    async function filterProductByPrice(value) {
        const products = await getProducts();
        const filerItems = products.filter(product => product.price <= value);
        createCard(filerItems);
    }

    const filterBtns = document.querySelectorAll('[data-category]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let category = btn.getAttribute('data-category');
            switch (category) {
                case 'all':
                    renderAllProducts();
                    break;
                case 'foxkids':
                    findProductsByCategory('foxkid');
                    break;
                case 'other':
                    findOtherProducts();
                    break;
                default:
                    findProductsByCategory(category);
            }
        })
    })

    async function findProductsByCategory(category) {
        const products = await getProducts();
        const chosenProduct = products.filter(product => product.category.toLowerCase() == category)
        createCard(chosenProduct);
    }

    async function findOtherProducts() {
        const products = await getProducts();
        const chosenProduct = products.filter(product => product.category.toLowerCase() !== 'forest' &&
            product.category.toLowerCase() !== 'foxkid');
        createCard(chosenProduct);
    }

    document.querySelector('[data-btn-all]').addEventListener('click', () => {
        renderAllProducts();
    })
}

export default Items;