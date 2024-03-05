import { Container,Form,Button } from "react-bootstrap"
import './index.css'
import LayOut from "../Component/LayOut"
import { useState } from "react"
import axios from "axios"

const Register = () => {
    const [regis,setRegis] = useState({
        email:"",
        password:"",
        passwordConfirm:"",
    });

    const handleChange = (e) =>{
        setRegis({
            ...regis,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegis = async (e) =>{
        e.preventDefault();

        if (regis.password !== regis.passwordConfirm) {
            alert("Password and confirmation password do not match!");
            return;
        }

        const payLoad = {
            email: regis.email,
            password: regis.password,
        }

        try {
            const res = await axios 
                        .post('https://reqres.in/api/register', payLoad)
                        .then((res) => setRegis(res.data))
        } catch (err) {
            console.log(err,"Missing password");
        }
    }

    console.log(regis);
    return (
        <LayOut>
            <Container className="my-5 p-0 bg-body-tertiary border border-dark rounded" style={{width:"400px"}}>
                <Form>  
                <Container className="p-0 m-0">
                    <img src="https://plus.unsplash.com/premium_photo-1699097156261-0c3987286b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D" alt="LoginIMG" className="rounded-top"/>
                </Container>
                    <Container className="p-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmation Password</Form.Label>
                            <Form.Control onChange={handleChange} name="passwordConfirm" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="text-center py-3">
                            <Button variant="primary" type="submit" onClick={handleRegis}>
                                Register
                            </Button>
                        </div>
                        <p className="text-center">Already have an account? <a href="/login">Login</a></p>
                    </Container>
                </Form>
            </Container>
        </LayOut>
    )
}

export default Register