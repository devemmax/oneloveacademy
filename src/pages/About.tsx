import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div 
        className="py-20 bg-gradient-light relative overflow-hidden"
      >
        <img
          src="/lovable-uploads/4a30bafc-4491-4430-83d6-e62b3f5b1f49.png"
          alt="About One Love Academy background"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              About One Love Academy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              More content coming soon...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;