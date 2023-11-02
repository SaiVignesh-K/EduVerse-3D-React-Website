import React, { useState } from "react";
// import { Button } from 'react-three-fiber';
// import { Button} from '@react-three/rapier'
import './Login.css';
import './Signup.css';

const Signup = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        isTeacher: false,
        subjects: [] // Initialize the subjects array
    });

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: checked,
            // Reset subjects array when unchecking the "Are you a Teacher?" checkbox
            subjects: checked ? prevState.subjects : []
        }));
    };

    const handleSubjectChange = (event) => {
        const { value, checked } = event.target;
        setUser((prevState) => {
            if (checked) {
                return {
                    ...prevState,
                    subjects: [...prevState.subjects, value]
                };
            } else {
                return {
                    ...prevState,
                    subjects: prevState.subjects.filter((subject) => subject !== value)
                };
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, email, password, isTeacher, subjects } = user;
        try {
            const res = await fetch('/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password, isTeacher, subjects
                })
            })

            if (res.status === 400 || !res) {
                window.alert("Already used Details")
            } else {
                window.alert("Registered successfully Please Login")
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="user-box">
                        <input
                            type="text"
                            id="name"
                            name="username"
                            required
                            value={user.username}
                            onChange={handleInput}
                        />
                        <label className="beauty">Username</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="email"
                            id="useremail"
                            name="email"
                            required
                            value={user.email}
                            onChange={handleInput}
                        />
                        <label className="beauty">Email</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            id="userpassword"
                            required
                            name="password"
                            value={user.password}
                            onChange={handleInput}
                        />
                        <label className="beauty">Password</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="checkbox"
                            name="isTeacher"
                            checked={user.isTeacher}
                            onChange={handleCheckboxChange}
                        />
                        <label className="beauty ubcb">Are you a Teacher?</label>
                    </div>
                    {user.isTeacher && (
                        <div>
                            <h4 className="subbeauty">Select Subjects:</h4>
                            <div className="subs">
                                <label >
                                    <input className="sublab"
                                        type="checkbox"
                                        name="Chemistry"
                                        value="Chemistry"
                                        checked={user.subjects.includes("Chemistry")}
                                        onChange={handleSubjectChange}
                                    />
                                    Chemistry
                                </label>
                                <label >
                                    <input className="sublab"
                                        type="checkbox"
                                        name="Biology"
                                        value="Biology"
                                        checked={user.subjects.includes("Biology")}
                                        onChange={handleSubjectChange}
                                    />
                                    Biology
                                </label>
                                <label >
                                    <input className="sublab"
                                        type="checkbox"
                                        name="Astronomy"
                                        value="Astronomy"
                                        checked={user.subjects.includes("Astronomy")}
                                        onChange={handleSubjectChange}
                                    />
                                    Astronomy
                                </label>
                            </div>
                        </div>
                    )}
                    <div className="bts">
                        <button className="btn btn-transparent" type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button></div></form>
                
                <div className="bts">
                    <button onClick={() => {
                        window.location.replace("./login")
                    }} className="btn  ab ">Login</button>
                </div>
                
            </div>
        </div>
    );
}

export { Signup };
