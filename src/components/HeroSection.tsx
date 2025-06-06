import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Code2, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const prompts = [
    "Build a SaaS dashboard with user auth and Stripe billing",
    "Create a real-time chat app with video calling features",
    "Design an e-commerce platform with inventory management",
    "Build a project management tool with team collaboration"
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
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-joylo-blue to-joylo-blue-light hover:from-joylo-blue-light hover:to-joylo-blue text-white px-10 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-joylo-blue/30 group"
                >
                  <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Start Building with Joylo
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-joylo-purple text-joylo-purple hover:bg-joylo-purple hover:text-white px-10 py-6 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-joylo-purple/30 group"
                >
                  <Users className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Tag a Certified Architect
                </Button>
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

            {/* Right Side - Interactive Builder */}
            <div className="relative">
              {/* Code Editor Interface */}
              <div className="glass-card p-6 mb-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400 ml-4 font-mono">joylo-builder.ai</span>
                  </div>
                  
                  <div className="bg-joylo-navy-light rounded-lg p-4 border border-glass-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Code2 className="w-5 h-5 text-joylo-blue" />
                      <span className="text-sm text-gray-400 font-mono">Prompt:</span>
                    </div>
                    <div className="font-mono text-white text-lg min-h-[2rem] flex items-center">
                      {typedText}
                      <span className="ml-1 w-0.5 h-6 bg-joylo-blue animate-pulse"></span>
                    </div>
                  </div>
                </div>

                {/* Code Preview */}
                <div className="bg-joylo-navy px-4 py-2 border-b border-glass-border rounded-t-lg">
                  <span className="text-sm text-gray-400 font-mono">components/Dashboard.tsx</span>
                </div>
                <div className="bg-joylo-navy-light p-4 font-mono text-sm rounded-b-lg border border-glass-border border-t-0">
                  <div className="text-joylo-purple">import</div>
                  <div className="text-gray-300 ml-4">React, {`{ useState, useEffect }`}</div>
                  <div className="text-joylo-purple">from</div>
                  <div className="text-green-400 ml-2">'react'</div>
                  <br />
                  <div className="text-joylo-blue">const</div>
                  <div className="text-yellow-400 ml-2">Dashboard</div>
                  <div className="text-white ml-2">= () =&gt; {`{`}</div>
                  <div className="text-gray-400 ml-4">// AI-generated component</div>
                  <div className="text-white ml-4">return (</div>
                  <div className="text-gray-300 ml-8">&lt;div className="dashboard"&gt;</div>
                  <div className="text-gray-300 ml-12">...</div>
                </div>
              </div>

              {/* Live Preview */}
              <div className="glass-card p-4 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400 font-mono">Live Preview</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Joylo Architect Available</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 text-black min-h-[200px] relative overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="h-4 bg-joylo-blue rounded animate-pulse"></div>
                    <div className="h-4 bg-joylo-purple rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-4 bg-emerald-500 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="text-xs text-gray-500">Real-time updates</div>
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