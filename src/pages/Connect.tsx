import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  ChevronLeft,
  Users,
  MessageSquare,
  Megaphone,
  Plus,
  UserPlus,
  Send,
  Hash,
  Globe,
  Copy,
  Check
} from "lucide-react";

const Connect = () => {
  const [activeTab, setActiveTab] = useState<'announcements' | 'rooms'>('announcements');
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [showJoinRoom, setShowJoinRoom] = useState(false);
  const [roomCode, setRoomCode] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Mock data - in real app this would come from Supabase
  const announcements = [
    {
      id: 1,
      title: "🌍 World Environment Day Challenge!",
      message: "Join our special challenge running from June 1-5. Plant trees, reduce waste, and earn double eco-points!",
      author: "EduQuest Team",
      timestamp: "2 hours ago",
      reactions: 24
    },
    {
      id: 2,
      title: "📚 New Course: Climate Action Heroes",
      message: "Our latest course on climate change mitigation is now live. Perfect for advanced learners!",
      author: "Ms. Priya Sharma",
      timestamp: "1 day ago",
      reactions: 18
    },
    {
      id: 3,
      title: "🏆 Monthly Leaderboard Winners",
      message: "Congratulations to Green Valley School for leading this month's sustainability challenge!",
      author: "EduQuest Team",
      timestamp: "3 days ago",
      reactions: 45
    }
  ];

  const rooms = [
    {
      id: 1,
      name: "Tree Planting Warriors",
      code: "TRE123",
      members: 15,
      host: "Rahul Kumar",
      lastActivity: "5 min ago",
      isJoined: true
    },
    {
      id: 2,
      name: "Waste Reduction Squad",
      code: "WST456",
      members: 8,
      host: "Anita Verma",
      lastActivity: "1 hour ago",
      isJoined: false
    },
    {
      id: 3,
      name: "Water Conservation Club",
      code: "WTR789",
      members: 22,
      host: "You",
      lastActivity: "2 hours ago",
      isJoined: true,
      isOwner: true
    }
  ];

  const generateRoomCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(code);
    return code;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/app">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Connect & Collaborate</h1>
              <p className="text-muted-foreground">Join the global sustainability community</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 glass-card p-1 w-fit">
          <button
            onClick={() => setActiveTab('announcements')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'announcements' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Globe className="h-4 w-4" />
            <span>Global Announcements</span>
          </button>
          <button
            onClick={() => setActiveTab('rooms')}
            className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
              activeTab === 'rooms' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Study Rooms</span>
          </button>
        </div>

        {/* Announcements Tab */}
        {activeTab === 'announcements' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Megaphone className="h-6 w-6 text-primary" />
                <span>Global Announcements</span>
              </h2>
              <Badge variant="secondary" className="glass-card">
                {announcements.length} active
              </Badge>
            </div>

            <div className="space-y-4">
              {announcements.map((announcement) => (
                <Card key={announcement.id} className="glass-card border-card-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{announcement.title}</CardTitle>
                        <CardDescription className="text-base">
                          {announcement.message}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="glass-card">
                        {announcement.reactions} 👍
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>By {announcement.author}</span>
                      <span>{announcement.timestamp}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Rooms Tab */}
        {activeTab === 'rooms' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <span>Study Rooms</span>
              </h2>
              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setShowJoinRoom(true)}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Join Room
                </Button>
                <Button variant="eco" onClick={() => {
                  setShowCreateRoom(true);
                  generateRoomCode();
                }}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Room
                </Button>
              </div>
            </div>

            {/* Create Room Modal */}
            {showCreateRoom && (
              <Card className="glass-card border-card-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>Create Study Room</span>
                  </CardTitle>
                  <CardDescription>
                    Create a collaborative space for your sustainability project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Room Name</label>
                    <Input placeholder="e.g., Solar Energy Project Team" className="glass-input" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description (Optional)</label>
                    <Textarea placeholder="What will you be working on together?" className="glass-input" />
                  </div>
                  <div className="glass-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Room Code:</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => copyToClipboard(roomCode)}
                        className="h-auto p-1"
                      >
                        {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <div className="text-2xl font-bold text-center text-primary tracking-wider">
                      {roomCode}
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Share this code with your teammates
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" onClick={() => setShowCreateRoom(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button variant="hero" className="flex-1">
                      Create Room
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Join Room Modal */}
            {showJoinRoom && (
              <Card className="glass-card border-card-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <UserPlus className="h-5 w-5" />
                    <span>Join Study Room</span>
                  </CardTitle>
                  <CardDescription>
                    Enter the room code shared by your teammate
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Room Code</label>
                    <Input 
                      placeholder="Enter 6-digit code" 
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                      className="glass-input text-center text-lg tracking-wider"
                      maxLength={6}
                    />
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" onClick={() => setShowJoinRoom(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button variant="hero" className="flex-1" disabled={joinCode.length !== 6}>
                      Join Room
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Room List */}
            {!showCreateRoom && !showJoinRoom && (
              <div className="grid gap-4">
                {rooms.map((room) => (
                  <Card key={room.id} className="glass-card border-card-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl">
                            <Hash className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{room.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{room.members} members</span>
                              <span>•</span>
                              <span>Host: {room.host}</span>
                              <span>•</span>
                              <span>{room.lastActivity}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="glass-card">
                            {room.code}
                          </Badge>
                          {room.isJoined ? (
                            <Button variant="secondary" asChild>
                              <Link to={`/app/room/${room.id}`}>
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Enter Chat
                              </Link>
                            </Button>
                          ) : (
                            <Button variant="outline">
                              <UserPlus className="h-4 w-4 mr-2" />
                              Join
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Connect;