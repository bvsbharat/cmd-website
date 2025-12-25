import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight">About SuperAgents</h1>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
          <div className="space-y-4">
            <p>Remember JARVIS from Iron Man?</p>
            <p>
              Yeah, that AI assistant that could control everything in Tony Stark&apos;s lab, interact with his systems, and automate his entire workflow? As a kid, I was obsessed. The idea of having your own intelligent agent that could interact with your laptop, automate tasks, and control your digital world? That wasn&apos;t science fiction to me. That was the future.
            </p>
            <p>So I built it.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-sans font-bold text-gray-900">This is Optimus</h2>
            <p>Our first SuperAgent that lives on your laptop and actually interacts with it like you would.</p>
          </div>

          <div className="space-y-4">
            <p>
              Optimus isn&apos;t another chatbot sitting in a browser tab. It&apos;s an automation agent that can interact with applications, click buttons, fill forms, move files, browse websites, and perform complex workflows on your behalf. It sees your screen, understands context, and takes action just like a human assistant would.
            </p>
            <p>
              The crazy part? It keeps discovering new ways to automate things I didn&apos;t even program it to do. Every interaction teaches it more about what&apos;s possible on your system.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-sans font-bold text-gray-900">What Makes It Different?</h2>
            <p>Optimus actually controls your laptop. It can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Navigate through applications and websites</li>
              <li>Automate repetitive tasks across multiple programs</li>
              <li>Interact with your system like a real assistant</li>
              <li>Perform actions you&apos;d normally do manually</li>
            </ul>
            <p>
              I discover something new about what this thing can automate almost every time I use it. And so does everyone else who tries it.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-sans font-bold text-gray-900">Want to See What It Can Do?</h2>
            <p>
              Check out our YouTube channel where we showcase different automations and interactions Optimus can handle on real systems.
            </p>
            <p>
              Better yet? Try it yourself and let us know what workflows you discover. Every user finds new automation possibilities we haven&apos;t even thought of yet.
            </p>
            <p>
              The future of personal AI assistants isn&apos;t coming. It&apos;s already here, running on your laptop. And it&apos;s called Optimus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
