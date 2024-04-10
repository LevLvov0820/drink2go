import flatWhite1x from '../assets/flat-white@1x.png';
import flatWhite2x from '../assets/flat-white@2x.png';
import flatWhite1xWebp from '../assets/flat-white@1x.webp';
import flatWhite2xWebp from '../assets/flat-white@2x.webp';
import flatWhite1xTablet from '../assets/flat-white-tablet@1x.png';
import flatWhite2xTablet from '../assets/flat-white-tablet@2x.png';
import flatWhite1xTabletWebp from '../assets/flat-white-tablet@1x.webp';
import flatWhite2xTabletWebp from '../assets/flat-white-tablet@2x.webp';
import flatWhite1xDesktop from '../assets/flat-white-desktop@1x.png';
import flatWhite2xDesktop from '../assets/flat-white-desktop@2x.png';
import flatWhite1xDesktopWebp from '../assets/flat-white-desktop@1x.webp';
import flatWhite2xDesktopWebp from '../assets/flat-white-desktop@2x.webp';

import lavender1x from '../assets/lavender@1x.png';
import lavender2x from '../assets/lavender@2x.png';
import lavender1xWebp from '../assets/lavender@1x.webp';
import lavender2xWebp from '../assets/lavender@2x.webp';
import lavender1xTablet from '../assets/lavender-tablet@1x.png';
import lavender2xTablet from '../assets/lavender-tablet@2x.png';
import lavender1xTabletWebp from '../assets/lavender-tablet@1x.webp';
import lavender2xTabletWebp from '../assets/lavender-tablet@2x.webp';
import lavender1xDesktop from '../assets/lavender-desktop@1x.png';
import lavender2xDesktop from '../assets/lavender-desktop@2x.png';
import lavender1xDesktopWebp from '../assets/lavender-desktop@1x.webp';
import lavender2xDesktopWebp from '../assets/lavender-desktop@2x.webp';

import espresso1x from '../assets/espresso@1x.png';
import espresso2x from '../assets/espresso@2x.png';
import espresso1xWebp from '../assets/espresso@1x.webp';
import espresso2xWebp from '../assets/espresso@2x.webp';
import espresso1xTabet from '../assets/espresso-tablet@1x.png';
import espresso2xTablet from '../assets/espresso-tablet@2x.png';
import espresso1xTabletWebp from '../assets/espresso-tablet@1x.webp';
import espresso2xTabletWebp from '../assets/espresso-tablet@2x.webp';
import espresso1xDesktop from '../assets/espresso-desktop@1x.png';
import espresso2xDesktop from '../assets/espresso-desktop@2x.png';
import espresso1xDesktopWebp from '../assets/espresso-desktop@1x.webp';
import espresso2xDesktopWebp from '../assets/espresso-desktop@2x.webp';

const slides = [
    {
        id: 0,
        title: 'Декаф Флэт Уайт',
        description: 'Свежесваренный кофе без кофеина из Эфиопии с натуральным фермерским молоком — то, что нужно для расслабления после тяжёлого рабочего дня',
        oldPrice: 295,
        newPrice: 225,
        images: {
            mobile: [flatWhite1x, flatWhite2x, flatWhite1xWebp, flatWhite2xWebp],
            tablet: [flatWhite1xTablet, flatWhite2xTablet, flatWhite1xTabletWebp, flatWhite2xTabletWebp],
            desktop: [flatWhite1xDesktop, flatWhite2xDesktop, flatWhite1xDesktopWebp, flatWhite2xDesktopWebp]
        }
    },
    {
        id: 1,
        title: 'Лавандовый Латте',
        description: 'Невероятное сочетание перуанской высокогорной арабики с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор',
        oldPrice: 285,
        newPrice: 265,
        images: {
            mobile: [lavender1x, lavender2x, lavender1xWebp, lavender2xWebp],
            tablet: [lavender1xTablet, lavender2xTablet, lavender1xTabletWebp, lavender2xTabletWebp],
            desktop: [lavender1xDesktop, lavender2xDesktop, lavender1xDesktopWebp, lavender2xDesktopWebp]
        }
    },
    {
        id: 2,
        title: 'Тройной Эспрессо',
        description: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
        oldPrice: 395,
        newPrice: 375,
        images: {
            mobile: [espresso1x, espresso2x, espresso1xWebp, espresso2xWebp],
            tablet: [espresso1xTabet, espresso2xTablet, espresso1xTabletWebp, espresso2xTabletWebp],
            desktop: [espresso1xDesktop, espresso2xDesktop, espresso1xDesktopWebp, espresso2xDesktopWebp]
        }
    }
]

export default slides;