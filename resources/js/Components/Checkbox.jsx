<<<<<<< HEAD
import React from 'react';

=======
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
<<<<<<< HEAD
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
=======
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
            onChange={(e) => handleChange(e)}
        />
    );
}
