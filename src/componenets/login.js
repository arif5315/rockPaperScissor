import React, { Component } from 'react';

class login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleChange = this.handleChange.bind(this);
        console.log(this.state.checked);
    }

    handleChange(){
        console.log(this.state);
        this.setState({remember: !this.state.checked});
        console.log(this.state.checked);
    }


    render() {
        return (
            <div>
                <h2>Modal Login Form</h2>            
                <div id="id01" className="modal">            
                    <form className="modal-content animate">
                        <div className="container">
                            <label className="uname"><b>Username: </b></label>
                            <input type="text" placeholder="Enter Username" className="inputUser" required/><br/>

                            <label className="psw"><b>Password: </b></label>
                            <input type="password" placeholder="Enter Password" className="inputPass" required/><br/>
                            
                            <button className="login" type="submit">Login</button>
                            <label className="checkbox">

                            <p>Remember Me?:
                            <input className="remember" type="checkbox"  checked = {this.state.checked} onChange={(e) => this.handleChange}/>
                            </p>        
                            </label>
                        </div>

                        <div className="container">
                            <button type="button"  className="cancelbtn">Cancel</button>
                            <span className="forgot">   Forgot <a href="#">password?</a></span>
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default login;