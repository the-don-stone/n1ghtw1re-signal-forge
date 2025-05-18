
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MatrixRain from '../components/ui-custom/MatrixRain';
import HiddenPortal from '../components/ui-custom/HiddenPortal';
import ContactForm from '../components/ui-custom/ContactForm';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-glitch text-4xl md:text-6xl text-white mb-4 glitch-effect" data-text="REALITY HAS BEEN HIJACKED.">
              REALITY HAS BEEN HIJACKED.
            </h1>
            <h2 className="font-glitch text-2xl md:text-4xl text-cyberpunk-green mb-8">
              THIS IS THE COUNTER-SIGNAL.
            </h2>
            <p className="font-mono text-lg mb-8 text-white/80">
              N1ghtw1re is a digital hypersigil, a cyberpunk movement blending code, magic, and resistance to reclaim autonomy in a post-truth world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="px-6 py-3 bg-transparent border border-white text-white font-mono hover:bg-white/10 transition-colors">
                ENTER THE NETWORK
              </Link>
              <Link to="/manifesto" className="px-6 py-3 bg-transparent border border-cyberpunk-green text-cyberpunk-green font-mono hover:bg-cyberpunk-green/20 transition-colors">
                READ THE MANIFESTO
              </Link>
              <Link to="/collective" className="px-6 py-3 bg-transparent border border-white text-white font-mono hover:bg-white/10 transition-colors">
                JOIN THE COLLECTIVE
              </Link>
              <Link to="/blog" className="px-6 py-3 bg-transparent border border-white text-white font-mono hover:bg-white/10 transition-colors">
                DECODE THE SIGNAL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-glitch text-3xl text-cyberpunk-green mb-6">ABOUT N1GHTW1RE</h2>
            <p className="font-mono text-base mb-6 text-white/90">
              We are a decentralized collective of hackers, mystics, and digital dissidents fighting against surveillance capitalism, technobros, and fascism.
            </p>
            <p className="font-mono text-base mb-8 text-white/90">
              Our mission is to develop open-source tools, publish books & zines, build alternate reality worlds, practice privacy activism, and promote digital liberation.
            </p>
            <Link to="/about" className="font-mono text-cyberpunk-green hover:underline">
              LEARN MORE ABOUT US →
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-16 bg-black/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-glitch text-3xl text-cyberpunk-green mb-6">DIGITAL LIBERATION MANIFESTO</h2>
            <p className="font-mono text-base mb-6 text-white/90">
              The Digital Liberation Manifesto is our call to action against the forces of control, surveillance, and digital oppression. It outlines our philosophy and approach to reclaiming our digital futures.
            </p>
            <p className="font-mono text-base italic mb-8 text-white/90">
              "Technology should liberate, not enslave. Code should empower, not exploit. Data should illuminate, not manipulate..."
            </p>
            <Link to="/manifesto" className="font-mono text-cyberpunk-green hover:underline">
              READ THE FULL MANIFESTO →
            </Link>
          </div>
        </div>
      </section>

      {/* Collective Section */}
      <section className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-glitch text-3xl text-cyberpunk-green mb-6">JOIN THE COLLECTIVE</h2>
            <p className="font-mono text-base mb-6 text-white/90">
              The N1ghtw1re Collective is a loosely organized group of individuals with shared values around digital freedom, privacy, and resistance against techno-hegemony. We welcome coders, artists, writers, and freedom fighters of all kinds.
            </p>
            <p className="font-mono text-base mb-8 text-white/90">
              No central authority. No hierarchies. Just aligned intentions and mutual support in the digital resistance.
            </p>
            <Link to="/collective" className="font-mono text-cyberpunk-green hover:underline">
              JOIN THE COLLECTIVE →
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-black/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-glitch text-3xl text-cyberpunk-green mb-6">TOOLS & PROJECTS</h2>
            <p className="font-mono text-base mb-6 text-white/90">
              We develop privacy-first tools and projects designed to help individuals reclaim their digital sovereignty. Our tools range from encryption utilities to counter-surveillance applications.
            </p>
            <p className="font-mono text-base mb-8 text-white/90">
              All our tools are open-source, free to use, and designed with security and privacy as fundamental principles.
            </p>
            <Link to="/tools" className="font-mono text-cyberpunk-green hover:underline">
              EXPLORE OUR TOOLS →
            </Link>
          </div>
        </div>
      </section>

      {/* Hidden Node / Easter Egg Section */}
      <section className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center">
              <HiddenPortal />
            </div>
          </div>
        </div>
      </section>

      {/* Dispatches Section */}
      <section className="py-16 bg-black/60">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-glitch text-3xl text-cyberpunk-green mb-6">DISPATCHES</h2>
            <p className="font-mono text-base mb-6 text-white/90">
              Our blog contains reports from the frontlines of digital resistance, tutorials on privacy tools, analyses of emerging threats, and philosophical reflections on technology and society.
            </p>
            <Link to="/blog" className="font-mono text-cyberpunk-green hover:underline">
              READ OUR DISPATCHES →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-glitch text-3xl text-cyberpunk-green mb-6">CONTACT + UPDATES</h2>
            <p className="font-mono text-base mb-8 text-white/90">
              For media inquiries, collaboration proposals, or to join our encrypted newsletter, use the secure form below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ContactForm />
              </div>
              <div>
                <h3 className="font-glitch text-xl text-white mb-4">STAY CONNECTED</h3>
                <p className="font-mono text-sm mb-4 text-white/90">
                  Subscribe to our privacy-respecting RSS feed for updates:
                </p>
                <a 
                  href="#rss" 
                  className="inline-block px-4 py-2 bg-transparent border border-white text-white font-mono hover:bg-white/10 transition-colors"
                >
                  RSS FEED
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
