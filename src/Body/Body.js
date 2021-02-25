import { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import UserRegister from './UserRegister';
import {Route} from 'react-router-dom';
import Login from './Login';

class Body extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <Route path= '/UserRegister' component= {UserRegister}/>
                    <Route path = '/login' component = {Login}/>
                    </Col>
                    {/* <Col>This is Body</Col> */}
                </Row>
            </Container>
          
        )
    }
}

export default Body;