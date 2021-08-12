import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom';
import Logpic from '../images/draw.png';

const Login = ()=>{
    const history = useHistory();
    const[email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    
    const loginUser = async(e)=>{
        e.preventDefault();

        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                email , password
            })
        });

        const data = await res.json();

        if(res.status === 400 || !data){
          window.alert("Invalid Credentials");
         
        }else{
          window.alert("Login Successfull");

          history.push("/");
        }
    }


    return(
        <>
        <div className="container">
            <div className="row m-5 no-gutters shadow-lg">
            <div className="col-md-6 d-none d-md-block">
            <img src={Logpic} alt="" className="img-fluid" style={{minHeight:'100%'}}/>
            
            </div>
            <div className="col-md-6 bg-white p-5">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>
            <div className="form-style">
            <form method="POST">
                <div className="form-group pb-3">    
                    <input type="email" name="email" placeholder="Email" className="form-control" aria-describedby="emailHelp"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />   
                </div>
                <div className="form-group pb-3">   
                    <input type="password" name="password" placeholder="Password" className="form-control"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span className="pl-2 font-weight-bold"> Remember Me</span></div>
                <div><NavLink className="nav-link" to ="/signup">Forget Password</NavLink> </div>
                </div>
               

                <div className="pb-2">
                    <input type="submit" name= "signup" className="btn btn-dark w-100 font-weight-bold mt-2"
                      value="Login"
                      onClick={loginUser}
                    />
                      
                  </div>

                </form>
                
                <div className="pt-4 text-center">
              Dont't have an Account? <NavLink className="nav-link" to ="/signup">Sign In</NavLink> 
                </div>
                </div> 

            </div>
            </div>
            </div>
      
        </>
    )
}
export default Login