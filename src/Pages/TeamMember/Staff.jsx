import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalFooter, ModalTitle } from 'react-bootstrap'
import Footer from '../../Home/Footer'
import Newnav from '../Newnav'
import Mininav from './Mininav'
import '../pages.css'


const Staff = () => {

    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => {SetViewShow(true)}
    const handleViewClose = () => {SetViewShow(false)}
         //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
        //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
        //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [staffName, setname] = useState("")
    const [role, setrole] = useState("")
    const [level, setlevel] = useState("")
    const [details, setdetails] = useState("")

  //ID for Update record and Delete
    const [id, setId] = useState("")

    // ID for delete
    const [Delete, setDelete] = useState(false)

    const GetEmployeeData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/staff'
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
    //Add Employees
    const hanldeSubmit = () =>{
        const url = 'http://localhost:5000/staff'
        const Credentias =  {staffName, role, level, details}
        axios.post(url, Credentias)
        .then(response => {
            const result = response.data;
            const {status, message, data} = result;
            if (status !== "SUCCESS") {
                alert(message,status)
            } else {
                alert(message)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    //Edit Employees
    const hanldeEdit = () =>{
        const url = `http://localhost:5000/staff/${id}`
        const Credentials =  {staffName, role, level, details}
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
    //Delete Employees
    const handeDelete = () => {
        const url = `http://localhost:5000/staff/${id}`
        axios.delete(url)
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
            <Mininav/>

        <div className="table">
            <h2>Staff</h2>
            <div>
                <button href="" className='plays' onClick={() =>  { handlePostShow() }} 
                style={{width:"20%"}}
                >Add Player</button>
            </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Level</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.staffName}</td>
                                <td>{item.role}</td>
                                <td>{item.level}</td>
                                <td style={{paddingLeft: "7%"}}>
                                    <button className='btn1' onClick={() => {handleViewShow(SetRowData(item))}}>View</button>
                                    <button className='btn2' onClick={() => {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</button>
                                    <button className='btn3'onClick={() => {handleViewShow(SetRowData(item), setId(item._id), setDelete(true))}}>Delete</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            
            <Footer/>

            {/*  Modal for view data to database */}
            <div className="model-box-view" style={{}}>
                <Modal
                    show= {ViewShow}
                    onHide= {handleViewClose}
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
                        >View Employee Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.staffName} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.role} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.level} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.details} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button onClick={handeDelete} style={{
                                        width: "300px",
                                        marginLeft: "54%",
                                        marginTop: "3%",
                                        background: "red"
                                }}>Delete</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleViewClose} style={{
                            width: "300px",
                            marginLeft: "54%",
                            marginTop: "2%"
                    }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            {/*  Modal for submit data to database */}
            <div className="model-box-view" style={{}}>
                <Modal
                    show= {ViewPost}
                    onHide= {hanldePostClose}
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
                        >Add New Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="form-group">
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Please Enter Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control'  onChange={(e) => setrole(e.target.value)} placeholder="Please Enter Role"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control'  onChange={(e) => setlevel(e.target.value)} placeholder="Please Enter Level" />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' onChange={(e) => setdetails(e.target.value)} placeholder="Please Enter Level" />
                            </div>
                            <Button variant='primary' onClick={hanldeSubmit} style={{
                                width: "300px",
                                marginLeft: "54%",
                                marginTop: "0%"
                            }}>Add Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose} style={{
                            width: "300px",
                            marginLeft: "54%",
                            marginTop: "2%"
                    }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

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
                        <div>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Please Enter Name" defaultValue={RowData.staffName}/>
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <input type="text" className='form-control'  onChange={(e) => setrole(e.target.value)} placeholder="Please Enter Role" defaultValue={RowData.role}/>
                            </div>
                            <div className="form-group">
                                <label>Level</label>
                                <input type="text" className='form-control'  onChange={(e) => setlevel(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.level}/>
                            </div>
                            <div className="form-group">
                                <label>Detail</label>
                                <input type="text" className='form-control' onChange={(e) => setdetails(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.details}/>
                            </div>
                            <Button variant='primary' onClick={hanldeEdit} style={{
                                width: "300px",
                                marginLeft: "54%",
                                marginTop: "0%"
                            }}>Edit Employee</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose} style={{
                            width: "300px",
                            marginLeft: "54%",
                            marginTop: "2%"
                    }}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Staff








// value={RowData.staffName}
// value={RowData.role}
// value={RowData.level}
// value={RowData.details}