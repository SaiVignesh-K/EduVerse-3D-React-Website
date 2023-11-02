import React from "react";
import './Login.css';
import { useState } from "react";

const CustomButton = (props) => {
    // Extract properties from props
    const { onClick, children, className, ...rest } = props;
  
    return (
      <button className={className} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  };

const Login = () => {


    const [user,setUser] = useState({
        email:'',
        password:''
    });

    //handleinput
    const handleChange = (event)=>{
        let name=event.target.name;
        let value=event.target.value;
        setUser({...user,[name]:value})
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const{email,password}=user;
        try {
            const res=await fetch('./login',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    email,password
                })
            });

            if(res.status===400 || !res){
                window.alert("Invalid Credentials")
            }
            else{
                localStorage.setItem("loggedin", 1)
                window.alert(localStorage.getItem("loggedin"));
                window.location.replace('./')
                // window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div class="login-page">
            <div class="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div class="user-box">
                        <input type="email"
                            id="loginemail"
                            name="email" 
                            value={user.email}
                            onChange={handleChange}
                            required="true" />
                        <label className="beauty">Email</label>
                    </div>
                    <div class="user-box">
                        <input type="password" 
                            id="loginpassword"
                            name="password" 
                            value={user.password}
                            onChange={handleChange}
                            required="true" />
                        <label className="beauty">Password</label>
                    </div>
                    <div className="bts">
                    <button className="btn btn-transparent" type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Login
                    </button> </div></form>
                    <div className="bts">
                    <button onClick={()=> {
                        window.location.replace("./signup")
                    }} className="btn btn-transparent ab">Signup</button>
                    </div>
                

            </div>
        </div>
    );
}

export  {Login};