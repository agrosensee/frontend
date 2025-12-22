import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, Eye, Clock, Plus, Filter, Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Maximizing Yield with Precision Irrigation Techniques",
    excerpt: "Learn the latest techniques for optimizing water usage while improving crop yields. This comprehensive guide covers everything from sensor placement to AI-driven scheduling.",
    author: "Dr. Sarah Chen",
    role: "Agricultural Scientist",
    date: "Dec 20, 2024",
    readTime: "8 min",
    likes: 124,
    comments: 23,
    views: 1520,
    category: "Technology",
  },
  {
    id: 2,
    title: "Understanding Soil Health Indicators for Better Farming",
    excerpt: "A deep dive into interpreting soil sensor data. Learn what the numbers mean and how to use them for better crop management decisions.",
    author: "Michael Torres",
    role: "Soil Expert",
    date: "Dec 18, 2024",
    readTime: "12 min",
    likes: 89,
    comments: 15,
    views: 980,
    category: "Education",
  },
  {
    id: 3,
    title: "Weather Patterns and Their Impact on Irrigation",
    excerpt: "How to read weather forecasts and integrate them into your irrigation planning. Tips from experienced farmers and meteorologists.",
    author: "Emma Williams",
    role: "Climate Analyst",
    date: "Dec 15, 2024",
    readTime: "6 min",
    likes: 156,
    comments: 31,
    views: 2100,
    category: "Weather",
  },
  {
    id: 4,
    title: "Cost-Effective Sensor Deployment Strategies",
    excerpt: "Maximize your sensor coverage while minimizing costs. Learn optimal placement strategies and maintenance tips from the experts.",
    author: "James Rodriguez",
    role: "IoT Specialist",
    date: "Dec 12, 2024",
    readTime: "10 min",
    likes: 72,
    comments: 18,
    views: 890,
    category: "Hardware",
  },
];

const discussions = [
  {
    id: 1,
    title: "Best practices for sensor calibration?",
    author: "FarmerJohn",
    replies: 12,
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    title: "Dealing with clay soil moisture readings",
    author: "AgriTech_Lisa",
    replies: 8,
    lastActivity: "5 hours ago",
  },
  {
    id: 3,
    title: "Recommended irrigation schedules for corn",
    author: "CornKing2024",
    replies: 24,
    lastActivity: "1 day ago",
  },
];

const CommunityPage = () => {
  return (
    <DashboardLayout title="Community" subtitle="Connect with fellow farmers and experts">
      {/* Header Actions */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-card rounded-lg border border-border">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles and discussions..."
            className="bg-transparent border-none outline-none text-sm flex-1 placeholder:text-muted-foreground"
          />
        </div>
        <Button variant="ghost" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="hero" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Blog Posts */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-display font-semibold">Latest Articles</h2>
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card rounded-xl border border-border p-5 card-hover">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center text-xs font-semibold text-primary-foreground">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{post.author}</div>
                    <div className="text-xs text-muted-foreground">{post.date}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Active Discussions */}
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold mb-4">Active Discussions</h3>
            <div className="space-y-3">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <h4 className="text-sm font-medium mb-1">{discussion.title}</h4>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>by {discussion.author}</span>
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{discussion.lastActivity}</div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-4">
              View All Discussions
            </Button>
          </div>

          {/* Community Stats */}
          <div className="bg-card rounded-xl border border-border p-5">
            <h3 className="font-semibold mb-4">Community Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Members</span>
                <span className="font-semibold">2,547</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Articles</span>
                <span className="font-semibold">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Discussions</span>
                <span className="font-semibold">342</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Online Now</span>
                <span className="font-semibold text-primary">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CommunityPage;
