import { Box, Film, Gamepad2, Megaphone, Sparkles, Zap } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Box,
    title: "3D Character Animation & Modeling",
    description: "Breathe life into your characters with our advanced 3D modeling and animation techniques. From concept to final render, we create memorable characters that connect with audiences.",
    features: ["Character Design", "Rigging & Animation", "Facial Animation", "Motion Capture Integration"]
  },
  {
    id: 2,
    icon: Sparkles,
    title: "Cinematic Visual Effects (VFX)",
    description: "Transform your vision with stunning visual effects that seamlessly blend reality and imagination. Our VFX team delivers Hollywood-quality effects for any production.",
    features: ["Compositing", "Particle Effects", "Environment Design", "Destruction Simulation"]
  },
  {
    id: 3,
    icon: Film,
    title: "Short Film Production",
    description: "Complete end-to-end production services for animated short films. From storyboarding to final color grading, we handle every aspect of your film production.",
    features: ["Pre-Production", "Animation Direction", "Post-Production", "Sound Design"]
  },
  {
    id: 4,
    icon: Megaphone,
    title: "Commercial & Advertisement Animation",
    description: "Create compelling animated commercials that drive results. Our team specializes in product visualization and brand storytelling through animation.",
    features: ["Product Visualization", "Brand Animation", "Explainer Videos", "Social Media Content"]
  },
  {
    id: 5,
    icon: Gamepad2,
    title: "Game Trailer & Cinematic Creation",
    description: "Showcase your game with cinematic trailers that captivate players. We create immersive cinematics that highlight your game's unique features and story.",
    features: ["Cinematic Trailers", "Gameplay Animation", "Character Showcases", "Environment Reveals"]
  },
  {
    id: 6,
    icon: Zap,
    title: "Motion Graphics & Title Sequences",
    description: "Dynamic motion graphics and title sequences that set the perfect tone for your project. From simple logos to complex animated sequences.",
    features: ["Logo Animation", "Title Sequences", "Infographics", "UI/UX Animation"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive 3D animation services that bring your creative vision to life. 
            From concept to completion, we handle every aspect of your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="glass-card p-8 rounded-xl hover-scale transition-smooth animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life with our 3D animation expertise.
            </p>
            <button className="btn-hero">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;