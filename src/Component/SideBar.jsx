import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router-dom';
import './component.css'
import { Navbar } from 'react-bootstrap';

const SideBar = () => {
    const Navigate = useNavigate();
    const access = localStorage.getItem("access");

    const logOut = () =>{
        localStorage.removeItem("access");
        Navigate("/")
    }
    return ( 
        <Navbar className='p-4 bg-dark d-flex h-100 justify-content-between flex-column'>
            <div>
                <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-items-center my-2'>
                    <span className='ms-1 fs-3 d-none d-sm-inline'>Pro<span className='text-primary'>verse</span></span>
                </a>
                <hr className='text-secondary d-none d-sm-block'/>
                <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
                    <li className='nav-item fs-5 my-1 py-sm-0 py-2'>
                        <a href="/" className='nav-link text-white' aria-current="page">
                            <i class="bi bi-house"></i>
                            <span className='ms-2 d-none d-sm-inline'>Home</span>
                        </a>
                    </li>
                    <li className='nav-item fs-5 my-1 py-sm-0 py-2'>
                        <a href="/user" className='nav-link text-white' aria-current="page">
                            <i class="bi bi-people"></i>
                            <span className='ms-2 d-none d-sm-inline'>UserList</span>
                        </a>
                    </li>
                    <li className='nav-item fs-5 my-1 py-sm-0 py-2'>
                        <a href="#" className='nav-link text-white' aria-current="page">
                            <i class="bi bi-info-square"></i>
                            <span className='ms-2 d-none d-sm-inline'>About</span>
                        </a>
                    </li>
                    <li className='nav-item fs-5 my-1 py-sm-0 py-2'>
                        <a href="#" className='nav-link text-white' aria-current="page">
                            <i class="bi bi-person-square"></i>
                            <span className='ms-2 d-none d-sm-inline'>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </Navbar>   
     );
}
 
export default SideBar;