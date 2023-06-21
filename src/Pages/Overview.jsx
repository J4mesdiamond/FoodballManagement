import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../Home/Footer'
import Newnav from './Newnav'
import './pages.css'

const Overview = () => {
    const [Data, setData] = useState([]);
    const [Newdata, setNewdata] = useState([]);
    const [ViewShow, SetViewShow] = useState(false)



    const GetEmployeeData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/overviewDetails'
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


    const EmployeeData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/activity'
        axios.get(url)
        .then(response => {
            const result = response.data;
            const {status, message, data} = result;
            if (status !== "SUCCESS") {
                alert(message,status)
            } else {
                setNewdata(data)
                console.log(data)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    //call this fuction in useEffect
    useEffect(() => {
        GetEmployeeData();
    }, [])

    useEffect(() => {
        EmployeeData();
    }, [])


    return (
        <>
        <Newnav/>
        <div className='grids'>
            <div className="box">
                <div className="flex">
                    <i class="bi bi-person-circle"></i>
                    <h4>Players on Loan / Injury</h4>
                </div>
                {Data.map((item) => {
                    return(
                    <>
                        <div className="grid" >
                            <div className="flx" key={item._id}>
                                <h4>{item.name}</h4>
                                <h4>{item.status}</h4>
                                <h4>{item.date}</h4>
                            </div>
                        </div>
                    </>
                    )
                })}
            </div>

            <div className="box">
                <div className="flex">
                    <i class="bi bi-wallet-fill"></i>
                    <h4>Expenses</h4>
                </div>
                {Data.slice(0, 5).map((item) => {
                    return(
                    <>
                        <div className="grid"  key={item._id}>
                            <div className="flx">
                                <h4>{item.cash}</h4>
                                <h4>{item.cashUsed}</h4>
                                <h4>{item.secondate}</h4>
                            </div>
                        </div>
                    </>
                    )
                })}
            </div>
        </div>

        <div className="table" id=''>
            <h1>Recent Activities</h1>

                <table id='table'>
                    <tbody>
                    {Newdata.slice(0, 3).map((item) => {
                    return(
                        <>
                            <tr>
                                <th>{item.fixtures}</th>
                                <th>{item.team}</th>
                                <th>{item.date}</th>
                            </tr>
                        </>
                    )
                })}
                {Newdata.slice(0, 3).map((item) => {
                    return(
                        <>
                            <tr>
                                <th>{item.score}</th>
                                <th>{item.team}</th>
                                <th>{item.date}</th>
                            </tr>
                        </>
                    )
                })}
                    </tbody>
                </table>
            </div>
        <Footer/>
        </>
        
    )
}

export default Overview
