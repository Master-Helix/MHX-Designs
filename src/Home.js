import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/BLENDER STUFFS/robon animation.mp4';


const Home=()=>{



  return(
    <> 
      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row">
                    <div className="col-md-6 pt-3 pr-lg-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                       <h1>
                          Engrose the Art Digitally on <strong className="brand-name">MHX Designs</strong>
                       </h1>
                       <h2 className="my-3 font-weight-bolder">
                          Select the perfect Design that Suits You!
                        </h2>
                        <div className="mt-3">
                           <NavLink to="/design" className="btn-get-started font-weight-bolder">Let's Begin!</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                       <video loop src={web} className="anim w-100 h-auto" alt="home-img" autoPlay/>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Home;
