import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mnnvrvlb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly at tanay35sarkar44@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about
            technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Mail className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:tanay35sarkar44@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    tanay35sarkar44@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <Phone className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+919807384413" className="text-green-600 hover:text-green-800">
                    +91-9807384413
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <MapPin className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Noida, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/tanaysarkar0408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanaysarkar0408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="text-xl" />
                </a>
                <a
                  href="https://leetcode.com/tanaysarkar0408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition-colors duration-200"
                >
                  <Code className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
