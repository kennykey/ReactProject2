import { Navbar,Container,Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Navbars = () => {
    const Navigate = useNavigate();
    const access = localStorage.getItem("access");

    const logOut = () =>{
        localStorage.removeItem("access");
        Navigate("/")
    }
    return ( 
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Nav className="ms-auto">
                    <div className="px-3">
                        {access?(
                            <a onClick={logOut} aria-current="page" className='text-decoration-none'>
                                <Button variant="outline-secondary"><i class="bi bi-box-arrow-right"></i></Button>
                                <span className='text-white fs-5 d-none d-sm-inline'>LogOut</span>
                            </a>
                        ):(
                            <a href="/login" aria-current="page" className='text-decoration-none'>
                                <Button variant="outline-secondary"><i class="bi bi-person-fill"></i></Button>
                                <span className='text-white fs-5 d-none d-sm-inline'>Login</span>
                            </a>
                        )}
                    </div>
                </Nav>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default Navbars;