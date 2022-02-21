import React from 'react';
import CardVideo from './CardVideo';
import AnimationData from './AnimationData';


const Animation=()=>{
  return(
    <>  
        <div className="my-5">
           <h1 className="text-center my-5 font-weight-bold">
              My Animations
           </h1>
           <div className="container-fluid mb-5 mt-lg-4">
              <div className="row">
                  <div className="col-10 mx-auto">
                      <div className="row gy-5 gx-5">
                           {
                             AnimationData.map((val,ind)=>{
                               return <CardVideo key={ind} src={val.src} title={val.title} />
                             })
                           }
                      </div>
                  </div>
              </div>
           </div>
        </div>
    </>
  );
};

export default Animation;


