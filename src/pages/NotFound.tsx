import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-yellow-100 to-green-100 flex items-center justify-center px-6">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3">
          <Leaf className="h-16 w-16 text-primary" />
          <div>
            <span className="text-4xl font-bold gradient-text">EduQuest</span>
            <p className="text-sm text-muted-foreground mt-1">The GreenLeap Journey</p>
          </div>
        </div>

        {/* Error Message */}
        <div className="glass-card p-12 max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Oops! Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for seems to have wandered off into the digital wilderness.
          </p>
          
          {/* Go Back Button */}
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleGoBack}
            className="w-full"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
