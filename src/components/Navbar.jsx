import React from 'react'
import { Link } from 'react-router-dom'
class Navbar extends React.Component {
    render(){
        return(
            <div className=" navbar navbar-expand-lg navbar-dark bg-dark">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                       </li>
                       <li className="nav-item">
                            <Link className="nav-link" to="/table">Table</Link>
                       </li>
                       <li className="nav-item">
                           <Link className="nav-link" to="/About">About</Link>
                       </li>
                    </ul>
            </div>
        )
    }
}

export default Navbar