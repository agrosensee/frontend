import { MessageSquare, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Maximizing Yield with Precision Irrigation",
    excerpt: "Learn how modern sensors and AI are revolutionizing water management in agriculture...",
    author: "Dr. Sarah Chen",
    role: "Agricultural Scientist",
    readTime: "5 min read",
    category: "Technology",
  },
  {
    title: "Understanding Soil Health Indicators",
    excerpt: "A comprehensive guide to interpreting soil sensor data for optimal crop growth...",
    author: "Michael Torres",
    role: "Soil Expert",
    readTime: "8 min read",
    category: "Education",
  },
  {
    title: "Weather Patterns and Smart Farming",
    excerpt: "How predictive weather models integrate with farm management systems...",
    author: "Emma Williams",
    role: "Climate Analyst",
    readTime: "6 min read",
    category: "Insights",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Community</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
            Learn from Experts & Fellow Farmers
          </h2>
          <p className="text-muted-foreground text-lg">
            Access a wealth of knowledge through our community blog, expert articles, 
            and discussions with agricultural professionals.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-12">
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <div className="text-2xl font-display font-bold">2.5K+</div>
            <div className="text-xs text-muted-foreground">Members</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <BookOpen className="w-6 h-6 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-display font-bold">150+</div>
            <div className="text-xs text-muted-foreground">Articles</div>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <MessageSquare className="w-6 h-6 text-accent mx-auto mb-2" />
            <div className="text-2xl font-display font-bold">500+</div>
            <div className="text-xs text-muted-foreground">Discussions</div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="bg-card rounded-2xl border border-border overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="px-6 pt-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-display font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-medium text-sm">{post.author}</div>
                    <div className="text-xs text-muted-foreground">{post.role}</div>
                  </div>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg" className="group">
            Explore Community
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
