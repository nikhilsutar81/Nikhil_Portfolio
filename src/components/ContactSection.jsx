import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm, ValidationError } from '@formspree/react';

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xrbajybv");
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex flex-col items-center text-center gap-2">
                <a href="mailto:nikhilsutar81@gmail.com" className="p-3 rounded-full bg-primary/10 mb-1 block" aria-label="Send Email">
                  <Mail className="h-6 w-6 text-primary" />
                </a>
                <a href="mailto:nikhilsutar81@gmail.com" className="font-medium hover:text-primary transition-colors cursor-pointer" aria-label="Send Email">
                  Email
                </a>
                <a
                  href="mailto:nikhilsutar81@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  nikhilsutar81@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <a href="tel:+91-9137888218" className="p-3 rounded-full bg-primary/10 mb-1 block" aria-label="Call Phone">
                  <Phone className="h-6 w-6 text-primary cursor-pointer" />
                </a>
                <a href="tel:+91-9137888218" className="font-medium hover:text-primary transition-colors cursor-pointer" aria-label="Call Phone">
                  Phone
                </a>
                <a
                  href="tel:+91-9137888218"
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  +91 - 9137888218
                </a>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mumbai,+Maharashtra,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center gap-2 hover:underline"
              >
                <div className="p-3 rounded-full bg-primary/10 mb-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  Mumbai, Maharashtra, India
                </span>
              </a>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/nikhil-sutar-25a7702b2" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://x.com/nikhilsutar_" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
                <a href="https://instagram.com/nikkkhil.77" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a
                  href="https://wa.me/919137888218"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="h-6 w-6 text-black-500" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            {state.succeeded ? (
              <p className="text-green-600 font-semibold text-center py-4">Thank you for your message! I'll get back to you soon.</p>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Enter Your E-mail Address"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Enter your message here"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
