import { Mail, MapPin, Clock } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:427r33@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-display mb-6">
              Get in Touch
            </h2>
            <p className="text-body font-body leading-relaxed mb-8">
              Whether you're a prospective student, fellow scholar, journalist, or someone 
              interested in religious studies, I welcome your inquiry. Please don't hesitate 
              to reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-display mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:427r33@gmail.com"
                    className="text-body font-body hover:text-primary transition-colors"
                  >
                    427r33@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-display mb-1">
                    Contact
                  </h3>
                  <p className="text-body font-body">
                    Gastón Espinosa
                    <br />
                    Claremont McKenna College
                    <br />
                    Kravis Center
                    <br />
                    888 Columbia Avenue
                    <br />
                    Claremont, CA 91711
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-display mb-1">
                    Office Hours
                  </h3>
                  <p className="text-body font-body">
                    Tuesdays: 10:00 AM – 12:00 PM
                    <br />
                    Thursdays: 3:00 PM – 5:00 PM
                    <br />
                    <span className="text-caption text-sm">Or by appointment</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-scholarly p-8">
            <h3 className="font-heading text-2xl font-semibold text-display mb-6">
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-body font-body text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-body font-body text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-body font-body text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Inquiry about..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-body font-body text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground font-body font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
