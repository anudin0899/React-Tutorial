import React, { useState } from 'react'
import './validate.css'
import Header from '../../Components/Header/Header'

const Valid_without_Yup = () => {
    const [formData, setformData] = useState({
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        age: "",
        phoneNumber: "",
        gender: "",
        password: "",
        confirmPassword: "",
        interest: [],
    });

    const [error, setError] = useState({});

    const isEmailValid = (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    const isValidPassword = (password) => {
        const symbolRegex = /[,.?/'":;!@#$%^&*()_<>{}|]/;
        const numberRegex = /[0-9]/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        return (
            password.length >= 8 &&
            symbolRegex.test(password) &&
            numberRegex.test(password) &&
            upperCaseRegex.test(password) &&
            lowerCaseRegex.test(password)
        );
    };

    const isValidAge = (age) => {
        return parseInt(age) >= 18 && parseInt(age) <= 100;
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstname) {
            newErrors.firstname = "First name is required";
        }
        if (!formData.lastname) {
            newErrors.lastname = "Last name is required";
        }
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!isEmailValid(formData.email)) {
            newErrors.email = "Invalid Email format";
        }
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!isValidPhoneNumber(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be 10 digits';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!isValidPassword(formData.password)) {
            newErrors.password = 'password must be atleast 8 character long and contain atleast 0ne symbol, digits';
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
          } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords must match";
          }
        if (!formData.age) {
            newErrors.age = 'Age is required';
        } else if (!isValidAge(formData.age)) {
            newErrors.age = 'Age must be atleast 18 years old and not older than 100 years ';
        }
        if (!formData.gender) {
            newErrors.gender = 'gender is required';
        }
        if (formData.interest.length === 0) {
            newErrors.interest = 'Select atleast one Interest';
        }
        if (!formData.dob) {
            newErrors.dob = 'Date of birth is required';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            console.log("Form Submitted", formData);
        } else {
            console.log("Something went wrong");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target.value;
        setformData({ ...formData, [name]: value })
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updateInterests = [...formData.interest];
        if (checked) {
            updateInterests.push(name);
        } else {
            updateInterests = updateInterests.filter(
                (interest) => interest !== name
            );
        }
        setformData({ ...formData, interest: updateInterests });
    }

    return (
        <div className='page'>
            <Header />
            <div className='container-wrap '>
                <h2>Form Validate</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input type="text"
                            name='firstname'
                            value={formData.firstname}
                            placeholder='Enter your firstname'
                            onChange={handleChange}
                        />
                        {error.firstname && <div className='error'>{error.firstname}</div>}
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text"
                            name='lastname'
                            value={formData.lastname}
                            placeholder='Enter your lastname'
                            onChange={handleChange}
                        />
                         {error.lastname && <div className='error'>{error.lastname}</div>}
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="number"
                            name='age'
                            value={formData.age}
                            placeholder='Enter your Age'
                            onChange={handleChange}
                        />
                         {error.age && <div className='error'>{error.age}</div>}
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <input type="date"
                            name='dob'
                            value={formData.dob}
                            placeholder='Enter your date of birth'
                            onChange={handleChange}
                        />
                         {error.dob && <div className='error'>{error.dob}</div>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"
                            name='email'
                            value={formData.email}
                            placeholder='Enter your email'
                            onChange={handleChange}
                        />
                         {error.email && <div className='error'>{error.email}</div>}
                    </div>
                    <div>
                        <label>phone Number</label>
                        <input type="tel"
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            placeholder='Enter your phoneNumber'
                            onChange={handleChange}
                        />
                         {error.phoneNumber && <div className='error'>{error.phoneNumber}</div>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            name='password'
                            value={formData.password}
                            placeholder='Enter your password'
                            onChange={handleChange}
                        />
                         {error.password && <div className='error'>{error.password}</div>}
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password"
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            placeholder='Enter your confirm password'
                            onChange={handleChange}
                        />
                         {error.confirmPassword && <div className='error'>{error.confirmPassword}</div>}
                    </div>
                    <div>
                        <label >Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {error.gender && <div className='error'>{error.gender}</div>}
                    </div>
                    <div>
                        <label >Interset</label>
                        <label >
                            <input type="checkbox"
                                name='coding'
                                onChange={handleCheckboxChange}
                                checked={formData.interest.includes("coding")}
                            />
                            Coding
                        </label>
                        <label >
                            <input type="checkbox"
                                name='sports'
                                onChange={handleCheckboxChange}
                                checked={formData.interest.includes("sports")}
                            />
                            Sports
                        </label>
                        <label >
                            <input type="checkbox"
                                name='music'
                                onChange={handleCheckboxChange}
                                checked={formData.interest.includes("music")}
                            />
                            Music
                        </label>
                        {error.interest && <div className='error'>{error.interest}</div>}
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Valid_without_Yup