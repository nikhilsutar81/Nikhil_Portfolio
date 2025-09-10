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
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:nikhilsutar81@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  nikhilsutar81@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 rounded-full bg-primary/10 mb-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+91-9137888218"
                  className="text-muted-foreground hover:text-primary transition-colors"
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
                <a href="#" target="_blank">
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
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"   // increase for sharper edges
                    height="22"
                    viewBox="0 0 32 32"
                    fill="black"
                  >
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 2.828.735 5.59 2.133 8.031L0 32l8.256-2.133A15.917 15.917 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.09c-2.573 0-5.086-.676-7.295-1.953l-.523-.305-4.914 1.27 1.309-4.8-.34-.552C3.597 21.213 2.91 18.646 2.91 16 2.91 8.88 8.88 2.91 16 2.91S29.09 8.88 29.09 16 23.12 29.09 16 29.09zm8.114-9.49c-.444-.222-2.633-1.296-3.041-1.442-.408-.148-.706-.222-.997.222-.29.445-1.142 1.442-1.4 1.732-.257.29-.514.326-.958.111-.444-.222-1.875-.69-3.572-2.192-1.32-1.178-2.214-2.633-2.471-3.077-.257-.444-.028-.685.194-.9.2-.2.444-.518.666-.777.222-.26.296-.445.444-.74.148-.296.074-.555-.037-.777-.111-.222-.997-2.405-1.368-3.29-.359-.862-.726-.742-.997-.757-.257-.015-.555-.018-.852-.018-.296 0-.777.111-1.183.555-.408.445-1.555 1.518-1.555 3.7s1.59 4.29 1.814 4.588c.222.296 3.136 4.787 7.6 6.707.957.414 1.705.662 2.293.849.963.306 1.841.263 2.534.16.773-.116 2.373-.972 2.708-1.91.334-.938.334-1.661.231-1.91-.096-.247-.37-.37-.814-.592z" />
                  </svg>
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
