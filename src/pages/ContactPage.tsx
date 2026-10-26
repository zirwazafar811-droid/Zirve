import React, { useState } from 'react';
import { Check, Mail, MapPin, MessageSquare, Send, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Brand Partnership & Sponsorship');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#9C7A45]">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#252020] tracking-tight">
          Contact & Collaborations
        </h1>
        <p className="text-sm text-[#665A54] leading-relaxed">
          Whether you're a reader with a styling question, an ethical fashion brand seeking editorial partnership, or a press contact, we'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Information & Editorial Note */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#FAF7F5] border border-[#E8DFD8] p-6 sm:p-8 space-y-6">
            <h3 className="font-serif text-xl text-[#252020]">Zirvella Studio</h3>
            <p className="text-xs text-[#6B5F5A] leading-relaxed">
              Based in New York City with editorial contributors in Paris and Los Angeles. We review pitches and reader inquiries on weekday mornings.
            </p>

            <div className="space-y-4 text-xs text-[#4A3E39]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>hello@zirvella.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Manhattan, New York, NY 10012</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Typical response time: 24–48 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E8DFD8] p-6 space-y-3">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9C7A45]">
              Brand Partnerships & Gifting
            </span>
            <p className="text-xs text-[#6B5F5A] leading-relaxed">
              We accept sample products for editorial consideration that align with our quiet luxury, natural fabric, and longevity standards. Sending samples does not guarantee editorial endorsement; we retain full editorial independence.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-[#E8DFD8] p-6 sm:p-8 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#EBF5EC] text-[#2E7D32] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#252020]">Message Sent!</h3>
                <p className="text-xs text-[#665A54] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Zirvella. Elena and our editorial team have received your note and will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 bg-[#342D2C] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-xl text-[#252020] mb-2">Send a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full text-xs px-3.5 py-2.5 bg-[#FAF7F5] border border-[#D9C8BE] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full text-xs px-3.5 py-2.5 bg-[#FAF7F5] border border-[#D9C8BE] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 bg-[#FAF7F5] border border-[#D9C8BE] text-[#4A3E39]"
                    >
                      <option value="Brand Partnership & Sponsorship">Brand Partnership & Sponsorship</option>
                      <option value="Reader Styling Question">Reader Styling Advice</option>
                      <option value="Affiliate Network / Retailer Query">Affiliate Network Query</option>
                      <option value="Press & Media Feature">Press & Media Feature</option>
                      <option value="Other">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Brief summary..."
                      className="w-full text-xs px-3.5 py-2.5 bg-[#FAF7F5] border border-[#D9C8BE] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3E39] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your brand, styling conundrum, or feedback..."
                    className="w-full text-xs px-3.5 py-2.5 bg-[#FAF7F5] border border-[#D9C8BE] focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#342D2C] hover:bg-[#1E1919] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
