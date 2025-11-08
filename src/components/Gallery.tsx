import truck1 from "@/assets/truck-1.jpg";
import truck2 from "@/assets/truck-2.jpg";
import filtrationSystem from "@/assets/filtration-system.jpg";
import facility from "@/assets/facility.jpg";
import fleet from "@/assets/fleet.jpg";

const galleryItems = [
  {
    image: filtrationSystem,
    title: "32-Stage Filtration System",
    description: "State-of-the-art purification technology",
  },
  {
    image: facility,
    title: "Clean Facility",
    description: "Sanitized and professional workspace",
  },
  {
    image: truck1,
    title: "Delivery Fleet",
    description: "Reliable water delivery service",
  },
  {
    image: truck2,
    title: "Service Vehicles",
    description: "Ready to serve your area",
  },
  {
    image: fleet,
    title: "Our Fleet",
    description: "Multiple vehicles for efficient service",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Facility</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our state-of-the-art facility, advanced equipment, and delivery fleet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
