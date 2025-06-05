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
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">How It </span>
            <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From idea to production in days, not months. Here's the Joylo workflow that's changing how apps get built.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-gray-600 to-gray-800 z-0"></div>
              )}
              
              <div className="flex gap-8 mb-16 relative z-10">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg`}>
                    {step.number}
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-20 flex items-center justify-center mx-2`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                    
                    {/* Example */}
                    <div className="bg-joylo-navy-light rounded-lg p-4 border border-glass-border">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-gray-400 font-mono">Example</span>
                      </div>
                      <p className="text-sm text-gray-300 font-mono">{step.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo */}
        <div className="mt-20">
          <div className="glass-card p-8 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">See the Full Flow</h3>
              <p className="text-gray-300">Watch a real project go from idea to production</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div>
                <h4 className="text-lg font-semibold text-gray-400 mb-4 text-center">Traditional Development</h4>
                <div className="space-y-3">
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
                    <div key={index} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-red-400 font-bold text-lg">12-20 weeks total</span>
                </div>
              </div>

              {/* After */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 text-center">With Joylo AI</h4>
                <div className="space-y-3">
                  {[
                    "Describe your app (5 minutes)",
                    "AI builds initial version (30 minutes)",
                    "Iterate and refine (1-2 days)",
                    "Connect with architect (< 2 hours)",
                    "Production optimization (2-3 days)",
                    "Deploy and launch (same day)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-green-400 font-bold text-lg">3-5 days total</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-joylo-blue to-joylo-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-joylo-blue/25">
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