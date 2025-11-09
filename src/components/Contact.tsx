import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "348 Barangka Drive, Mandaluyong",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "09771335817 / 09273964794",
  },
  {
    icon: Clock,
    title: "Open Hours",
    details: "Mon-Sun: 7:00 AM - 8:00 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "Julieiglesias2780@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us today or reach out for any inquiries. We're here to serve you with the best water refilling experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-border hover:border-primary transition-all duration-300 hover:shadow-soft">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gradient-water flex items-center justify-center mx-auto">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{info.title}</h3>
                <p className="text-muted-foreground">{info.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground">Ready to Experience Pure Water?</h3>
          <p className="text-muted-foreground">
            Join hundreds of satisfied customers who trust Water Jam for their daily water needs.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-water hover:opacity-90 transition-all duration-300 shadow-soft px-8"
            asChild
          >
            <a href="tel:+639771335817">
              Contact Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
