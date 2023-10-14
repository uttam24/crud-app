import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        "name": "",
        "username": "",
        "email": "",
        "phone": "",
    })
    const inputChange = (e) => {
        let { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const inputSubmit = async (e) => {
        e.preventDefault()

        if (user.name == "" || user.username == "" || user.email == "" || user.phone == "") {
            alert("please fill the field")
        }
        else {
            await axios.post(`http://localhost:9000/users`, user)
            navigate('/product')
        }

    }
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
                        <label className="form-label">Phone</label>
                        <input type="tel" name="phone" value={user.phone} className="form-control" onChange={(e) => inputChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Update