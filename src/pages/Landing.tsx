import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  TreePine, 
  Recycle, 
  Droplets, 
  Sun, 
  Leaf, 
  Award,
  Users,
  Target,
  Gamepad2,
  ChevronRight
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Landing = () => {
  const features = [
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Gamified Learning",
      description: "Interactive lessons and challenges that make environmental education engaging and fun"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Real-World Tasks",
      description: "Complete practical challenges like tree planting, waste segregation, and conservation projects"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Eco-Points & Rewards",
      description: "Earn points for sustainable practices and unlock digital badges and recognition"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "School Competitions",
      description: "Compete with other schools and track your environmental impact together"
    }
  ];

  const courses = [
    { icon: <TreePine className="h-6 w-6" />, title: "Forest Conservation", count: "12 lessons" },
    { icon: <Recycle className="h-6 w-6" />, title: "Waste Management", count: "8 lessons" },
    { icon: <Droplets className="h-6 w-6" />, title: "Water Conservation", count: "10 lessons" },
    { icon: <Sun className="h-6 w-6" />, title: "Renewable Energy", count: "15 lessons" },
    { icon: <Leaf className="h-6 w-6" />, title: "Sustainable Living", count: "20 lessons" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <span className="text-2xl font-bold gradient-text">EduQuest</span>
              <p className="text-xs text-muted-foreground mt-1">The GreenLeap Journey</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>
          <Button variant="glass" size="default" asChild>
            <Link to="/app">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="glass-card text-primary">
                🌱 NEP 2020 Aligned Educational Platform
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Learn <span className="gradient-text">Sustainability</span> Through Interactive Education
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Empower students with gamified environmental education. Complete real-world challenges, 
                earn eco-points, and become a sustainability champion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="hero" asChild>
                  <Link to="/app">
                    Start Learning <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>500+ Schools</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="glass-card p-4">
                <img 
                  src={heroImage} 
                  alt="Students learning environmental education through interactive technology"
                  className="rounded-xl w-full h-auto shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                  <span className="text-sm font-medium">Live Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose EduQuest?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of environmental education with our innovative, gamified learning platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-card-border animate-fade-in hover:animate-scale-in">
                <CardHeader>
                  <div className="text-primary mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section id="courses" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive curriculum designed to build environmental consciousness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="glass-card border-card-border hover:animate-scale-in cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-primary group-hover:text-primary-glow transition-colors">
                      {course.icon}
                    </div>
                    <Badge variant="secondary" className="glass-card">
                      {course.count}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="eco" size="lg" asChild>
              <Link to="/app">
                Explore All Courses <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students already learning and practicing sustainability. 
              Start your environmental education journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="hero" asChild>
                <Link to="/app">Start Your Journey</Link>
              </Button>
              <Button variant="outline" size="lg">
                Contact Schools
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-white/10 border-t border-white/20 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-8 w-8 text-primary" />
              <div>
                <span className="text-2xl font-bold gradient-text">EduQuest</span>
                <p className="text-xs text-muted-foreground mt-1">The GreenLeap Journey</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                Empowering the next generation of environmental stewards
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                © 2024 EduQuest. Aligned with NEP 2020 & SDG Goals.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;