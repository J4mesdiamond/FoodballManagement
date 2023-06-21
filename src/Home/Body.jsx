import React from 'react'
import './styles.css'
import img from './immg.png'
import img1 from './immg1.png'

const Body = () => {
    return (
        <body style={{background:"#CBD7E9"}}>
            <div className='container'>
            <div className="team">
                <h2>About Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur. At vestibulum morbi lectus felis pellentesque. 
                    Sit platea ac scelerisque morbi. Dignissim facilisis non et erat semper pellentesque 
                    aliquet vitae morbi. Accumsan egestas amet pretium scelerisque maecenas praesent
                    quis tincidunt sem. In feugiat blandit purus et.
                </p>
            </div>
            <div className="manage">
                <h2>Managers</h2>
                <div className="grid">
                    <div className="peps">
                        <img src={img} alt="" />
                        <h4>CEO</h4>
                        <h6>Adefila Mustapha</h6>
                    </div>
                    <div className="peps">
                        <img src={img1} alt="" />
                        <h4>Head Coach</h4>
                        <h6>Jacobs David</h6>
                    </div>
                    <div className="peps">
                        <img src={img1} alt="" />
                        <h4>HR Manager</h4>
                        <h6>Daniel Jones</h6>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}

export default Body
