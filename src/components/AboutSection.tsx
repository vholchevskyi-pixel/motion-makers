import { Users, Award, Clock, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Creative Director",
    bio: "15+ years of experience in animation and visual storytelling. Led projects for major studios including Disney and Pixar.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b991?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead 3D Animator",
    bio: "Specializes in character animation and motion capture. Former animator at Blizzard Entertainment with expertise in game cinematics.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Elena Volkov",
    role: "VFX Specialist",
    bio: "Master of visual effects and compositing. Known for creating stunning environments and particle effects for blockbuster films.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "David Kim",
    role: "Technical Director",
    bio: "Pipeline and workflow optimization expert. Ensures our projects maintain the highest technical standards and efficiency.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  }
];

const stats = [
  { icon: Users, label: "Team Members", value: "12+" },
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: Clock, label: "Projects Completed", value: "200+" },
  { icon: Heart, label: "Happy Clients", value: "150+" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Company Story */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">About </span>
            <span className="gradient-text">WoWAnimations</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded in 2015, WoWAnimations has grown from a small creative team into a leading 
              3D animation studio. We believe in the power of visual storytelling to inspire, 
              educate, and entertain audiences worldwide.
            </p>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To push the boundaries of 3D animation and create unforgettable visual experiences 
                that bring stories to life. We combine cutting-edge technology with artistic vision 
                to deliver animations that not only meet but exceed our clients' expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center glass-card p-6 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-background" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Meet Our Creative Team</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of artists, animators, and technical experts work together 
              to create exceptional 3D animations and visual effects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className="text-center glass-card p-6 rounded-xl hover-scale transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="glass-card p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-6xl mb-4">🎨</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Creativity</h4>
                <p className="text-muted-foreground">
                  We push creative boundaries to deliver unique and innovative visual solutions.
                </p>
              </div>
              
              <div>
                <div className="text-6xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Innovation</h4>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technology to stay ahead of industry trends.
                </p>
              </div>
              
              <div>
                <div className="text-6xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-foreground mb-3">Excellence</h4>
                <p className="text-muted-foreground">
                  We maintain the highest standards in every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;