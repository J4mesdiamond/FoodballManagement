import React, { Component } from 'react'
import Footer from '../../Home/Footer'
import Newnav from '../Newnav'
import img from './woman 1 1.png'

export default class Account extends Component  {
    constructor(props){
        super(props);
        this.state = {
            userData: "",
        };
    }

    componentDidMount(){
    fetch("http://localhost:5000/userData", {
            method: "POST",
            crossDomian: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userData");
            this.setState({ userData: data.data });
        });
    }
    
    


    render() {
        return (
            <div>
                <Newnav/>
                    <h1 style={{textAlign:"center"}}>Account Details</h1>
                <div style={{display:"flex" , gap:"10%",margin:"5% 25%"}}>
                <img src={img} alt=""/>
                {/* <input type="file" name="image" id="" /> */}
                    <div className="col">
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        gap:"20%",
                        marginLeft:"10%"
                        }}>
                        <label style={{fontSize:"20px"}}>Name:</label>
                        <h2 style={{textAlign: "center"}}>{this.state.userData.fname} </h2>
                    </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        gap:"20%",
                        marginLeft:"10%"
                        }}>
                        <label style={{fontSize:"20px"}}>Role:</label>
                        <h2 style={{textAlign: "center"}}>{this.state.userData.position}</h2>
                    </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        gap:"5%",
                        marginLeft:"10%"
                        }}>
                        <label style={{fontSize:"20px"}}>Auth Level:</label>
                        <h2 style={{textAlign: "center"}}>{this.state.userData.data2?.field2}</h2>
                    </div>
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        gap:"20%",
                        marginLeft:"10%"
                        }}>
                        <label style={{fontSize:"20px"}}>Status:</label>
                        <h2 style={{textAlign: "center"}}>{this.state.userData.data2?.field1}</h2>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

