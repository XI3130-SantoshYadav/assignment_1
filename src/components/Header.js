import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <Link className="navbar-brand" to="#">NY Times Most Popular Article</Link>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div> */}
                
                <Link className="dot" to="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </Link>
            </div>
        </nav>
    )
}
