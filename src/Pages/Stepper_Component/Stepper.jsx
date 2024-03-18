import React from 'react'
import './stepper.css'
import Header from '../../Components/Header/Header'
import CheckoutStepper from '../../Components/Checkout_Stepper/CheckoutStepper'
import { CheckoutData } from '../../Helpers/Constants/checkoutData'

const Stepper = () => {
    return (
        <div className='page'>
            <Header />
            <div className='container flex-col'>
                <h2>Checkout</h2>
                <CheckoutStepper stepsConfig = {CheckoutData}/>
            </div>
        </div>
    )
}

export default Stepper