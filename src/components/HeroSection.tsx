import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/school-hero.jpg";
import whatsappIcon from "@/assets/whatsapp.svg";

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-light">
      {/* Hero Background with Gradient */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/c7c8135a-6f3d-4a17-8b3a-6b71e27f4a15.png"
          alt="One Love Academy"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="flex justify-center items-center w-full">
          {/* Main Hero Content */}
          <div className="text-white space-y-8 text-center max-w-4xl">
            <div className="space-y-4">
              <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl leading-tight animate-fade-in">
                <span className="block animate-slide-in-right">Welcome to</span>
                <span className="text-white block animate-slide-in-right" style={{animationDelay: '0.2s'}}>One Love Academy</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Where education meets excellence. We nurture young minds to achieve their full potential 
                through innovative learning, strong values, and a commitment to academic distinction.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center">
              <a href="https://wa.me/2348031234567?text=Hello%2C%20I%27d%20like%20to%20apply%20to%20One%20Love%20Academy" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="group border-0">
                  <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5 mr-2" />
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-red-500" />
                </div>
                <div className="font-poppins font-bold text-2xl"><CountUp end={15} />+</div>
                <div className="text-sm text-white/80">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-red-500" />
                </div>
                <div className="font-poppins font-bold text-2xl"><CountUp end={1000} />+</div>
                <div className="text-sm text-white/80">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-red-500" />
                </div>
                <div className="font-poppins font-bold text-2xl"><CountUp end={50} />+</div>
                <div className="text-sm text-white/80">Expert Teachers</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;