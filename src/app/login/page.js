"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        router.push('/'); // Redirect after login
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-1/3">
                <h2 className="text-2xl mb-6 text-center">Login</h2>
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
