import React, { useEffect, useState } from 'react'
import Footer from '../../Home/Footer'
import Newnav from '../Newnav'
import Mininav from './Mininav'
import '../pages.css'
import axios from 'axios'
import { Button, Modal, ModalFooter, ModalTitle } from 'react-bootstrap'


const Players = () => {
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
    const [playerName, setPlayerName] = useState("")
    const [position, setPosition] = useState("")
    const [goals, setGoals] = useState("")
    const [assists, setAssists] = useState("")
    const [status, setStatus] = useState("")

    const [Data, setData] = useState([]);

  //ID for Update record and Delete
    const [id, setId] = useState("")

    // ID for delete
    const [Delete, setDelete] = useState(false)


    const GetEmployeeData = () =>{
        //here we will get all employee data
        const url = 'http://localhost:5000/player'
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
            const url = 'http://localhost:5000/player'
            const Credentias =  {playerName, position, goals, assists, status}
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
            const url = `http://localhost:5000/player/${id}`
            const Credentials =  {playerName, position, goals, assists, status}
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
            const url = `http://localhost:5000/player/${id}`
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

    useEffect(() => {
        GetEmployeeData();
    }, [])


    return (
        <div>
            <Newnav/>
            <Mininav/>

        <div className="table">
            <h2>Players</h2>
            <button href="" className='plays' onClick={() =>  { handlePostShow() }} 
                style={{width:"20%"}}
                >Add Player</button>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                    {Data.map((item) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.playerName}</td>
                                <td>{item.position}</td>
                                <td>{item.goals}</td>
                                <td>{item.assists}</td>
                                <td>{item.status}</td>
                                <td style={{paddingLeft: "0%"}}>
                                    <button className='btn1' onClick={() => {handleViewShow(SetRowData(item))}}>View</button>
                                    <button className='btn2' onClick={() => {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</button>
                                    <button className='btn3'onClick={() => {handleViewShow(SetRowData(item), setId(item._id), setDelete(true))}}>Delete</button>
                                </td>
                            </tr>
                            )
                        })}
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
                        >View Plyer Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='grids' id='grid'>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.playerName} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.position} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.goals} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.assists} readOnly />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' value={RowData.status} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button onClick={handeDelete} style={{
                                        width: "300px",
                                        marginLeft: "14%",
                                        marginTop: "10%",
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
                        >Add New Player</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='grids' id='grid'>
                            <div className="form-group">
                                <input type="text" className='form-control' onChange={(e) => setPlayerName(e.target.value)} placeholder="Please Enter Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control'  onChange={(e) => setPosition(e.target.value)} placeholder="Please Enter Position"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control'  onChange={(e) => setGoals(e.target.value)} placeholder="Please Enter Goals" />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' onChange={(e) => setAssists(e.target.value)} placeholder="Please Enter Assists" />
                            </div>
                            <div className="form-group">
                                <input type="text" className='form-control' onChange={(e) => setStatus(e.target.value)} placeholder="Please Enter Status" />
                            </div>
                            <Button variant='primary' onClick={hanldeSubmit} style={{
                                width: "300px",
                                marginLeft: "14%",
                                marginTop: "10%"
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
                        <div className='grids' id='grid'>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className='form-control' onChange={(e) => setPlayerName(e.target.value)} placeholder="Please Enter Name" defaultValue={RowData.staffName}/>
                            </div>
                            <div className="form-group">
                                <label>Position</label>
                                <input type="text" className='form-control'  onChange={(e) => setPosition(e.target.value)} placeholder="Please Enter Role" defaultValue={RowData.role}/>
                            </div>
                            <div className="form-group">
                                <label>Goals</label>
                                <input type="text" className='form-control'  onChange={(e) => setGoals(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.level}/>
                            </div>
                            <div className="form-group">
                                <label>Assists</label>
                                <input type="text" className='form-control' onChange={(e) => setAssists(e.target.value)} placeholder="Please Enter Level" defaultValue={RowData.details}/>
                            </div>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="text" className='form-control' onChange={(e) => setStatus(e.target.value)} placeholder="Please Enter Status" />
                            </div>
                            <Button variant='primary' onClick={hanldeEdit} style={{
                                width: "300px",
                                marginLeft: "14%",
                                marginTop: "10%"
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

export default Players
