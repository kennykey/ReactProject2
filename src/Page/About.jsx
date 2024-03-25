import LayOut from "../Component/LayOut"
import './index.css'


const About = () => {
    return ( 
        <LayOut>
            <div className="container-lg my-5 px-5">
                <div className="mx-5">
                    <h2>About Us</h2>
                    <hr className="text-secondary d-none d-sm-block"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius delectus dolorum est, 
                        sed consequuntur ullam eum iure vel obcaecati praesentium et quibusdam nobis quo ipsum. Ratione 
                        numquam molestiae vel sed! Quia, iusto! Ratione voluptatum accusantium voluptatibus suscipit 
                        labore excepturi voluptas qui voluptate reprehenderit delectus, odio et neque ipsa porro ipsam 
                        animi ea rerum repudiandae odit alias tempore sint officiis. Accusamus autem aspernatur quam. Quae 
                        dolorum exercitationem facilis minus illum officiis, itaque quisquam ex cum reiciendis autem, labore 
                        nisi esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, unde? Lorem, ipsum dolor 
                        sit amet consectetur adipisicing elit. Officia, deleniti!</p>
                </div>
            </div>

            <div className="container row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/inspiration.png" alt="inspiration" style={{width:"500px"}}/>
                    </div>
                    <div className="col-md-7 d-flex">
                        <div className="row d-flex justify-content-center pt-5">
                            <div className="col-md-5 d-flex">
                                <div>
                                    <i class="bi bi-emoji-smile icon"></i>
                                    <p><strong>Lorem ipsum dolor sit.</strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis </p>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex">
                                <div>
                                    <i class="bi bi-clock icon"></i>
                                    <p><strong>Lorem ipsum dolor sit.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos </p>
                                </div>
                            </div>
                        <div className="row d-flex justify-content-center pb-5">
                            <div className="col-md-5 d-flex">
                                <div>
                                    <i class="bi bi-journal-bookmark icon"></i>
                                    <p><strong>Lorem ipsum dolor sit.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex">
                                <div>
                                    <i class="bi bi-card-checklist icon"></i>
                                    <p><strong>Lorem ipsum dolor sit.</strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </LayOut>
     );
}
 
export default About;