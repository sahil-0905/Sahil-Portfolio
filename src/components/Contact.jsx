import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={{ width: props.size || 24, height: props.size || 24 }}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    style={{ width: props.size || 24, height: props.size || 24 }}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: 'Email Me',
    value: 'sahilkr9608@gmail.com',
    link: 'mailto:sahilkr9608@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call Me',
    value: '+91 9608428137',
    link: 'tel:+91 9608428137',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sahil-kumar',
    link: 'https://www.linkedin.com/in/sahil-kumar-3345a328a/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'sahil-kumar',
    link: 'https://github.com/sahil-0905',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9c23752f-83fa-4183-a31a-6d76302b6097",
          subject: "New Portfolio Contact Message",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } else {
      alert("Failed to send message");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-24 relative  bg-slate-500/[0.01]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Quick Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-left mb-2">
              Let's talk about your project
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-left mb-4 leading-relaxed">
              Have a question or want to work together? Drop me a message, send an email, or connect with me on professional platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CONTACT_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.a
                    key={idx}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="glass-card p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 text-left flex flex-col gap-3 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        {card.label}
                      </h4>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-1 truncate">
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 relative h-full flex flex-col justify-center">
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2 size={64} className="text-green-500 mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                   Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Sahil Kumar"
                      className={`px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white border outline-none transition-all ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500 bg-red-500/[0.01]' 
                          : 'border-slate-200/10 dark:border-slate-800/10 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sahilkumar.dev@gmail.com"
                      className={`px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white border outline-none transition-all ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500 bg-red-500/[0.01]' 
                          : 'border-slate-200/10 dark:border-slate-800/10 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Let's build something awesome..."
                      className={`px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white border outline-none transition-all resize-none ${
                        errors.message 
                          ? 'border-red-500 dark:border-red-500 bg-red-500/[0.01]' 
                          : 'border-slate-200/10 dark:border-slate-800/10 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-950'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-semibold rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 cursor-pointer w-full mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
