import { CheckCircle, Target, Eye, Droplets } from "lucide-react";

const features = [
  "Advanced 32-stage purification system",
  "Regular quality testing and monitoring",
  "Licensed and certified operations",
  "Eco-friendly refilling process",
  "Clean and sanitized containers",
  "Friendly and professional staff",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-water-light/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Pure Water, <span className="text-primary">Pure Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Water Jam Water Refilling Station, we understand that clean water is essential for a healthy life. 
              That's why we're dedicated to providing the highest quality purified water through our state-of-the-art 
              filtration system.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to excellence means every drop of water goes through rigorous purification processes, 
              ensuring you and your family receive nothing but the best.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 shadow-elegant hover:scale-105 transition-transform duration-300">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm font-medium opacity-90">Pure Water</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent to-primary rounded-2xl p-6 shadow-elegant hover:scale-105 transition-transform duration-300">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">32</div>
                <div className="text-sm font-medium opacity-90">Stage Filter</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 shadow-elegant hover:scale-105 transition-transform duration-300">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm font-medium opacity-90">Quality Check</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/90 to-secondary rounded-2xl p-6 shadow-elegant hover:scale-105 transition-transform duration-300">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">5★</div>
                <div className="text-sm font-medium opacity-90">Certified Safe</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl p-7 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden group">
            {/* Decorative water droplets */}
            <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-30 transition-opacity">
              <Droplets className="w-12 h-12 text-primary rotate-12" />
            </div>
            <div className="absolute bottom-2 left-2 opacity-15 group-hover:opacity-25 transition-opacity">
              <Droplets className="w-8 h-8 text-primary -rotate-12" />
            </div>
            
            {/* Decorative border pattern */}
            <div className="absolute inset-0 border-t-2 border-b-2 border-primary/10 rounded-xl pointer-events-none"></div>
            
            <div className="relative flex items-center gap-3 mb-5">
              <div className="bg-gradient-to-br from-primary to-primary/80 p-3 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed relative z-10">
              To provide accessible, high-quality purified water to every household and business, 
              ensuring health and wellness through our advanced filtration technology and unwavering 
              commitment to excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="relative bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-xl p-7 border-2 border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-xl overflow-hidden group">
            {/* Decorative water droplets */}
            <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-30 transition-opacity">
              <Droplets className="w-12 h-12 text-accent rotate-12" />
            </div>
            <div className="absolute bottom-2 left-2 opacity-15 group-hover:opacity-25 transition-opacity">
              <Droplets className="w-8 h-8 text-accent -rotate-12" />
            </div>
            
            {/* Decorative border pattern */}
            <div className="absolute inset-0 border-t-2 border-b-2 border-accent/10 rounded-xl pointer-events-none"></div>
            
            <div className="relative flex items-center gap-3 mb-5">
              <div className="bg-gradient-to-br from-accent to-accent/80 p-3 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed relative z-10">
              To become the leading water refilling station in the region, recognized for our 
              innovation, reliability, and dedication to community health. We envision a future 
              where every family has access to pure, affordable water.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
