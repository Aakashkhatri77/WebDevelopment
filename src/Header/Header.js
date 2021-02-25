import { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div>
                <Link to = "/">HOME</Link>
                <Link to = "/UserRegister">REGISTER</Link>
                <Link to = "/Login">LOGIN</Link>

            </div>

            
        )
    }
}

export default Header;