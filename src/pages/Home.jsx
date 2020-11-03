import React from 'react'
import './styles/Home.css'
import header from '../images/Octocat.svg'
class Home extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="home__stars">
                    <img className="img-fluid" width="150" height="150" src={header} alt="Logo"/>
                </div>
            </React.Fragment>
        )
    }
}

export default Home