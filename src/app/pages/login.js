import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
    router.push('/'); // Redirect after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="mb-4 text-xl font-semibold text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/register" className="text-blue-600">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
