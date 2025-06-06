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
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">The 3 </span>
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to go from idea to production-ready app, with AI and human expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {superpowers.map((power, index) => (
            <div 
              key={index} 
              className="glass-card p-6 sm:p-8 group hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${power.gradient} p-3 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <power.icon className="w-full h-full text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                {power.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {power.description}
              </p>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3">
                {power.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${power.gradient} flex-shrink-0`}></div>
                    <span className="text-xs sm:text-sm text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className={`w-full py-2 sm:py-3 rounded-lg bg-gradient-to-r ${power.gradient} text-white font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base`}>
                  Try {power.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 sm:mt-20">
          <div className="glass-card p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">See It In Action</h3>
              <p className="text-gray-300 text-sm sm:text-base">Watch how AI and human collaboration creates production-ready code</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-joylo-blue text-white flex items-center justify-center font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4">
                  1
                </div>
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-joylo-blue" />
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">AI Builds</h4>
                <p className="text-xs sm:text-sm text-gray-400">Claude 4.0 generates your app structure and components</p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-joylo-purple text-white flex items-center justify-center font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4">
                  2
                </div>
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-joylo-purple" />
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">You Refine</h4>
                <p className="text-xs sm:text-sm text-gray-400">Real-time editing with live preview and instant feedback</p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-base sm:text-lg mx-auto mb-3 sm:mb-4">
                  3
                </div>
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Architect Scales</h4>
                <p className="text-xs sm:text-sm text-gray-400">Human expert optimizes for production deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperpowersSection;