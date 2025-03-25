import React, { useState, useRef } from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import img1 from './Images/Meesho_Logo.png'

const Form = () => {
    const data = useRef();
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const form = useRef();

    // Generate OTP function
    const generateOTP = (event) => {
        event.preventDefault(); // Prevent page refresh
        const newOtp = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
        setOtp(newOtp);
        localStorage.setItem("genOTP", newOtp);
    };

    // Send Email function
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rdfo9n9', 'template_z7x6ill', form.current, {
                publicKey: 'bH5yc5IoJBHQeTQcx',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email Sent Successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Email Sending Failed.');
                }
            );
    };

    return (
        <div className='navbar' style={{

        }}>
            <nav class="navbar" style={{
                width: "105%",
                position: "fixed",
                marginTop: "-36rem",
                backgroundColor: "rgb(255 255 255) !important"
            }}>
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={img1} alt="Meesho" style={{
                            width: "115px"
                        }} />
                    </a>
                    <div>
                        <form action="">
                            <label style={{ marginInline: "20px" }}>Already a user?</label>
                            <button className='btn' style={{
                                width: "7rem",
                                padding: "8px",
                                backgroundColor: "white",
                                borderColor: "#3C29B7",
                                color: "#3C29B7",
                                fontWeight: "600"
                            }}>Login</button>
                        </form>
                    </div>

                </div>


            </nav>


            <div className="d-flex">
                <form ref={form} className="form" style={{
                    paddingRight: "34rem",
                    marginBottom: "19%",
                    marginLeft: "20%"
                }} onSubmit={sendEmail}>
                    <div className="form-floating mb-3" style={{ 
                        width: '123px',
                        marginTop: "-109px"

                     }}>
                        <input
                            type="email"
                            className="form-control smallInp"
                            id="floatingInput"
                            name="user_email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: "195%",
                                marginBottom: "-32%"
                            }}
                            required
                        />
                        <label htmlFor="floatingInput">Enter Email</label>

                        <button
                            type="button"
                            className="btn btn-primary ml-2"
                            style={{
                                position: 'absolute',
                                left: '265px',
                                bottom: '5px',
                                padding: '9px',
                                width: '8rem',
                                backgroundColor: "#30228A",
                                fontWeight: "500"
                            }}
                            onClick={generateOTP}
                        >
                            Generate OTP
                        </button>
                    </div>
                    <br />

                    {/* OTP Display */}
                    {otp && (
                        <div>
                            <label htmlFor="otp">Generated OTP:</label>
                            <input
                                type="text"
                                name="otp"
                                className="form-control"
                                id="otp"
                                value={otp}
                                readOnly
                            />
                            {/* Hidden Input to Send OTP via Email */}
                            <input ref={data} type="hidden" name="generated_otp" value={otp} />
                        </div>
                    )}
                    <br />

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingText"
                            name="number"
                            placeholder="Mobile Number"
                            required
                        />
                        <label htmlFor="floatingPassword">Enter Mobile Number</label>
                    </div>
                    <br />

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <label htmlFor="floatingPassword">Set Password</label>

                         <p style={{
                            position: "fixed",
                            marginTop: "18px",
                            margin: "9px 3px 3px",
                            marginInline: "1px",
                            fontSize: "small",
                            fontWeight: "600"

                        }}>Make your password strong by adding:</p>
                    
                        <p style={{
                            position: "fixed",
                            margin: "3px",
                            marginInline: "1px",
                            fontSize: "small",
                            marginTop: "40px"

                        }}>Minimum 8 characters (letters & numbers)</p>

                        <p style={{
                            position: "fixed",
                            marginTop: "73px",
                            marginInline: "1px",
                            fontSize: "small"

                        }}>Minimum 1 special character (@ # $ % ! ^ & *)</p>

                        <p style={{
                            position: "fixed",
                            marginTop: "110px",
                            marginInline: "1px",
                            fontSize: "small"

                        }}>Minimum 1 capital letter (A-Z)</p>

                        <p style={{
                            position: "fixed",
                            marginTop: "143px",
                            marginInline: "1px",
                            fontSize: "small"

                        }}>Minimum 1 number (0-9)</p>
                
                    </div>
                    {/* <br /> */}

                    <Link
                        to={`/verify?email=${encodeURIComponent(email)}&otp=${otp}`}
                        className="btn"
                        style={{
                            position: 'absolute',
                            left: '20%',
                            top: '118%',
                            width: '62%',
                            padding: '1%',
                            backgroundColor: "#30228A",
                            color: "white",
                            fontWeight: "500"
                        }}
                    >
                        Verify OTP
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Form;
