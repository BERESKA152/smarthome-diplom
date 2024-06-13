import Home from './views/Home.js';
import History from './views/History.js'
import Items from './views/Items.js';
import Payment from './views/Payment.js';
import Delivery from './views/Delivery.js';
import Contact from './views/Contact.js';
import Order from './views/Order.js';
import Placing from './views/Placing.js';
import Yandex2 from './catalog/Yandex2.js';
import Chainiksimple from './catalog/Chainiksimple.js';
import Ventilatordeerma from './catalog/Ventilatordeerma.js';
import Robotpol from './catalog/Robotpol.js';
import Routerax from './catalog/Routerax.js';

const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
    window.scrollTo(0, 0);
}

const router = async () => {
    // ТУТ УКАЗЫВАЕШЬ ПУТИ И СТРАНИЦЫ
    const routers = [
        { path: '/', view: Home },
        { path: '/items', view: Items },
        { path: '/history', view: History },
        { path: '/items', view: Items },
        { path: '/payment', view: Payment },
        { path: '/delivery', view: Delivery },
        { path: '/contact', view: Contact },
        { path: '/order', view: Order },
        { path: '/placing', view: Placing },
        { path: '/yandex2', view: Yandex2 },
        { path: '/chainiksimple', view: Chainiksimple },
        { path: '/ventilatordeerma', view: Ventilatordeerma },
        { path: '/robotpol', view: Robotpol },
        { path: '/routerax', view: Routerax },

    ]
    const potentionMatches = routers.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentionMatches.find(potentionMatch => potentionMatch.isMatch);

    if (!match) {
        match = {
            route: routers[0],
            isMatch: true
        }
    }

    const view = match.route.view;
    await view();
}

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })
    router();
})

window.addEventListener('popstate', router);
