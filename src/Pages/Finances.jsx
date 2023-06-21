import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from "./canvasjs-3.7.5/canvasjs.react"
import Footer from '../Home/Footer'
import Newnav from './Newnav'
import { Pie, PieChart, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer  } from 'recharts';
import { Link } from 'react-router-dom';
import axios from 'axios';


const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const Finances = () => {

    const [Data, setData] = useState([]);
    const [Earndata, setEarndata] = useState([]);

  const GetEmployeeData = () =>{
    //here we will get all employee data
    const url = 'http://localhost:5000/budget'
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
  const url = 'http://localhost:5000/earn'
  axios.get(url)
  .then(response => {
      const result = response.data;
      const {status, message, data} = result;
      if (status !== "SUCCESS") {
          alert(message,status)
      } else {
        setEarndata(data)
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
  EmployeeData();
}, [])



    return (
        <div>
            <Newnav/>
            <div className="fff" style={{display:"flex"}}>
              <div className="pir" style={{margin:"5% 5%", width:"25%"}}>
                <PieChart width={730} height={450}>
                    <Pie data={data01} 
                      dataKey="value" 
                      nameKey="name" 
                      cx="27%" cy="50%" 
                      outerRadius={150} 
                      fill="#8884d8" 
                      label 
                    >
                  {data01.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                    </Pie>
                    <Tooltip />
                </PieChart>                
              </div>

            <div className="bar" style={{margin:"5% 5%", width:"50%"}}>
              <ResponsiveContainer width="120%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>


          <div className="table">
            <h2>Budget</h2>
            <div className="pl" style={{marginTop:"-50px"}}>
                <Link to="/FB" className='play'>See More</Link>
            </div>
                <table>
                    <tr>
                        
                    </tr>
                    {Data.slice(0, 4).map((item)  => {
                        return (
                            <tr key={item._id}>
                                <td>{item.budget}</td>
                                <td>{item.price}</td>
                            </tr>
                            )
                        })}
                </table>
        </div>


        <div className="table">
            <h2>Earnings</h2>
            <div className="pl" style={{marginTop:"-50px"}}>
                <Link to="/FE" className='play'>See More</Link>
            </div>
                <table>
                    <tr>
                        
                    </tr>
                    {Earndata.slice(0, 4).map((item)  => {
                        return (
                            <tr key={item._id}>
                                <td>{item.earning}</td>
                                <td>{item.price}</td>
                            </tr>
                            )
                        })}
                </table>
        </div>


            <Footer/>
        </div>
    )
}

export default Finances