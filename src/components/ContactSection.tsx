import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react";
import MapSection from "./MapSection";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_hek2qgs';
      const templateId = 'template_qj7gbfk';
      const publicKey = 'IGAVMG65L8o7mj0Zh';

      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'oneloveacademy360@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
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
          <div className="bg-gradient-light p-6 md:p-7 lg:p-8 rounded-2xl 6 md:p-7 lg:p-8 rounded-2xl md:rounded-3xl shadow-elegant max-w-xl md:max-w-2xl mx-auto max-w-xl md:max-w-2xl mx-auto">
            <h3 className="font-poppins font-bold text-lg md:text-lg md:text-xl text-primary mb-4 md:mb-4 md:mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="focus-visible:ring-1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-poppins font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="focus-visible:ring-1"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="focus-visible:ring-1"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="focus-visible:ring-1"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className="focus-visible:ring-1"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-primary mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[120px] focus-visible:ring-1"
                  required
                />
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm">Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}

              <Button
                type="submit"
                variant="academy"
                size="sm"
                className="w-full text-xs hover:outline-none focus:outline-none focus:ring-0"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
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