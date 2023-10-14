import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'

const Read = () => {
    let { id } = useParams()
    const [data, setData] = useState([])
    const userRead = async () => {
        await axios.get(`http://localhost:9000/users/${id}`)
            .then((res) => setData(res.data))

    }
    useEffect(() => {
        userRead()
    }, [])

    return (
        <>
            <div className='card w-50 p-3'>
                <h5>User {data.name}</h5>
                <span className='d-block'>{data.username}</span>
                <span className='d-block'>{data.email}</span>
                <span className='d-block'>{data.phone}</span>
                <Link to="/product" className='btn btn-primary  w-25 mt-3'>Back</Link>
            </div >
        </>
    )
}

export default Read