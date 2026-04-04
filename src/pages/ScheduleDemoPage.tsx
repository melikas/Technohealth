import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ScheduleDemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    consentMarketing: false,
    consentNewsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
          consentMarketing: false,
          consentNewsletter: false,
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                You need a partner.
                <br />
                We're here to help.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Momentum builds software solutions and digital products that accelerate healthcare and empower people. Get in touch and use our knowledge to support your business.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-600" />
                  <span className="text-slate-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                  <span className="text-slate-700">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/Images/Call-Answering.jpeg" 
                  alt="Call-Answering Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 py-16">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
              Let's talk about your app
            </h2>

            {/* Contact Form Section */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                {/* Profile Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <div className="mb-6">
                    <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full flex items-center justify-center overflow-hidden mb-4">
                      <img 
                        src="/Images/Me.png" 
                        alt="Melika Seyedi"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <p className="text-center text-sm text-slate-500 font-semibold">Me</p>
                  </div>

                  <div className="text-center border-t border-slate-200 pt-6">
                    <p className="font-semibold text-slate-900 mb-1">Contact us directly</p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Melika Seyedi</h3>
                    <p className="text-cyan-600 font-semibold mb-4">Board Member & Co-Founder</p>
                    
                    <div className="space-y-3">
                      <a href="mailto:melika@technohealth.ai" className="flex items-center justify-center gap-2 text-slate-600 hover:text-cyan-600 transition-colors">
                        <Mail className="w-5 h-5" />
                        melika@technohealth.ai
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional Contact Methods */}
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-sm font-semibold text-slate-900 mb-1">Response Time</p>
                    <p className="text-slate-600">Usually within 24 hours</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <p className="text-sm font-semibold text-slate-900 mb-1">Timezone</p>
                    <p className="text-slate-600">PST (Pacific Standard Time)</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div>
                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Thank you!</h3>
                    <p className="text-green-700 mb-4">
                      Your message has been sent successfully. Melika will get back to you soon.
                    </p>
                    <p className="text-sm text-green-600">Redirecting...</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                    {/* Row 1 */}
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
                          placeholder="John"
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
                          placeholder="Larson"
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Business E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your healthcare challenge…"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                      ></textarea>
                    </div>

                    {/* Consents */}
                    <div className="space-y-3 border-t border-slate-200 pt-6">
                      <p className="text-sm font-semibold text-slate-900">Consents:</p>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consentMarketing"
                          checked={formData.consentMarketing}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 rounded border-slate-300"
                        />
                        <span className="text-sm text-slate-600">
                          I consent to the processing of my personal data by Momentum for marketing purposes. For more information, please refer to our <a href="#" className="text-cyan-600 hover:underline">privacy policy</a>
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consentNewsletter"
                          checked={formData.consentNewsletter}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 rounded border-slate-300"
                        />
                        <span className="text-sm text-slate-600">
                          I agree to sign up for the Momentum newsletter to receive the latest updates, insights, and resources on HealthTech innovations.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                    >
                      {loading ? 'Sending...' : 'Submit'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
