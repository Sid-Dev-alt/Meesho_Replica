import React, { useState } from 'react'

export default function GenOTP() {
    const [otp,setOtp] = useState('');
    const [message, setMessage] = useState('');


    const generateOTP = (length) => {
        let otp = '';
        const characters = '0123456789'
        for (let i = 0; i< length; i++){
            otp += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return otp;
    }
    const handleGenerateOtp = () => {
        const generateOTP = generateOTP(4);
        setOtp(generateOTP);
        setMessage("Otp generated")
    }
  return (
    <div>GenOTP</div>
  )
}

