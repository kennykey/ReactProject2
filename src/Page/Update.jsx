import { useEffect, useState } from "react";
import LayOut from "../Component/LayOut";
import { Container,Form,Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const {id} = useState();
    const [Data,setData] = useState([]);
    const Navigate = useNavigate();

    const handle = () =>{
        const token = localStorage.getItem("access");
        const config = {
            headers:{
                Authorization:`Bearer ${token}`,
            },
        };

        axios
            .get(`https://reqres.in/api/users/${id}`,config)
            .then((res)=>setData(res?.data?.data))
            .catch((err)=>{
                alert("Data not found");
                console.log(err.response.data);
            })

    }

    const handleEdit = (e) =>{
        e.preventDefault();
        setData({
            ...Data,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = () =>{
        const token = localStorage.getItem("access");
        const config = {
            headers:{
                Authorization:`Bearer ${token}`,
            },
        };

        axios
            .put(`https://reqres.in/api/users/${id}`,Data,config)
            .then((res)=>{
                setData(res?.data?.data)
                alert("Data update success !!!")
                Navigate('/user');
            })
            .catch((err)=>console.log(err))

    }

    useEffect(()=>{
        handle();
    }, [])

    return ( 
        <LayOut>
            <Container className="mt-5 p-0 bg-body-tertiary border border-dark rounded" style={{width:"400px"}}>
                <Form onSubmit={handleSubmit}>
                    <Container className="p-5">
                        <Form.Group className="mb-3" controlId="formBasicEmai">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email" value={Data.email} onChange={handleEdit}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFirst">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" name="first" placeholder="First Name" value={Data.first_name} onChange={handleEdit}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLast">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" name="last" placeholder="Last Name" value={Data.last_name} onChange={handleEdit}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control type="url" name="image" placeholder="Image" value={Data.avatar} onChange={handleEdit}/>
                        </Form.Group>
                        <div className="text-center py-3">
                            <Button variant="primary" type="submit" className="mx-4">
                                    Update
                            </Button>
                        </div>
                    </Container>
                </Form>
            </Container>
        </LayOut>
     );
}
 
export default Update;