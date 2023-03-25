
import React from 'react';


const FormInput = ({ input }) => {
    const isPassword = input === "password";

    return (
        <div>
            <label>{input}</label>
            <input
            type={isPassword ? "password" : "text"}
            placeholder={input}
            />
        </div>
    );
}

export default FormInput;