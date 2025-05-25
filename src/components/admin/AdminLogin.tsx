
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface AdminLoginProps {
  onLogin: (sessionToken: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        onLogin(data.sessionToken);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <h1 className="font-glitch text-3xl text-cyberpunk-green mb-8 text-center">
          ADMIN ACCESS
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="username" className="font-mono text-white">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="font-mono text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white"
              required
            />
          </div>
          
          {error && (
            <div className="text-cyberpunk-red font-mono text-sm">
              {error}
            </div>
          )}
          
          <Button
            type="submit"
            disabled={loading}
            className="w-full font-mono bg-cyberpunk-green text-black hover:bg-cyberpunk-green/80"
          >
            {loading ? 'AUTHENTICATING...' : 'LOGIN'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
