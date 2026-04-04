import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: 'general', message: '' });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@technohealth.com',
      desc: 'Response within 24 hours'
    },
    {
      icon: Phone,
      label: 'Sales Phone',
      value: '+1 (555) 123-4567',
      desc: 'Mon-Fri, 9am-6pm EST'
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'San Francisco, CA',
      desc: 'US & Canada operations'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300">
            Get in touch with our team. We're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{method.label}</h4>
                        <p className="text-blue-600 font-medium">{method.value}</p>
                        <p className="text-sm text-slate-500">{method.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">For Different Inquiries</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <p className="font-semibold text-slate-900">Sales Questions</p>
                    <p className="text-slate-600">sales@technohealth.com</p>
                  </li>
                  <li>
                    <p className="font-semibold text-slate-900">Technical Support</p>
                    <p className="text-slate-600">support@technohealth.com</p>
                  </li>
                  <li>
                    <p className="font-semibold text-slate-900">Compliance & Legal</p>
                    <p className="text-slate-600">legal@technohealth.com</p>
                  </li>
                  <li>
                    <p className="font-semibold text-slate-900">Partnerships</p>
                    <p className="text-slate-600">partnerships@technohealth.com</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="compliance">Compliance & Legal</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    We'll respond within 24 hours. Your information is secure and never shared.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: 'What is your response time?',
                  a: 'Most inquiries receive a response within 24 hours. Sales inquiries are typically answered within 4-6 hours during business hours.'
                },
                {
                  q: 'Do you offer phone consultations?',
                  a: 'Yes! Schedule a call with our sales team at your convenience. Just mention it in the contact form or call our main line.'
                },
                {
                  q: 'Can I get a demo?',
                  a: 'Absolutely. We offer personalized demos tailored to your use case. Contact our sales team to schedule.'
                },
                {
                  q: 'What is your support availability?',
                  a: 'Email support is available 24/7. Business plan includes priority support with guaranteed response times. Enterprise includes 24/7 premium support.'
                },
                {
                  q: 'Do you have a status page?',
                  a: 'Yes. Check our status page at status.technohealth.com for real-time system status and incident reports.'
                },
                {
                  q: 'How can I report a security issue?',
                  a: 'Please email security@technohealth.com with details. We take security seriously and will investigate promptly.'
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-slate-900 mb-2">{item.q}</h4>
                  <p className="text-slate-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to transform healthcare data?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss how TechnoHealth can help your organization.
            </p>
            <a
              href="mailto:sales@technohealth.com"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
