'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/general/Card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/atoms/Toast';
// import { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';
// import { SEO } from "@/components/SEO";

const services = [
  'Personal Branding',
  'Community Branding',
  'Packaging Design',
  'Brand Development',
  'Brand Strategy',
  'Visual Identity',
  'Other',
];

// export const metadata: Metadata = {
//   title: 'Contact Me',
//   description:
//     "Get in touch with Adepoju Olayode for professional brand design and development services. Contact Nigeria's leading brand designer for your next project.",
//   keywords:
//     'contact brand designer, hire brand designer Nigeria, brand design consultation, Adepoju Olayode contact',
// };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Please fill in required fields',
        description: 'Name, email, and message are required.',
        variant: 'error',
      });
      return;
    }

    // Simulate form submission
    toast({
      title: 'Message sent successfully!',
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
      variant: 'success',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-hero-light">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            {`Let's Create Something Amazing`}
          </h1>
          <p className="text-xl text-hero-light/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            {`Ready to transform your brand? I'd love to hear about your project and explore how we
            can work together to create a brand that truly stands out.`}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold font-heading text-primary mb-4">
                      Start Your Project
                    </h2>
                    <p className="text-muted-foreground">
                      {`Fill out the form below and I'll get back to you within 24 hours to discuss
                      your project.`}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={e => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={e => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={e => handleInputChange('phone', e.target.value)}
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select
                          value={formData.service}
                          onValueChange={value => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map(service => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={value => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100k">Under ₦100,000</SelectItem>
                          <SelectItem value="100k-300k">₦100,000 - ₦300,000</SelectItem>
                          <SelectItem value="300k-500k">₦300,000 - ₦500,000</SelectItem>
                          <SelectItem value="500k-1m">₦500,000 - ₦1,000,000</SelectItem>
                          <SelectItem value="over-1m">Over ₦1,000,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={e => handleInputChange('message', e.target.value)}
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold font-heading text-primary mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-gold shadow-soft">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <div className="text-muted-foreground">+234 901 696 9577</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-gold shadow-soft">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-muted-foreground">hello@adepojuolayode.com</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-gold shadow-soft">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Location</div>
                        <div className="text-muted-foreground">Lagos, Nigeria</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-gold shadow-soft">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Response Time</div>
                        <div className="text-muted-foreground">Within 24 hours</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com"
                        className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        className="p-3 rounded-lg bg-muted hover:bg-accent hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium bg-gradient-to-br from-accent/5 to-gold-end/5">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold font-heading text-primary mb-4">
                    What Happens Next?
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        1
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Initial Response</div>
                        <div className="text-muted-foreground">
                          {`I'll review your project and respond within 24 hours`}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        2
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Discovery Call</div>
                        <div className="text-muted-foreground">
                          {`We'll schedule a call to discuss your needs in detail`}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-gold rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        3
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Proposal</div>
                        <div className="text-muted-foreground">
                          {`I'll send a detailed proposal with timeline and pricing`}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="p-6">
              <h4 className="font-semibold text-primary mb-3">
                How long does a typical project take?
              </h4>
              <p className="text-muted-foreground text-sm">
                {`Project timelines vary based on scope, but most brand identity projects take 4-8
                weeks from start to finish. I'll provide a detailed timeline in your project
                proposal.`}
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-primary mb-3">
                Do you work with international clients?
              </h4>
              <p className="text-muted-foreground text-sm">
                Yes! I work with clients globally. All communication is done remotely via email,
                video calls, and project management tools.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-primary mb-3">
                {`What's included in a brand identity package?`}
              </h4>
              <p className="text-muted-foreground text-sm">
                Typically includes logo design, color palette, typography, brand guidelines, and
                application examples. Specific deliverables are outlined in each proposal.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-primary mb-3">
                Do you offer ongoing brand support?
              </h4>
              <p className="text-muted-foreground text-sm">
                Absolutely! I offer retainer packages for ongoing brand management, additional
                design work, and brand evolution as your business grows.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
