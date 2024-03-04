import { Container, Nav, Navbar,Button } from "react-bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from "react-router-dom"


const Navbars = () => {
    const Navigate = useNavigate();
    const access = localStorage.getItem("access");

    const logOut = () =>{
        localStorage.removeItem("access");
        Navigate("/")
    }

    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Account</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/user">UserList</Nav.Link>
                    </Nav>
                    <div>
                        {access?(
                            <Button variant="outline-secondary px-3"><a onClick={logOut}><i class="bi bi-box-arrow-right"></i></a></Button>
                        ):(
                            <Button variant="outline-secondary px-3"><a href="/login"><i class="bi bi-person-fill text-muted"></i></a></Button>
                        )}
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navbars