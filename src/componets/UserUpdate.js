import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UserUpdate = () => {
    const [user, setUser] = useState({
        "name": "",
        "username": "",
        "email": "",
        "phone": "",
    })
    const navigate = useNavigate()
    const { id } = useParams()
    const inputChange = (e) => {
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9000/users/${id}`);
        setUser(result.data)

    }
    const inputSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:9000/users/${id}`, user)
        navigate('/product')

    }
    useEffect(() => {
        loadUser()
    }, [])
    return (
        <>
            <div className='card w-75 p-4 mx-auto'>
                <form onSubmit={inputSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" name="name" value={user.name} className="form-control" onChange={(e) => inputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" name="username" value={user.username} className="form-control" onChange={(e) => inputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" value={user.email} className="form-control" onChange={(e) => inputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Website</label>
                        <input type="tel" name="phone" value={user.phone} className="form-control" onChange={(e) => inputChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-warning">Update</button>
                </form>
            </div>

        </>
    )
}

export default UserUpdate