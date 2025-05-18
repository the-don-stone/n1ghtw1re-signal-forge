
import React from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">ABOUT N1GHTW1RE</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">OUR ORIGIN</h2>
              <p className="font-mono text-white/90 mb-4">
                N1ghtw1re emerged from the shadows of digital resistance in 2021, when a loose collective of hackers, mystics, and digital dissidents recognized that the systems designed to connect us had been weaponized against us.
              </p>
              <p className="font-mono text-white/90">
                We operate in the liminal spaces between technology and mysticism, code and art, chaos and order. Our name refers to the hidden connections—the night wires—that run beneath the visible infrastructure of the digital world.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">OUR MISSION</h2>
              <p className="font-mono text-white/90 mb-4">
                We fight against three primary adversaries: surveillance capitalism, techno-hegemony, and digital fascism. Our mission is to reclaim digital autonomy through tools, knowledge, and community.
              </p>
              <p className="font-mono text-white/90">
                We believe technology should serve humanity, not control it. We envision a world where digital tools enhance individual freedom rather than restrict it, where privacy is a right rather than a luxury, and where decentralized communities thrive in the face of monopolistic control.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">WHAT WE DO</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">OPEN-SOURCE TOOLS</h3>
                  <p className="font-mono text-sm text-white/90">
                    We develop and maintain privacy-focused digital tools that help individuals protect their data and maintain autonomy online.
                  </p>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">BOOKS & ZINES</h3>
                  <p className="font-mono text-sm text-white/90">
                    We publish educational materials, philosophical treatises, and practical guides on digital resistance and privacy practices.
                  </p>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">ALTERNATE REALITIES</h3>
                  <p className="font-mono text-sm text-white/90">
                    We create immersive digital experiences that challenge mainstream narratives and explore alternative futures.
                  </p>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">PRIVACY ACTIVISM</h3>
                  <p className="font-mono text-sm text-white/90">
                    We advocate for strong privacy protections, digital rights, and resistance against surveillance infrastructure.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">OUR APPROACH</h2>
              <p className="font-mono text-white/90 mb-4">
                We blend traditional hacker ethics with mystical practices, recognizing that pure rationality is insufficient to counter the emotional and psychological manipulation employed by digital hegemony.
              </p>
              <p className="font-mono text-white/90">
                Our methods draw from chaos magic, hacker culture, punk DIY ethics, and grassroots organizing. We embrace paradox, play, and poetry alongside code, cryptography, and concrete action.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
