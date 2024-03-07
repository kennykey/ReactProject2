import { useNavigate, useParams } from "react-router-dom"
import './index.css'
import LayOut from "../Component/LayOut"
import { useEffect,useState } from "react"
import axios from "axios"

const SingleUser = () =>{
    const [userDetail,setUserDetail] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();

    const handleUser = () =>{
        axios
            .get(`https://reqres.in/api/users/${id}`)
            .then((res) =>{
                setUserDetail(res?.data?.data)
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    const DeleteUser = () =>{
        const token = localStorage.getItem("access");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .delete(`https://reqres.in/api/users/${id}`,config)
            .then((res) =>{
                navigate("/")
            })
            .catch((err) =>{
                console.log(err,"Missing password");
            })
    }

    useEffect(() =>{
        handleUser();
    }, [])

    return(
        <LayOut>
            <div style={{border:"1px solid black",margin:"50px",padding:"10px"}}>
                <div style={{display:"flex"}}>
                    <div>
                        <img src={userDetail.avatar} alt="avatar" className="avatar"/>
                    </div>
                    <div style={{padding:"15px 0"}}>
                        <h5>ID: {userDetail.id}</h5>
                        <h5>Email: {userDetail.email}</h5>
                        <h5>First Name: {userDetail.first_name}</h5>
                        <h5>Last Name: {userDetail.last_name}</h5>
                        <p><span className="fw-bold fs-5">Introduction:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate 
                        ipsum doloribus eos totam asperiores in nemo debitis obcaecati ratione facere! Vel laudantium sint qui eius alias officia, 
                        libero amet velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, esse? Lorem ipsum dolor sit amet 
                        consectetur, adipisicing elit. Veritatis quos culpa quaerat amet magnam minima adipisci dolore illo nam. Nobis.lorem</p>
                    </div>  
                </div>              
                <div style={{textAlign:"center",marginTop:"10px"}}>
                    <button onClick={DeleteUser} className="del">Delete</button>
                    <button onClick={()=> navigate(-1)}>Back</button>
                </div>
            </div>
        </LayOut>
    )
}

export default SingleUser