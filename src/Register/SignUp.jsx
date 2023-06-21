import React, { Component } from 'react'
import './sign.css'
import img from './immg2.png'

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:"",
            uname:"",
            email:"",
            position:"",
            clubcode:"",
            pass:"",
            conpass:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { fname, lname, uname, email, 
            position, clubcode, pass, conpass } = this.state;
        console.log( fname, lname, uname, email, 
            position, clubcode, pass, conpass );
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomian: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                fname,
                lname,
                uname,
                email,
                position,
                clubcode,
                pass,
                conpass,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
            if (data.status === "ok") {
            alert("Registration Successful");
        } else {
            alert("Something went wrong");
            }
        });
    }
    render(){
        return (
                <>
                <form onSubmit={this.handleSubmit} action="POST">
                <div className="flex">
                    <div className="left">
                        <img src={img} alt="" />
                    </div>
                    <div className="right">
                        <h1>Sign Up</h1>
                        <p>Discover a better way of Security</p>
                        <div className="flx">
                            <input type="text" 
                                name="" 
                                id="" 
                                placeholder='First Name'
                                onChange={(e) => this.setState({ fname: e.target.value })}
                                />
                            <input type="text" 
                                name="" 
                                id="" 
                                placeholder='Last Name'
                                onChange={(e) => this.setState({ lname: e.target.value })}
                                />
                        </div>
                        <div className="input1">
                            <input type="text" 
                                name="" 
                                id="" 
                                placeholder='Username'
                                onChange={(e) => this.setState({ uname: e.target.value })}
                                />
                            <input type="text" 
                                name="" 
                                id="" 
                                placeholder='Email'
                                onChange={(e) => this.setState({ email: e.target.value })}
                                />
                            <input type="text" 
                                name="" 
                                id="" 
                                placeholder='Position'
                                onChange={(e) => this.setState({ position: e.target.value })}
                                />
                            <input type="text" 
                                name="" 
                                id="" 
                                placeholder='Club Code'
                                onChange={(e) => this.setState({ clubcode: e.target.value })}
                                />
                            <input type="text" 
                                name="" 
                                id="" 
                                placeholder='Password'
                                onChange={(e) => this.setState({ pass: e.target.value })}
                                />
                            <input type="" 
                                name="" 
                                id="" 
                                placeholder='Confirm Password'
                                onChange={(e) => this.setState({ conpass: e.target.value })}
                                />
                        </div>
                        <button  type='submit' className='btn'>Sign Up</button>
                    </div>
                </div>
                </form>
            </>
        )
    }
}
