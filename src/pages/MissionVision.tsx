import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Target, Star, Trophy } from "lucide-react";
import studentsImage from "@/assets/students-studying.jpg";
const missionVisionImage = "/lovable-uploads/4a30bafc-4491-4430-83d6-e62b3f5b1f49.png";

const MissionVision = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section 
        className="py-20 bg-gradient-light relative"
        style={{
          backgroundImage: `url('/lovable-uploads/eb03661c-ba34-43c7-a114-fc9c070b0098.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Glory & Excellence
            </h1>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="h-1 w-12 bg-secondary"></div>
              <p className="font-poppins text-xl font-semibold text-secondary">
                Our commitment to educational excellence and character development
              </p>
              <div className="h-1 w-12 bg-secondary"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For over 15 years, One Love Academy has been a beacon of educational excellence, 
              nurturing students to become confident, compassionate, and capable leaders of tomorrow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Mission Section */}
              <div>
                <h2 className="font-poppins font-bold text-3xl text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At One Love Academy, we believe that every child deserves an education that not only 
                  develops their academic abilities but also shapes their character and prepares them 
                  for a successful future.
                </p>
              </div>

              {/* Vision Section */}
              <div>
                <h2 className="font-poppins font-bold text-3xl text-primary mb-6">
                  Our Vision
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our holistic approach combines rigorous academics with character development, 
                  ensuring our students graduate with both knowledge and wisdom to become leaders 
                  and positive contributors to society.
                </p>
              </div>

              {/* Core Values */}
              <div>
                <h2 className="font-poppins font-bold text-3xl text-primary mb-6">
                  Our Values
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary">Love & Care</h4>
                      <p className="text-sm text-muted-foreground">Nurturing environment for all</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary">Excellence</h4>
                      <p className="text-sm text-muted-foreground">Striving for the highest standards</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary">Innovation</h4>
                      <p className="text-sm text-muted-foreground">Modern teaching methods</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <Trophy className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-primary">Achievement</h4>
                      <p className="text-sm text-muted-foreground">Celebrating every success</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              {/* Principal's Message */}
              <div className="bg-white p-6 rounded-2xl shadow-card">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-poppins font-bold text-xl">P</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary mb-2">Principal's Welcome</h4>
                    <p className="text-muted-foreground text-sm italic">
                      "Welcome to One Love Academy, where we transform dreams into reality through 
                      quality education and unwavering commitment to excellence."
                    </p>
                    <p className="text-primary font-medium text-sm mt-2">- Mrs. Sarah Johnson, Principal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="bg-white p-6 rounded-2xl shadow-card">
              <img
                src={missionVisionImage}
                alt="One Love Academy Mission, Vision and Values"
                className="w-full h-auto max-h-[360px] lg:max-h-[520px] object-contain rounded-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MissionVision;