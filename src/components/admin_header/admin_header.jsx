import { Link } from 'react-router-dom'
import newsIcon from '../../images/newspaper-solid.png'
import announcementIcon from '../../images/rating.png'
import chartIcon from '../../images/statistics.png'
import order from '../../images/order.png'
import './admin_header.css'

function AdminHeader() {
    return (
        <div id='wrapper'>
            <div className='topbar'>
                <div className='topbar-left'>
                    <Link to='/' target={'blank'} className='logo'>
                        <span className='logo-light'>
                            <h1>RAUTO</h1>
                        </span>
                        <span className='logo-sm'>
                            <i className='fa-solid fa-newspaper'></i>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='left side-menu'>
                <div className='slimscroll-menu' id='remove-scroll'>
                    <div id='sidebar-menu'>
                        <ul className='metismenu' id='side-menu'>
                            <li className='menu-title'>Menu</li>
                            <li>
                                <Link to='/admin/orders' className='waves-effect'>
                                    <i className='mdi  mdi-message-text-outline text-white bg-warning'>
                                        <img src={order} alt='' width={20} />
                                    </i>
                                    <span> Buyurtmalar </span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/admin/cards' className='waves-effect'>
                                    <i className='mdi  mdi-message-text-outline text-white bg-warning'>
                                        <img src={newsIcon} alt='' width={20} />
                                    </i>
                                    <span>Avtomobil qo'shish</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/admin/clients' className='waves-effect'>
                                    <i className='mdi  mdi-message-text-outline text-white bg-warning'>
                                        <img src={announcementIcon} alt='' width={20} />
                                    </i>
                                    <span>Bizning mijozlar</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/admin/statistic/all' className='waves-effect'>
                                    <i className='mdi mdi-trending-up bg-success text-white'>
                                        <img src={chartIcon} alt='' width={20} />
                                    </i>
                                    <span> Statistika </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='clearfix' />
                </div>
            </div>
        </div>
    )
}

export default AdminHeader
