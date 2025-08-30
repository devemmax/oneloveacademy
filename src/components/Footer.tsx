import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp.svg";


const Footer = () => {
  return (
    <>
      {/* Top logo and motto outside footer */}
      <div className="bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
          <div className="mt-6 text-center">
            <div className="mx-auto w-10/12 sm:w-9/12 md:w-8/12 h-0.5 bg-secondary mb-2"></div>
            <p className="font-poppins font-medium text-lg text-foreground">Motto: Glory & Excellence</p>
          
          </div>
        </div>
      </div>

      <footer className="bg-black text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <p className="text-white/80">
              Nurturing young minds to achieve their full potential through innovative learning and strong values.
            </p>
            <div>
              <h4 className="font-poppins font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.facebook.com/share/15mjLufTkR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                </a>
                <a
                  href="https://www.instagram.com/one_loveacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5 text-[#E4405F]" />
                </a>
                <a
                  href="https://wa.me/1234567890?text=Hello,%20I%20would%20like%20to%20inquire%20about%20admission%20to%20One%20Love%20Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2 bg-white/10 hover:bg-white/10 rounded-full transition-colors"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-white/80 text-sm">No. 15 Alhaji Ibrahim R. Crescent, Igumah by Miyar Hotel, Mowe, Ogun state</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-white/80 text-sm">+234 803 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-white/80 text-sm">oneloveacademy360@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 One Love Academy. All rights reserved. | Designed with ❤️ for educational excellence.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;