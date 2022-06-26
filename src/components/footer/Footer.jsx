import { useSelector } from 'react-redux'
import { Language } from './../../lang/Languages'

function Footer() {
    const { lang } = useSelector(state => state.lang)

    const { f1, f2, f3, f4, f5, f6, f7, f8, BIZNING_MIJOZLAR } = Language

    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer__row'>
                    <div className='footer__block'>
                        <h4 className='footer__title'>{f1[lang]}</h4>
                        <div className='footer__line'></div>
                        <ul className='footer__list'>
                            <li className='footer__item'>
                                <a className='footer__link' href='#'>
                                    {f7[lang]}
                                </a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link' href='#'>
                                    {BIZNING_MIJOZLAR[lang]}
                                </a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link' href='#'>
                                    {f4[lang]}
                                </a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link' href='#'>
                                    {f5[lang]}
                                </a>
                            </li>
                            <li className='footer__item'>
                                <a className='footer__link' href='#'>
                                    {f6[lang]}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__block'>
                        <h4 className='footer__title'>{f2[lang]}</h4>
                        <div className='footer__line'></div>
                        <ul className='footer__list'>
                            {/* <li className="footer__item">
                        <a className='footer__link' href="#">ПОКУПАЙ КАСКО И ПОЛУЧАЙ РАСШИРЕНИЕ</a>
                     </li> */}
                            <li className='footer__item'>
                                <a className='footer__link' href='#'>
                                    {f8[lang]}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__block-map'>
                        <h4 className='footer__title'>{f3[lang]}</h4>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.97970615525!2d69.22789434470992!3d41.26193457486815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a79dc1f2c67%3A0xd1bf027623674052!2z0JDQstGC0L7RgdCw0LvQvtC9ICJBVVRPIExFQURFUiI!5e0!3m2!1suz!2s!4v1653996881223!5m2!1suz!2s'
                            width='420'
                            height='290'
                            allowFullScreen=''
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
