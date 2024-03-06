import { Container,Form,Button } from "react-bootstrap";
import LayOut from "../Component/LayOut"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const Navigate = useNavigate();
    const[addUser,setUser] = useState({
        name:"",
        year:"",
        pantoneValue:"",
        color:"",
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
            name: addUser.name,
            year: addUser.year,
            pantoneValue: addUser.pantone_value,
            color: addUser.color,
        }

        axios
            .post('https://reqres.in/api/unknown',payLoad)
            .then((res)=> {
                alert('Data added successfull')
                // Navigate('/user');
                setUser(res)
            })
            .catch((err)=> console.log(err))
    }

    console.log(addUser);
    return ( 
        <LayOut>
            <Container className="mt-5 p-0 bg-body-tertiary border border-dark rounded" style={{width:"400px"}}>
                <Form onSubmit={handleSubmit}>
                    <Container className="p-5">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Name" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicYear">
                            <Form.Label>Year:</Form.Label>
                            <Form.Control type="number" name="year" placeholder="Year" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPantoneValue">
                            <Form.Label>Pantone Value:</Form.Label>
                            <Form.Control type="text" name="pantoneValue" placeholder="Pantone Value" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicColor">
                            <Form.Label>Color:</Form.Label>
                            <Form.Control type="text" name="color" placeholder="Color" onChange={handleChange}/>
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