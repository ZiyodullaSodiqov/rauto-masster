
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Language } from '../../lang/Languages'
// Import images
import header_icon from '../../assets/icons/location.svg'
import header_icon_two from '../../assets/icons/smartphone.svg'
import header_icon_three from '../../assets/icons/email.svg'
import search_icon from '../../assets/icons/search.svg'
import ruFlag from '../../images/ru.png'
import uzFlag from '../../images/uz.png'
import search_icon_two from '../../assets/icons/search.svg'
import logo_icon from '../../assets/img/logo-rauto.png'
import close_i from '../../assets/icons/close.png'
import arrow_i from '../../assets/icons/arrow.png'
import phone_i from '../../assets/icons/phone.png'
import mail_i from '../../assets/icons/mail.png'
import facebook_icon from '../../assets/icons/facebook.png'
import youtube_icon from '../../assets/icons/youtube.png'
import icon_location from '../../assets/icons/location_white.png'
import instagram_icon from '../../assets/icons/instagram.png'
//Import lang
import context from '../../lang/lang'
import { changeLang } from '../../store/language'
//Styles
import '../style.css'

const Header = props => {
    const dispatch = useDispatch()
    const [collapseOneOpen, setCollapseOneOpen] = useState(false)
    const [collapseTwoOpen, setCollapseTwoOpen] = useState(false)
    const [collapseThreeOpen, setCollapseThreeOpen] = useState(false)

    const { lang } = useSelector(state => state.lang)

    const { asosiy } = Language
    const { adres } = Language
    const { contacts } = Language
    const { aksia } = Language
    const { foydali } = Language
    const { Avtomobillar } = Language
    const { Xizmatlar } = Language
    const { Kompaniya } = Language
    const { Kontaktlar } = Language
    const { Kirish } = Language
    const { komissia } = Language
    const { vikup } = Language
    const { otsenka } = Language
    const { tradein } = Language
    const { insurance } = Language
    const { credit } = Language
    const { autonumber } = Language
    const { autotanlov } = Language
    const { photosale } = Language
    const { ishVaqt1 } = Language
    const { ishVaqt2 } = Language
    const { ishVaqt3 } = Language
    const { f4 } = Language
    const { f5 } = Language
    const { f6 } = Language
    const { f7 } = Language

    function search() {
        const searchBtns = document.querySelectorAll('.search')
        const searchInput = document.querySelector('.search-input')
        const closeSearch = document.querySelector('.close-search')
        if (searchBtns.length > 0) {
            for (let index = 0; index < searchBtns.length; index++) {
                const searchBtn = searchBtns[index]
                if (!searchInput.classList.contains('_open')) {
                    searchBtn.addEventListener('click', function (e) {
                        searchInput.classList.add('_open')
                    })
                }
            }
        }
        if (closeSearch) {
            if (!searchInput.classList.contains('_open')) {
                closeSearch.addEventListener('click', function (e) {
                    searchInput.classList.remove('_open')
                })
            }
        }
    }

    function OPEN() {
        const menuOpen = document.querySelectorAll('.menu__open')
        const menu = document.querySelector('.menu')
        if (menuOpen.length > 0) {
            for (let index = 0; index < menuOpen.length; index++) {
                const btn = menuOpen[index]
                btn.addEventListener('click', function (e) {
                    menu.classList.add('_open')
                })
            }
        }
        const menuClose = document.querySelectorAll('.menu__close')
        for (let index = 0; index < menuClose.length; index++) {
            const btn = menuClose[index]
            btn.addEventListener('click', function (e) {
                if (menu.classList.contains('_open')) {
                    menu.classList.remove('_open')
                }
            })
        }
    }

    useEffect(() => {
        if (!!!lang) localStorage.setItem('lang', 0)
    }, [lang])

    return (
        <React.Fragment>
            <header className='headers'>
                <div className='headers__info'>
                    <div className='containers'>
                        <div className='headers__location'>
                            <img src={header_icon} className='headers__icon' alt='location' />
                            <span>{adres[lang]}</span>
                            <div className='dropdown dropdown_time'>
                                <button className='dropbtn'>
                                    <span class="material-symbols-outlined">
                                        schedule
                                    </span>
                                    {ishVaqt1[lang]}
                                </button>
                                <div className='dropdown-content'>
                                    <span><span class="material-symbols-outlined">
                                        schedule
                                    </span>{ishVaqt1[lang]}</span><br />
                                    <span><span class="material-symbols-outlined">
                                        schedule
                                    </span>{ishVaqt2[lang]}</span><br />
                                    <span><span class="material-symbols-outlined">
                                        schedule
                                    </span>{ishVaqt3[lang]}</span>
                                </div>
                            </div>
                        </div>
                        <div className='headers__connection'>
                            <div className='dropdown'>
                                <button className='dropbtn'>
                                    <img
                                        src={header_icon_two}
                                        className='headers__icon'
                                        alt='location'
                                    />
                                    {contacts[lang]}
                                </button>
                                <div className='dropdown-content'>
                                    <a href='tel: +998951690988'>+998 95 169-09-88</a>
                                    <a href='tel: +998974500988'>+998 97 450-09-88</a>
                                    <a href='tel: +998971250988'>+998 97 125-09-88</a>
                                </div>
                            </div>
                            <a href='mailto:info@rauto.uz' className='headers__email'>
                                <img src={header_icon_three} className='headers__icon' alt='icon' />
                                info@rauto.uz
                            </a>
                        </div>
                        <div className='headers__icons '>
                            <button
                                className='translator mr-3'
                                onClick={() => dispatch(changeLang('0'))}
                            >
                                <img src={uzFlag} alt='translator' width='20px' />
                            </button>
                            <button
                                className='translator mr-3'
                                onClick={() => dispatch(changeLang('1'))}
                            >
                                <img src={ruFlag} alt='translator' width='20px' />
                            </button>
                            <Link to='/compare' className='headers__icons-item'>
                                <button
                                    onClick={props.showCompare}
                                    className='material-symbols-outlined'
                                >
                                    balance
                                </button>
                            </Link>
                            <a href='/' onClick={search} className='headers__icons-item'>
                                <div className='search-input'>
                                    <input type='text' />
                                    <span className='close-search'></span>
                                </div>
                                <button className='search'>
                                    <img src={search_icon} className='headers__icon' alt='location' />
                                </button>
                            </a>
                        </div>
                        <div className='headers__respons'>
                            <div>
                                <button className='search headers__item'>
                                    <img src={search_icon_two} className='headers__icon' alt='icon' />
                                </button>
                            </div>
                            <a href='/compare' className='headers__icons-item'>
                                <button
                                    onClick={props.showCompare}
                                    className='material-symbols-outlined'
                                >
                                    balance
                                </button>
                            </a>
                            <div className='dropdown'>
                                <button className='dropbtn'>
                                    <img
                                        src={header_icon_two}
                                        className='headers__icon'
                                        alt='location'
                                    />
                                    {contacts[lang]}
                                </button>
                                <div className='dropdown-content'>
                                    <a href='tel: +998951690988'>95 169-09-88</a>
                                    <a href='tel: +998974500988'>97 450-09-88</a>
                                    <a href='tel: +998971250988'>97 125-09-88</a>
                                </div>
                            </div>
                            <a onClick={OPEN} className='menu__icon nav-icon menu__open'>
                                <span></span>
                            </a>
                        </div>

                        <div className='menu headers__item'>
                            <div className='menu__body'>
                                <h2 className='menu__title'>Меню</h2>
                                <a className='menu__close'>
                                    <img src={close_i} className='headers_close_icon' alt='cross' />
                                </a>
                                <div className='menu__block menu__block-1'>
                                    <div className='menu__link'>
                                        <a
                                            type='button'
                                            onClick={() => setCollapseOneOpen(!collapseOneOpen)}
                                        >
                                            {asosiy[lang]}
                                        </a>
                                        <div className='menu__link-arrow'>
                                            <img src={arrow_i} className='headers___icon' alt='icon' />
                                        </div>
                                    </div>
                                    {collapseOneOpen ? (
                                        <>
                                            <div className='menu__link'>
                                                <a href=''>{aksia[lang]}</a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href=''>{foydali[lang]}</a>
                                            </div>
                                        </>
                                    ) : (
                                        ''
                                    )}
                                    <div className='menu__link'>
                                        <p>{Avtomobillar[lang]}</p>
                                        <div className='menu__link-arrow'>
                                            <img src={arrow_i} className='headers___icon' alt='icon' />
                                        </div>
                                    </div>
                                    <div
                                        className='menu__link'
                                        onClick={() => setCollapseTwoOpen(!collapseTwoOpen)}
                                    >
                                        <p>{Xizmatlar[lang]}</p>
                                        <div className='menu__link-arrow'>
                                            <img src={arrow_i} className='headers___icon' alt='icon' />
                                        </div>
                                    </div>
                                    {collapseTwoOpen ? (
                                        <>
                                            <div className='menu__link'>
                                                <a href='/komissia'>
                                                    {komissia[lang]}
                                                </a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/vikupAvto'>
                                                    {vikup[lang]}
                                                </a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/otsenka'>
                                                    {otsenka[lang]}
                                                </a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/trade_in'>
                                                    {tradein[lang]}
                                                </a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/insurance'>
                                                    {insurance[lang]}
                                                </a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/creditauto'>
                                                    {credit[lang]}
                                                </a>
                                            </div>
                                            <div className='menu__link'>
                                                <a
                                                    href='https://avtoraqam.uzex.uz/ru'
                                                    target={'blank'}
                                                >
                                                    {autonumber[lang]}
                                                </a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/autopodbor'>
                                                    {autotanlov[lang]}
                                                </a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/photosale'>
                                                    {photosale[lang]}
                                                </a>
                                            </div>
                                        </>
                                    ) : (
                                        ''
                                    )}
                                    <div
                                        className='menu__link'
                                        onClick={() => setCollapseThreeOpen(!collapseThreeOpen)}
                                    >
                                        <a>{Kompaniya[lang]}</a>
                                        <div className='menu__link-arrow'>
                                            <img src={arrow_i} className='headers___icon' alt='icon' />
                                        </div>
                                    </div>
                                    {collapseThreeOpen ? (
                                        <>
                                            <div className='menu__link'>
                                                <a href='/'>{f4[lang]}</a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/'>{f5[lang]}</a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/'>{f6[lang]}</a>
                                            </div>
                                            <div className='menu__link'>
                                                <a href='/'>{f7[lang]}</a>
                                            </div>
                                        </>
                                    ) : (
                                        ''
                                    )}
                                    <div className='menu__link'>
                                        <a>{Kontaktlar[lang]}</a>
                                        <div className='menu__link-arrow'>
                                            <img src={arrow_i} className='headers___icon' alt='icon' />
                                        </div>
                                    </div>
                                    <div className='menu__link'>
                                        <Link to={'/'} target='_blank'>
                                            {Kirish[lang]}
                                        </Link>
                                    </div>
                                    <div className='menu__link'>
                                        <button
                                            className='translator mr-3'
                                            onClick={() => dispatch(changeLang('0'))}
                                        >
                                            <img src={uzFlag} alt='translator' width='20px' />
                                        </button>
                                        <button
                                            className='translator mr-3'
                                            onClick={() => dispatch(changeLang('1'))}
                                        >
                                            <img src={ruFlag} alt='translator' width='20px' />
                                        </button>
                                    </div>
                                </div>

                                <div className='menu__block'>
                                    <div className='dropdown '>
                                        <button className='dropbtn dropbtn_color'>
                                            <span class="material-symbols-outlined">
                                                schedule
                                            </span>
                                            {ishVaqt1[lang]}
                                        </button>
                                        <div className='dropdown-content'>
                                            <span><span class="material-symbols-outlined">
                                                schedule
                                            </span>{ishVaqt1[lang]}</span><br />
                                            <span><span class="material-symbols-outlined">
                                                schedule
                                            </span>{ishVaqt2[lang]}</span><br />
                                            <span><span class="material-symbols-outlined">
                                                schedule
                                            </span>{ishVaqt3[lang]}</span>
                                        </div>
                                    </div>
                                    <a href='#' className='headers__link'>
                                        <img src={phone_i} className='headers____icon' alt='location' />{' '}
                                        +99895 169 09 88
                                    </a>

                                    <a href='#' className='headers__link'>
                                        <img src={mail_i} className='headers____icon' alt='icon' />
                                        info@rauto.uz
                                    </a>
                                </div>
                                <div className='menu__block menu__social'>
                                    <a href='#' className='menu__social-icon'>
                                        <img
                                            src={facebook_icon}
                                            className='headers_social_icon'
                                            alt='icon'
                                        />
                                    </a>
                                    <a href='#' className='menu__social-icon'>
                                        <img
                                            src={instagram_icon}
                                            className='headers_social_icon'
                                            alt='icon'
                                        />
                                    </a>
                                    <a href='#' className='menu__social-icon'>
                                        <img
                                            src={youtube_icon}
                                            className='headers_social_icon'
                                            alt='icon'
                                        />
                                    </a>
                                </div>
                                <div className='menu__block menu__block-location'>
                                    <img src={icon_location} className='headers__icon' alt='location' />
                                    <address>{adres[lang]}</address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='headers__main'>
                    <div className='container'>
                        <div className='headers__logo'>
                            <Link to='/'>
                                <img src={logo_icon} alt='logo' />
                            </Link>
                        </div>

                        <nav className='headers__nav nav'>
                            <p className='headers__nav-item'>
                                <span className='headers__nav-icon'>
                                    <span className='material-symbols-outlined'>store</span>
                                </span>
                                <p className='headers__nav-link tooltips'>
                                    {asosiy[lang]}
                                    <ul className='tooltipstext'>
                                        <li className='menu-item'>{aksia[lang]}</li>
                                    </ul>
                                    <ul className='tooltipstexttwo'>
                                        <li className='menu-item'>{foydali[lang]}</li>
                                    </ul>
                                </p>
                            </p>
                            <a href='' className='headers__nav-item'>
                                <span className='headers__nav-icon'>
                                    <span className='material-symbols-outlined'>directions_car</span>
                                </span>
                                <span className='headers__nav-link'>{Avtomobillar[lang]}</span>
                            </a>
                            <p className='headers__nav-item'>
                                <span className='headers__nav-icon'>
                                    <span className='material-symbols-outlined'>handshake</span>
                                </span>
                                <p className='headers__nav-link tooltips'>
                                    {Xizmatlar[lang]}
                                    <ul className='tooltipstextt'>
                                        <Link to='/komissia'>
                                            <li className='menu-item'>
                                                {komissia[lang]}
                                            </li>
                                        </Link>
                                        <Link to='/vikupAvto'>
                                            <li className='menu-item'>
                                                {vikup[lang]}
                                            </li>
                                        </Link>
                                        <Link to='/otsenka'>
                                            <li className='menu-item'>
                                                {otsenka[lang]}
                                            </li>
                                        </Link>
                                        <Link to='/trade_in'>
                                            <li className='menu-item'>
                                                {tradein[lang]}
                                            </li>
                                        </Link>
                                        <Link to={'/insurance'}>
                                            <li className='menu-item'>
                                                {insurance[lang]}
                                            </li>
                                        </Link>
                                        <Link to={'/creditauto'}>
                                            <li className='menu-item'>
                                                {credit[lang]}
                                            </li>
                                        </Link>
                                    </ul>
                                    <ul className='tooltipstexttwot'>
                                        <a href='https://avtoraqam.uzex.uz/ru' target={'blank'}>
                                            <li className='menu-item'>
                                                {autonumber[lang]}
                                            </li>
                                        </a>
                                        <Link to={'/autopodbor'}>
                                            <li className='menu-item'>
                                                {autotanlov[lang]}
                                            </li>
                                        </Link>
                                        <Link to={'/photosale'}>
                                            <li className='menu-item'>
                                                {photosale[lang]}
                                            </li>
                                        </Link>
                                    </ul>
                                </p>
                            </p>
                            <a href='' className='headers__nav-item'>
                                <span className='headers__nav-icon'>
                                    <span className='material-symbols-outlined'>info</span>
                                </span>
                                <span className='headers__nav-link'>
                                    {Kompaniya[lang]}{' '}
                                </span>
                            </a>
                            <a href='' className='headers__nav-item'>
                                <span className='headers__nav-icon'>
                                    <span className='material-symbols-outlined'>phone_enabled</span>
                                </span>
                                <span className='headers__nav-link'>
                                    {Kontaktlar[lang]}
                                </span>
                            </a>
                            <Link to={'/login'} target='_blank' className='headers__nav-item'>
                                <span className='headers__nav-icon'>
                                    <span className='material-symbols-outlined'>person</span>
                                </span>
                                <span className='headers__nav-link'>
                                    {Kirish[lang]}
                                </span>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
