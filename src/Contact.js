import React,{useState} from 'react';

const Contact=()=>{

  const [userData, setUserData]=useState({
    firstName:"",
    lastName:"",
    contactNo:"",
    email:"",
    feedback:"",
  }); 

  let name,value;
  const postUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;

    setUserData({...userData, [name]: value });
  };

  const submitData=async(event)=>{
    event.preventDefault();

    const {firstName,lastName,contactNo,email,feedback}=userData;

    if(firstName && lastName && contactNo && email && feedback)
    {
      const res =await fetch("https://mhxdesigns-6decb-default-rtdb.firebaseio.com/form.json",
      {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          contactNo,
          email,
          feedback,
        }),
      }
      );
                                    //MADE BY RAKSHIT PANDEY
      if(res){
        setUserData({
          fullName:"",
          contactNo:"",
          email:"",
          feedback:"",
        });
  
        alert("Thanks for Contacting Us!");
      }
      else{
        alert("Please Fill all the details");
      }
    }
    else{
      alert("Please Fill all the details");
    }
  };

  return(
    <>
        <div className="my-5">
           <h1 className="text-center">Reach US</h1>
        </div>
        <div className="container contact_div">
           <div className="row">
              <div className="col-md-6 col-10 mx-auto">
                  <form method="POST">
                  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">First Name</label>
  <input type="text" className="form-control" id="" name="firstName" placeholder="Enter your First Name"
    value={userData.firstName}
    onChange={postUserData}
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="" name="lastName" placeholder="Enter your Last Name"
    value={userData.lastName}
    onChange={postUserData}
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Contact No.</label>
  <input type="number" className="form-control" id="" name="contactNo" placeholder="Enter Mobile Number"
    value={userData.contactNo}
    onChange={postUserData}
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" id="" name="email" placeholder="name@example.com"
    value={userData.email}
    onChange={postUserData}
  />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Your Suggestions</label>
  <textarea className="form-control" id="" name="feedback" rows="3" placeholder="Your Feedback"
    value={userData.feedback}
    onChange={postUserData}
  />
</div>
  <div className="col-12  mt-3 mb-4">
    <button className="btn btn-success text-center" type="submit" onClick={submitData}>Submit form</button>
    </div>
                  </form>
              </div>
           </div>
        </div>
    </>
  );
};

export default Contact;