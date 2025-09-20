import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TreePine, 
  Recycle, 
  Droplets, 
  Sun, 
  ChevronLeft,
  Play,
  Lock,
  CheckCircle,
  Clock,
  Award,
  Users,
  BookOpen
} from "lucide-react";

const Course = () => {
  const { courseId } = useParams();
  
  // Mock course data - in real app this would come from Supabase
  const courses = {
    "1": {
      title: "Forest Conservation",
      description: "Learn about protecting our forests and biodiversity through interactive lessons and real-world challenges.",
      icon: <TreePine className="h-8 w-8" />,
      difficulty: "Beginner",
      duration: "2 weeks",
      students: 1250,
      progress: 45,
      color: "from-green-500 to-emerald-600",
      lessons: [
        {
          id: 1,
          title: "Introduction to Forest Ecosystems",
          description: "Understand the basics of forest ecosystems and their importance",
          duration: "15 min",
          type: "Video",
          completed: true,
          points: 25
        },
        {
          id: 2,
          title: "Types of Forests in India",
          description: "Explore different forest types across Indian subcontinent",
          duration: "20 min",
          type: "Interactive",
          completed: true,
          points: 30
        },
        {
          id: 3,
          title: "Threats to Forest Conservation",
          description: "Learn about deforestation, pollution, and climate change impacts",
          duration: "18 min",
          type: "Video",
          completed: true,
          points: 25
        },
        {
          id: 4,
          title: "Wildlife in Forest Ecosystems",
          description: "Discover the biodiversity that depends on healthy forests",
          duration: "22 min",
          type: "Interactive",
          completed: true,
          points: 35
        },
        {
          id: 5,
          title: "Conservation Strategies",
          description: "Methods and practices for protecting forest resources",
          duration: "25 min",
          type: "Video",
          completed: true,
          points: 30
        },
        {
          id: 6,
          title: "Tree Planting Challenge",
          description: "Real-world task: Plan and execute a tree planting project",
          duration: "3 days",
          type: "Challenge",
          completed: false,
          current: true,
          points: 100
        },
        {
          id: 7,
          title: "Forest Management Policies",
          description: "Understanding government policies and NGO initiatives",
          duration: "20 min",
          type: "Reading",
          completed: false,
          points: 25
        },
        {
          id: 8,
          title: "Community Involvement",
          description: "How local communities contribute to forest conservation",
          duration: "18 min",
          type: "Video",
          completed: false,
          points: 30
        },
        {
          id: 9,
          title: "Technology in Conservation",
          description: "Modern tools and techniques for forest monitoring",
          duration: "25 min",
          type: "Interactive",
          completed: false,
          points: 40
        },
        {
          id: 10,
          title: "Create Your Action Plan",
          description: "Design a comprehensive forest conservation strategy",
          duration: "2 hours",
          type: "Project",
          completed: false,
          points: 75
        },
        {
          id: 11,
          title: "Quiz: Forest Conservation Mastery",
          description: "Test your knowledge with a comprehensive quiz",
          duration: "30 min",
          type: "Quiz",
          completed: false,
          points: 50
        },
        {
          id: 12,
          title: "Share Your Impact",
          description: "Present your conservation project to the community",
          duration: "1 hour",
          type: "Presentation",
          completed: false,
          points: 60
        }
      ]
    },
    "2": {
      title: "Waste Management",
      description: "Master the art of reduce, reuse, and recycle with practical activities and quizzes.",
      icon: <Recycle className="h-8 w-8" />,
      difficulty: "Beginner",
      duration: "10 days",
      students: 980,
      progress: 30,
      color: "from-blue-500 to-cyan-600",
      lessons: [
        { id: 1, title: "Introduction to Waste Streams", description: "What is dry, wet, and hazardous waste?", duration: "12 min", type: "Video", completed: true, points: 20 },
        { id: 2, title: "Segregation at Source", description: "Learn how to separate waste at home and school", duration: "18 min", type: "Interactive", completed: true, points: 30 },
        { id: 3, title: "Recycling Basics", description: "What materials can be recycled and how?", duration: "15 min", type: "Reading", completed: false, current: true, points: 20 },
        { id: 4, title: "Composting 101", description: "Turn kitchen scraps into nutrient-rich compost", duration: "2 days", type: "Project", completed: false, points: 60 },
        { id: 5, title: "Electronic Waste", description: "Safely disposing and recycling e-waste", duration: "14 min", type: "Video", completed: false, points: 25 },
        { id: 6, title: "Waste Sorting Quiz", description: "Test your segregation skills", duration: "10 min", type: "Quiz", completed: false, points: 40 }
      ]
    },
    
    "3": {
      title: "Water Conservation",
      description: "Discover strategies to preserve and use water responsibly in daily life.",
      icon: <Droplets className="h-8 w-8" />,
      difficulty: "Intermediate",
      duration: "2 weeks",
      students: 1120,
      progress: 60,
      color: "from-cyan-500 to-blue-600",
      lessons: [
        { id: 1, title: "Global Water Crisis", description: "Why water conservation matters", duration: "10 min", type: "Video", completed: true, points: 20 },
        { id: 2, title: "Household Water Audit", description: "Measure your daily water usage", duration: "1 day", type: "Project", completed: true, points: 50 },
        { id: 3, title: "Fixing Leaks", description: "Identify and fix common leaks", duration: "20 min", type: "Interactive", completed: true, points: 30 },
        { id: 4, title: "Rainwater Harvesting", description: "Basics of capturing and storing rainwater", duration: "25 min", type: "Reading", completed: false, current: true, points: 25 },
        { id: 5, title: "Efficient Irrigation", description: "Drip vs sprinkler systems", duration: "15 min", type: "Video", completed: false, points: 25 },
        { id: 6, title: "Water-Saving Challenge", description: "Reduce usage by 20% for a week", duration: "7 days", type: "Challenge", completed: false, points: 80 }
      ]
    },
    
    "4": {
      title: "Renewable Energy",
      description: "Explore solar, wind, and other sustainable energy solutions for a cleaner future.",
      icon: <Sun className="h-8 w-8" />,
      difficulty: "Advanced",
      duration: "3 weeks",
      students: 860,
      progress: 0,
      color: "from-yellow-500 to-orange-600",
      lessons: [
        { id: 1, title: "Introduction to Renewables", description: "What are renewable energy sources?", duration: "12 min", type: "Video", completed: false, current: true, points: 20 },
        { id: 2, title: "Solar Energy Basics", description: "How solar panels work", duration: "18 min", type: "Reading", completed: false, points: 25 },
        { id: 3, title: "Wind Power", description: "Harnessing wind for electricity", duration: "15 min", type: "Video", completed: false, points: 25 },
        { id: 4, title: "Energy Efficiency", description: "Reduce consumption at home and school", duration: "20 min", type: "Interactive", completed: false, points: 30 },
        { id: 5, title: "Build a Solar Oven", description: "Hands-on mini project using sunlight", duration: "1 day", type: "Project", completed: false, points: 70 },
        { id: 6, title: "Renewables Quiz", description: "Check your understanding", duration: "15 min", type: "Quiz", completed: false, points: 40 }
      ]
    }
  };

  const course = courses[courseId as keyof typeof courses];
  
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="glass-card border-card-border max-w-md w-full text-center">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Button variant="hero" asChild>
              <Link to="/app">Back to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const completedLessons = course.lessons.filter(lesson => lesson.completed).length;
  const currentLesson = course.lessons.find(lesson => lesson.current) || course.lessons.find(lesson => !lesson.completed);

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'Video': return <Play className="h-4 w-4" />;
      case 'Interactive': return <BookOpen className="h-4 w-4" />;
      case 'Challenge': return <Award className="h-4 w-4" />;
      case 'Quiz': return <CheckCircle className="h-4 w-4" />;
      case 'Reading': return <BookOpen className="h-4 w-4" />;
      case 'Project': return <Users className="h-4 w-4" />;
      case 'Presentation': return <Users className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getLessonBadgeColor = (type: string) => {
    switch (type) {
      case 'Video': return 'bg-blue-500';
      case 'Interactive': return 'bg-purple-500';
      case 'Challenge': return 'bg-orange-500';
      case 'Quiz': return 'bg-green-500';
      case 'Reading': return 'bg-gray-500';
      case 'Project': return 'bg-red-500';
      case 'Presentation': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/app">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        {/* Course Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="glass-card border-card-border">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${course.color} text-white`}>
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <CardTitle className="text-3xl">{course.title}</CardTitle>
                      <Badge variant="outline" className="glass-card">
                        {course.difficulty}
                      </Badge>
                    </div>
                    <CardDescription className="text-lg mb-4">
                      {course.description}
                    </CardDescription>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons.length} lessons</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div>
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Math.round((completedLessons / course.lessons.length) * 100)}%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {completedLessons} of {course.lessons.length} lessons completed
                  </p>
                </div>
                
                <div className="progress-glass">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(completedLessons / course.lessons.length) * 100}%` }}
                  />
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Points Earned:</span>
                    <span className="font-medium text-primary">
                      {course.lessons.filter(l => l.completed).reduce((sum, l) => sum + l.points, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Possible:</span>
                    <span className="font-medium">
                      {course.lessons.reduce((sum, l) => sum + l.points, 0)}
                    </span>
                  </div>
                </div>

                {currentLesson && (
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <Link to={`/app/lesson/${currentLesson.id}`}>
                      Continue Learning
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Roadmap */}
        <Card className="glass-card border-card-border">
          <CardHeader>
            <CardTitle>Learning Journey</CardTitle>
            <CardDescription>
              Follow the path to mastery - complete each step to unlock the next
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Road Path */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
              
              <div className="space-y-6">
                {course.lessons.map((lesson, index) => {
                  const isLocked = index > 0 && !course.lessons[index - 1].completed && !lesson.completed;
                  const isCurrent = lesson.current || (!lesson.completed && !isLocked);
                  
                  return (
                    <div key={lesson.id} className="relative flex items-start space-x-6">
                      {/* Road Node */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                          lesson.completed 
                            ? 'bg-primary border-primary text-primary-foreground shadow-lg animate-glow' 
                            : isCurrent 
                            ? 'bg-secondary border-secondary text-secondary-foreground shadow-lg animate-pulse' 
                            : isLocked
                            ? 'bg-muted border-muted text-muted-foreground opacity-60'
                            : 'bg-card border-border hover:border-primary transition-colors'
                        }`}>
                          {lesson.completed ? (
                            <CheckCircle className="h-8 w-8" />
                          ) : isLocked ? (
                            <Lock className="h-6 w-6" />
                          ) : (
                            <div className="text-white">
                              {getLessonIcon(lesson.type)}
                            </div>
                          )}
                        </div>
                        
                        {/* Connecting Line to Next Node */}
                        {index < course.lessons.length - 1 && (
                          <div className={`absolute left-1/2 top-16 w-1 h-6 -translate-x-1/2 ${
                            lesson.completed ? 'bg-primary' : 'bg-border'
                          } opacity-50`}></div>
                        )}
                      </div>

                      {/* Lesson Card */}
                      <div className={`flex-1 glass-card border-card-border p-6 rounded-2xl transition-all duration-300 ${
                        lesson.completed 
                          ? 'border-primary/30 bg-primary/5' 
                          : isCurrent 
                          ? 'border-secondary/30 bg-secondary/5' 
                          : isLocked
                          ? 'opacity-60'
                          : 'hover:bg-card/80'
                      }`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className={`font-bold text-lg ${lesson.completed ? 'text-primary' : 'text-foreground'}`}>
                                {lesson.title}
                              </h3>
                              <Badge variant="secondary" className="text-xs">
                                {lesson.type}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              {lesson.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{lesson.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Award className="h-4 w-4" />
                                <span>+{lesson.points} pts</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex-shrink-0 ml-4">
                            {lesson.completed ? (
                              <Badge variant="secondary" className="glass-card">
                                ✅ Completed
                              </Badge>
                            ) : isCurrent ? (
                              <Button variant="hero" size="lg" asChild>
                                <Link to={`/app/lesson/${lesson.id}`}>
                                  Continue Journey
                                </Link>
                              </Button>
                            ) : isLocked ? (
                              <Badge variant="outline" className="opacity-60">
                                🔒 Locked
                              </Badge>
                            ) : (
                              <Button variant="eco" size="sm" asChild>
                                <Link to={`/app/lesson/${lesson.id}`}>
                                  Begin
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Course;