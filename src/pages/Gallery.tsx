import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/f9c27c4a-647d-4d0e-9987-1df8560073a7.png",
      alt: "Teacher with students in classroom",
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
      src: "/lovable-uploads/12961290-8bac-49e2-8b4e-43ffe645276d.png",
      alt: "Students in computer lab",
      title: "Modern Technology"
    },
    {
      src: "/lovable-uploads/1dd4c71c-a06a-4dba-a3a7-cce444d123f5.png",
      alt: "Library with open textbooks",
      title: "Rich Learning Resources"
    },
    {
      src: "/lovable-uploads/5883ddfd-3ac2-4930-b640-4a878c6e461c.png",
      alt: "Students studying together",
      title: "Collaborative Learning"
    },
    {
      src: "/lovable-uploads/5bb1c8b7-de88-4edc-8b88-18d3efdce6f3.png",
      alt: "Classroom learning session",
      title: "Interactive Classes"
    },
    {
      src: "/lovable-uploads/c77f1e38-b850-4e11-b341-dea09be14b91.png",
      alt: "Teacher and students interaction",
      title: "Personalized Attention"
    },
    {
      src: "/lovable-uploads/c7c8135a-6f3d-4a17-8b3a-6b71e27f4a15.png",
      alt: "Stack of educational textbooks",
      title: "Quality Education Materials"
    },
    {
      src: "/lovable-uploads/dbe346f5-441a-43b3-b0cc-e0090e0b630c.png",
      alt: "Students in learning activity",
      title: "Engaging Activities"
    },
    {
      src: "/lovable-uploads/e7fadcdb-7e32-4737-8fa0-72e67ca10508.png",
      alt: "Academic environment",
      title: "Academic Excellence"
    },
    {
      src: "/lovable-uploads/4a30bafc-4491-4430-83d6-e62b3f5b1f49.png",
      alt: "One Love Academy Mission and Vision",
      title: "Our Values in Action"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-4">
              Gallery
            </h1>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="h-1 w-12 bg-secondary"></div>
              <p className="font-poppins text-lg font-semibold text-secondary">
                Life at One Love Academy
              </p>
              <div className="h-1 w-12 bg-secondary"></div>
            </div>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Discover the vibrant learning environment at One Love Academy through our photo gallery. 
              See our students, teachers, and facilities in action as we build a foundation for lifelong learning.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-card bg-white">
                <div className="h-40 md:h-48 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-poppins font-semibold text-white text-sm">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;