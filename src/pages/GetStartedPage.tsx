import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-20">
        {/* Left Side - Form */}
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Get Started</h1>
          <p className="text-xl text-slate-600 mb-12">
            Let's talk about your wearable integration project. We'll be in touch within 24 hours.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Website
                </label>
                <div className="flex items-center border border-slate-300 rounded-lg focus-within:border-cyan-600 focus-within:ring-2 focus-within:ring-cyan-100 transition">
                  <span className="px-4 text-slate-500 font-medium">http://</span>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="flex-1 py-3 focus:outline-none"
                    placeholder="yourcompany.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  What's on your mind?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100 transition resize-none"
                  placeholder="Tell us about your project, use case, or any questions you have..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Send
              </button>
            </form>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Thanks for reaching out!</h2>
              <p className="text-slate-700">
                We've received your message and will be in touch within 24 hours.
              </p>
            </div>
          )}
        </div>

        {/* Right Side - Contact Info */}
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h3>

            {/* Email */}
            <div className="flex gap-4 mb-8 pb-8 border-b border-slate-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Email</p>
                <a href="mailto:hello@technohealth.io" className="text-lg font-bold text-slate-900 hover:text-cyan-600">
                  hello@technohealth.io
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-8 pb-8 border-b border-slate-200">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Phone</p>
                <a href="tel:+1234567890" className="text-lg font-bold text-slate-900 hover:text-cyan-600">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Address</p>
                <p className="text-lg font-bold text-slate-900">
                  San Francisco, CA<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">🚀 What's the implementation timeline?</p>
                <p className="text-slate-700 text-sm">Typically 7 days from kickoff to production deployment.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">💰 Do you offer a free trial?</p>
                <p className="text-slate-700 text-sm">Yes! We offer a 14-day free trial for qualified prospects.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="font-bold text-slate-900 mb-2">🔒 Is TechnoHealth HIPAA compliant?</p>
                <p className="text-slate-700 text-sm">Yes, HIPAA, HITRUST, SOC 2, and ISO 27001 certified.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
