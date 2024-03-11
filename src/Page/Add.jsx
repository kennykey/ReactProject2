import { Container,Form,Button } from "react-bootstrap";
import LayOut from "../Component/LayOut"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const Navigate = useNavigate();
    const[addUser,setUser] = useState({
        email:"",
        first:"",
        last:"",
        image:"",
    });

    const handleChange = (e) =>{
        setUser({
            ...addUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const payLoad = {
            email: addUser.email,
            first: addUser.first_name,
            last: addUser.last_name,
            image: addUser.avatar,
        }

        const token = localStorage.getItem("access");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };


        axios
            .post('https://reqres.in/api/users',payLoad,config)
            .then((res)=> {
                alert('Data added successfull')
                Navigate('/user');
                setUser(res.data.data)
            })
            .catch((err)=> {
                alert("Data not found");
                console.log(err.response.data);
            })
    }

    console.log(addUser);
    return ( 
        <LayOut>
            <Container className="mt-5 p-0 bg-body-tertiary border border-dark rounded" style={{width:"400px"}}>
                <Form onSubmit={handleSubmit}>
                    <Container className="p-5">
                        <Form.Group className="mb-3" controlId="formBasicEmai">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Email" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFirst">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" name="first" placeholder="First Name" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLast">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" name="last" placeholder="Last Name" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control type="url" name="image" placeholder="Image" onChange={handleChange}/>
                        </Form.Group>
                        <div className="text-center py-3">
                            <Button variant="primary" type="submit" className="mx-4">
                                    Submit
                            </Button>
                        </div>
                    </Container>
                </Form>
            </Container>
        </LayOut>
     );
}
 
export default Add;