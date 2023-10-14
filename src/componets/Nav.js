import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Nav = ({ search, setSearch, data }) => {
    const { pathname } = useLocation()
    const searchBar = (e) => {
        const tempUser = data.filter((item) => item.name.toLowerCase().includes(e.target.value))
        setSearch(tempUser)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light mb-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Product</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/product" className="nav-link active">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/update">Update</Link>
                            </li>
                        </ul>
                        {pathname == "/product" && <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" onChange={searchBar} />
                        </form>}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav