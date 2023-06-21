import React, { Component } from 'react'
import './style.css'
import img from './immg2.png'

export default class Login extends Component {
constructor(props){
    super(props)
    this.state = {
        email:"",
        pass:"",
        clubcode: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(e){
    e.preventDefault();
    const { email, pass, clubcode } = this.state;
    console.log( email, pass, clubcode );
    fetch("http://localhost:5000/login-user", {
            method: "POST",
            crossDomian: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email,
                pass,
                clubcode
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
            if (data.status ===  "ok") {
            alert("Login Successful");
            window.localStorage.setItem("token", data.data );
            window.location.href = "./Account"
        } else {
            alert("Something went wrong");
            }
        });
}

render() {
        return (
            <>
            <form action="" onSubmit={this.handleSubmit}>
            <div className="flex">
                <div className="left">
                    <img src={img} alt="" />
                </div>
                    <div className="right">
                            <h1>Log In</h1>
                            <p>Discover a better way of Security</p>
                            <div className="input">
                                <input 
                                    type="email"
                                    name="" 
                                    id="" 
                                    placeholder='Enter mail'
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                />
                                <input 
                                    type="text" 
                                    name="" 
                                    id="" 
                                    placeholder='Club Code'
                                    onChange={(e) => this.setState({ clubcode: e.target.value })}
                                />
                                <input 
                                    type="text" 
                                    name="" 
                                    id="" 
                                    placeholder='Password'
                                    onChange={(e) => this.setState({ pass: e.target.value })}
                                />
                            </div>
                            <button  type='submit' className='btn' style={{marginLeft:"50%"}}> Log In </button>
                            <div className="cen">
                                <p>Not memeber yet? <span><a href="/sign-up">Create Account</a></span></p>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}
