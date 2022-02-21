import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/Blogging Minimalistic/blogging.svg';
import blender from '../src/Blogging Minimalistic/blender_logo_socket.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


const About=()=>{
  return(
    <>
      <section id="header2" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-3 pr-lg-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                       <h1>
                          Hi! This is RAKSHIT PANDEY<br/>
                          I Believe in <strong className="brand-name">Simple Living and High Thinking</strong>
                       </h1>
                       <h3 className="my-3">
                          Thank You for checking out my Page<br/>
                           For More Digital Arts ,
                        </h3>
                        <div className="mt-1">
                           <NavLink to="/design" className="btn-get-started2 mr-4">Visit Designs</NavLink>
                           <NavLink to="/animation" className="btn-get-started2">Visit Animations</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                       <img src={web} className="img-fluid-animated" alt="home-img" />
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <h3 className="text-center font-weight-bold pt-3">
                         Made all the Designs and Animations <br/>using &nbsp; <img src={blender} alt="blender" width="20%" />
                         </h3>
        <h3 className="text-center font-weight-bold mt-lg-5"> You can Connect with me on 
            <div className="about_btn mt-4 mb-5">
               <a href="https://www.linkedin.com/in/rakshit-pandey-49211119b/" target="_bla"><button className="btn3 btn-outline-warning"><LinkedInIcon/></button></a>&nbsp;&nbsp;&nbsp;&nbsp;
               <a href="https://www.instagram.com/master.helix/" target="_bla"><button className="btn3 btn-outline-warning"><InstagramIcon/></button></a>&nbsp;&nbsp;&nbsp;&nbsp;
               <a href="https://github.com/Master-Helix" target="_bla"><button className="btn3 btn-outline-warning"><GitHubIcon/></button></a>&nbsp;&nbsp;&nbsp;&nbsp;
           </div>
          </h3>
    </>
  );
};

export default About;