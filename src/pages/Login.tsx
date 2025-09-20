import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Leaf, Mail, Lock, Users, GraduationCap } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    // In real implementation, this would use Supabase auth
    setTimeout(() => {
      localStorage.setItem('ecolearn_auth', 'true');
      navigate('/app');
    }, 1000);
  };

  const handleDemoLogin = () => {
    localStorage.setItem('ecolearn_auth', 'true');
    navigate('/app');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-10 w-10 text-primary" />
            <span className="text-3xl font-bold gradient-text">EcoLearn</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground">
            Continue your sustainability journey
          </p>
        </div>

        {/* Login Form */}
        <Card className="glass-card border-card-border">
          <CardHeader className="text-center">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your eco-learning dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="student@school.edu.in"
                    className="glass-input pl-10"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="glass-input pl-10"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <Button 
                variant="glass" 
                size="lg" 
                className="w-full mt-4"
                onClick={handleDemoLogin}
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Try Demo Account
              </Button>
            </div>

            <div className="mt-6 text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/app/signup" className="text-primary hover:underline">
                  Sign up for free
                </Link>
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GraduationCap className="h-3 w-3" />
                  <span>500+ Schools</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Button variant="ghost" asChild>
            <Link to="/">
              ← Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;