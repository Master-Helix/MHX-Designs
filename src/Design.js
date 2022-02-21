import React from 'react';
import Card from './Card';
import DataDesign from './DataDesign';


const Design=()=>{
  return(
    <>  
        <div className="my-5">
           <h1 className="text-center my-5 font-weight-bold">
              My Designs
           </h1>
           <div className="container-fluid mb-5 mt-lg-4">
              <div className="row">
                  <div className="col-10 mx-auto">
                      <div className="row gy-5 gx-5">
                           {
                             DataDesign.map((val,ind)=>{
                               return <Card key={ind} imgsrc={val.imgsrc} title={val.title} link={val.link}/>
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

export default Design;