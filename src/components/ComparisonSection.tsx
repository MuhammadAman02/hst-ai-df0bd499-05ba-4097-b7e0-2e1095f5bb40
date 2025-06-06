import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      other: "Sandbox",
      joylo: "Shipyard",
      otherDesc: "Build demos that never see production",
      joyloDesc: "Ship real apps that scale from day one"
    },
    {
      other: "Demo MVPs",
      joylo: "Scalable Systems",
      otherDesc: "Prototype-quality code",
      joyloDesc: "Production-ready architecture"
    },
    {
      other: "Solo Builder",
      joylo: "Real-world Architect",
      otherDesc: "You're on your own",
      joyloDesc: "Expert guidance when you need it"
    },
    {
      other: "Code Suggestion",
      joylo: "Co-creation",
      otherDesc: "AI suggests, you implement",
      joyloDesc: "AI + Human collaboration"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Built to </span>
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              Ship.
            </span>
            <span className="text-white"> Not Just Prototype.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Other platforms help you build. Joylo helps you ship. There's a difference.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 sm:gap-8">
            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-400 mb-2">Other Platforms</h3>
                <p className="text-gray-500">Good for learning</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent mb-2">
                  Joylo AI
                </h3>
                <p className="text-gray-300">Built for shipping</p>
              </div>
            </div>

            {/* Comparison Cards */}
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                {/* Other Platform */}
                <div className="glass-card p-4 sm:p-6 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">{comparison.other}</h4>
                      <p className="text-sm sm:text-base text-gray-400">{comparison.otherDesc}</p>
                    </div>
                  </div>
                </div>

                {/* Joylo */}
                <div className="glass-card p-4 sm:p-6 border-joylo-blue/20 hover:border-joylo-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-joylo-blue/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-joylo-blue/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-joylo-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">{comparison.joylo}</h4>
                      <p className="text-sm sm:text-base text-gray-300">{comparison.joyloDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="glass-card p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Ready to ship instead of just prototype?
              </h3>
              <p className="text-gray-300 mb-6">
                Join thousands of builders who've made the switch to production-grade development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-joylo-blue hover:bg-joylo-blue-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Start Building Now
                </button>
                <button className="border border-joylo-purple text-joylo-purple hover:bg-joylo-purple hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  See Live Examples
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;