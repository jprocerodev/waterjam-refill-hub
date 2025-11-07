import { CheckCircle } from "lucide-react";

const features = [
  "Advanced 8-stage purification system",
  "Regular quality testing and monitoring",
  "Licensed and certified operations",
  "Eco-friendly refilling process",
  "Clean and sanitized containers",
  "Friendly and professional staff",
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-water-light/10">
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
            
            <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 shadow-elegant hover:scale-105 transition-transform duration-300">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">8</div>
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
      </div>
    </section>
  );
};

export default About;
