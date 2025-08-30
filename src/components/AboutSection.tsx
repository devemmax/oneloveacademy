import { Button } from "@/components/ui/button";
import { Heart, Target, Star, Trophy } from "lucide-react";
import studentsImage from "@/assets/students-studying.jpg";
const missionVisionImage = "/lovable-uploads/4a30bafc-4491-4430-83d6-e62b3f5b1f49.png";

const AboutSection = () => {
  const images = [
    {
      src: "/lovable-uploads/f9c27c4a-647d-4d0e-9987-1df8560073a7.png",
      alt: "Teacher with students",
      title: "Dedicated Teachers"
    },
    {
      src: "/lovable-uploads/37deeb86-6b04-4273-96a6-b73f0109d0df.png",
      alt: "Young students group",
      title: "Bright Young Minds"
    },
    {
      src: "/lovable-uploads/5a0a21d5-429c-41c0-8461-5554c7c425ec.png",
      alt: "Students learning in classroom",
      title: "Active Learning Environment"
    },
    {
      src: studentsImage,
      alt: "Stack of textbooks and school supplies",
      title: "Quality Learning Materials"
    },
    {
      src: missionVisionImage,
      alt: "Open textbooks with educational content",
      title: "Academic Excellence"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Empty About section - content removed as requested */}
      </div>
    </section>
  );
};

export default AboutSection;