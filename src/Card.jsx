import React from 'react';
import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';

const Card=(props)=>{
  return(
    <>
        <div className="col-md-5 col-10 mx-auto">
          <div className="card border-dark">
              <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
              <div className="card-body text-center">
                 <h3 className="card-title text-center pb-4 pt-2 text-capitalize font-weight-bold">{props.title}</h3>
                 <div className="hello pb-3">
                 <a href={props.link} download>
                 <button type="button" class="btn btn-success">Download &nbsp; <CloudDownloadRoundedIcon />
                 </button>
                 </a>
                 </div>
              </div>
          </div>
        </div>
    </>
  );
};

export default Card;