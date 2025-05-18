
import React from 'react';
import Layout from '../components/layout/Layout';

const Tools = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">TOOLS & PROJECTS</h1>
          
          <p className="font-mono text-white/90 mb-8">
            N1ghtw1re develops privacy-first, open-source tools designed to counter surveillance and reclaim digital autonomy. All our projects are freely available, carefully audited, and built with security-first principles.
          </p>
          
          <div className="space-y-12">
            <section>
              <h2 className="font-glitch text-2xl text-white mb-6">PRIVACY TOOLS</h2>
              
              <div className="space-y-6">
                <div className="border border-white/20 p-6">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">SIGNAL SCRAMBLER</h3>
                  <p className="font-mono text-white/90 mb-4">
                    Browser extension that injects noise into your browsing data, confusing tracking algorithms and protecting your actual interests and behaviors from profiling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Privacy</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Anti-tracking</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Browser</span>
                  </div>
                  <a 
                    href="#project-1" 
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    EXPLORE PROJECT →
                  </a>
                </div>
                
                <div className="border border-white/20 p-6">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">SHADOW NET</h3>
                  <p className="font-mono text-white/90 mb-4">
                    Peer-to-peer messaging system with automatic encryption and message self-destruction. No central servers, no metadata collection.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Communication</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Encryption</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">P2P</span>
                  </div>
                  <a 
                    href="#project-2" 
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    EXPLORE PROJECT →
                  </a>
                </div>
                
                <div className="border border-white/20 p-6">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">DIGITAL EXORCIST</h3>
                  <p className="font-mono text-white/90 mb-4">
                    Comprehensive tool for identifying and removing trackers, cookies, and fingerprinting scripts from your devices. Includes persistent protection features.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Security</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Cleaner</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Anti-tracking</span>
                  </div>
                  <a 
                    href="#project-3" 
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    EXPLORE PROJECT →
                  </a>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-6">COUNTER-SURVEILLANCE PROJECTS</h2>
              
              <div className="space-y-6">
                <div className="border border-white/20 p-6">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">PANOPTICON MAPPER</h3>
                  <p className="font-mono text-white/90 mb-4">
                    Collaborative tool for mapping surveillance cameras, facial recognition systems, and other monitoring infrastructure in public spaces.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Mapping</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Collaborative</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Awareness</span>
                  </div>
                  <a 
                    href="#project-4" 
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    EXPLORE PROJECT →
                  </a>
                </div>
                
                <div className="border border-white/20 p-6">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">DATA POISON</h3>
                  <p className="font-mono text-white/90 mb-4">
                    System for generating and injecting misleading data to corrupt surveillance algorithms and reduce the reliability of data harvesting operations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Anti-surveillance</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Data protection</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Obfuscation</span>
                  </div>
                  <a 
                    href="#project-5" 
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    EXPLORE PROJECT →
                  </a>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-6">EDUCATIONAL RESOURCES</h2>
              
              <div className="space-y-6">
                <div className="border border-white/20 p-6">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">DIGITAL SELF-DEFENSE</h3>
                  <p className="font-mono text-white/90 mb-4">
                    Comprehensive guide to protecting your digital identity, data, and communications from surveillance and exploitation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Guide</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Education</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Privacy</span>
                  </div>
                  <a 
                    href="#resource-1" 
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    ACCESS RESOURCE →
                  </a>
                </div>
                
                <div className="border border-white/20 p-6">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">ALGORITHMIC LITERACY</h3>
                  <p className="font-mono text-white/90 mb-4">
                    Interactive course explaining how algorithms shape our digital experiences and how to recognize and resist algorithmic manipulation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Course</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Education</span>
                    <span className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">Awareness</span>
                  </div>
                  <a 
                    href="#resource-2" 
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    ACCESS RESOURCE →
                  </a>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-6">CONTRIBUTE</h2>
              <p className="font-mono text-white/90 mb-4">
                All our projects are open-source and welcome contributions. Whether you're a developer, designer, writer, or tester, there are many ways to help.
              </p>
              <a 
                href="#contribute" 
                className="inline-block px-6 py-3 bg-transparent border border-cyberpunk-green text-cyberpunk-green font-mono hover:bg-cyberpunk-green/20 transition-colors"
              >
                HOW TO CONTRIBUTE
              </a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tools;
