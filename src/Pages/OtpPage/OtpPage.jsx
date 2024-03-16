import React from 'react'
import Header from '../../Components/Header/Header'
import './otp.css'
import OtpForm from '../../Components/OtpForm/OtpForm'

const OtpPage = () => {
    return (
        <div className='page'>
            <Header />
            <div className='section center'>
                <h1>Otp page</h1>
                <div className='sectionDiv'>
                    <OtpForm />
                </div>
            </div>

        </div>
    )
}

export default OtpPage