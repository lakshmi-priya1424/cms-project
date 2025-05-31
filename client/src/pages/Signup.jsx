import React, { useContext, useState } from 'react';
 import AuthContext from '../context/AuthContext';
export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        state: '',
        country: '',
        profession: '',
        hobby: '',
    });
    const { signup } = useContext(AuthContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData.email, formData.password);
        import('sweetalert2').then(Swal => {
            Swal.default.fire({
            icon: 'success',
            title: 'Signup successful!',
            showConfirmButton: false,
            timer: 1500
            });
        });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-md mx-auto p-8 bg-white bg-opacity-90 border border-gray-200 rounded-2xl shadow-xl backdrop-blur-md">
                <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formData.state}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formData.country}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="profession"
                        placeholder="Profession"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formData.profession}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="hobby"
                        placeholder="Hobby"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={formData.hobby}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}
