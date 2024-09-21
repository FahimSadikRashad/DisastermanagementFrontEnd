"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
        if (password === confirmPassword) {
            // Proceed with registration logic
            router.push('/login'); // Redirect after registration
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow-md w-1/3">
                <h2 className="text-2xl mb-6 text-center">Register</h2>
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
                    <label className="block text-sm font-medium mb-2">Confirm Password</label>
                    <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border rounded w-full py-2 px-3" 
                        required 
                    />
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Register</button>
                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;
