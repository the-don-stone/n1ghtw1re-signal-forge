
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with:", { email, message });
    setSubmitted(true);
    setEmail("");
    setMessage("");
    
    // Reset the form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="w-full">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-mono text-sm text-white/90 mb-2">
              ENCRYPTED EMAIL
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-black border border-white/30 focus:border-cyberpunk-green outline-none font-mono text-white/90"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block font-mono text-sm text-white/90 mb-2">
              TRANSMISSION
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 bg-black border border-white/30 focus:border-cyberpunk-green outline-none font-mono text-white/90"
              placeholder="Enter your message here..."
            />
          </div>
          
          <button
            type="submit"
            className="px-6 py-2 bg-transparent border border-cyberpunk-green text-cyberpunk-green font-mono hover:bg-cyberpunk-green/20 transition-colors"
          >
            TRANSMIT
          </button>
        </form>
      ) : (
        <div className="p-4 border border-cyberpunk-green bg-cyberpunk-green/10">
          <p className="font-mono text-cyberpunk-green">
            TRANSMISSION RECEIVED. CONNECTION SECURED.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
