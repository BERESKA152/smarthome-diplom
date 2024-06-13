const cartIcon = document.querySelector('[data-cart-icon]');
const cart = document.querySelector('[data-cart]');
const btnClose = document.querySelector('[data-cart-btn-close]');


cartIcon.addEventListener('click', () => {
    cart.classList.add('cart__open');
    window.scrollTo(0, 0);
})

btnClose.addEventListener('click', () => {
    cart.classList.remove('cart__open');
})

