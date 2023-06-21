import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalFooter, ModalTitle } from 'react-bootstrap'
import Footer from '../Home/Footer'
import Newnav from '../Pages/Newnav'
import '../Pages/pages.css'


const Faleague = () => {

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
    const [tableNo, setTableNo] = useState("")
    const [team, setTeam] = useState("")
    const [points, setPoints] = useState("")

  //ID for Update record and Delete
    const [id, setId] = useState("")

    // ID for delete
    const [Delete, setDelete] = useState(false)

    const GetEmployeeData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/faDetails'
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
        const url = 'http://localhost:5000/faDetails'
        const Credentias =  {tableNo, team, points}
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
        const url = `http://localhost:5000/faDetails/${id}`
        const Credentials =  {tableNo, team, points}
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
        const url = `http://localhost:5000/faDetails/${id}`
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

        <div className="table">
            <h2>FA Cup</h2>
            <div>
                <button href="" className='plays' onClick={() =>  { handlePostShow() }} 
                style={{width:"20%"}}
                >Add Club</button>
            </div>
                <table>
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.tableNo}</td>
                                <td>{item.team}</td>
                                <td>{item.points}</td>
                                <td style={{paddingLeft: "18%"}}>
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
                                <input type="text" className='form-control' value={RowData.tableNo} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.team} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.points} readOnly />
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
                                <input type="text" className='form-control' onChange={(e) => setTableNo(e.target.value)} placeholder="Please Enter TableNo"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control'  onChange={(e) => setTeam(e.target.value)} placeholder="Please Enter Team"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control'  onChange={(e) => setPoints(e.target.value)} placeholder="Please Enter Points" />
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
                                <label>Table Number</label>
                                <input type="text" className='form-control' onChange={(e) => setTableNo(e.target.value)} placeholder="Please Enter TableNo" defaultValue={RowData.staffName}/>
                            </div>
                            <div className="form-group">
                                <label>Team</label>
                                <input type="text" className='form-control'  onChange={(e) => setTeam(e.target.value)} placeholder="Please Enter Team" defaultValue={RowData.role}/>
                            </div>
                            <div className="form-group">
                                <label>Points</label>
                                <input type="text" className='form-control'  onChange={(e) => setPoints(e.target.value)} placeholder="Please Enter Points" defaultValue={RowData.level}/>
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

export default Faleague








// value={RowData.staffName}
// value={RowData.role}
// value={RowData.level}
// value={RowData.details}