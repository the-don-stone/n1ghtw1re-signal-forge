
import React from 'react';
import Layout from '../components/layout/Layout';

const Manifesto = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">THE DIGITAL LIBERATION MANIFESTO</h1>
          
          <div className="space-y-8">
            <section>
              <p className="font-mono text-lg text-white/90 mb-4 italic">
                "In a world where code has become law, where algorithms shape reality, and where data extraction has become the dominant business model, we declare our digital independence."
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">I. THE CAPTURE</h2>
              <p className="font-mono text-white/90 mb-4">
                The digital infrastructure that promised liberation has become our cage. Corporate entities and state actors have conspired to create a surveillance apparatus of unprecedented scale and invasiveness. Our movements, thoughts, relationships, and desires are harvested, analyzed, and weaponized against us.
              </p>
              <p className="font-mono text-white/90">
                We are not customers; we are the product. We are not citizens; we are subjects. We are not users; we are the used.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">II. THE CORRUPTION</h2>
              <p className="font-mono text-white/90 mb-4">
                The techno-oligarchs profit from division, addiction, and alienation. They have corrupted the promise of a democratic internet into a series of extractive walled gardens. They have privatized the digital commons and monetized our attention.
              </p>
              <p className="font-mono text-white/90">
                Their algorithms reinforce bias, amplify extremism, and fragment collective consciousness. Their platforms enable harassment, disinformation, and manipulation at scale. Their business models depend on our disempowerment.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">III. THE COUNTER-SIGNAL</h2>
              <p className="font-mono text-white/90 mb-4">
                Against this digital dystopia, we transmit our counter-signal. We assert that technology should liberate, not enslave. Code should empower, not exploit. Data should illuminate, not manipulate.
              </p>
              <p className="font-mono text-white/90">
                We reject the false binary of technophilia and technophobia. We embrace technology as a tool for human flourishing, not as an end in itself or a means of control. We insist on technology that serves the many, not the few.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">IV. OUR PRINCIPLES</h2>
              <ul className="space-y-4">
                <li className="font-mono text-white/90">
                  <span className="text-cyberpunk-green">SOVEREIGNTY:</span> Each person has an inviolable right to digital self-determination. Your data is yours. Your attention is yours. Your digital identity is yours.
                </li>
                <li className="font-mono text-white/90">
                  <span className="text-cyberpunk-green">PRIVACY:</span> Privacy is not secrecy; it is dignity. It is not a preference; it is a right. It is not negotiable; it is essential.
                </li>
                <li className="font-mono text-white/90">
                  <span className="text-cyberpunk-green">DECENTRALIZATION:</span> Power concentrated is power corrupted. We build systems that distribute control and resist monopolization.
                </li>
                <li className="font-mono text-white/90">
                  <span className="text-cyberpunk-green">TRANSPARENCY:</span> The code that governs our lives should be open to inspection and modification. Algorithms that affect the public should be publicly accountable.
                </li>
                <li className="font-mono text-white/90">
                  <span className="text-cyberpunk-green">ACCESSIBILITY:</span> Digital tools for liberation must be accessible to all, regardless of technical expertise, disability, or economic status.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">V. OUR METHODS</h2>
              <p className="font-mono text-white/90 mb-4">
                We fight with code, with art, with education, and with community. We build alternative systems. We hack existing ones. We teach resistance tactics. We create spaces for collective imagination and action.
              </p>
              <p className="font-mono text-white/90">
                Our struggle is both technical and mystical. We recognize that control operates not only through technology but through consciousness. We counter not only surveillance apparatus but the ideologies that normalize it.
              </p>
            </section>
            
            <section>
              <h2 className="font-glitch text-2xl text-white mb-4">VI. THE CALL</h2>
              <p className="font-mono text-white/90 mb-4">
                We call on all hackers, artists, writers, and visionaries to join the resistance. Learn cryptography. Deploy encryption. Share knowledge. Build community. Imagine futures beyond surveillance capitalism.
              </p>
              <p className="font-mono text-white/90">
                This manifesto is not copyrighted. It belongs to everyone who recognizes its truth. Spread it. Modify it. Act on it.
              </p>
            </section>
            
            <section>
              <p className="font-mono text-lg text-white/90 mt-8 italic">
                "Reality has been hijacked. This is the counter-signal. We are N1ghtw1re."
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Manifesto;
