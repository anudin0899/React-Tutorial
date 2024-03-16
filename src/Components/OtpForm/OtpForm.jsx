import React, { useState } from 'react'
import './OtpForm.css'
import InputForm from '../InputForm/InputForm'
import OtpInput from '../InputForm/OtpInput/OtpInput';

const OtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        //phone validation
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invaild phone number")
            return;
        }

        //Call Api

        //Show Otp field
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        console.log("Login sucessfull",otp);
    }

    return (
        <div className="box">
            {!showOtpInput ?
                <form action="" onSubmit={handlePhoneSubmit}>
                    <InputForm
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        placeholder="PhoneNumber"
                    />
                    <button type='submit'>Submit</button>
                </form>
                :
                <div>
                    <p>Enter OTP sent to {phoneNumber}</p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                </div>
            }

        </div>
    )
}

export default OtpForm