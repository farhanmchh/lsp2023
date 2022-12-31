<<<<<<< HEAD
import React from 'react';

=======
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
