import tabs from './modules/tabs';
import  modal from './modules/modals';
import  form from './modules/forms';
import  slider from './modules/slider';
import  calculator from './modules/calculator';
import  cards from './modules/cards';
import  timer from './modules/timer';
import {openModal} from './modules/modals';

window.addEventListener('DOMContentLoaded', function() {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    form('form', modalTimerId);
    calculator();
    cards();
    timer('.timer', '2021-12-10');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });
});