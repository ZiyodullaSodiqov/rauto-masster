import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ClientsAdmin() {
    const [clients, setClients] = useState([])
    const [searchTerm, setSearchTerm] = useState('a')
    const getClients = () =>
        axios
            .get('https://test-car.herokuapp.com/client/all')
            .then(res => setClients(res.data))
            .catch(err => console.log(err))

    const deleteClient = id =>
        axios
            .delete(`https://test-car.herokuapp.com/client/${id}`)
            .then(res => getClients())
            .catch(err => console.log(err))

    useEffect(() => {
        getClients()
    }, [])

    return (
        <div className='row pt-5 announcements_list'>
            <div className='col-xl-12'>
                <div className='box'>
                    <form name='search' className='search_form'>
                        <input
                            type='text'
                            className='input'
                            name='txt'
                            onmouseout="document.search.txt.value = ''"
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                        <span className='deff'>Search</span>
                    </form>
                </div>
                <Link to='/admin/orders' className='btn btn-danger btn-sm float-right'>
                    Asosiyga qaytish
                </Link>
                <Link
                    to='/admin/clients/add'
                    className='btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right'
                >
                    Mijoz qo'shish
                </Link>

                <h4 className='mt-0 mb-4 pt-2'>Barcha mijozlar ro'yhati</h4>
                <div className='table-responsive mt-5'>
                    <table className='table table-hover'>
                        <thead className='thead-dark'>
                            <tr className='textAlign'>
                                <th scope='col'>Rasm</th>
                                <th scope='col'>ID</th>
                                <th scope='col'>Ismi</th>
                                <th scope='col'>Viloyat</th>
                                <th scope='col'>O'zgartirish </th>
                                <th scope='col'>O'chirish </th>
                            </tr>
                        </thead>
                        <tbody className='thead-dark'>
                            {clients.length &&
                                clients.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ width: '130px' }}>
                                            <img src={item.photo} alt='photo' width='100%' />
                                        </td>
                                        <td className='my-auto'>{item._id}</td>
                                        <td>{item.ismizuz}</td>
                                        <td>No data</td>
                                        <td>
                                            <Link
                                                to={`/admin/clients/edit/${item._id}`}
                                                style={{
                                                    border: '1px solid black',
                                                    padding: '5px 10px',
                                                    color: 'blue',
                                                }}
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => deleteClient(item._id)}
                                                style={{
                                                    border: '1px solid black',
                                                    padding: '5px 10px',
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ClientsAdmin
