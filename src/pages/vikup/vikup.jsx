import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import context from '../../lang/lang'
import VikupImg from '../../images/vikupAvto.png'
import '../../components/style.css'
import { Language } from '../../lang/Languages'

function Vikup() {
    const [data, setData] = useState({ ismiz: '', phone: '' })

    const { lang } = useSelector(state => state.lang)

    const order = async () => {
        await axios
            .post('https://test-car.herokuapp.com/order/add', data)
            .then(res => {
                console.log(res)
                console.log(data)
            })
            .catch(err => new Error(err))
    }

    const {
        vikv1,
        vikfirst,
        viksecond,
        vikthird,
        vikfourth,
        vikfive,
        viksix,
        vikseven,
        vikeight,
        viknine,
        vikten,
        vikeleven,
        viktwelve,
        vikthirdteen,
        vikfourteen,
    } = Language

    // const { lang, setLang } = useContext(LanguageContext)

    return (
        <main>
            <div className='social__title'>
                <span></span>
                <h2>{vikv1[lang]}</h2>
                <span></span>
            </div>
            <div className='pages-container'>
                <h3 className='komissia-title'>{vikfirst[lang]}</h3>
                <img className='vikup-img' src={VikupImg} alt='photo-malibu' />
                <div className='komissia-wrap'>
                    <h3>{viksecond[lang]}</h3>
                    <ul className='komissia-list'>
                        <li>{vikthird[lang]}</li>
                        <li>{vikfourth[lang]}</li>
                        <li>{vikfive[lang]}</li>
                        <li>{viksix[lang]}</li>
                        <li>{vikseven[lang]}</li>
                        <li>{vikeight[lang]}</li>
                        <li>{viknine[lang]}</li>
                    </ul>
                    <h3>{vikten[lang]}</h3>
                    <ul>
                        <li>{vikeleven[lang]}</li>
                        <li>{viktwelve[lang]}</li>
                    </ul>
                    <div className='vikup-card'>
                        <div className='sale-card_wrapper'>
                            <span className='card-price card-price_sum'>{vikthirdteen[lang]}</span>
                            <h4>{vikfourteen[lang]}</h4>
                            <div className='input-wrap'>
                                <span className='material-symbols-outlined'>person</span>
                                <input
                                    onChange={e => setData({ ...data, ismiz: e.target.value })}
                                    value={data.ismiz}
                                    type='text'
                                    className='form-control page_title_uz'
                                    name='auto_price'
                                    required
                                    placeholder={vikfirst[lang]}
                                />
                            </div>
                            <div className='input-wrap'>
                                <span className='material-symbols-outlined'>phone</span>
                                <input
                                    onChange={e => setData({ ...data, phone: e.target.value })}
                                    value={data.phone}
                                    type='number'
                                    className='form-control page_title_uz'
                                    name='auto_price'
                                    required
                                    placeholder={viksecond[lang]}
                                />
                            </div>
                        </div>
                        <button onClick={order} className='more-btn'>
                            ??????????????????
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Vikup
