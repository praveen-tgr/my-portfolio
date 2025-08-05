import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark-gray mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-red mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold dark-gray mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center">
                  <Mail className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold dark-gray">Email</h4>
                  <a
                    href="mailto:praveenvenkatesan11@gmail.com"
                    className="text-gray-600 hover:primary-red transition-colors"
                    data-testid="link-contact-email"
                  >
                    praveenvenkatesan11@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center">
                  <Phone className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold dark-gray">Phone</h4>
                  <a
                    href="tel:+916381761584"
                    className="text-gray-600 hover:primary-red transition-colors"
                    data-testid="link-contact-phone"
                  >
                    +91 6381761584
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold dark-gray">Location</h4>
                  <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold dark-gray mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/tgr33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-light-red rounded-lg flex items-center justify-center primary-red hover:bg-primary-red hover:text-white transition-all duration-300"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/praveen-tgr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-light-red rounded-lg flex items-center justify-center primary-red hover:bg-primary-red hover:text-white transition-all duration-300"
                  data-testid="link-contact-github"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:praveenvenkatesan11@gmail.com"
                  className="w-12 h-12 bg-light-red rounded-lg flex items-center justify-center primary-red hover:bg-primary-red hover:text-white transition-all duration-300"
                  data-testid="link-contact-email-icon"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light-red p-8 rounded-lg">
            <h3 className="text-2xl font-semibold dark-gray mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium dark-gray mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your first name"
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium dark-gray mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your last name"
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium dark-gray mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium dark-gray mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                  data-testid="input-subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium dark-gray mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project or just say hello!"
                  className="resize-none"
                  data-testid="textarea-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-red text-white hover:bg-accent-red transition-colors duration-300"
                data-testid="button-send-message"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
