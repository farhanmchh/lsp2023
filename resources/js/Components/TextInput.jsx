<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';

export default function TextInput({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();
=======
import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', name, id, value, className, autoComplete, required, isFocused, handleChange },
    ref
) {
    const input = ref ? ref : useRef();
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
<<<<<<< HEAD
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
=======
                id={id}
                value={value}
                className={
                    `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
<<<<<<< HEAD
}
=======
});
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
