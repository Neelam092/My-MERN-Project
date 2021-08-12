import React from 'react'
import neelampic from "../images/neelampic.jpg";

import 'bootstrap/dist/css/bootstrap.css';

const About = ()=>{
    return(
        <>
        <div className='container emp-profile'> 
           <form method="">
              <div className="row">
                <div className="col-md-4">
                    <img src={neelampic} alt="neelam" />
                </div>

                <div className="col-md-6">
                    <div className="profile-head">
                        <h5>Neelam Rana</h5>
                        <h6>Web Developer</h6>
                        <p className="profile-rating mt-3 mb-5">RANKINGS: <span>1/10</span> </p>

                        <ul className="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home">About</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile">Timeline</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-2">
                    <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </div>

                <div className="row">
                    {/* left side url */}
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <a href="https://www.youtube.com/watch?v=Y92oqN3gFYY" target="_neelam">Youtube</a><br />
                            <a href="https://www.linkedin.com/in/neelam-rana/" target="_neelam">Linkdin</a><br />
                            <a href="https://github.com/Neelam092" target="_neelam">Github</a><br />
                            <a href="https://www.instagram.com/neelam497/" target="_neelam">Instagram</a><br />
                            <a href="https://www.facebook.com/profile.php?id=100024075592725" target="_neelam">Facebook</a><br />
                        </div>
                    </div>

                    {/* right side data toggle */}
                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="home" role="tabpanel" aria-labelledby="home-tab">

                            <div className="row">
                                <div className="col-md-6">
                                    <label>User ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>4589455434854392</p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Neelam Rana</p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                    <p>neelamrana092@gmail.com</p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div className="col-md-6">
                                    <p>8435033240</p>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label>Profession </label>
                                </div>
                                <div className="col-md-6">
                                    <p>Web Devloper</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

              </div>
           </form>
        </div>
        </>
    )
}



export default About