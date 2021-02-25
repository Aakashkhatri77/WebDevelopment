
import { Component, state, submitUser} from "react";
import axios from "axios";

class UserRegister extends Component{
        state = {
                firstname : "",
                lastname : "",
                age : "",
                email: "",
                address : "",
                phone : "",
                username: "",
                password : "",
                userType : ""
        };

        submitUser=(e)=>{
                e.preventDefault();
                const userdata = {
                        firstname : this.state.firstname,
                        lastname : this.state.lastname,
                        age : this.state.age,
                        email : this.state.email,
                        address : this.state.address,
                        phone : this.state.phone,
                        username : this.state.username,
                        password : this.state.password,
                        usertype : this.state.userType
                }
                axios.post("http://localhost:90/register", userdata)
        }
    render(){
        return(
                    <form>
                        {/* <div className= "form-group">
                                <label for="firstname">FirstName:</label>
                                <input type="text" name="firstname" id="firstname" placeholder="firstname" value= {this.state.firstname} onChange={(event=>{this.setState({firstname:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                                <label for="lastname">LastName:</label>
                                <input type="text" name="lastname" id="lastname" placeholder="lastname" value= {this.state.lastname} onChange={(event=>{this.setState({lastname:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                                <label for="age">Age:</label>
                                <input type="text" name="age" id="age" placeholder="age" value={this.state.address} onChange={(event=>{this.setState({age:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                                <label for="address">Address:</label>
                                <input type="text" name="address" id="address" placeholder="address" value={this.state.address} onChange={(event=>{this.setState({address:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                                <label for="email">Email:</label>
                                <input type="text" name="email" id="email" placeholder="email" value= {this.state.email} onChange={(event=>{this.setState({email:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                                <label for="phone">Phone:</label>
                                <input type="text" name="phone" id="phone" placeholder="phone" value={this.state.phone} onChange={(event=>{this.setState({phone:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                                <label for="username">Username:</label>
                                <input type="text" name="username" id="username" placeholder="username" value={this.state.username} onChange={(event=>{this.setState({username:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                                <label for="password">Password:</label>
                                <input type="text" name="password" id="password" placeholder="password" value={this.state.password} onChange={(event=>{this.setState({password:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                                <label for="usertype">UserType:</label>
                                <input type="text" name="usertype" id="usertype" placeholder="usertype" value={this.state.password} onChange={(event=>{this.setState({password:event.target.value})})}/>
                        </div>
                        <div className= "form-group">
                            <button onClick={this.submitUser}>Submit</button>
                        </div> */}

                        <p>Firstname <input type="text" value= {this.state.firstname} onChange={(event=>{this.setState({firstname:event.target.value})})}/></p>
                        <p>Lastname <input type="text" value= {this.state.lastname} onChange={(event=>{this.setState({lastname:event.target.value})})}/></p>
                        <p>Age <input type="text" value= {this.state.age} onChange={(event=>{this.setState({age:event.target.value})})}/></p>
                        <p>Email<input type="text" value= {this.state.email} onChange={(event=>{this.setState({email:event.target.value})})}/></p>
                        <p>Address <input type="text" value= {this.state.address} onChange={(event=>{this.setState({address:event.target.value})})}/></p>
                        <p>Phone <input type="text" value= {this.state.phone} onChange={(event=>{this.setState({phone:event.target.value})})}/></p>
                        <p>Username <input type="text" value= {this.state.username} onChange={(event=>{this.setState({username:event.target.value})})}/></p>
                        <p>Password <input type="text" value= {this.state.password} onChange={(event=>{this.setState({password:event.target.value})})}/></p>
                        <p>UserType <input type="text" value= {this.state.usertype} onChange={(event=>{this.setState({usertype:event.target.value})})}/></p>

                        <p><button onClick={this.submitUser}>Submit</button></p>

                    </form>
        )
    }
}

export default UserRegister;