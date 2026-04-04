import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';

// Mock database - در واقع باید از backend استفاده کنید
const mockDatabase: Record<string, string> = {
  'demo@example.com': 'password123',
};

export default function AuthPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    await new Promise(r => setTimeout(r, 500)); // Simulate API call

    if (isSignUp) {
      // SIGN UP Logic
      if (!confirmPassword) {
        setError('Please confirm your password');
        setLoading(false);
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      if (password.length < 8) {
        setError('Password must be at least 8 characters');
        setLoading(false);
        return;
      }

      // Check if email already exists
      if (mockDatabase[email]) {
        setError('This email is already registered. Please sign in instead.');
        setLoading(false);
        return;
      }

      // Register user
      mockDatabase[email] = password;
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isLoggedIn', 'true');
      setSuccess('Account created successfully! Redirecting...');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } else {
      // SIGN IN Logic
      if (!mockDatabase[email]) {
        setError('This email is not registered. You need to sign up first.');
        setLoading(false);
        return;
      }

      if (mockDatabase[email] !== password) {
        setError('One of these is incorrect. Please check your email or password.');
        setLoading(false);
        return;
      }

      // Login successful
      localStorage.setItem('userEmail', email);
      localStorage.setItem('isLoggedIn', 'true');
      setSuccess('Login successful! Redirecting...');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Container */}
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 md:gap-16">
        
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mb-8">
            <img src="/Images/Icon.png" alt="TechnoHealth" className="w-10 h-10" />
            <span className="text-xl font-bold text-slate-900">TechnoHealth</span>
          </Link>

          {/* Form Content */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-3">
                Welcome
              </h1>
              <p className="text-slate-600 text-base">
                {isSignUp
                  ? 'Create your account to get started'
                  : 'Sign in to your account'}
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-700">{success}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                    required
                    disabled={loading}
                  />
                </div>
                {isSignUp && (
                  <p className="text-xs text-slate-500 mt-1">At least 8 characters</p>
                )}
              </div>

              {/* Confirm Password Input - Only for Sign Up */}
              {isSignUp && (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3 w-5 h-5 text-slate-400" />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                      required={isSignUp}
                      disabled={loading}
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all mt-6 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : (isSignUp ? 'Create Account' : 'Sign In')}
              </button>
            </form>

            {/* Toggle Auth Mode */}
            <div className="mt-6 text-center">
              <p className="text-slate-600 text-sm">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError('');
                    setSuccess('');
                    setConfirmPassword('');
                  }}
                  className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                  disabled={loading}
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>

            {/* Test Credentials - Remove in production */}
            {!isSignUp && (
              <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-600 font-semibold mb-2">Demo Credentials:</p>
                <p className="text-xs text-slate-600">Email: <code className="bg-slate-200 px-2 py-1 rounded">demo@example.com</code></p>
                <p className="text-xs text-slate-600">Password: <code className="bg-slate-200 px-2 py-1 rounded">password123</code></p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Circular Image with Effects */}
        <div className="hidden md:flex items-center justify-center relative py-12">
          {/* Decorative Bars - Background */}
          <div className="absolute inset-0 flex flex-col justify-center gap-4 px-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-40"></div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-30"></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-40"></div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-30"></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-40"></div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-30"></div>
            <div className="h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-40"></div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full opacity-30"></div>
          </div>

          {/* Circular Image Container */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-8 border-slate-100">
              <img
                src="/Images/Log in-Sign up.png"
                alt="Authentication"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
