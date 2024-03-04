import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const RouteProtected =({children}) =>{
    const token = localStorage.getItem("access")
    if(!token){
        return <Navigate to={"/"}/>
    }
    return<>{children || <Outlet/>}</>
}

export default RouteProtected