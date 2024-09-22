"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // Import the context

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Admin'); 
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useAuth(); // Get the login function

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/User/login', {
                email,
                password,
                role,
            });

            const { name, role: userRole } = response.data; 
            login({ name, role: userRole }); // Call login function
            router.push('/'); 
        } catch (error) {
            console.log(error);
            if (error.response) {
                const errorMessage = error.response.data || 'An error occurred';
                setError(errorMessage);
            } else {
                setError('Network error');
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-1/3">
                <h2 className="text-2xl mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded w-full py-2 px-3" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded w-full py-2 px-3" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Role</label>
                    <select 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="border rounded w-full py-2 px-3"
                    >
                        <option value="Admin">Admin</option>
                        <option value="Volunteer">Volunteer</option>
                    </select>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Login</button>
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
