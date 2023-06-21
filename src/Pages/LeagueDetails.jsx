import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Footer from '../Home/Footer'
import Newnav from './Newnav'




const LeagueDetails = () => {


const [Newdata, setNewdata] = useState([]);
const [Data, setData] = useState([]);
const [Datas, setDatas] = useState([]);
const [Ldata, setLdata] = useState([]);
const [Cupdata, setCupdata] = useState([]);


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


const EmployeeDatass = () =>{
    //here we will get all employee data
    const url = 'http://localhost:5000/result'
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

const EmployeeDatasss = () =>{
    //here we will get all employee data
    const url = 'http://localhost:5000/premierLeague'
    axios.get(url)
    .then(response => {
        const result = response.data;
        const {status, message, data} = result;
        if (status !== "SUCCESS") {
            alert(message,status)
        } else {
            setDatas(data)
            console.log(data)
        }
    })
    .catch(err => {
        console.log(err)
    })
}

const LeagueData = () =>{
    //here we will get all employee data
    const url = 'http://localhost:5000/uefaLeague'
    axios.get(url)
    .then(response => {
        const result = response.data;
        const {status, message, data} = result;
        if (status !== "SUCCESS") {
            alert(message,status)
        } else {
            setLdata(data)
            console.log(data)
        }
    })
    .catch(err => {
        console.log(err)
    })
}

const cupData = () =>{
    //here we will get all employee data
    const url = 'http://localhost:5000/faDetails'
    axios.get(url)
    .then(response => {
        const result = response.data;
        const {status, message, data} = result;
        if (status !== "SUCCESS") {
            alert(message,status)
        } else {
            setCupdata(data)
            console.log(data)
        }
    })
    .catch(err => {
        console.log(err)
    })
}

useEffect(() => {
    EmployeeData();
}, [])

useEffect(() => {
    EmployeeDatass();
}, [])

useEffect(() => {
    EmployeeDatasss();
}, [])

useEffect(() => {
    LeagueData();
}, [])

useEffect(() => {
    cupData();
}, [])


    return (
        <div>
            <Newnav/>
            <div className="table" id=''>
            <h1>Recent Activities</h1>

                <table id='table'>
                    <tbody>
                        {Newdata.slice(0, 4).map((item) => {
                        return(
                            <>
                                <tr>
                                    <th>{item.fixtures}</th>
                                    <th>{item.team}</th>
                                    <th style={{fontWeight:"700"}}>{item.date}</th>
                                </tr>
                            </>
                        )
                    })}
                    </tbody>
                </table>
                <a href="/Active"
                    style={{
                        background:"#02004D",
                        color:"white",
                        textDecoration:"none",
                        textAlign:"center",
                        width:"10%",
                        padding:"14px 18px",
                        marginLeft:"87%"
                    }}
                >See More</a>
            </div>


            <div className="table" id=''>
            <h1>Results</h1>

                <table id='table'>
                    <tbody>
                    {Data.slice(0, 4).map((item) => {
                        return(
                            <>
                                <tr>
                                    <th>{item.score}</th>
                                    <th style={{ paddingLeft:"15%"}}>{item.team}</th>
                                    <th style={{fontWeight:"700", paddingLeft:"28%"}}>{item.date}</th>
                                </tr>
                            </>
                        )
                    })}
                    </tbody>
                </table>
                <a href="/Result"
                    style={{
                        background:"#02004D",
                        color:"white",
                        textDecoration:"none",
                        textAlign:"center",
                        width:"10%",
                        padding:"14px 18px",
                        marginLeft:"87%"
                    }}
                >See More</a>
            </div>


        <div className="table" id=''>
            <h1>Premier Legue Tables</h1>

                <table id='table'>
                    <tbody>
                    {Datas.slice(0, 4).map((item) => {
                        return(
                            <>
                                <tr>
                                    <th>{item.tableNo}</th>
                                    <th style={{ paddingLeft:"15%"}}>{item.team}</th>
                                    <th style={{fontWeight:"700", paddingLeft:"18%"}}>{item.points}</th>
                                </tr>
                            </>
                        )
                    })}
                    </tbody>
                </table>
                <a href="/Premier"
                    style={{
                        background:"#02004D",
                        color:"white",
                        textDecoration:"none",
                        textAlign:"center",
                        width:"10%",
                        padding:"14px 18px",
                        marginLeft:"87%"
                    }}
                >See More</a>
            </div>

            
        <div className="table" id=''>
            <h1>UEFA Legue Tables</h1>

                <table id='table'>
                    <tbody>
                    {Ldata.slice(0, 4).map((item) => {
                        return(
                            <>
                                <tr>
                                    <th>{item.tableNo}</th>
                                    <th style={{ paddingLeft:"15%"}}>{item.team}</th>
                                    <th style={{fontWeight:"700", paddingLeft:"18%"}}>{item.points}</th>
                                </tr>
                            </>
                        )
                    })}
                    </tbody>
                </table>
                <a href="/UEFA"
                    style={{
                        background:"#02004D",
                        color:"white",
                        textDecoration:"none",
                        textAlign:"center",
                        width:"10%",
                        padding:"14px 18px",
                        marginLeft:"87%"
                    }}
                >See More</a>
            </div>

            <div className="table" id=''>
            <h1>FA Cup</h1>

                <table id='table'>
                    <tbody>
                    {Cupdata.slice(0, 4).map((item) => {
                        return(
                            <>
                                <tr>
                                    <th>{item.tableNo}</th>
                                    <th style={{ paddingLeft:"15%"}}>{item.team}</th>
                                    <th style={{fontWeight:"700", paddingLeft:"18%"}}>{item.points}</th>
                                </tr>
                            </>
                        )
                    })}
                    </tbody>
                </table>
                <a href="/Faleague"
                    style={{
                        background:"#02004D",
                        color:"white",
                        textDecoration:"none",
                        textAlign:"center",
                        width:"10%",
                        padding:"14px 18px",
                        marginLeft:"87%"
                    }}
                >See More</a>
            </div>

            <Footer/>
        </div>
    )
}

export default LeagueDetails


