import Footer from "./Footer";
import React from "react";
import SideBar from "./SideBar";
import Navbars from "./Navbar";
import './component.css'

const LayOut = ({children}) => {
    return ( 
        <div className="d-flex">
            <div className="col-auto">
                <SideBar/>
            </div>
            <div style={{width:"100%"}}>
                <Navbars/>
                {children}
                <Footer/>
            </div>
        </div>
     );
}
 
export default LayOut;