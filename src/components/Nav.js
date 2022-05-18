import React from 'react';
import { Link } from 'react-router-dom';
import img from "./news.png"


class Nav extends React.Component {
    render() {
        
        return (
            <>
                <nav className="navbar navbar-expand-md  navclass">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={img} width="30" height="30" alt="" className="mx-3"/>
                            The Reporter</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className=" navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about"> About </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/contact"> Contact </Link>
                            </li>
                           
                        </ul>
                        </div>
                    </div>
                    </nav>
            </>
        );
    }
}

export default Nav;