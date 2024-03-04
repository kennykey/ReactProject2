import { useNavigate, useParams } from "react-router-dom"
import LayOut from "../Component/LayOut"
import { useEffect,useState } from "react"
import axios from "axios"

const SingleUser = () =>{
    const [userDetail,setUserDetail] = useState({})
    const navigate = useNavigate();
    const {id} = useParams();

    const handleUser = () =>{
        axios
            .get(`https://reqres.in/api/unknown/${id}`)
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
            .delete(`https://reqres.in/api/unknown/${id}`,config)
            .then((res) =>{
                navigate("/")
            })
            .catch((err) =>{
                console.log(err);
            })
    }

    useEffect(() =>{
        handleUser();
    }, [])

    return(
        <LayOut>
            <div style={{border:"1px solid black",margin:"50px",padding:"10px"}}>
                <h5>ID: {userDetail.id}</h5>
                <h5>Name: {userDetail.name}</h5>
                <h5>Year: {userDetail.year}</h5>
                <h5>Pantone Value: {userDetail.pantone_value}</h5>
                <h5>Color: {userDetail.color}</h5>
                <div style={{textAlign:"center",marginTop:"10px"}}>
                    <button onClick={DeleteUser} style={{padding:"5px 10px",border:"none",color:"white",backgroundColor:"red", margin:"20px"}}>Delete</button>
                    <button onClick={()=> navigate(-1)} style={{padding:"5px 10px", border:"none",color:"white",backgroundColor:"blue", margin:"20px"}}>Back</button>
                </div>
            </div>
        </LayOut>
    )
}

export default SingleUser