import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-water-ocean text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Droplets className="w-8 h-8" />
            <div>
              <h3 className="font-bold text-xl">Water Jam</h3>
              <p className="text-sm text-white/80">Water Refilling Station</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/80">
              © {new Date().getFullYear()} Water Jam Water Refilling Station. All rights reserved.
            </p>
            <p className="text-sm text-white/60 mt-1">
              Your trusted source for pure, clean water.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
