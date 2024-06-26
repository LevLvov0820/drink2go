import React from 'react';
import Container from '../layout/container';
import Navbar from '../ui/navbar';
import Logo from '../ui/logo';

export default function Header({ navlinks }) {
    return (
        <header className='header'>
            <Container className={'header__container'}>
                <Logo className={'header__logo'} text={'Интернет-магазин кофейных напитков'} />
                <Navbar navlinks={navlinks} />
                <ul className='header__buttons'>
                    <li className="header__button header__button--login">
                        <a href="/">
                            <span>Войти</span>
                        </a>
                    </li>
                    <li className="header__button header__button--basket">
                        <a href="/">
                            <span>Корзина</span>
                        </a>
                    </li>
                    <li className="header__button header__button--menu">
                        <button type="button">
                            <span className="visually-hidden">Открыть меню</span>
                        </button>
                    </li>
                </ul>
            </Container>
        </header>
    )
}