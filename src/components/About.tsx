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
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-water p-8 flex items-center justify-center shadow-medium">
              <div className="text-center text-white space-y-4">
                <div className="text-6xl font-bold">100%</div>
                <div className="text-2xl font-semibold">Pure & Safe</div>
                <div className="text-lg opacity-90">Quality Guaranteed</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
