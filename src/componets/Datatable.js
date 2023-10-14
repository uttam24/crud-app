import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Datatable = ({ setSearch, data, setData, search }) => {
    const fetchData = () => {
        axios.get(`http://localhost:9000/users`)
            .then((res) => {
                setData(res.data)
                setSearch(res.data)
            })
    }
    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:9000/users/${id}`)
        fetchData()
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <table className="table table-striped text-start">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {search.map((item) => (
                        <tr key={item.id}>
                            <th>{item.name}</th>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <Link to={`/read/${item.id}`} className='btn btn-success me-1'>Read</Link>
                                <Link to={`/userupdate/${item.id}`} className='btn btn-warning me-1'>Update</Link>
                                <Link className='btn btn-danger' onClick={() => deleteItem(item.id)}>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    )
}

export default Datatable