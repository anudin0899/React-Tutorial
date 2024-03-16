import React from 'react'
import './generator.css'
import { useState } from 'react';
import usePasswordGenerator from '../../Helpers/Custom-Hooks/use-password-generator.js';
import PasswordStengthChecker from '../../utils/strengthChecker.js';
import Button from '../../Components/Button/Button.jsx';


const PasswordGenerate = () => {

  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false)

  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000)
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <div className='container'>
      <div className="box">
        {/* password Text and copy Button */}
        {password && (
          <div className="header">
            <div className="title"> {password} </div>
            <Button
              customClass="copyBtn"
              title={copied ? "copied" : "copy"}
              onClick={() => { handleCopy() }}
            />
          </div>
        )}

        {/* Charater Length */}
        <div className="charlength">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>
          <input
            type="range"
            min='0'
            max='20'
            value={length}
            onChange={(e) => { setLength(e.target.value) }}
          />
        </div>
        {/* Checkbox */}
        <div className="checkboxes">
          {
            checkboxData.map((checkbox, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={checkbox.state}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label>{checkbox.title}</label>
                </div>
              )
            })
          }
        </div>

        {/* Strength */}
        <PasswordStengthChecker password={password} />

        {/* Error Message */}
        {errorMessage && (
          <div className="error">
            {errorMessage}
          </div>
        )}

        {/* Generate Button */}
        <Button
          customClass="generateBtn"
          title=" Generate Password"
          onClick={() => generatePassword(checkboxData, length)}
        />
      </div>

    </div >
  )
}

export default PasswordGenerate