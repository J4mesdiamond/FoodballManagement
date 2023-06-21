import React, { useEffect, useState } from 'react'
import Footer from '../../Home/Footer'
import Newnav from '../Newnav'
import Mininav from './Mininav'
import '../pages.css'
import img from './woman 1 1.png'
import axios from 'axios'
import { Button, Modal, ModalFooter } from 'react-bootstrap'


const StaffDetails = () => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => {SetViewShow(true)}
    const handleViewClose = () => {SetViewShow(false)}

     //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }

    const [staffName, setStaffName] = useState("")
    const [role, setRole] = useState("")
    const [age, setAge] = useState("")
    const [authLevel, setAuthLevel] = useState("")
    const [staffCOB, setStaffCOB] = useState("")
    const [staffDOB, setStaffDOB] = useState("")
    const [staffSalary, setStaffSalary] = useState("")
    const [staffPC, setStaffPC] = useState("")
    const [staffCSD, setStaffCSD] = useState("")
    const [staffCED, setStaffCED] = useState("")
    const [staffStatus, setStaffStatus] = useState("")
    const [staffPT, setStaffPT] = useState("")

  //ID for Update record and Delete
    const [id, setId] = useState("")


    const GetEmployeeData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/staffDetails'
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

    // Edit Employees
    const hanldeEdit = () =>{
        const url = `http://localhost:5000/staffDetails/${id}`
        const Credentials =  {
            staffName, age, role,
            authLevel, staffCOB, staffDOB, staffSalary,
            staffPC, staffCSD, staffCED, staffStatus,staffPT
        }
        axios.put(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                alert(message)
                window.location.reload()
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


    return (
        <div>
            <Newnav/>
            <div style={{margin:"0 70px"}}>
            {Data.map((item) => {
                return(
                    <>
                <div className="fx">
                    <h1>Staff Details</h1>
                    <button onClick={() => {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</button>
                </div>

                    <div className="fxx">
                        <img src={img} alt="" />
                        {/* <input type="file" name="image" id="" /> */}
                        <div className="row">
                            <div className="rw" key={item._id}>
                                    <h2>Name:</h2>
                                    <label style={{width:"200px"}}>{item.staffName}</label>
                                </div>
                                <div className="rw">
                                    <h2>Age:</h2>
                                    <label>{item.age}</label>
                                </div>
                                <div className="rw">
                                    <h2>Role:</h2>
                                    <label>{item.role}</label>
                                </div>
                                <div className="rw">
                                    <h2>Auth Level:</h2>
                                    <label>{item.authLevel}</label>
                                </div>
                        </div>
                    </div>


                        <div className="rw">
                            <h2>Country Of Birth :</h2>
                            <label>{item.staffCOB}</label>
                        </div>
                        <div className="rw">
                            <h2>Date Of Birth :</h2>
                            <label>{item.staffDOB}</label>
                        </div>
                        <div className="rw">
                            <h2>Salary :</h2>
                            <label>{item.staffSalary}</label>
                        </div>
                        <div className="rw">
                            <h2>Present Contract :</h2>
                            <label>{item.staffPC}</label>
                        </div>
                        <div className="rw">
                            <h2>Contract Start Date :</h2>
                            <label>{item.staffCSD}</label>
                        </div>
                        <div className="rw">
                            <h2>Contract End Date :</h2>
                            <label>{item.staffCED}</label>
                        </div>
                        <div className="rw">
                            <h2>Status :</h2>
                            <label>{item.staffStatus}</label>
                        </div>
                        <div className="rw">
                            <h2>Previous Team :</h2>
                            <label>{item.staffPT}</label>
                        </div>
                        </>
                    )
                })}
                    </div>
            <Footer/>

        {/*  Modal for Edit data to database */}
            <div className="model-box-view" style={{}}>
                <Modal
                    show= {ViewEdit}
                    onHide= {hanldeEditClose}
                    backdrop= "static"
                    keyboard= {false}
                    style={{
                        position: "absolute", 
                        top:"40%",
                        background: "rgba(70, 72, 73, 0.7)",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <Modal.Header >
                        <Modal.Title
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "30px",
                            paddingTop: "50px",
                            paddingBottom: "50px"
                        }}
                        >Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='gridss'>
                            <div className="form-group1">
                                <label>Name :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffName(e.target.value)} placeholder="Please Enter Name" defaultValue={RowData.staffName}/>
                            </div>
                            <div className="form-group1">
                                <label>Role :</label>
                                <input type="text" className='form-control'  onChange={(e) => setRole(e.target.value)} placeholder="Please Enter Role" defaultValue={RowData.age}/>
                            </div>
                            <div className="form-group1">
                                <label>Age :</label>
                                <input type="text" className='form-control'  onChange={(e) => setAge(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.role}/>
                            </div>
                            <div className="form-group1">
                                <label>Level :</label>
                                <input type="text" className='form-control' onChange={(e) => setAuthLevel(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.authLevel}/>
                            </div>
                            <div className="form-group1">
                                <label>C.O.B :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffCOB(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.staffCOB}/>
                            </div>
                            <div className="form-group1">
                                <label>D.O.B :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffDOB(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.staffDOB}/>
                            </div>
                            <div className="form-group1">
                                <label>Salary :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffSalary(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.staffSalary}/>
                            </div>
                            <div className="form-group1">
                                <label>P.C :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffPC(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.staffPC}/>
                            </div>
                            <div className="form-group1">
                                <label>C.S.D :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffCSD(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.staffCSD}/>
                            </div>
                            <div className="form-group1">
                                <label>C.E.D :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffCED(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.staffCED}/>
                            </div>
                            <div className="form-group1">
                                <label>Staff :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffStatus(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.staffStatus}/>
                            </div>
                            <div className="form-group1">
                                <label>P.T :</label>
                                <input type="text" className='form-control' onChange={(e) => setStaffPT(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.staffPT}/>
                            </div>
                            <Button variant='primary' onClick={hanldeEdit} style={{
                                width: "300px",
                                marginLeft: "54%",
                                marginTop: "14%"
                            }}>Edit Employee</Button>
                        </div>
                    </Modal.Body>
                    <ModalFooter>
                        <Button variant='secondary' onClick={hanldeEditClose} style={{
                            width: "300px",
                            marginLeft: "54%",
                            marginTop: "-3%"
                    }}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>

        </div>
    )
}

export default StaffDetails
