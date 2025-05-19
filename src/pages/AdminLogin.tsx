
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useAuth } from '../context/AuthContext';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Append @example.com to make it a valid email for Supabase
      const formattedEmail = email + '@example.com';
      await login(formattedEmail, password);
      navigate('/admin/dashboard');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="bg-black/60 border border-white/10">
            <CardHeader>
              <CardTitle className="font-glitch text-2xl text-cyberpunk-green">N1GHTW1RE ADMIN</CardTitle>
              <CardDescription className="font-mono text-white/70">Enter your credentials to access the admin dashboard</CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username" className="font-mono text-sm text-white/80">Username</label>
                  <Input
                    id="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-black/50 border-white/20 text-white font-mono"
                    placeholder="admin"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="font-mono text-sm text-white/80">Password</label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-black/50 border-white/20 text-white font-mono"
                    placeholder="Enter password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-cyberpunk-green hover:bg-cyberpunk-green/80 text-black font-mono"
                >
                  {isLoading ? (
                    <>
                      <span className="mr-2">AUTHENTICATING</span>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></div>
                    </>
                  ) : "ACCESS TERMINAL"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminLogin;
