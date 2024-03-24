import { Container,Form,Button } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import './index.css'
import LayOut from "../Component/LayOut"

const Login = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const Navigate = useNavigate();

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        const payLoad = {
            email: Email,
            password: Password
        }
        setLoading(true)

        axios
            .post('https://reqres.in/api/login', payLoad)
            .then((res) =>{
                console.log(res);
                const token = res?.data?.token;
                localStorage.setItem("access",token);
                if(token){
                    setTimeout(() => {
                        alert('Login successfull');
                        Navigate('/');
                    },1000);
                }
            })
            .catch((error) =>
                console.log(error.response.data));
                alert("Invalid Username or Password")
    }

    return (
        <LayOut>
            <Container className="mt-5 p-0 bg-body-tertiary border border-dark rounded" style={{width:"400px"}}>
                <Form onSubmit={handleLogin}>
                <Container className="p-0 m-0"><img src="./public/premium.avif" alt="LoginIMG" className="rounded-top imgUser"/></Container>
                    <Container className="p-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
                        </Form.Group>
                        <div className="text-center py-3">
                            <Button variant="primary" type="submit" className="mx-4" disabled={loading? true : false}>
                                    { loading ? "Loading..." : "Login" }
                            </Button>
                        </div>
                        <p className="text-center">Don't have an account? <a href="/register">Register</a></p>
                    </Container>
                </Form>
            </Container>
        </LayOut>
    )
}

export default Login