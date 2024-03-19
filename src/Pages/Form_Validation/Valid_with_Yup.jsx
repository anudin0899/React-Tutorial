import React, { useState } from 'react'
import './validate.css'
import Header from '../../Components/Header/Header'
import * as Yup from 'yup';

const Valid_with_Yup = () => {

    // First instal yup - npm i yup

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

    const validationSchema = Yup.object({
        firstname: Yup.string().required("First Name is Required"),
        lastname: Yup.string().required("Last Name is Required"),
        email: Yup.string()
            .required("Email is Required")
            .email("Invalid email format"),
        phoneNumber: Yup.string()
            .matches(/^\d{10}$/, "Phone Number must be 10 digits")
            .required(),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Password must contain at least one symbol"
            )
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Confirm password is required"),
        age: Yup.number()
            .typeError("Age must be a number")
            .min(18, "You must be at least 18 years old")
            .max(100, "You cannot be older than 100 years")
            .required("Age is required"),
        gender: Yup.string().required("Gender is required"),
        interest: Yup.array()
            .min(1, "Select at least one interest")
            .required("Select at least one interest"),
        dob: Yup.date().required("Date of birth is required"),
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        const nonParsed = {
            firstName: "Piyush",
            lastName: "Agarwal",
            email: "piyush@example.com",
            phoneNumber: "1231234218",
            password: "123456Qq*",
            confirmPassword: "123456Qq*",
            age: "18",
            gender: "male",
            interests: ["coding"],
            birthDate: "2024-02-12",
        };

        const parsedUser = validationSchema.cast(nonParsed);

        console.log(nonParsed, parsedUser);

        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log("Form Submitted", formData);
        } catch (error) {
            const newErrors = {};

            error.inner.forEach((err) => {
                newErrors[err.path] = err.message;
            });

            setError(newErrors);
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

export default Valid_with_Yup