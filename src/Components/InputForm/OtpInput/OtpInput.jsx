import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));

    const InputRef = useRef([]);

    useEffect(() => {
        if (InputRef.current[0]) {
            InputRef.current[0].focus()
        }
    }, []);


    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];

        //allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // submit trigger
        const combineOtp = newOtp.join("");
        if (combineOtp.length === length) {
            onOtpSubmit(combineOtp);
        }

        //move to next input if current field is filled
        if (value && index < length - 1 && InputRef.current[index + 1]) {
            InputRef.current[index + 1].focus();
        } 

    }

    const handleClick = (index) => {
        InputRef.current[index].setSelectionRange(1, 1);

        //checking previous input is empty or not
        if (index > 0 && !otp[index - 1]) {
            InputRef.current[otp.indexOf("")].focus();
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && InputRef.current[index - 1]) {
            //move focus to previous input field on backspace
            InputRef.current[index - 1].focus();
        }
    }
    return (
        <div className='formInput'>
            {
                otp.map((value, index) => {
                    return (
                        <input
                            type="text"
                            key={index}
                            value={value}
                            ref={(input) => InputRef.current[index] = input}
                            onChange={(e) => handleChange(index, e)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => { handleKeyDown(index, e) }}
                            className='otpInput'
                        />
                    )
                })
            }
        </div>
    )
}

export default OtpInput