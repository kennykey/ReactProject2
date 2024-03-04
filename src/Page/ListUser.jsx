import { useState,useEffect } from "react"
import LayOut from "../Component/LayOut"
import axios from "axios"
import { Link } from "react-router-dom"


const ListUser = () =>{
    const [users,setUsers] = useState([])
    const [pagination, setPagination] = useState({
        perPage: 0,
        total: 0,
        currentPage: 1,
        previousPage:0,
        nextPage:0,
    })

    const handleUser = () =>{
        axios
            .get(`https://reqres.in/api/unknown?page=${pagination.currentPage}`)
            .then((res) =>{
                console.log(res.data.data)
                setUsers(res.data.data)
                setPagination({
                    perPage: res.data.per_page,
                    total: res.data.total,
                    currentPage: res.data.page,
                    previousPage: res.data.page - 1,
                    nextPage: res.data.page + 1,
                });
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    const handleBack = () =>{
        setPagination({
            ...pagination,
            currentPage:pagination.previousPage,
        });
    };

    const handleNext = () =>{
        setPagination({
            ...pagination,
            currentPage:pagination.nextPage,
        });
    };

    useEffect(() =>{
        handleUser();
    }, []);

    useEffect(() =>{
        handleUser();
    }, [pagination.currentPage]);
    console.log(pagination);

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
            <div style={{display:"flex", gap:"30px", alignContent:"center", justifyContent:"center"}} className="py-5">
                <button onClick={handleBack} disabled={pagination.previousPage === 0} style={{padding:"5px 18px", border:"none", color:"white", backgroundColor:"blue"}}>
                    Prev
                </button>
                <button onClick={handleNext} disabled={pagination.nextPage === 0} style={{padding:"5px 18px", border:"none", color:"white", backgroundColor:"blue"}}>
                    Next
                </button>
            </div>
        </LayOut>
    )
}

export default ListUser