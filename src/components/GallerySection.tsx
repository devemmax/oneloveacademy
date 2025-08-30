const computerLab = "/lovable-uploads/c77f1e38-b850-4e11-b341-dea09be14b91.png";
const teacherStudents = "/lovable-uploads/f9c27c4a-647d-4d0e-9987-1df8560073a7.png";
const youngStudents = "/lovable-uploads/37deeb86-6b04-4273-96a6-b73f0109d0df.png";
const classroomLearning = "/lovable-uploads/5a0a21d5-429c-41c0-8461-5554c7c425ec.png";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/5bb1c8b7-de88-4edc-8b88-18d3efdce6f3.png",
      alt: "Students learning in classroom",
      title: "Interactive Learning"
    },
    {
      src: "/lovable-uploads/12961290-8bac-49e2-8b4e-43ffe645276d.png",
      alt: "Young students group",
      title: "Bright Young Minds"
    },
    {
      src: teacherStudents,
      alt: "Teacher with students",
      title: "Dedicated Teachers"
    },
    {
      src: "/lovable-uploads/1dd4c71c-a06a-4dba-a3a7-cce444d123f5.png",
      alt: "Graduation celebration",
      title: "Achievement & Success"
    },
    {
      src: "/lovable-uploads/e7fadcdb-7e32-4737-8fa0-72e67ca10508.png",
      alt: "Graduates celebrating",
      title: "Future Leaders"
    },
    {
      src: "/lovable-uploads/dbe346f5-441a-43b3-b0cc-e0090e0b630c.png",
      alt: "Modern classroom",
      title: "Learning Environment"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-4">
            Life at One Love Academy
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="h-1 w-12 bg-secondary"></div>
            <p className="font-poppins text-lg font-semibold text-secondary">
              Our School Gallery
            </p>
            <div className="h-1 w-12 bg-secondary"></div>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            Take a glimpse into our vibrant learning environment where students thrive and excellence is nurtured.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Discover our modern facilities, dedicated teachers, and inspiring learning spaces that make One Love Academy a place where dreams take flight and futures are built.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-poppins font-semibold text-sm">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="/gallery"
            className="inline-flex items-center px-8 py-3 border border-primary text-base font-medium rounded-full text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View More Photos
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;