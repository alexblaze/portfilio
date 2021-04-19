import React from "react"
import Typed from "react-typed";
const header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Development and Promotion</h1>
                <Typed
                className="typed-text"
                strings={["Web Design","Web Development","Ads Management"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
            
        </div>
    )
}

export default header
