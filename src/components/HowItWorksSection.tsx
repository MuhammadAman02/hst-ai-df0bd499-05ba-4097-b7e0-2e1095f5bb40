import React from 'react';
import { MessageSquare, Bot, Edit3, Users, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Describe It",
      description: "Tell Joylo what you want to build in plain English. Be as detailed or as vague as you want.",
      example: "Build a social media dashboard with user analytics",
      color: "from-joylo-blue to-joylo-blue-light"
    },
    {
      number: 2,
      icon: Bot,
      title: "AI Builds",
      description: "Claude 4.0 generates your app structure, components, and initial functionality in real-time.",
      example: "Creating components, setting up routing, adding state management...",
      color: "from-joylo-purple to-purple-400"
    },
    {
      number: 3,
      icon: Edit3,
      title: "You Tweak, Preview, Refine",
      description: "See live previews, make changes, and iterate. Everything updates in real-time as you work.",
      example: "Adjusting layouts, changing colors, adding features...",
      color: "from-emerald-500 to-teal-400"
    },
    {
      number: 4,
      icon: Users,
      title: "Architect Joins and Levels It Up",
      description: "One click brings in a human expert to optimize, scale, and prepare for production deployment.",
      example: "Performance optimization, security hardening, deployment setup...",
      color: "from-orange-500 to-red-400"
    },
    {
      number: 5,
      icon: Rocket,
      title: "App Goes Live",
      description: "Deploy to production with confidence. Your app is ready for real users and real traffic.",
      example: "Live on custom domain with monitoring and analytics",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">How It </span>
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            From idea to production in days, not months. Here's the Joylo workflow that's changing how apps get built.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line - Hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute left-6 sm:left-8 top-16 sm:top-20 w-0.5 h-20 sm:h-24 bg-gradient-to-b from-gray-600 to-gray-800 z-0"></div>
              )}
              
              <div className="flex gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 relative z-10">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 shadow-lg`}>
                    {step.number}
                  </div>
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center mx-2`}>
                    <step.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="glass-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{step.description}</p>
                    
                    {/* Example */}
                    <div className="bg-joylo-navy-light rounded-lg p-3 sm:p-4 border border-glass-border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-gray-400 font-mono">Example</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 font-mono">{step.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="mt-16 sm:mt-20">
          <div className="glass-card p-6 sm:p-8 max-w-5xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">See the Full Flow</h3>
              <p className="text-gray-300 text-sm sm:text-base">Watch a real project go from idea to production</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Before */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-400 mb-3 sm:mb-4 text-center">Traditional Development</h4>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Write requirements doc (1-2 weeks)",
                    "Set up development environment (2-3 days)",
                    "Build MVP (4-8 weeks)",
                    "Find and hire developers (2-4 weeks)",
                    "Code review and refactoring (2-3 weeks)",
                    "Testing and bug fixes (1-2 weeks)",
                    "Deployment setup (1 week)",
                    "Production launch (1 week)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 sm:mt-4 text-center">
                  <span className="text-red-400 font-bold text-base sm:text-lg">12-20 weeks total</span>
                </div>
              </div>

              {/* After */}
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-center">With Joylo AI</h4>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Describe your app (5 minutes)",
                    "AI builds initial version (30 minutes)",
                    "Iterate and refine (1-2 days)",
                    "Connect with architect (< 2 hours)",
                    "Production optimization (2-3 days)",
                    "Deploy and launch (same day)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 sm:mt-4 text-center">
                  <span className="text-green-400 font-bold text-base sm:text-lg">3-5 days total</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <button className="w-full sm:w-auto bg-gradient-to-r from-joylo-blue to-joylo-purple text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-joylo-blue/25">
                Start Your Project Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;