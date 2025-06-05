import React from 'react';
import { Rocket, RotateCcw, BarChart3, Sparkles, Code, Database } from 'lucide-react';

const SuperpowersSection = () => {
  const superpowers = [
    {
      icon: Rocket,
      title: "Create from Scratch",
      description: "Claude 4.0 helps you vibe-code real apps with natural prompts and smart component suggestions.",
      features: ["Natural language prompts", "Smart component library", "Real-time preview", "Auto-generated tests"],
      gradient: "from-joylo-blue to-joylo-blue-light"
    },
    {
      icon: RotateCcw,
      title: "Bring Your Own Code",
      description: "Connect an existing repo. See live previews. Enhance and prototype in real time with business, design, and tech leads.",
      features: ["GitHub integration", "Live code sync", "Collaborative editing", "Version control"],
      gradient: "from-joylo-purple to-purple-400"
    },
    {
      icon: BarChart3,
      title: "Talk to Your Data",
      description: "Ask questions in plain English. Query live databases. Get on-demand dashboards — no SQL required.",
      features: ["Natural language queries", "Live database connections", "Auto-generated charts", "Real-time analytics"],
      gradient: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">The 3 </span>
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to go from idea to production-ready app, with AI and human expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {superpowers.map((power, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${power.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <power.icon className="w-full h-full text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                {power.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {power.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                {power.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${power.gradient}`}></div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${power.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300`}>
                  Try {power.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-20">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">See It In Action</h3>
              <p className="text-gray-300">Watch how AI and human collaboration creates production-ready code</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-joylo-blue text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <div className="flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-joylo-blue" />
                </div>
                <h4 className="font-semibold text-white mb-2">AI Builds</h4>
                <p className="text-sm text-gray-400">Claude 4.0 generates your app structure and components</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-joylo-purple text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <div className="flex items-center justify-center mb-3">
                  <Code className="w-6 h-6 text-joylo-purple" />
                </div>
                <h4 className="font-semibold text-white mb-2">You Refine</h4>
                <p className="text-sm text-gray-400">Real-time editing with live preview and instant feedback</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <div className="flex items-center justify-center mb-3">
                  <Database className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="font-semibold text-white mb-2">Architect Scales</h4>
                <p className="text-sm text-gray-400">Human expert optimizes for production deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperpowersSection;