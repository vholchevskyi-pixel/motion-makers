import { Play, ExternalLink, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const portfolioProjects = [
  {
    id: 1,
    title: "Cyber Dreams",
    description: "Sci-fi short film exploring the boundaries between reality and virtual worlds",
    duration: "3:45",
    category: "Short Film",
    tags: ["Sci-Fi", "Character Animation", "VFX"],
    client: "Independent Production",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Brand X Commercial",
    description: "High-impact product advertisement featuring dynamic 3D product visualization",
    duration: "0:30",
    category: "Commercial",
    tags: ["Product Viz", "Motion Graphics", "Branding"],
    client: "Global Brand Agency",
    thumbnail: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Fantasy Quest Trailer",
    description: "Epic game cinematic showcasing mythical creatures and magical environments",
    duration: "1:20",
    category: "Game Cinematic",
    tags: ["Fantasy", "Creatures", "Environment"],
    client: "AAA Game Studio",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Character Showcase Reel",
    description: "Demonstration of advanced character animation and emotional storytelling",
    duration: "2:10",
    category: "Animation Demo",
    tags: ["Character", "Animation", "Storytelling"],
    client: "Portfolio Piece",
    thumbnail: "https://images.unsplash.com/photo-1574472420969-b70b8c2ac23b?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    title: "VFX Breakdown",
    description: "Behind-the-scenes look at our visual effects process and techniques",
    duration: "4:00",
    category: "Behind the Scenes",
    tags: ["VFX", "Breakdown", "Process"],
    client: "Educational Content",
    thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Architectural Visualization",
    description: "Photorealistic architectural renders and walkthrough animations",
    duration: "2:30",
    category: "Architectural",
    tags: ["Architecture", "Photorealistic", "Visualization"],
    client: "Design Studio",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Creative</span>
            <span className="text-foreground"> Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of 3D animation projects, from cinematic short films 
            to commercial advertisements and game cinematics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group glass-card rounded-xl overflow-hidden hover-scale transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Thumbnail */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-semibold">{project.duration}</span>
                      <div className="flex gap-2">
                        <button className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors">
                          <Play className="w-4 h-4 text-primary" />
                        </button>
                        <button className="p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors">
                          <ExternalLink className="w-4 h-4 text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.client}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-glass">
            View Complete Portfolio
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;