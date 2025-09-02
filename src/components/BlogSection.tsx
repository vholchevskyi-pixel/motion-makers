import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of 3D Animation: AI and Machine Learning Integration",
    excerpt: "Exploring how artificial intelligence is revolutionizing the animation industry and what it means for creators and studios worldwide.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Behind the Scenes: Creating Cyber Dreams",
    excerpt: "A deep dive into our latest short film project, from initial concept sketches to final render. Learn about our creative process and technical challenges.",
    author: "Marcus Rodriguez", 
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Behind the Scenes",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Character Animation Techniques: Bringing Personalities to Life",
    excerpt: "Master the art of character animation with our comprehensive guide to creating believable and engaging animated characters that resonate with audiences.",
    author: "Elena Volkov",
    date: "2024-01-05",
    readTime: "12 min read", 
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "VFX Workflow Optimization: Tools and Techniques",
    excerpt: "Streamline your visual effects pipeline with proven strategies and cutting-edge tools that our team uses for maximum efficiency and quality.",
    author: "David Kim",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Industry </span>
            <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up-to-date with the latest trends, techniques, and behind-the-scenes content 
            from our animation studio and the broader 3D industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <article className="glass-card rounded-xl overflow-hidden hover-scale transition-smooth animate-fade-in">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-muted-foreground text-sm ml-4">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    
                    <button className="text-primary hover:text-accent transition-colors font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          {/* Regular Posts */}
          {blogPosts.slice(1).map((post, index) => (
            <article 
              key={post.id}
              className="glass-card rounded-xl overflow-hidden hover-scale transition-smooth animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3 hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-primary hover:text-accent transition-colors text-sm font-semibold">
                    Read →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-glass">
            <span>View All Posts</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;