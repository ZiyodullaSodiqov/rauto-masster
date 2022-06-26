import { Routes, Route, useLocation } from 'react-router-dom'
import { Fragment, useState } from 'react'
import Login from './pages/login/login'
import OrdersAdmin from './pages/orders_admin/orders_admin'
import EditNews from './pages/edit_clients/edit_clients'
import CardsAdmin from './pages/cards/cards'
import AddCard from './pages/add_card/add_card'
import AdminClient from './pages/clients_admin/clients_admin'
import AddClients from './pages/add_clients/add_clients'
import StatisticsPage from './pages/statistics/statistics'
import Home from './components/home/Home'
import More from './pages/more/More'
import CardsCar from './pages/cardsCar/CardsCar'
import Komissia from './pages/komissia/komissia'
import Vikup from './pages/vikup/vikup'
import Otsenka from './pages/otsenka/otsenka'
import Trade from './pages/trade_in/trade_in'
import Sugurta from './pages/sugurta/sugurta'
import Credit from './pages/credit/credit'
import AutoPodbor from './pages/autopodbor/autopodbor'
import PhotoSale from './pages/photosale/photosale'
import Compare from './pages/Compare/Compare'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'antd/dist/antd.min.css'
import './App.css'

function App() {
    const location = useLocation()
    const [compare, setCompare] = useState([])

    const addCompare = car => {
        if (!!!compare.find(item => item._id === car._id)) {
            setCompare([...compare, car])
            toast.success(`${car.madel} solishtirishga qo'shildi`)
        }
    }

    return (
        <Fragment>
            {!/admin/g.test(location.pathname) && !/login/g.test(location.pathname) && <Header />}
            <ToastContainer />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/admin/orders' element={<OrdersAdmin />} />
                <Route path='/admin/news_edit/:id' element={<EditNews />} />
                <Route path='/admin/cards' element={<CardsAdmin />} />
                <Route path='/admin/card/add' element={<AddCard />} />
                <Route path='/admin/card/edit/:id' element={<AddCard />} />
                <Route path='/admin/clients' element={<AdminClient />} />
                <Route path='/admin/clients/add' element={<AddClients />} />
                <Route path='/admin/clients/edit/:id' element={<AddClients />} />
                <Route path='/admin/statistic/all' element={<StatisticsPage />} />
                <Route path='/' element={<Home addCompare={addCompare} />} />
                <Route
                    path='/compare'
                    element={<Compare compare={compare} setCompare={setCompare} />}
                />
                <Route path='/more/:id' element={<More />} />
                <Route path='/cards' element={<CardsCar />} />
                <Route path='/komissia' element={<Komissia />} />
                <Route path='/vikupAvto' element={<Vikup />} />
                <Route path='/otsenka' element={<Otsenka />} />
                <Route path='/trade_in' element={<Trade />} />
                <Route path='/insurance' element={<Sugurta />} />
                <Route path='/creditauto' element={<Credit />} />
                <Route path='/autopodbor' element={<AutoPodbor />} />
                <Route path='/photosale' element={<PhotoSale />} />
            </Routes>
            {!/admin/g.test(location.pathname) && !/login/g.test(location.pathname) && <Footer />}
        </Fragment>
    )
}

export default App
