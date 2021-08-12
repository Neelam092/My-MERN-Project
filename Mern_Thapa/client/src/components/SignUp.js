import React, {useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import signpic from '../images/transparent.png';

const SignUp = ()=>{
  const history = useHistory();
  const [user, setUser] = useState({
    name: "", email: "",phone:"",work:"",password:"",confirmPassword:"" });

  let name, value;

  const handleInputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData = async (e)=>{
    e.preventDefault();

    const { name, email , phone, work, password, confirmPassword } = user;

    const res = await fetch("/register",{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        name, email , phone, work, password, confirmPassword
      })
    });

    const data = await res.json();

    if(res.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
      window.alert("Registration Successfull");
      console.log("Successfull Registration");

      history.push("/login");
    }
  }

  return(
  <>
  <form className="vh-100" style={{backgroundColor: 'bgColors.Cyan'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <form className="mx-1 mx-md-4" method="POST">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" name="name"  className="form-control" autoComplete="off"
                        value={user.name}
                        onChange={handleInputs}
                        placeholder="Your Name"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" name="email"   className="form-control" autoComplete="off"
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="phone" name="phone"  className="form-control" autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Phone Number"
                    />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="work"name="work"  className="form-control" autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                    placeholder="Your Profession"/>
                  </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="password" name="password"   className="form-control" autoComplete="off"
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Your Password"
                    />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <input type="confirmpassword" name="confirmPassword"   className="form-control" autoComplete="off"
                      value={user.confirmPassword}
                      onChange={handleInputs}
                      placeholder="Confirm Password"
                    />
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3c"
                      />
                      <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                      
                      <NavLink className="nav-link" to="/login">Already Registered</NavLink>
                    
                   
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <input type="submit" name= "signup" className="btn btn-primary btn-lg" value="register"
                      onClick={PostData} />
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={signpic} className="img-fluid" alt="Sample img"/>

              </div>
             </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
          </>
      )
  }
  export default SignUp