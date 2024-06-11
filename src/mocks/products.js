import white1x from '../assets/white@1x.png';
import white2x from '../assets/white@2x.png';
import white1xWebp from '../assets/white@1x.webp';
import white2xWebp from '../assets/white@2x.webp';

import black1x from '../assets/black@1x.png';
import black2x from '../assets/black@2x.png';
import black1xWebp from '../assets/black@1x.webp';
import black2xWebp from '../assets/black@2x.webp';

import purple1x from '../assets/purple@1x.png';
import purple2x from '../assets/purple@2x.png';
import purple1xWebp from '../assets/purple@1x.webp';
import purple2xWebp from '../assets/purple@2x.webp';

import brown1x from '../assets/brown@1x.png';
import brown2x from '../assets/brown@2x.png';
import brown1xWebp from '../assets/brown@1x.webp';
import brown2xWebp from '../assets/brown@2x.webp';

import gold1x from '../assets/brown@1x.png';
import gold2x from '../assets/brown@2x.png';
import gold1xWebp from '../assets/brown@1x.webp';
import gold2xWebp from '../assets/brown@2x.webp';

import pink1x from '../assets/pink@1x.png';
import pink2x from '../assets/pink@2x.png';
import pink1xWebp from '../assets/pink@1x.webp';
import pink2xWebp from '../assets/pink@2x.webp';

const products = [
    {
        id: 0,
        name: 'Декаф Флэт Уайт',
        images: [white1x, white2x, white1xWebp, white2xWebp],
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        price: '265',
        milk: 'Только животное',
        country: 'Эфиопия'
    },
    {
        id: 1,
        name: 'Лавандовый Латте',
        images: [purple1x, purple2x, purple1xWebp, purple2xWebp],
        description: 'Невероятное сочетание перуанской высокогорной арабики с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор',
        price: '225',
        milk: 'Только растительное',
        country: 'Бразилия'
    },
    {
        id: 2,
        name: 'Тройной Эспрессо',
        images: [black1x, black2x, black1xWebp, black2xWebp],
        description: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
        price: '375',
        milk: 'Без молока',
        country: 'Колумбия'
    },
    {
        id: 3,
        name: 'Декаф Флэт Уайт',
        images: [white1x, white2x, white1xWebp, white2xWebp],
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        price: '265',
        milk: 'Только животное',
        country: 'Эфиопия'
    },
    {
        id: 4,
        name: 'Лавандовый Латте',
        images: [gold1x, gold2x, gold1xWebp, gold2xWebp],
        description: 'Невероятное сочетание перуанской высокогорной арабики с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор',
        price: '225',
        milk: 'Только растительное',
        country: 'Бразилия'
    },
    {
        id: 5,
        name: 'Тройной Эспрессо',
        images: [black1x, black2x, black1xWebp, black2xWebp],
        description: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
        price: '375',
        milk: 'Без молока',
        country: 'Колумбия'
    },
    {
        id: 6,
        name: 'Декаф Флэт Уайт',
        images: [white1x, white2x, white1xWebp, white2xWebp],
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        price: '265',
        milk: 'Только животное',
        country: 'Эфиопия'
    },
    {
        id: 7,
        name: 'Лавандовый Латте',
        images: [purple1x, purple2x, purple1xWebp, purple2xWebp],
        description: 'Невероятное сочетание перуанской высокогорной арабики с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор',
        price: '225',
        milk: 'Только растительное',
        country: 'Бразилия'
    },
    {
        id: 8,
        name: 'Тройной Эспрессо',
        images: [black1x, black2x, black1xWebp, black2xWebp],
        description: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
        price: '375',
        milk: 'Без молока',
        country: 'Колумбия'
    },
    {
        id: 9,
        name: 'Декаф Флэт Уайт',
        images: [white1x, white2x, white1xWebp, white2xWebp],
        description: 'Кофе без кофеина из Эфиопии с натуральным фермерским молоком',
        price: '265',
        milk: 'Только животное',
        country: 'Эфиопия'
    },
    {
        id: 10,
        name: 'Лавандовый Латте',
        images: [pink1x, pink2x, pink1xWebp, pink2xWebp],
        description: 'Невероятное сочетание перуанской высокогорной арабики с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор',
        price: '225',
        milk: 'Только животное',
        country: 'Бразилия'
    },
    {
        id: 11,
        name: 'Тройной Эспрессо',
        images: [black1x, black2x, black1xWebp, black2xWebp],
        description: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
        price: '375',
        milk: 'Без молока',
        country: 'Колумбия'
    },
    {
        id: 12,
        name: 'Тройной Эспрессо',
        images: [brown1x, brown2x, brown1xWebp, brown2xWebp],
        description: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
        price: '375',
        milk: 'Без молока',
        country: 'Колумбия'
    },
];

export default products;