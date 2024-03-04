import { Container,Form,Button } from "react-bootstrap"
import './index.css'
import LayOut from "../Component/LayOut"

const Register = () => {
    return (
        <LayOut>
            <Container className="mt-5 p-0 bg-body-tertiary border border-dark rounded" style={{width:"400px"}}>
                <Form>  
                <Container className="p-0 m-0">
                    <img src="https://plus.unsplash.com/premium_photo-1699097156261-0c3987286b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D" alt="LoginIMG" className="rounded-top"/>
                </Container>
                    <Container className="p-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmation Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="text-center py-3">
                            <Button variant="primary" type="submit">
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