import { useState, useEffect } from "react";
import textbooksStack from "@/assets/textbooks-stack.jpg";
import openTextbooks from "@/assets/open-textbooks.jpg";
const teacherStudents = "/lovable-uploads/f9c27c4a-647d-4d0e-9987-1df8560073a7.png";
const youngStudents = "/lovable-uploads/37deeb86-6b04-4273-96a6-b73f0109d0df.png";
const classroomLearning = "/lovable-uploads/5a0a21d5-429c-41c0-8461-5554c7c425ec.png";

const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      src: teacherStudents,
      alt: "Teacher with students",
      title: "Dedicated Teachers"
    },
    {
      src: youngStudents,
      alt: "Young students group",
      title: "Bright Young Minds"
    },
    {
      src: classroomLearning,
      alt: "Students learning in classroom",
      title: "Active Learning Environment"
    },
    {
      src: textbooksStack,
      alt: "Stack of textbooks and school supplies",
      title: "Quality Learning Materials"
    },
    {
      src: openTextbooks,
      alt: "Open textbooks with educational content",
      title: "Academic Excellence"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-20 bg-gradient-light">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Welcome to One Love Academy
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="h-1 w-12 bg-secondary"></div>
            <p className="font-poppins text-lg md:text-xl lg:text-2xl font-semibold text-secondary">
              Where Excellence Meets Love
            </p>
            <div className="h-1 w-12 bg-secondary"></div>
          </div>
        </div>

        <div className="relative h-[280px] md:h-[280px] md:h-[440px] md:h-[440px] lg:h-[440px] rounded-3xl overflow-hidden shadow-elegant">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain scale-90 md:scale-95 lg:scale-100 scale-90 md:scale-95 lg:scale-100 scale-90 md:scale-95 lg:scale-100 animate-[float_12s_ease-in-out_infinite]"
              />
              <div className="absolute inset-x-0 bottom-0 top-x-1/3 bottom-0 top-1/3 bg-gradient-to-t from-primary/60 to-transparent flex items-end">
                <div className="p-6 md:p-7 lg:p-6 md:p-7 lg:p-6 md:p-7 lg:p-8 text-white">
                  <h3 className="font-poppins font-bold text-lg md:text-lg md:text-lg md:text-xl lg:text-2xl">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;