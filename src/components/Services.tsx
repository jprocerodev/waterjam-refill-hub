import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Shield, Clock, DollarSign } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Premium Quality Water",
    description: "8-stage purification process ensuring the cleanest, safest drinking water for you and your family.",
  },
  {
    icon: Shield,
    title: "Health & Safety First",
    description: "Regular water quality testing and compliance with national health standards for your peace of mind.",
  },
  {
    icon: Clock,
    title: "Fast & Convenient",
    description: "Quick refilling service to get you back on track. No long waits, just pure water when you need it.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Best value for money with competitive rates. Save more while enjoying premium quality water.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose <span className="text-primary">Water Jam</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best water refilling experience with unmatched quality and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-primary transition-all duration-300 hover:shadow-medium group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-water flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
