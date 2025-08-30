import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import MapSection from "./MapSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-primary mb-4">
            Contact Us
          </h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="h-1 w-12 bg-secondary"></div>
            <p className="font-poppins text-lg font-semibold text-secondary">
              Get in Touch
            </p>
            <div className="h-1 w-12 bg-secondary"></div>
          </div>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Ready to join the One Love Academy family? Contact us today to learn more about our programs and schedule a visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-primary mb-6">
                Visit Our Campus
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary">Address</h4>
                    <p className="text-muted-foreground">
                      No. 15 Alhaji Ibrahim R. Crescent<br />
                      Igumah by Miyar Hotel, Mowe, Ogun state
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary">Phone</h4>
                    <p className="text-muted-foreground">+234 803 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground">oneloveacademy360@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary">Office Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/15mjLufTkR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-muted rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href="https://www.instagram.com/one_loveacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-muted rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-light p-8 rounded-3xl shadow-elegant">
            <h3 className="font-poppins font-bold text-xl text-primary mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">
                  Subject
                </label>
                <Input placeholder="What is this regarding?" />
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="academy" size="sm" className="w-full text-xs">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <MapSection />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;