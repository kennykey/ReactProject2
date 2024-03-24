import { Link } from "react-router-dom"
import LayOut from "../Component/LayOut"
import './index.css'

const Home = () =>{

    return(
        <LayOut>
             <div className="container-lg my-5">
                <div className="row d-flex justify-content-start align-item-center">
                    <div className="text-start col-md-7">
                        <h2 className="fw-bold mx-5 mt-5 pt-5">Connect With Another People With Proverse Community</h2>
                        <h4 className="text-secondary px-5">We Are Team Of Talented People Help You Connect With Other</h4>
                        <div className="m-5 pt-5">
                            <button className="btn btn-primary btn-lg rounded-pill">Get Started</button>
                            <Link to={'/about'}>
                                <button className="btn btn-outline-primary btn-lg rounded-pill">Learn More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center col-md-5 my-5 py-4">
                        <img className="img-fluid" src={"./public/hero-img.png"} alt="art"/>
                    </div>
                </div>
            </div>

            <div className="bg-body-tertiary py-3 text-center">
                <div className="container d-flex justify-content-between p-5" style={{width:"70%"}}>
                    <div class="card bg-body-tertiary border-0">
                        <div class="card-body">
                        <img src={"./public/shield.png"} alt="Trust" style={{width:"100px"}}/>
                        </div>
                        <h3 className="text-center text-muted">Trust</h3>
                    </div>
                    <div class="card bg-body-tertiary border-0">
                        <div class="card-body">
                        <img src={"./public/conversation.png"} alt="Conversation" style={{width:"100px"}}/>
                        </div>
                        <h3 className="text-center text-muted">Communication</h3>
                    </div>
                    <div class="card bg-body-tertiary border-0">
                        <div class="card-body">
                        <img src={"./public/hand.png"} alt="Fun" style={{width:"100px"}}/>
                        </div>
                        <h3 className="text-center text-muted">Fun & Easy</h3>
                    </div>
                </div>
            </div>     
        </LayOut>
    )
}

export default Home