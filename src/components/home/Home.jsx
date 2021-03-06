import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Language } from '../../lang/Languages'
import slide_one from '../../assets/img/slider/rauto-imgmn2.png'
import slide_two from '../../assets/img/slider/damas.png'
import slide_three from '../../assets/img/slider/infnexia-tinified.png'
import slide_four from '../../assets/img/slider/coba2-tinified.png'
import advantage_img1 from '../../assets/icons/ico1.png'
import advantage_img2 from '../../assets/icons/ico3.png'
import advantage_img3 from '../../assets/icons/ico4.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import '../style.css'
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import CardCar from '../card_car/Card_car'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { useSelector } from 'react-redux'

if (typeof window !== 'undefined') {
    injectStyle()
}

function Home({ addCompare }) {
    const [num, setNum] = useState('')

    function CardsPage() {
        window.location = '/cards'
    }

    const [cars, setCars] = useState([])
    const [clients, setClients] = useState([])

    const { lang } = useSelector(state => state.lang)

    const {
        six,
        second,
        first,
        third,
        fourth,
        five,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirdteen,
        Gacha,
        Kilometr,
        Narxi,
        NarxiniAniqlash,
        Marka,
        Model,
        Probeg,
        Aloqa,
        AFZALLIK,
        Minimal,
        pasport,
        Jozibador,
        BizdaFoydali,
        Ertaroq,
        IstalganSana,
        BIZNING_MIJOZLAR,
        AKSIYALAR_CHEGIRMALAR,
        Batafsil,
        BARCHA_TAKLIFLAR,
    } = Language

    const getCars = async () => {
        await axios
            .get('https://test-car.herokuapp.com/Car/all')
            .then(res => setCars(res.data))
            .catch(err => new Error(err))
    }

    const getClients = async () => {
        await axios
            .get('https://test-car.herokuapp.com/client/all')
            .then(res => setClients(res.data))
            .catch(err => new Error(err))
    }

    useEffect(() => {
        getCars()
        getClients()
    }, [])

    cars.length > 0 && cars.forEach(item => !!!num && !!item.aksiya && setNum('aksiya'))

    return (
        <div className='wrapper'>
            <main>
                <section className='slider'>
                    <div className='slider__title'>
                        <span>Sayt test rejimida ishlamoqda</span>
                        <span>???????? ???????????????? ?? ???????????????? ????????????</span>
                    </div>
                    <div className='row-slide'>
                        <div className='slider__body'>
                            <h2 className='slider__body-title'>{first[lang]}</h2>
                            <div className='slider__body-descr'>
                                {second[lang]}
                                <span>
                                    <a href='/'> {third[lang]}</a>
                                </span>
                                {fourth[lang]}
                            </div>
                            <button className='slider__body-button'>
                                <a href='/'>{five[lang]}</a>
                            </button>
                        </div>
                        <div className='slider__container'>
                            <div className='swiper swiper-slide-big'>
                                <Swiper
                                    spaceBetween={30}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className='swiper-wrapper'
                                >
                                    <SwiperSlide className='swiper-slide'>
                                        <a href='/'>
                                            <img src={slide_one} alt='img' />
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide'>
                                        <a href='/'>
                                            <img src={slide_two} alt='img' />
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide'>
                                        <a href='/'>
                                            <img src={slide_three} alt='img' />
                                        </a>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide'>
                                        <a href='/'>
                                            <img src={slide_four} alt='img' />
                                        </a>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='social__title'>
                    <span></span>
                    <h2>{six[lang]}</h2> <span></span>
                </div>
                <section className='social'>
                    <div className='container'>
                        <div className='text'>
                            <span>5</span>
                        </div>
                        <div className='text'>
                            <span>8</span>
                        </div>
                        <div className='text'>
                            <span>7</span>
                        </div>
                        <div className='text'>
                            <span>7</span>
                        </div>
                    </div>
                </section>
                <section className='cards-avto'>
                    <div className='social__title'>
                        <span></span>
                        <h2>{seven[lang]}</h2>
                        <span></span>
                    </div>
                    <div className='cards__row'>
                        {cars.length > 0 &&
                            cars.map((car, index) => (
                                <CardCar key={index} car={car} addCompare={addCompare} />
                            ))}
                    </div>
                    <button onClick={CardsPage} className='cards__button'>
                        {eight[lang]}
                    </button>
                </section>
                <section className='form-block'>
                    <div className='container'>
                        <div className='forms'>
                            <div className='form'>
                                <h3 className='form__title'>{thirdteen[lang]}</h3>
                                <h4 className='form__item-name'>{ten[lang]}</h4>
                                <div className='form__item'>
                                    <select name='met'>
                                        <option value='1'>??????????????</option>
                                        <option value='2'>??????????????????</option>
                                        <option value='3'>??????????</option>
                                        <option selected value='4'>
                                            ??????????????????
                                        </option>
                                    </select>
                                </div>
                                <h4 className='form__item-name'>{eleven[lang]}</h4>
                                <div className='renge-wrapper'>
                                    <div className='slider'>
                                        <div className='progress'></div>
                                    </div>
                                    <div className='range-input'>
                                        <input
                                            type='range'
                                            className='range-min'
                                            min='0'
                                            max='2022'
                                            value='2019'
                                            step='1'
                                        />
                                        <input
                                            type='range'
                                            className='range-max'
                                            min='0'
                                            max='2022'
                                            value='2019'
                                            step='1'
                                        />
                                    </div>
                                    <div className='price-input'>
                                        <div className='field'>
                                            <span>{twelve[lang]}</span>
                                            <input
                                                type='number'
                                                className='input-min'
                                                value='2500'
                                            />
                                        </div>
                                        <div className='field'>
                                            <span>{Gacha[lang]}</span>
                                            <input
                                                type='number'
                                                className='input-max'
                                                value='7500'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h4 className='form__item-name'>{Kilometr[lang]}</h4>
                                <div className='renge-wrapper'>
                                    <div className='slider'>
                                        <div className='progress'></div>
                                    </div>
                                    <div className='range-input'>
                                        <input
                                            type='range'
                                            className='range-min'
                                            min='0'
                                            max='10000'
                                            value='2500'
                                            step='100'
                                        />
                                        <input
                                            type='range'
                                            className='range-max'
                                            min='0'
                                            max='10000'
                                            value='7500'
                                            step='100'
                                        />
                                    </div>
                                    <div className='price-input'>
                                        <div className='field'>
                                            <span>{twelve[lang]}</span>
                                            <input
                                                type='number'
                                                className='input-min'
                                                value='2500'
                                            />
                                        </div>
                                        <div className='field'>
                                            <span>{Gacha[lang]}</span>
                                            <input
                                                type='number'
                                                className='input-max'
                                                value='7500'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h4 className='form__item-name'>{Narxi[lang]}</h4>
                                <div className='renge-wrapper'>
                                    <div className='slider'>
                                        <div className='progress'></div>
                                    </div>
                                    <div className='range-input'>
                                        <input
                                            type='range'
                                            className='range-min'
                                            min='0'
                                            max='10000'
                                            value='2500'
                                            step='100'
                                        />
                                        <input
                                            type='range'
                                            className='range-max'
                                            min='0'
                                            max='10000'
                                            value='7500'
                                            step='100'
                                        />
                                    </div>
                                    <div className='price-input'>
                                        <div className='field'>
                                            <span>{twelve[lang]}</span>
                                            <input
                                                type='number'
                                                className='input-min'
                                                value='2500'
                                            />
                                        </div>
                                        <div className='field'>
                                            <span>{Gacha[lang]}</span>
                                            <input
                                                type='number'
                                                className='input-max'
                                                value='7500'
                                            />
                                        </div>
                                    </div>
                                    <button className='form__button'>{nine[lang]}</button>
                                </div>
                            </div>
                            <div className='form'>
                                <h3 className='form__title'>{NarxiniAniqlash[lang]}</h3>
                                <h4 className='form__item-name'>{Marka[lang]}</h4>
                                <div className='form__item'>
                                    <input type='text' placeholder='?????????? ???????????? ????????????????????' />
                                </div>
                                <h4 className='form__item-name'>{Model[lang]}</h4>
                                <div className='form__item'>
                                    <input type='text' placeholder='???????????? ???????????? ????????????????????' />
                                </div>
                                <h4 className='form__item-name'>{eleven[lang]}</h4>
                                <div className='form__item'>
                                    <input
                                        type='text'
                                        placeholder='?????? ?????????????? ???????????? ???????????????????? (??????????????). ????????????????: 2007'
                                    />
                                </div>
                                <h4 className='form__item-name'>{Probeg[lang]}</h4>
                                <div className='form__item'>
                                    <input
                                        type='text'
                                        placeholder='???????????? ?? ????. ???????????? ???????????????????? (??????????????). ????????????????: 25000'
                                    />
                                </div>
                                <h4 className='form__item-name form__item-name-row'>
                                    {Aloqa[lang]}
                                </h4>
                                <div className='form__list'>
                                    <div className='form__item'>
                                        <input type='text' placeholder='???????? ??????' />
                                    </div>
                                    <div className='form__item'>
                                        <input type='text' placeholder='?????? ??????????????' />
                                    </div>
                                    <div className='form__item'>
                                        <input type='text' placeholder='?????? Email' />
                                    </div>
                                </div>
                                <button className='form__button'>{Narxi[lang]}</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='cards-slider'>
                    <div className='container'>
                        <div className='cards-slider__title'>
                            <span></span>
                            {!!num && <h2>{AKSIYALAR_CHEGIRMALAR[lang]}</h2>} <span></span>
                        </div>
                        <div className='swiper cards-swiper-slide'>
                            <Swiper
                                breakpoints={{
                                    200: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1100: {
                                        slidesPerView: 3,
                                    },
                                    1300: {
                                        slidesPerView: 4,
                                    },
                                }}
                                spaceBetween={30}
                                modules={[Pagination]}
                                pagination={{ clickable: true }}
                                className='cards-slider__cadrs swiper-wrapper'
                            >
                                {cars.length &&
                                    cars.map(
                                        (item, index) =>
                                            !!item.aksiya && (
                                                <SwiperSlide className='swiper-slide' key={index}>
                                                    <div className=' cards-slider__card card'>
                                                        <div className='card__img'>
                                                            <img src={item.photo[0]} alt='img' />
                                                        </div>
                                                        <a href=' ' className='card__title'>
                                                            {item.madel}
                                                        </a>
                                                        <ul className='card__info'></ul>
                                                        <div className='card__line'></div>
                                                        <div className='card__price'>
                                                            <strong className='red'>
                                                                {Number(item.narxi)
                                                                    .toLocaleString()
                                                                    .replace(/,/g, ' ')}
                                                            </strong>{' '}
                                                            <span>UZS</span>
                                                        </div>
                                                        <div className='card__buttons'>
                                                            <Link
                                                                to={`more/${item._id}`}
                                                                className='card__button-mini'
                                                            >
                                                                {Batafsil[lang]}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                    )}
                            </Swiper>
                        </div>
                        {!!num && (
                            <button onClick={CardsPage} className='cards-swiper__button'>
                                {BARCHA_TAKLIFLAR[lang]}
                            </button>
                        )}
                    </div>
                </section>
                <section className='advantages'>
                    <div className='container'>
                        <div className='advantages__title cards-slider__title'>
                            <span></span>
                            <h2>{AFZALLIK[lang]}</h2> <span></span>
                        </div>
                        <div className='advantages__row'>
                            <div className='advantages__item'>
                                <div className='advantages__img'>
                                    <img src={advantage_img1} alt='icons' />
                                </div>
                                <div className='advantages__name'>{Minimal[lang]}</div>
                                <div className='advantages__descr'>{pasport[lang]}</div>
                            </div>
                            <div className='advantages__item'>
                                <div className='advantages__img'>
                                    <img src={advantage_img2} alt='icons' />
                                </div>
                                <div className='advantages__name'>{Jozibador[lang]}</div>
                                <div className='advantages__descr'>{BizdaFoydali[lang]}</div>
                            </div>
                            <div className='advantages__item'>
                                <div className='advantages__img'>
                                    <img src={advantage_img3} alt='icons' />
                                </div>
                                <div className='advantages__name'>{Ertaroq[lang]}</div>
                                <div className='advantages__descr'>{IstalganSana[lang]}</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='clients'>
                    <div className='container'>
                        <div className='clients__title cards-slider__title'>
                            <span></span>
                            <h2>{BIZNING_MIJOZLAR[lang]}</h2> <span></span>
                        </div>
                        <div className=' swiper clients-swiper-slide'>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                modules={[Pagination]}
                                pagination={{ clickable: true }}
                                className='swiper-wrapper'
                            >
                                {clients &&
                                    clients.map((item, index) => (
                                        <SwiperSlide className='swiper-slide' key={index}>
                                            <div className='clients__item'>
                                                <div className='clients__img'>
                                                    <img src={item.photo} alt='icons' />
                                                </div>
                                                <div className='clients__name'>{item.ismizuz}</div>
                                                <div className='clients__name'>{item.ismizru}</div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                            </Swiper>
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    )
}
export default Home
