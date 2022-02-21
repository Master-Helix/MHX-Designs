import React from 'react';
const CardVideo=(props)=>{
  return(
    <>
        <div className="col-md-5 col-10 mx-auto">
          <div className="card border-dark">
          <video src={props.src} alt={props.src} controls controlsList="nodownload"/> 
              <div className="card-body">
                 <h3 className="card-title text-center pb-4 pt-2 text-capitalize font-weight-bold">{props.title}</h3>
              </div>
          </div>
        </div>
    </>
  );
};

export default CardVideo;
