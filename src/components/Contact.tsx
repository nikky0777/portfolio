import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiUser, FiMessageSquare, FiPaperclip } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const MAX_WORDS = 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Check word count
    if (wordCount > MAX_WORDS) {
      setError(`Message exceeds ${MAX_WORDS} words limit`);
      setIsSubmitting(false);
      return;
    }

    // Check file size (max 5MB)
    if (attachment && attachment.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const formData = new FormData(formRef.current!);
      if (attachment) {
        formData.append('attachment', attachment);
      }

      await emailjs.sendForm(
        'service_xxxxxxx',
        'template_xxxxxxx',
        formRef.current!,
        'your_public_key'
      );
      
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setAttachment(null);
      setWordCount(0);
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      setTimeout(() => setError(''), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'message') {
      const words = value.trim().split(/\s+/).filter(word => word.length > 0);
      setWordCount(words.length);
    }

    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  return (
    <section id="contact" className="section py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark opacity-90" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect! 
            <span className="text-secondary-light">✨</span>
          </h2>
          <p className="text-text-secondary text-lg">Drop me a message and I'll get back to you soon!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-primary-lighter/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-secondary/10"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent-purple/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <label className="flex items-center text-text-secondary mb-2">
                    <FiUser className="mr-2" />
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-dark/50 border border-secondary/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent-purple/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <label className="flex items-center text-text-secondary mb-2">
                    <FiMail className="mr-2" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-dark/50 border border-secondary/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent-purple/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <label className="flex items-center justify-between text-text-secondary mb-2">
                  <div className="flex items-center">
                    <FiMessageSquare className="mr-2" />
                    <span>Message</span>
                  </div>
                  <span className={`text-sm ${wordCount > MAX_WORDS ? 'text-red-400' : 'text-text-secondary'}`}>
                    {wordCount}/{MAX_WORDS} words
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-primary-dark/50 border border-secondary/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
            </div>

            {/* File Attachment */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent-purple/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <label className="flex items-center text-text-secondary mb-2">
                  <FiPaperclip className="mr-2" />
                  <span>Attachment</span>
                  <span className="ml-2 text-sm text-text-secondary">(Max 5MB)</span>
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-primary-dark/50 border border-secondary/20 rounded-lg px-4 py-2 text-white hover:border-secondary transition-colors flex items-center space-x-2"
                  >
                    <FiPaperclip />
                    <span>{attachment ? attachment.name : 'Choose file'}</span>
                  </label>
                  {attachment && (
                    <button
                      type="button"
                      onClick={() => setAttachment(null)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                disabled={isSubmitting || wordCount > MAX_WORDS}
                className={`
                  flex items-center justify-center space-x-2 
                  bg-gradient-to-r from-secondary to-accent-purple
                  text-white px-8 py-3 rounded-full
                  hover:from-secondary/90 hover:to-accent-purple/90
                  focus:outline-none focus:ring-2 focus:ring-secondary/50
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-300
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend className={isSubmitting ? 'animate-bounce' : ''} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </div>

            {/* Success/Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: submitted || error ? 1 : 0, 
                y: submitted || error ? 0 : 10 
              }}
              className="text-center"
            >
              {submitted && (
                <p className="text-secondary-light">
                  Thanks for your message! I'll get back to you soon ✨
                </p>
              )}
              {error && (
                <p className="text-red-400">
                  {error}
                </p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 