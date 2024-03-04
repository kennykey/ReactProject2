import { useState,useEffect } from "react"
import LayOut from "../Component/LayOut"
import axios from "axios"
import { Link } from "react-router-dom"


const ListUser = () =>{
    const [users,setUsers] = useState([])

    const handleUser = () =>{
        axios
            .get(`https://reqres.in/api/unknown`)
            .then((res) =>{
                console.log(res.data.data)
                setUsers(res.data.data)
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    useEffect(() =>{
        handleUser();
    }, []);

    return(
        <LayOut>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", margin:"100px"}}>
                {users.map((user)=>(
                    <div style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
                        <h5>Name: {user.name}</h5>
                        <h5>Year: {user.year}</h5>
                        <div style={{textAlign:"center"}}>
                            <Link to={`/user/${user.id}`}>
                                <button style={{padding:"5px 18px", border:"none", color:"white", backgroundColor:"blue"}}>Detail</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </LayOut>
    )
}

export default ListUser