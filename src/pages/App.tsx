import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link, useNavigate } from "react-router-dom";
import { 
  TreePine, 
  Recycle, 
  Droplets, 
  Sun, 
  Leaf, 
  Award,
  User,
  Users,
  Star,
  Calendar,
  Trophy,
  ChevronRight,
  LogOut
} from "lucide-react";

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // For now, we'll simulate authentication
  // Later this will be replaced with actual Supabase auth
  useEffect(() => {
    const checkAuth = () => {
      // Simulate checking authentication
      // In real implementation, this would check Supabase auth state
      const hasAuth = localStorage.getItem('ecolearn_auth') === 'true';
      if (!hasAuth) {
        navigate('/app/login');
      } else {
        setIsAuthenticated(true);
      }
    };
    
    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('ecolearn_auth');
    navigate('/app/login');
  };

  const courses = [
    {
      id: 1,
      title: "Forest Conservation",
      description: "Learn about protecting our forests and biodiversity",
      icon: <TreePine className="h-8 w-8" />,
      progress: 45,
      lessons: 12,
      completed: 5,
      difficulty: "Beginner",
      points: 120,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Waste Management",
      description: "Master the art of reduce, reuse, and recycle",
      icon: <Recycle className="h-8 w-8" />,
      progress: 30,
      lessons: 8,
      completed: 2,
      difficulty: "Beginner",
      points: 80,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Water Conservation",
      description: "Discover ways to preserve our most precious resource",
      icon: <Droplets className="h-8 w-8" />,
      progress: 60,
      lessons: 10,
      completed: 6,
      difficulty: "Intermediate",
      points: 150,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 4,
      title: "Renewable Energy",
      description: "Explore solar, wind, and sustainable energy solutions",
      icon: <Sun className="h-8 w-8" />,
      progress: 0,
      lessons: 15,
      completed: 0,
      difficulty: "Advanced",
      points: 0,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const userStats = {
    name: "Priya Sharma",
    totalPoints: 350,
    completedCourses: 1,
    currentStreak: 7,
    badges: 3,
    rank: "Eco Warrior"
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 glass-card p-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userStats.name}! 🌱</h1>
            <p className="text-muted-foreground">Continue your sustainability journey</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <Leaf className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* User Stats Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points</CardTitle>
              <Star className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{userStats.totalPoints}</div>
              <p className="text-xs text-muted-foreground">
                +23 from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Calendar className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{userStats.currentStreak} days</div>
              <p className="text-xs text-muted-foreground">
                Keep it going!
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
              <Award className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{userStats.badges}</div>
              <p className="text-xs text-muted-foreground">
                2 more to unlock next rank
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-card-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
              <Trophy className="h-4 w-4 text-primary-glow" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold gradient-text">{userStats.rank}</div>
              <p className="text-xs text-muted-foreground">
                Top 15% in your school
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 glass-card p-1 w-fit">
          <Link to="/app" className="px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-lg flex items-center space-x-2">
            <TreePine className="h-4 w-4" />
            <span>Courses</span>
          </Link>
          <Link to="/app/connect" className="px-6 py-3 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300 flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Connect</span>
          </Link>
        </div>

        {/* Courses Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Your Courses</h2>
            <Badge variant="secondary" className="glass-card">
              {courses.filter(c => c.progress > 0).length} in progress
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="glass-card border-card-border hover:animate-scale-in cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${course.color} text-white`}>
                        {course.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {course.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="glass-card">
                      {course.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Progress: {course.completed}/{course.lessons} lessons
                    </span>
                    <span className="font-medium text-primary">
                      {course.points} points
                    </span>
                  </div>
                  
                  <div className="progress-glass">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {course.progress}% complete
                    </span>
                    <Button variant="glass" size="sm" asChild>
                      <Link to={`/app/course/${course.id}`}>
                        {course.progress > 0 ? 'Continue' : 'Start'} <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="glass-card border-card-border">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump into today's recommended activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="eco" className="h-auto p-4 flex-col space-y-2">
                <TreePine className="h-6 w-6" />
                <span>Plant a Tree Challenge</span>
                <span className="text-xs opacity-80">+50 points</span>
              </Button>
              <Button variant="secondary" className="h-auto p-4 flex-col space-y-2">
                <Recycle className="h-6 w-6" />
                <span>Waste Sorting Quiz</span>
                <span className="text-xs opacity-80">+25 points</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                <Award className="h-6 w-6" />
                <span>Share Progress</span>
                <span className="text-xs opacity-80">+10 points</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;