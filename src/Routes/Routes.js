import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Pagination from '../Pages/Paginations/Pagination';
import PasswordGenerator from '../Pages/PasswordGenerator/PasswordGenerate';
import Counter from '../Pages/ReactMemo/Counter';
import HomePage from '../Pages/HomePage/HomePage';
import ProductDetail from '../Pages/ProductDetailPage/ProductDetail';
import OtpPage from '../Pages/OtpPage/OtpPage';
import RegistrationForm from '../Pages/RegisterForm/RegisterForm';
import I18Next from '../Pages/I18Next_Tutorial/I18Next';
import Stepper from '../Pages/Stepper_Component/Stepper';


const Dashboard = () => {
    return (
        <h1>Dashboard</h1>
    )
};


const Content = () => {
    return <h1>Content</h1>
};

const Course = () => {
    return <h1>Course</h1>
};

const Videos = () => {
    return <h1>Videos</h1>
};

const Design = () => {
    return <h1>Design</h1>
};

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<HomePage />} />
                    <Route path='/dashboard' exact element={<Home component={Dashboard} />} />
                    <Route path='/content' exact element={<Home component={Content} />} />
                    <Route path='/content/course' element={<Home component={Course} />} />
                    <Route path='/content/videos' element={<Home component={Videos} />} />
                    <Route path='/design' element={<Home component={Design} />} />
                    <Route path='/user' element={<Home component={Dashboard} />} />
                    <Route path='/products' element={<Pagination />} />
                    <Route path='/products/:id' element={<ProductDetail />} />
                    <Route path='/pass-generator' element={<PasswordGenerator />} />
                    <Route path='/react-memo' element={<Counter />} />
                    <Route path='/otp' element={<OtpPage />} />
                    <Route path='/form' element={<RegistrationForm />} />
                    <Route path='/i18' element={<I18Next />} />
                    <Route path='/stepper' element={<Stepper />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing