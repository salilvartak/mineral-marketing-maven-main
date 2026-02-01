import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", product: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-12 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Get in touch for inquiries and quotations
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Address */}
              <div className="bg-card p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Industrial Area, Nasirabad<br />
                    Ajmer, Rajasthan 305601, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+919876543210" className="text-accent hover:underline block">+91 98765 43210</a>
                  <a href="tel:+919876543211" className="text-muted-foreground text-sm">+91 98765 43211</a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card p-6 rounded-lg shadow-md flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:info@stonexenterprises.com" className="text-accent hover:underline block text-sm">info@stonexenterprises.com</a>
                  <a href="mailto:sales@stonexenterprises.com" className="text-muted-foreground text-sm">sales@stonexenterprises.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-80 md:h-96 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.9876543210!2d74.7661!3d26.3297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE5JzQ2LjkiTiA3NMKwNDUnNTcuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Stonex Enterprises Location"
          />
        </section>

        {/* Inquiry Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Send Us an Inquiry</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Product of Interest</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                    >
                      <option value="">Select a product</option>
                      <option value="calcite">Calcite Powder</option>
                      <option value="dolomite">Dolomite Powder</option>
                      <option value="quartz-powder">Quartz Powder</option>
                      <option value="quartz-grits">Quartz Grits</option>
                      <option value="talc">Talc Powder</option>
                      <option value="coated-calcite">Coated Calcite</option>
                      <option value="coated-dolomite">Coated Dolomite</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </div>

              {/* WhatsApp Button */}
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">Or reach us directly on WhatsApp</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
