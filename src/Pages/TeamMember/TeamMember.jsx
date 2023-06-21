import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Home/Footer'
import Newnav from '../Newnav'
import '../pages.css'


const datas = [
    { name: "Daniel Okoruwe", role: "Head Coach", goals:"", details: "Details" },
    { name: "Steven Cane", role: "Assistant Coach", goals: "", details: "Details" },
    { name: "Jang Min", role: "Medic Expert", goals: "", details: "Details"},
    { name: "Steward Frank", role: "Physiotherapist", goals: "", details: "Details"},
]



const TeamMember = () => {

    const [Data, setData] = useState([]);
    const [Pdata, setPdata] = useState([]);
    const [Sdata, setSdata] = useState([]);



    const GetEmployeeData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/tmBoxData'
        axios.get(url)
        .then(response => {
            const result = response.data;
            const {status, message, data} = result;
            if (status !== "SUCCESS") {
                alert(message,status)
            } else {
                setData(data)
                console.log(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }


    const GetPlayerData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/player'
        axios.get(url)
        .then(response => {
            const result = response.data;
            const {status, message, data} = result;
            if (status !== "SUCCESS") {
                alert(message,status)
            } else {
                setPdata(data)
                console.log(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }


    const GetStaffData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/staff'
        axios.get(url)
        .then(response => {
            const result = response.data;
            const {status, message, data} = result;
            if (status !== "SUCCESS") {
                alert(message,status)
            } else {
                setSdata(data)
                console.log(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }




    useEffect(() => {
        GetEmployeeData();
    }, [])
    useEffect(() => {
        GetPlayerData();
    }, [])
    useEffect(() => {
        GetStaffData();
    }, [])

    return (
        <>
            <Newnav/>
            
            <div className='grids'>
            <div className="box">
                <div className="flex">
                    <i class="bi bi-person-circle"></i>
                    <h4>Inbound Deals</h4>
                </div>
                <div className="grid">
                    {Data.map((item) => {
                        return(
                            <div className="flx"  key={item._id}>
                                <h4>{item.name}</h4>
                                <h4>{item.status}</h4>
                                <h4>{item.date}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="box">
                <div className="flex">
                    <i class="bi bi-wallet-fill"></i>
                    <h4>Outbound Deals</h4>
                </div>
                {Data.map((item) => {
                    return(
                    <div className="flx" style={{gridTemplateColumns:"auto auto auto auto"}}>
                        <h4>{item.seconName}</h4>
                        <h4>{item.playerStatus}</h4>
                        <h4>{item.team}</h4>
                        <h4>{item.secondate}</h4>
                    </div>                        
                    )

                })}
                <div className="grid">
                    
                </div>
            </div>
        </div>


        <div className="table">
            <h2>Players</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>Assists</th>
                    </tr>
                    {Pdata.slice(0, 3).map((item)  => {
                        return (
                            <tr key={item._id}>
                                <td>{item.playerName}</td>
                                <td>{item.position}</td>
                                <td>{item.goals}</td>
                                <td>{item.assists}</td>
                            </tr>
                            )
                        })}
                </table>
            <div className="pl">
                <Link to="/Players" className='play'>See More</Link>
            </div>
        </div>



        <div className="table">
            <h2>Staffs</h2>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Level</th>
                        <th></th>
                    </tr>
                    {Sdata.slice(0, 3).map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.staffName}</td>
                                <td>{item.role}</td>
                                <td>{item.level}</td>
                            </tr>
                            )
                        })}
                </table>
            <div className="pl">
                <Link to="/Staff" className='play'>See More</Link>
            </div>
        </div>
        
    <Footer/>
        </>
    )
}

export default TeamMember
