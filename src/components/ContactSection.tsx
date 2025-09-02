import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budgetRange: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Supabase
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Let's Create </span>
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team to discuss your project 
            and discover how we can help you achieve your creative goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="text-foreground font-semibold">hello@wowanimations.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call Us</div>
                    <div className="text-foreground font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Visit Us</div>
                    <div className="text-foreground font-semibold">Los Angeles, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Project Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/20">
                  <span className="text-muted-foreground">Consultation</span>
                  <span className="text-primary font-semibold">1-2 days</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/20">
                  <span className="text-muted-foreground">Project Planning</span>
                  <span className="text-primary font-semibold">1-2 weeks</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/20">
                  <span className="text-muted-foreground">Production</span>
                  <span className="text-primary font-semibold">4-12 weeks</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Final Delivery</span>
                  <span className="text-primary font-semibold">1-2 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Company</label>
                <Input
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="bg-background/50 border-border/50 focus:border-primary"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Project Type *</label>
                  <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="animation">3D Animation</SelectItem>
                      <SelectItem value="vfx">Visual Effects</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="film">Short Film</SelectItem>
                      <SelectItem value="game">Game Cinematic</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Budget Range</label>
                  <Select onValueChange={(value) => handleInputChange('budgetRange', value)}>
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                      <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="100k+">$100k+</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Project Description *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-background/50 border-border/50 focus:border-primary min-h-[120px]"
                  placeholder="Tell us about your project, goals, and vision..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Project References</label>
                <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Drop files here or click to upload</p>
                  <p className="text-sm text-muted-foreground mt-1">Images, videos, or documents</p>
                </div>
              </div>

              <Button type="submit" className="w-full btn-hero">
                <Send className="w-5 h-5 mr-2" />
                Send Project Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;