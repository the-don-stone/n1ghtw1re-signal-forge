
import React from 'react';
import Layout from '../components/layout/Layout';

const Collective = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">THE COLLECTIVE</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">WHO WE ARE</h2>
              <p className="font-mono text-white/90 mb-4">
                The N1ghtw1re Collective is a decentralized network of individuals committed to digital liberation. We have no formal membership structure, no hierarchical leadership, and no central point of control.
              </p>
              <p className="font-mono text-white/90">
                We are hackers who believe in code ethics. We are mystics who recognize technology's spiritual dimensions. We are artists who visualize alternative futures. We are activists who fight for digital rights.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">OUR STRUCTURE</h2>
              <p className="font-mono text-white/90 mb-4">
                We operate as a network of autonomous nodes connected through shared values and common purpose. Some of us work openly, others in anonymity. Some contribute code, others contribute concepts. All contributions are valued.
              </p>
              <p className="font-mono text-white/90">
                Our coordination happens through encrypted channels, temporary autonomous zones, and periodic in-person gatherings. We make decisions through consensus when possible and through forking when necessary.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">JOIN THE COLLECTIVE</h2>
              <p className="font-mono text-white/90 mb-4">
                There is no formal application process. If you align with our manifesto and want to contribute to digital liberation, you are already part of the collective. Begin where you are, with what you have.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">CONTRIBUTE CODE</h3>
                  <p className="font-mono text-sm text-white/90 mb-3">
                    Help develop our open-source tools or contribute to existing projects aligned with our values.
                  </p>
                  <a 
                    href="https://github.com/n1ghtw1re" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    GITHUB REPOSITORY →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">CONTRIBUTE IDEAS</h3>
                  <p className="font-mono text-sm text-white/90 mb-3">
                    Share concepts, strategies, or insights related to digital resistance and liberation.
                  </p>
                  <a 
                    href="#forum" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    DISCUSSION FORUM →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">CONTRIBUTE CONTENT</h3>
                  <p className="font-mono text-sm text-white/90 mb-3">
                    Write articles, create art, or produce other media that advances our mission.
                  </p>
                  <a 
                    href="#submit" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    CONTENT SUBMISSION →
                  </a>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">CONTRIBUTE RESOURCES</h3>
                  <p className="font-mono text-sm text-white/90 mb-3">
                    Support our projects through donations of time, skills, or other resources.
                  </p>
                  <a 
                    href="#support" 
                    className="font-mono text-xs text-cyberpunk-green hover:underline"
                  >
                    SUPPORT METHODS →
                  </a>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">COMMUNITY GUIDELINES</h2>
              <p className="font-mono text-white/90 mb-4">
                While we have no formal rules, we operate according to principles that maintain the integrity of our collective:
              </p>
              <ul className="space-y-2 font-mono text-white/90">
                <li>• Respect autonomy and privacy</li>
                <li>• Value diversity of tactics and perspectives</li>
                <li>• Share knowledge freely</li>
                <li>• Prioritize harm reduction</li>
                <li>• Practice mutual aid and solidarity</li>
                <li>• Reject exploitation and oppression in all forms</li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">CURRENT INITIATIVES</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">CRYPTO-COMMONS PROJECT</h3>
                  <p className="font-mono text-sm text-white/90">
                    Developing decentralized digital infrastructure for community governance and resource sharing.
                  </p>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">DEAD DROP NETWORK</h3>
                  <p className="font-mono text-sm text-white/90">
                    Creating physical-digital interfaces for anonymous information exchange in urban environments.
                  </p>
                </div>
                
                <div className="border border-white/20 p-4">
                  <h3 className="font-glitch text-xl text-cyberpunk-green mb-2">COUNTER-SURVEILLANCE ZINE</h3>
                  <p className="font-mono text-sm text-white/90">
                    Quarterly publication on practical privacy tactics and digital resistance strategies.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collective;
