import Footer from "./Footer";
import Navbars from "./Navbar";
import React from "react";

const LayOut = ({children}) => {
    return ( 
        <div>
            <Navbars/>
            <div style={{minHeight:"100vh"}}>
                {children}
            </div>
            <Footer/>
        </div>
     );
}
 
export default LayOut;