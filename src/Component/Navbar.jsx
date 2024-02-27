import { useState } from "react"
import { Container, Nav, Navbar,Button } from "react-bootstrap"
import Login from "./Login"
import Register from "./Register"
import 'bootstrap-icons/font/bootstrap-icons.css'


const Navbars = () => {

    const [login,setLogin] = useState(false)
    const [register,setRegister] = useState(false)

    const handleLogin = () =>{
        setLogin(!login);
    }

    const handleRegister = () =>{
        setRegister(!register);
    }

    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">VcharShop</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <div>
                        <Button variant="outline-secondary" onClick={handleLogin}><i class="bi bi-person-fill"></i></Button>
                    </div>
                </Container>
            </Navbar>
        {login && <Login/>}
        {register && <Register/>}
        </div>
    )
}

export default Navbars