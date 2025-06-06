import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Code2, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const prompts = [
    "Create a real-time dashboard with user analytics and charts",
    "Build a social media app with messaging and notifications",
    "Design an e-commerce platform with payment integration",
    "Create a project management tool with team collaboration"
  ];
  
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const currentPrompt = prompts[currentPromptIndex];

  useEffect(() => {
    console.log('Hero section mounted, starting typing animation');
    let timeout: NodeJS.Timeout;
    
    if (isTyping && typedText.length < currentPrompt.length) {
      timeout = setTimeout(() => {
        setTypedText(currentPrompt.slice(0, typedText.length + 1));
      }, 50);
    } else if (typedText.length === currentPrompt.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setTypedText('');
          setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
          setIsTyping(true);
        }, 2000);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentPrompt, currentPromptIndex, prompts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-2 h-2 bg-joylo-blue rounded-full animate-float"></div>
      <div className="absolute top-52 right-20 w-3 h-3 bg-joylo-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-joylo-blue-light rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              {/* Micro-copy */}
              <div className="inline-flex items-center gap-2 bg-joylo-navy-light border border-joylo-blue/30 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-joylo-blue rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300 font-medium">Not another AI toy. This one ships.</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">The Future Doesn't </span>
                <span className="bg-gradient-to-r from-joylo-blue to-joylo-purple bg-clip-text text-transparent">
                  Build Itself.
                </span>
                <br />
                <span className="text-white">But You Won't </span>
                <span className="bg-gradient-to-r from-joylo-purple to-joylo-blue-light bg-clip-text text-transparent">
                  Build It Alone.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                Joylo is where your boldest ideas come to life — with an AI assistant to code your vision 
                and a certified human architect to take it across the finish line. Build it solo, or bring in backup. 
                <span className="text-white font-semibold"> Either way, you ship.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-6 mb-12">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-joylo-blue to-joylo-blue-light hover:from-joylo-blue-light hover:to-joylo-blue text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-joylo-blue/30 group flex-1 sm:flex-none"
                  >
                    <Rocket className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    Start Building with Joylo
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-joylo-purple text-joylo-purple hover:bg-joylo-purple hover:text-white px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-joylo-purple/30 group flex-1 sm:flex-none whitespace-nowrap"
                  >
                    <Users className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                    Engage a Certified Joylo Human Architect
                  </Button>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Code2 className="w-4 h-4 text-joylo-blue" />
                  <span>Vibe coding interface</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-4 h-4 text-joylo-purple" />
                  <span>Production-grade output</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  <span>Bring-your-own-code</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span>One-click expert help</span>
                </div>
              </div>
            </div>

            {/* Right Side - Unified Builder Interface */}
            <div className="relative">
              {/* Main Builder Interface - Single Unified View */}
              <div className="glass-card overflow-hidden relative">
                {/* Browser Header */}
                <div className="bg-joylo-navy-light px-6 py-4 border-b border-glass-border">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400 ml-4 font-mono">joylo-builder.ai</span>
                  </div>
                </div>

                {/* Prompt Section */}
                <div className="p-6 border-b border-glass-border bg-joylo-navy">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="w-5 h-5 text-joylo-blue" />
                    <span className="text-sm text-gray-400 font-mono">Prompt:</span>
                  </div>
                  <div className="bg-joylo-navy-light rounded-lg p-4 border border-glass-border">
                    <div className="font-mono text-white text-lg min-h-[2rem] flex items-center">
                      {typedText}
                      <span className="ml-1 w-0.5 h-6 bg-joylo-blue animate-pulse"></span>
                    </div>
                  </div>
                </div>

                {/* Code Editor Section */}
                <div className="bg-joylo-navy-light">
                  <div className="px-6 py-3 border-b border-glass-border bg-joylo-navy">
                    <span className="text-sm text-gray-400 font-mono">components/Dashboard.tsx</span>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="space-y-1">
                      <div>
                        <span className="text-joylo-purple">import</span>
                        <span className="text-gray-300 ml-2">React, {`{ useState, useEffect }`}</span>
                      </div>
                      <div>
                        <span className="text-joylo-purple">from</span>
                        <span className="text-green-400 ml-2">'react'</span>
                      </div>
                      <br />
                      <div>
                        <span className="text-joylo-blue">const</span>
                        <span className="text-yellow-400 ml-2">Dashboard</span>
                        <span className="text-white ml-2">= () =&gt; {`{`}</span>
                      </div>
                      <div className="text-gray-400 ml-4">// AI-generated component</div>
                      <div className="text-white ml-4">return (</div>
                      <div className="text-gray-300 ml-8">&lt;div className="dashboard"&gt;</div>
                      <div className="text-gray-300 ml-12">...</div>
                      <div className="text-gray-300 ml-8">&lt;/div&gt;</div>
                      <div className="text-white ml-4">)</div>
                      <div className="text-white">{`}`}</div>
                    </div>
                  </div>
                </div>

                {/* Live Preview Section */}
                <div className="border-t border-glass-border">
                  <div className="px-6 py-3 bg-joylo-navy border-b border-glass-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400 font-mono">Live Preview</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Joylo Architect Available</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white text-black min-h-[200px] relative">
                    {/* Mock Dashboard Preview */}
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
                        <div className="flex gap-2">
                          <div className="w-8 h-8 bg-joylo-blue rounded animate-pulse"></div>
                          <div className="w-8 h-8 bg-joylo-purple rounded animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Stats Cards */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="h-3 bg-joylo-blue rounded mb-2 animate-pulse"></div>
                          <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="h-3 bg-joylo-purple rounded mb-2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        </div>
                        <div className="bg-emerald-50 p-3 rounded-lg">
                          <div className="h-3 bg-emerald-500 rounded mb-2 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      
                      {/* Chart Area */}
                      <div className="bg-gray-50 rounded-lg p-4 h-24 flex items-end justify-between">
                        {[...Array(8)].map((_, i) => (
                          <div 
                            key={i} 
                            className="bg-joylo-blue rounded-t w-4 animate-pulse" 
                            style={{ 
                              height: `${Math.random() * 60 + 20}%`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Real-time indicator */}
                    <div className="absolute bottom-3 right-3 text-xs text-gray-500 flex items-center gap-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      Real-time updates
                    </div>
                  </div>
                </div>
              </div>

              {/* Architect Badge */}
              <div className="absolute -top-4 -right-4 z-10">
                <div className="bg-gradient-to-r from-joylo-purple to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                  <Users className="w-4 h-4 inline mr-2" />
                  Expert Available
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>50+ Certified Architects Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-joylo-blue rounded-full animate-pulse"></div>
              <span>1000+ Production Apps Shipped</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-joylo-purple rounded-full animate-pulse"></div>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;