
import React, { useState } from 'react';
import { theme } from '../constants';
import { Diamond, Lock, User } from 'lucide-react';
import { signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from "../src/firebase.js"
interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword (auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
     setLoading(true);
    // Simulate delay
    setTimeout(() => {
      onLogin();
      setLoading(false);
    }, 800);
    // ...
  })
  .catch((error) => {
    setError(true)
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message)
    // ..
  });



   
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${theme.colors.bg}`}>
      <div className={`w-full max-w-md ${theme.colors.cardBg} ${theme.radius} ${theme.shadows} overflow-hidden border ${theme.colors.border}`}>
        <div className={`${theme.colors.accentBg} p-8 text-center relative`}>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Diamond size={120} color="white" />
          </div>
          <Diamond className="mx-auto mb-4 text-[#C5A059]" size={40} />
          <h1 className={`${theme.fonts.serif} text-3xl font-bold text-white mb-2`}>SHRIRAAM JEWELS</h1>
          <p className="text-stone-400 text-sm uppercase tracking-widest">Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-600 block">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-600 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-4 ${theme.colors.accentBg} text-white font-bold rounded-xl ${theme.colors.accentHover} transition-all duration-300 transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : 'Secure Sign In'}
          </button>
          {error && <span>Invalid Credentials</span>}
        </form>

        <div className="p-6 bg-stone-50 text-center border-t border-stone-100">
          <p className="text-xs text-stone-400">Restricted Access • Authorized Personnel Only</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
