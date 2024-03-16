import React, { useState } from 'react';

const RegistrationForm = () => {
    // State variables
    const [registrationDate] = useState(new Date()); // Assuming this is fetched or set somewhere
    const [minDOB] = useState(() => {
        const minDOBDate = new Date(registrationDate);
        minDOBDate.setFullYear(minDOBDate.getFullYear() - 90);
        return minDOBDate;
    });
    const [maxDOB] = useState(() => {
        const maxDOBDate = new Date(registrationDate);
        maxDOBDate.setFullYear(maxDOBDate.getFullYear() - 18);
        return maxDOBDate;
    });
    const [dob, setDOB] = useState('');
    const [error, setError] = useState('');

    // Handler for validating date of birth
    const handleDOBChange = (event) => {
        const inputDate = new Date(event.target.value);
        if (inputDate > maxDOB) {
            setError('You must be at least 18 years old.');
        } else if (inputDate < minDOB) {
            setError('You cannot be more than 90 years old.');
        } else {
            setError('');
        }
        setDOB(event.target.value);
    };

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!error && dob) {
            // Handle form submission, e.g., send data to server
            console.log('Date of birth is valid:', dob);
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={handleDOBChange}
                        max={maxDOB.toISOString().split('T')[0]} // Set max attribute to restrict future dates
                        min={minDOB.toISOString().split('T')[0]} // Set min attribute to restrict dates older than 90 years
                    />
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
